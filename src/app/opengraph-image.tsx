import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand-colored social share card, generated at the edge — no external assets.
export default function OpengraphImage() {
  const brand = "#0b0b45";
  const accent = "#14b8a6";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: `radial-gradient(120% 120% at 15% 10%, ${brand} 0%, #05052a 55%, ${brand} 100%)`,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              color: brand,
            }}
          >
            C
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 940,
            }}
          >
            Custom Software, AI &amp; Web Development Studio
          </div>
          <div style={{ fontSize: 30, color: "#c7d2fe", maxWidth: 900 }}>
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 22,
            color: "#e0e7ff",
          }}
        >
          {["Next.js", "AI & Automation", "DevOps", "UX/UI", "Data"].map((t) => (
            <div
              key={t}
              style={{
                border: `1px solid ${accent}`,
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
