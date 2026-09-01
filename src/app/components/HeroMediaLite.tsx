import Image from 'next/image';

export default function HeroMediaLite() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/fullbgcourt.png"
        alt="Courthouse facade at night"
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-black/40" />
    </div>
  );
}
