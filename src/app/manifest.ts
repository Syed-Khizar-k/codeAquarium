import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Custom Software, AI & Web Development`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b0b45",
    icons: [
      { src: "/logo/codeaquarium-icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
