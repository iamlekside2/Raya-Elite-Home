import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Raya Elite Home & Office Cleaning — Luxury Cleaning in Maryland & DC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(130deg,#00152e 0%,#002147 48%,#0a3262 100%)",
          color: "#fff",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: 140,
            width: 420,
            height: 420,
            border: "1px solid rgba(201,168,76,0.25)",
            transform: "rotate(45deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 28 }}>
          <div style={{ width: 34, height: 34, background: "#C9A84C", transform: "rotate(45deg)" }} />
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: 8 }}>RAYA ELITE</div>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#C9A84C",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          Home &amp; Office Cleaning
        </div>
        <div style={{ fontSize: 40, maxWidth: 880, textAlign: "center", lineHeight: 1.2 }}>
          Maryland&apos;s Most Trusted Luxury Cleaning Service
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.8)", marginTop: 30 }}>
          Maryland &amp; Washington D.C.
        </div>
      </div>
    ),
    { ...size }
  );
}
