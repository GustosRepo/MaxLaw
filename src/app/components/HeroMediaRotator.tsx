import Image from 'next/image';

// Simplified static hero background.
// Keeps same component name/usage so callers don't change.
export default function HeroMediaRotator(){
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <Image
        src="/fullbgcourt.png"
        alt="Courthouse facade at night"
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-black/40" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.25),transparent_65%)] pointer-events-none" />
    </div>
  );
}
