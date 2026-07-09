import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  // [path, changeFrequency, priority]
  const staticRoutes: [string, MetadataRoute.Sitemap[number]["changeFrequency"], number][] = [
    ["", "weekly", 1],
    ["/services", "monthly", 0.9],
    ["/portfolio", "monthly", 0.8],
    ["/free-consultancy", "monthly", 0.8],
    ["/about", "monthly", 0.6],
    ["/contact", "monthly", 0.6],
    ["/privacy-policy", "yearly", 0.2],
    ["/terms-of-service", "yearly", 0.2],
    ["/cookie-policy", "yearly", 0.2],
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map(
    ([path, changeFrequency, priority]) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );

  for (const s of services) {
    routes.push({
      url: `${base}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const p of projects) {
    routes.push({
      url: `${base}/case-study/${p.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}
