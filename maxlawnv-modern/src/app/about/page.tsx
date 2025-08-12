"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#181c23] to-[#23272e] text-white font-sans pb-16">
      <section className="mx-auto w-full max-w-4xl px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-shrink-0">
            <Image src="/biopic.jpg" alt="Attorney Marc A. Saggese" width={220} height={400} className="rounded-2xl shadow-2xl border-2 border-[#bfa76a]/40 bg-[#181c23] object-contain" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-[#bfa76a]">About the Law Offices of Saggese & Associates</h1>
            <p className="text-lg text-white/80 mb-4">Personal Injury · Criminal Defense<br />
              <span className="font-semibold text-[#bfa76a]">Free Consultation: <a href="tel:17027788883" className="underline">702-778-8883</a></span>
            </p>
          </div>
        </div>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Firm Overview</h2>
        <p className="mb-4">The Law Offices of Saggese & Associates was founded by Attorney Marc Anthony Saggese, who has been practicing law in Las Vegas since 1999. The firm represents clients facing criminal charges and individuals who have suffered a personal injury in an accident.</p>
        <p className="mb-4">Marc actively litigates cases, conducts jury trials, and has represented more than 2,500 clients. He has served as a pro tempore judge for the Las Vegas Municipal Court System and as a Traffic Court magistrate.</p>
        <h3 className="text-xl font-semibold mt-8 mb-2">Media & Publications</h3>
        <p className="mb-4">Marc has appeared on Fox & Friends, On the Record with Greta Van Susteren, Court TV, and CBS’s 48 Hours to provide legal insight and analysis. He is a weekly contributing writer for the Las Vegas Review‑Journal and has been profiled in the Las Vegas Review‑Journal and Las Vegas Magazine.</p>
        <p className="mb-4">Learn more about Marc: <a href="/about/marc-a-saggese" className="underline text-[#bfa76a]">Marc A. Saggese, Esq.</a></p>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Biography (Selected)</h2>
        <p className="mb-4">Originally from Utica, New York, Marc obtained his Bachelor of Arts in Political Science from the State University of New York in 1995, graduating cum laude. He earned his Juris Doctor from The Catholic University of America, Columbus School of Law in 1999.</p>
        <p className="mb-4">Marc was admitted to the Judge Advocate General (JAG) Corps in 2000, where he served as a Captain in the United States Army, undertaking litigation work for the Department of Justice. In 2003, after forming his own firm, Marc devoted his practice to civil and criminal matters, finding that passionate defense work best served his community.</p>
        <p className="mb-4">In 2010, following a string of notable trials—and known for his persuasive, tenacious courtroom style—Marc became the inspiration for the character Pete Kaczmarek (portrayed by Jerry O’Connell) in the CBS primetime television drama “The Defenders.” Marc worked with the show’s writers to provide legal authenticity; episodes were based on clients or issues he had previously litigated.</p>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Awards & Recognition (Selected)</h2>
        <ul className="list-disc list-inside mb-4 text-white/90">
          <li>American Institute of Personal Injury Attorneys – named among the “10 Best Attorneys.”</li>
          <li>Desert Companion Magazine – recognized among “the Valley’s Top Lawyers.”</li>
          <li>Best of Las Vegas – Silver & Bronze (2017) and Silver (2018) awards.</li>
        </ul>
        <p className="text-xs text-white/60 mb-4">Past results, awards, or recognitions do not guarantee similar outcomes. Each case is unique.</p>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <ul className="list-disc list-inside mb-4 text-white/90">
          <li>The Catholic University of America, Columbus School of Law, Washington, DC — Juris Doctor, May 1999</li>
          <li>The Judge Advocate General’s School, U.S. Army, Charlottesville, VA — JAG Certification, April 2000</li>
          <li>State University of New York, College at Cortland — B.A., cum laude, Political Science, August 1995</li>
          <li>University of North London, Kentish Town, North London, England — British Politics and Government, January 1993</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Bar Admissions</h2>
        <ul className="list-disc list-inside mb-4 text-white/90">
          <li>The Supreme Court, State of Nevada — Attorney and Counselor at Law (1999)</li>
          <li>The United States Court of Military Appeals for the Armed Forces — Appellate Attorney (2000)</li>
          <li>The United States Court of Appeals for the Fifth Circuit — Appellate Attorney (2001)</li>
          <li>The Supreme Court, State of Georgia — Attorney and Counselor at Law (2003)</li>
          <li>The United States Court of Appeals for the Third Circuit — Appellate Attorney (2006)</li>
          <li>The United States Court of Appeals for the Ninth Circuit — Appellate Attorney (2010)</li>
          <li>The Supreme Court, State of Texas — Attorney and Counselor at Law (2015)</li>
        </ul>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Office Location</h2>
        <address className="not-italic mb-4">
          <div>The Law Offices of Saggese & Associates</div>
          <div>732 S. 6th Street, Suite 201</div>
          <div>Las Vegas, NV 89101</div>
          <div>Phone: <a href="tel:17027788883" className="underline">702‑778‑8883</a></div>
          <div>Fax: 702‑778‑8884</div>
          <div><a href="#" className="underline text-[#bfa76a]">Map & Directions</a></div>
        </address>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Schedule a Free Initial Consultation</h2>
        <p className="mb-4">To learn more about The Law Offices of Saggese & Associates and the legal services offered, visit our Las Vegas office for a free initial consultation.<br />
        Call <a href="tel:17027788883" className="underline">702‑778‑8883</a> or send us an <a href="mailto:marc@maxlawnv.com" className="underline text-[#bfa76a]">email</a> to schedule an appointment.</p>
        <hr className="my-8 border-[#bfa76a]/30" />
        <h2 className="text-2xl font-bold mb-2">Social Links</h2>
        <ul className="flex flex-wrap gap-4 mb-8">
          <li><a href="#" className="underline text-[#bfa76a]">Facebook</a></li>
          <li><a href="#" className="underline text-[#bfa76a]">Twitter</a></li>
          <li><a href="#" className="underline text-[#bfa76a]">LinkedIn</a></li>
          <li><a href="#" className="underline text-[#bfa76a]">Avvo</a></li>
          <li><a href="#" className="underline text-[#bfa76a]">Las Vegas Review‑Journal</a></li>
          <li><a href="#" className="underline text-[#bfa76a]">Yelp</a></li>
          <li><a href="mailto:marc@maxlawnv.com" className="underline text-[#bfa76a]">Email</a></li>
        </ul>
        <hr className="my-8 border-[#bfa76a]/30" />
        <footer className="text-xs text-white/60 flex flex-col md:flex-row md:justify-between gap-2">
          <span>© 2019 by The Law Offices of Saggese and Associates. All rights reserved.</span>
          <span>
            <a href="#" className="underline">Disclaimer</a> | <a href="#" className="underline">Site Map</a>
          </span>
        </footer>
      </section>
    </main>
  );
}
