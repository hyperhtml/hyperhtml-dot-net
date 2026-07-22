import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bryce Carr";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(96,165,250,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(192,132,252,0.35), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "64px 96px",
            borderRadius: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -2,
            }}
          >
            Bryce Carr
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a3a3a3",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
