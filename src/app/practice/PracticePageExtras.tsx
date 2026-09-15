import Breadcrumbs from '../components/Breadcrumbs'

export function PracticeBreadcrumbs({
  current,
  href
}: {
  current: string
  href: string
}) {
  return (
    <Breadcrumbs
      items={[
        { name: 'Home', href: '/' },
        { name: 'Practice Areas', href: '/practice' },
        { name: current, href }
      ]}
    />
  )
}
