import Image from "next/image";
import Sprig from "@/components/ui/Sprig";

type Props = {
  img: string;
  imgAlt: string;
  breadcrumb?: string;
  title: string;
  subtitle?: React.ReactNode;
  tagline?: string;
  stars?: boolean;
  /** kept for call-site compatibility; no longer used visually */
  centered?: boolean;
  corner?: "tr" | "bl";
};

export default function PageHeader({
  img,
  imgAlt,
  breadcrumb,
  title,
  subtitle,
  tagline,
  stars = false,
}: Props) {
  return (
    <section
      className="relative flex min-h-[42vh] items-center overflow-hidden"
      style={{ background: "linear-gradient(130deg,#00152e 0%,#002147 48%,#0a3262 100%)" }}
    >
      <Image
        src={img}
        alt={imgAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_30%]"
      />
      {/* navy/gold brand overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 24%, rgba(201,168,76,0.20), transparent 50%), linear-gradient(95deg, rgba(0,12,28,0.92) 0%, rgba(0,24,52,0.82) 45%, rgba(0,33,71,0.55) 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rotate-45 border border-[#C9A84C]/20" />

      <div className="container-x relative py-16 md:py-24">
        <div className="max-w-[680px] animate-rise">
          {breadcrumb && (
            <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
              {breadcrumb}
            </div>
          )}
          {stars && <div className="mb-3 text-[18px] tracking-[4px] text-[#C9A84C]">★★★★★</div>}
          <h1 className="font-display text-[clamp(36px,5.4vw,58px)] font-semibold leading-[1.05] tracking-[-0.01em] text-cream">
            {title}
          </h1>
          {tagline && (
            <p className="mt-4 font-display text-[20px] italic text-[#C9A84C]">{tagline}</p>
          )}
          {subtitle && (
            <div className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-cream/85">
              {subtitle}
            </div>
          )}
          <div className="mt-7 flex items-center gap-3 text-[#C9A84C]/80">
            <Sprig className="h-5 w-5" />
            <span className="h-px w-16 bg-[#C9A84C]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
