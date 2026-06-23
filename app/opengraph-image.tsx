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
          background: "#FAF6EF",
          color: "#11233B",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: 120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#DEE5EF",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -90,
            bottom: -90,
            width: 320,
            height: 320,
            borderRadius: 9999,
            background: "#F5E6CA",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 26, position: "relative" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: "#F5E6CA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9A7D2E",
              fontSize: 34,
            }}
          >
            ❧
          </div>
          <div style={{ fontSize: 60, fontWeight: 600, letterSpacing: -1 }}>Raya Elite</div>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#002147",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 34,
            position: "relative",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          Home &amp; Office Cleaning
        </div>
        <div style={{ fontSize: 44, maxWidth: 860, textAlign: "center", lineHeight: 1.15, position: "relative" }}>
          A home that feels cared for, every time.
        </div>
        <div style={{ fontSize: 22, color: "#6B6258", marginTop: 28, position: "relative", fontFamily: "system-ui, sans-serif" }}>
          Maryland &amp; Washington D.C.
        </div>
      </div>
    ),
    { ...size }
  );
}
