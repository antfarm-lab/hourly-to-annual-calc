import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hourly-to-annual-calc.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://hourly-to-annual-calc.vercel.app/privacy-policy",
      lastModified: new Date(),
    },
  ];
}