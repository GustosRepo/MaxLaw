// Simplified static hero background using <picture> (no Next/Image)
// Keeps same component name/usage so callers don't change.
export default function HeroMediaRotator(){
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <picture>
        <source
          type="image/avif"
          srcSet="/home-pics/courthouse-960.avif 960w, /home-pics/courthouse-1280.avif 1280w, /home-pics/courthouse-1536.avif 1536w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/home-pics/courthouse-960.webp 960w, /home-pics/courthouse-1280.webp 1280w, /home-pics/courthouse-1536.webp 1536w"
          sizes="100vw"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/home-pics/courthouse-1536.webp"
          alt="Courthouse facade at night"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-black/40" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.25),transparent_65%)] pointer-events-none" />
    </div>
  );
}
