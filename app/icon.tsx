import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            "radial-gradient(circle at 25% 25%, rgba(96,165,250,0.6), transparent 60%), radial-gradient(circle at 80% 80%, rgba(192,132,252,0.6), transparent 60%)",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size }
  );
}
