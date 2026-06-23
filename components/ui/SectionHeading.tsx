import Sprig from "@/components/ui/Sprig";

type Props = {
  eyebrow?: string;
  /** kept for call-site compatibility */
  flankEyebrow?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  stars?: boolean;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  stars = false,
  centered = true,
  className = "",
}: Props) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {stars && <div className="mb-3 text-[20px] tracking-[4px] text-gold">★★★★★</div>}
      {eyebrow && (
        <div className={`kicker mb-4 ${centered ? "justify-center" : ""}`}>
          <Sprig className="h-4 w-4 text-sage" />
          {eyebrow}
        </div>
      )}
      <h2 className="m-0 font-display text-[clamp(28px,3.8vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink">
        {title}
      </h2>
      {subtitle && (
        <div className={`mt-3 text-[16px] text-ink-soft ${centered ? "mx-auto max-w-[560px]" : ""}`}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
