import Image from 'next/image';

export default function HeroMediaLite() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/home-pics/neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg"
        alt="Courthouse facade at night"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={40}
        className="object-cover object-center opacity-85"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85" />
    </div>
  );
}
