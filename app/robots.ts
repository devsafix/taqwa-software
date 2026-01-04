import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://taqwasoftware.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Add paths you don't want Google to index here, e.g., temporary admin pages
      disallow: "/api/",
    },
    // Next.js automatically serves the sitemap at this URL based on sitemap.ts
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
