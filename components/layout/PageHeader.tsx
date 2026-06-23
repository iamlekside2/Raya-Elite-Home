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
    <section className="paper-grain relative overflow-hidden bg-paper-2">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage-tint/60 blur-3xl" />
      <div className="container-x relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div className="animate-rise">
          {breadcrumb && (
            <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
              {breadcrumb}
            </div>
          )}
          {stars && <div className="mb-3 text-[18px] tracking-[4px] text-gold">★★★★★</div>}
          <h1 className="font-display text-[clamp(36px,5.4vw,58px)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink">
            {title}
          </h1>
          {tagline && (
            <p className="mt-4 font-display text-[20px] italic text-clay">{tagline}</p>
          )}
          {subtitle && (
            <div className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-ink-soft">
              {subtitle}
            </div>
          )}
        </div>

        {/* Arched image */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-[6px] border-clay-tint" />
          <div className="arch relative aspect-[4/5] overflow-hidden shadow-lift">
            <Image src={img} alt={imgAlt} fill priority sizes="(max-width:1024px) 90vw, 440px" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-cream text-sage-deep shadow-soft">
            <Sprig className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
