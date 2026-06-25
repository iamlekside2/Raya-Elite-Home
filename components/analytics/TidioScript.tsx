"use client";

import Script from "next/script";
import { TIDIO_PUBLIC_KEY } from "@/lib/constants";

export default function TidioScript() {
  const KEY = process.env.NEXT_PUBLIC_TIDIO_KEY || TIDIO_PUBLIC_KEY;
  if (!KEY) return null;

  return <Script src={`https://code.tidio.co/${KEY}.js`} strategy="lazyOnload" />;
}
