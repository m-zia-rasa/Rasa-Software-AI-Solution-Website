import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rasasoft.ai";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
