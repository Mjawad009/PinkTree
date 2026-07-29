import type { MetadataRoute } from "next";
import { aiSolutions } from "@/lib/ai-solutions-data";
import { industries } from "@/lib/industries-data";
import { caseStudies } from "@/lib/case-studies-data";
import { guides } from "@/lib/guides-data";
import { getAllPosts } from "@/lib/blog-store";

// TODO: replace with your real production domain once deployed
const BASE_URL = "https://pinktree.co";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/ai-solutions",
    "/platform",
    "/industries",
    "/case-studies",
    "/resources",
    "/resources/blog",
    "/resources/guides",
    "/about",
    "/contact",
    "/book-consultation",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const aiSolutionRoutes = aiSolutions.map((s) => ({
    url: `${BASE_URL}/ai-solutions/${s.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${BASE_URL}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${BASE_URL}/resources/guides/${g.slug}`,
    lastModified: new Date(),
  }));

  const posts = await getAllPosts();
  const blogRoutes = posts.map((p) => ({
    url: `${BASE_URL}/resources/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...aiSolutionRoutes, ...industryRoutes, ...caseStudyRoutes, ...guideRoutes, ...blogRoutes];
}
