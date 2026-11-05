import { ImageResponse } from "next/og";

export const alt = "Folarin Obajenihi - Frontend Developer";
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
          justifyContent: "center",
          padding: "80px",
          color: "white",
          background: "linear-gradient(135deg, #010528 0%, #004B8E 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#34d399", letterSpacing: 4 }}>
          PORTFOLIO
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 20 }}>
          Folarin Obajenihi
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#cbd5e1", marginTop: 16 }}>
          Frontend Developer · Next.js · React
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", marginTop: 48 }}>
          folarin-obajenihi.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}