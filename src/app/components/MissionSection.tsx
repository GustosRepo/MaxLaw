import React from 'react';

export default function MissionSection(){
  return (
    <section id="mission" className="py-12">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border text-center border-white/10 bg-white/[0.06] p-8 shadow-md text-center">
          <div className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-white/75 space-y-5">
            <p>
              At Saggese &amp; Associates, our mission is to protect the rights of Nevadans—whether they are
              injured through no fault of their own or facing criminal charges that threaten their future.
              Every action we take is guided by one question:{" "}
              <em>Does this advance the client’s real-world goals?</em>
            </p>
            <p>
              We deliver direct access, straight talk, and relentless preparation. Our clients receive
              structured strategies designed to create leverage early, backed by modern investigation,
              medical insight, and decades of courtroom experience.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
              <li className="flex items-center">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>
                Client-first representation
              </li>
              <li className="flex items-center">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>
                Relentless preparation
              </li>
              <li className="flex items-center">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>
                Modern investigative tools
              </li>
              <li className="flex items-center">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>
                Proven courtroom strategies
              </li>
            </ul>
            <p className="text-white/50 text-xs md:text-[13px] pt-4 border-t border-white/10">
              No guarantee of outcome. Each case is unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
