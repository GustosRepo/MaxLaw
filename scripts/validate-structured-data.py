#!/usr/bin/env python3
"""Audit production HTML against the public Schema.org JSON-LD vocabulary.

Run after npm run build:
  curl -fL https://schema.org/version/latest/schemaorg-current-https.jsonld -o /tmp/schemaorg.jsonld
  python3 scripts/validate-structured-data.py --vocabulary /tmp/schemaorg.jsonld

Optional --baseline compares visible text, metadata and breadcrumbs against a
previous build's HTML directory. This is a vocabulary/content regression check,
not Google's hosted Rich Results Test. About's client accordion is checked
against its shared question/answer source when answers are initially collapsed.
"""
import argparse
from collections import Counter, defaultdict
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
BUSINESS_ID = 'https://www.maxlawnv.com/#organization'
BLOCKS = {'div', 'p', 'h1', 'h2', 'h3', 'h4', 'section', 'article', 'li', 'br', 'button', 'nav', 'main', 'header', 'footer'}


def many(value):
    return value if isinstance(value, list) else [value]


def short(value):
    return value.removeprefix('https://schema.org/').removeprefix('http://schema.org/').removeprefix('schema:')


def normal(value):
    return re.sub(r'\s+', ' ', value).strip()


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.text = []
        self.raw_scripts = []
        self.metadata = []
        self.skip = 0
        self.ld = None
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta' or (tag == 'link' and attrs.get('rel') == 'canonical'):
            self.metadata.append(attrs)
        if tag in {'script', 'style'}:
            self.skip += 1
            if attrs.get('type') == 'application/ld+json':
                self.ld = []
        elif tag in BLOCKS:
            self.text.append(' ')

    def handle_endtag(self, tag):
        if tag in {'script', 'style'}:
            self.skip -= 1
            if self.ld is not None:
                self.raw_scripts.append(''.join(self.ld))
                self.ld = None
        elif tag in BLOCKS:
            self.text.append(' ')

    def handle_data(self, data):
        if self.ld is not None:
            self.ld.append(data)
        if not self.skip:
            self.text.append(data)

    @property
    def visible_text(self):
        return normal(''.join(self.text))


def walk(value):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from walk(child)
    elif isinstance(value, list):
        for child in value:
            yield from walk(child)


class Vocabulary:
    def __init__(self, path):
        self.nodes = {short(node['@id']): node for node in json.loads(path.read_text())['@graph']}
        self.cache = {}

    def ids(self, node, key):
        return {short(value['@id']) for value in many(node.get(key, []))}

    def ancestors(self, name):
        if name not in self.cache:
            found, pending = set(), [name]
            while pending:
                current = pending.pop()
                if current in found:
                    continue
                found.add(current)
                pending.extend(self.ids(self.nodes.get(current, {}), 'rdfs:subClassOf'))
            self.cache[name] = found
        return self.cache[name]

    def compatible(self, types, expected):
        return any(self.ancestors(t) & expected for t in types)


