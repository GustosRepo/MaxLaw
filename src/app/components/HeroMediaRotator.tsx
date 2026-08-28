// Simplified static hero background using <picture> (no Next/Image)
// Keeps same component name/usage so callers don't change.
export default function HeroMediaRotator(){
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <img
        src="/fullbgcourt.png"
        alt="Courthouse facade at night"
        fetchPriority="high"
        decoding="async"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-black/40" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.25),transparent_65%)] pointer-events-none" />
    </div>
  );
}
