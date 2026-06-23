// Botanical sprig — the boutique brand mark, used in place of the old diamond.
// Colour follows `currentColor`, so set it via a text-* class.
export default function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21V7" />
      <path d="M12 12c0-3 2.2-5.2 5-5.6-.2 2.8-2.2 5-5 5.6Z" />
      <path d="M12 9.5C12 6.8 10 4.6 7 4c.1 2.7 2 4.9 5 5.5Z" />
    </svg>
  );
}
