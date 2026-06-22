"use client";

import Script from "next/script";

export default function TidioScript() {
  const KEY = process.env.NEXT_PUBLIC_TIDIO_KEY;
  if (!KEY) return null;

  return <Script src={`//code.tidio.co/${KEY}.js`} strategy="lazyOnload" />;
}
