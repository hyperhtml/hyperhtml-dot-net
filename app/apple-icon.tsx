import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
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
            "radial-gradient(circle at 20% 20%, rgba(96,165,250,0.5), transparent 55%), radial-gradient(circle at 80% 80%, rgba(192,132,252,0.5), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          BC
        </div>
      </div>
    ),
    { ...size }
  );
}
