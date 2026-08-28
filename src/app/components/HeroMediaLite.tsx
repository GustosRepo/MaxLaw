export default function HeroMediaLite() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Serve responsive AVIF/WebP hero without Next/Image to avoid remote optimizer */}
      <img
        src="/fullbgcourt.png"
        alt="Courthouse facade at night"
        fetchPriority="high"
        decoding="async"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-black/40" />
    </div>
  );
}
