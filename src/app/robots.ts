import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");

  // AI/answer-engine crawlers we explicitly welcome — being crawlable is a
  // prerequisite for being cited in ChatGPT, Perplexity, Claude, and Google
  // AI Overviews (GEO/AEO).
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
