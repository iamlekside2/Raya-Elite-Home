import Image from "next/image";

type Props = {
  img: string;
  imgAlt: string;
  breadcrumb?: string;
  title: string;
  subtitle?: React.ReactNode;
  tagline?: string;
  centered?: boolean;
  stars?: boolean;
  /** decorative rotated outline square position */
  corner?: "tr" | "bl";
};

export default function PageHeader({
  img,
  imgAlt,
  breadcrumb,
  title,
  subtitle,
  tagline,
  centered = false,
  stars = false,
  corner = "tr",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-navy-light">
      <Image
        src={img}
        alt={imgAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="overlay-banner absolute inset-0" />
      <div
        className={`pointer-events-none absolute h-[280px] w-[280px] rotate-45 border border-gold/20 ${
          corner === "tr" ? "-right-10 -top-14" : "-bottom-16 -left-12"
        }`}
      />
      <div
        className={`container-x relative py-[clamp(52px,6.5vw,88px)] ${
          centered ? "text-center" : ""
        }`}
      >
        {stars && (
          <span className="text-[24px] tracking-[5px] text-gold">★★★★★</span>
        )}
        {breadcrumb && (
          <div className="mb-[14px] text-[12px] tracking-[2px] text-white/55">{breadcrumb}</div>
        )}
        <h1 className="m-0 font-playfair text-[clamp(34px,5vw,54px)] font-bold leading-[1.08] text-white">
          {title}
        </h1>
        {tagline && (
          <p className="m-0 mt-3 text-[17px] italic tracking-[1px] text-gold">{tagline}</p>
        )}
        {subtitle && (
          <div className="mt-[14px] text-[16px] leading-[1.6] text-white/[0.78]">{subtitle}</div>
        )}
      </div>
    </section>
  );
}