def audit(args):
    vocab = Vocabulary(args.vocabulary)
    issues, pages, counts = [], [], Counter()
    firm_definitions = []
    accordion_source = (ROOT / 'src/app/about/AboutPageClient.tsx').read_text()
    accordion_pairs = set(re.findall(r"\{ q: '([^']+)', a: '([^']+)' \}", accordion_source))

    def issue(route, category, message):
        issues.append({'route': route, 'category': category, 'message': message})

    html_files = sorted(args.html_dir.rglob('*.html'))
    if not html_files:
        raise ValueError(f'No production HTML found in {args.html_dir}; run npm run build first')
    if args.baseline and {p.relative_to(args.html_dir) for p in html_files} != {p.relative_to(args.baseline) for p in args.baseline.rglob('*.html')}:
        issue('*', 'regression', 'Production HTML route inventory changed')

    for path in html_files:
        relative = path.relative_to(args.html_dir)
        route = '/' if str(relative) == 'index.html' else '/' + str(relative.with_suffix(''))
        page = Page(path.read_text())
        scripts = []
        for raw in page.raw_scripts:
            try:
                obj = json.loads(raw, parse_constant=lambda value: (_ for _ in ()).throw(ValueError(value)))
                if not isinstance(obj, dict) or obj.get('@context') != 'https://schema.org':
                    issue(route, 'syntax', 'JSON-LD must be an object with the Schema.org context')
                scripts.append(obj)
            except (ValueError, TypeError) as error:
                issue(route, 'syntax', str(error))
        nodes = [node for script in scripts for node in walk(script)]
        definitions = defaultdict(list)
        for node in nodes:
            if '@id' in node and '@type' in node:
                definitions[node['@id']].append(node)
        faq_count = 0
        for node in nodes:
            types = [short(t) for t in many(node.get('@type', []))]
            counts.update(types)
            for t in types:
                if t not in vocab.nodes:
                    issue(route, 'vocabulary', f'Unknown type: {t}')
            for prop, values in node.items():
                if prop.startswith('@'):
                    continue
                definition = vocab.nodes.get(prop)
                if not definition or 'rdf:Property' not in many(definition.get('@type', [])):
                    issue(route, 'vocabulary', f'Unknown property: {prop}')
                    continue
                domain = vocab.ids(definition, 'schema:domainIncludes')
                expected = vocab.ids(definition, 'schema:rangeIncludes')
                if domain and types and not vocab.compatible(types, domain):
                    issue(route, 'domain', f'{"/".join(types)}.{prop}: expected owner {sorted(domain)}')
                for value in many(values):
                    valid = not expected
                    if isinstance(value, dict):
                        targets = [value] if '@type' in value else definitions.get(value.get('@id'), [])
                        if not targets and '@id' in value:
                            # An external IRI may be resolved by a consumer outside this document.
                            valid = True
                        else:
                            valid = any(vocab.compatible([short(t) for t in many(target.get('@type', []))], expected) for target in targets)
                    elif isinstance(value, bool):
                        valid = 'Boolean' in expected
                    elif isinstance(value, (int, float)):
                        valid = bool(expected & {'Number', 'Float'}) or ('Integer' in expected and isinstance(value, int))
                    elif isinstance(value, str):
                        valid = bool(expected & {'Text', 'URL', 'Date', 'DateTime', 'Time'})
                        valid |= value.startswith(('https://', 'http://'))
                    if not valid:
                        issue(route, 'range', f'{"/".join(types)}.{prop}: value does not match {sorted(expected)}')
            if 'LegalService' in types or 'LocalBusiness' in types:
                if node.get('@id') != BUSINESS_ID:
                    issue(route, 'identity', 'Firm has no consistent business @id')
                firm_definitions.append({key: value for key, value in node.items() if key != '@context'})
                if not node.get('name') or not node.get('address'):
                    issue(route, 'business', 'Local business is missing name or address')
                if 'aggregateRating' in node:
                    issue(route, 'content', 'Business rating requires separate visible-content and provenance review')
            if 'FAQPage' in types:
                faq_count += 1
                if 'LegalService' in types or 'LocalBusiness' in types:
                    issue(route, 'identity', 'FAQPage and business describe different entities and need separate nodes')
                questions = node.get('mainEntity')
                if not isinstance(questions, list) or not questions:
                    issue(route, 'faq', 'FAQPage.mainEntity must contain Questions')
                    continue
                seen = set()
                for q in questions:
                    answer = q.get('acceptedAnswer', {}) if isinstance(q, dict) else {}
                    if not isinstance(q, dict) or q.get('@type') != 'Question' or not isinstance(q.get('name'), str) or not q['name'].strip() or not isinstance(answer, dict) or answer.get('@type') != 'Answer' or not isinstance(answer.get('text'), str) or not answer['text'].strip():
                        issue(route, 'faq', 'Malformed Question/name/acceptedAnswer/Answer/text structure')
                        continue
                    question, text = q['name'], answer['text']
                    if question in seen:
                        issue(route, 'faq', f'Duplicate Question: {question}')
                    seen.add(question)
                    if normal(question) not in page.visible_text:
                        issue(route, 'content', f'FAQ question absent from page: {question}')
                    if normal(text) not in page.visible_text:
                        if route == '/about' and (question, text) in accordion_pairs:
                            counts['source_verified_collapsed_answers'] += 1
                        else:
                            issue(route, 'content', f'FAQ answer absent from page: {question}')
            if 'BreadcrumbList' in types:
                items = node.get('itemListElement', [])
                if len(items) < 2 or any(item.get('@type') != 'ListItem' or item.get('position') != i or not item.get('name') or not str(item.get('item', '')).startswith('https://www.maxlawnv.com') for i, item in enumerate(items, 1)):
                    issue(route, 'breadcrumb', 'Malformed breadcrumb list')
        if faq_count > 1:
            issue(route, 'faq', 'More than one FAQPage entity on page')
        firms = [n for n in nodes if n.get('@id') == BUSINESS_ID and n.get('@type') in ['LegalService', 'LocalBusiness', 'Organization']]
        if len(firms) > 1:
            issue(route, 'identity', 'Duplicate firm definitions on page')
        for node in nodes:
            for key in ['provider', 'worksFor']:
                if key in node and (not isinstance(node[key], dict) or node[key].get('@id') != BUSINESS_ID):
                    issue(route, 'identity', f'{key} does not reference the shared business identity')
        if args.baseline:
            old_path = args.baseline / relative
            if old_path.exists():
                old = Page(old_path.read_text())
                if old.visible_text != page.visible_text:
                    issue(route, 'regression', 'Visible text or title changed')
                if old.metadata != page.metadata:
                    issue(route, 'regression', 'Metadata/canonical/robots changed')
                old_breadcrumbs = [obj for raw in old.raw_scripts for obj in walk(json.loads(raw)) if obj.get('@type') == 'BreadcrumbList']
                new_breadcrumbs = [obj for obj in nodes if obj.get('@type') == 'BreadcrumbList']
                if old_breadcrumbs != new_breadcrumbs:
                    issue(route, 'regression', 'Breadcrumb structured data changed')
        pages.append({'route': route, 'scripts': len(scripts), 'faq_pages': faq_count})
    for firm in firm_definitions[1:]:
        if firm != firm_definitions[0]:
            issue('*', 'identity', 'Business facts conflict between pages')
            break
    result = {'html_pages': len(pages), 'json_ld_blocks': sum(p['scripts'] for p in pages), 'type_counts': dict(sorted(counts.items())), 'issues': issues, 'pages': pages}
    if args.report:
        args.report.write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps({key: value for key, value in result.items() if key != 'pages'}, indent=2))
    return 1 if issues else 0


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--vocabulary', required=True, type=Path)
    parser.add_argument('--html-dir', type=Path, default=ROOT / '.next/server/app')
    parser.add_argument('--baseline', type=Path)
    parser.add_argument('--report', type=Path)
    sys.exit(audit(parser.parse_args()))
