import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/free-consultancy",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const s of services) {
    routes.push({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const p of projects) {
    routes.push({ url: `${base}/case-study/${p.slug}`, changeFrequency: "monthly", priority: 0.6 });
  }

  return routes;
}
