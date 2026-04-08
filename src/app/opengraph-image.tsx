import { ImageResponse } from "next/og";

export const alt =
  "Align 360 Fitness & Wellness Studio — Viman Nagar, Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #134e4a 42%, #5b21b6 100%)",
          color: "#f8fafc",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Align 360
        </div>
        <div style={{ fontSize: 34, opacity: 0.92, fontWeight: 500 }}>
          Fitness & Wellness · Viman Nagar, Pune
        </div>
      </div>
    ),
    { ...size }
  );
}
