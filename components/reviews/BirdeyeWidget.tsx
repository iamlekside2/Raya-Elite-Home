"use client";

import Script from "next/script";

// Production review source (homepage + testimonials). Renders only when the
// Birdeye widget ID is configured; otherwise the page's native review cards
// remain the visible fallback.
export default function BirdeyeWidget() {
  const id = process.env.NEXT_PUBLIC_BIRDEYE_WIDGET_ID;
  if (!id) return null;

  return (
    <div className="mt-10">
      <div id="birdeye-widget-container" data-bw-id={id} />
      <Script src="https://birdeye.com/embed/v7/widget.js" strategy="lazyOnload" />
    </div>
  );
}
