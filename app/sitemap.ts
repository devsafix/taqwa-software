import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Make sure this matches your actual domain defined in layout.tsx
  const baseUrl = "https://taqwasoftware.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
