import Image from 'next/image';

// Simplified static hero background (no rotation, no client JS needed beyond Next/Image)
// Keeps same component name/usage so callers don't change.
export default function HeroMediaRotator(){
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <Image
        src="/home-pics/neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg"
        alt="Courthouse facade at night"
        fill
        priority
        sizes="100vw"
        quality={58}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85 md:from-black/75 md:via-black/55 md:to-black/70" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.25),transparent_65%)] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
