/** @type {import('next').NextConfig} */

// Pragmatic CSP that permits the site's own assets, Unsplash imagery, and the
// planned third-party integrations (GA4, Facebook Pixel, Tidio, Birdeye, Jobber,
// Google Maps). Tighten the allow-lists once final embed domains are confirmed.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://code.tidio.co https://widget.tidio.co https://*.tidio.co https://birdeye.com",
  "style-src 'self' 'unsafe-inline' https://*.tidio.co",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.facebook.com https://www.google-analytics.com https://*.tidio.co",
  "font-src 'self' data: https://*.tidio.co",
  "connect-src 'self' https://www.google-analytics.com https://birdeye.com https://*.tidio.co wss://*.tidio.co",
  "frame-src 'self' https://www.google.com https://clienthub.getjobber.com https://*.tidio.co",
  "media-src 'self' https://*.tidio.co",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
