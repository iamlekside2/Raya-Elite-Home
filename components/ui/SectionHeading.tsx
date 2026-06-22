type Props = {
  eyebrow?: string;
  /** diamond on both sides of the eyebrow (centered style) */
  flankEyebrow?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  stars?: boolean;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  flankEyebrow = false,
  title,
  subtitle,
  stars = false,
  centered = true,
  className = "",
}: Props) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {stars && <span className="text-[22px] tracking-[4px] text-gold">★★★★★</span>}
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-[9px] ${stars ? "mt-3" : ""}`}
        >
          {flankEyebrow && <span className="diamond h-[7px] w-[7px]" />}
          <span className="eyebrow">{eyebrow}</span>
          {flankEyebrow && <span className="diamond h-[7px] w-[7px]" />}
        </div>
      )}
      <h2 className="m-0 font-playfair text-[clamp(26px,3.6vw,40px)] font-bold leading-[1.12] text-navy">
        {title}
      </h2>
      {subtitle && <div className="mt-2 text-[15px] text-charcoal/70">{subtitle}</div>}
    </div>
  );
}
