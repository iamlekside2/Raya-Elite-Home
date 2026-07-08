import type { Metadata } from "next";

/**
 * Per-page metadata with correct canonical + page-specific OpenGraph.
 * Relative URLs resolve against metadataBase (set in app/layout.tsx).
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
