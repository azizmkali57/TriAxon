const BASE_URL = "https://triaxon.tech";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/fullstack",
    "/services/app-development",
    "/services/digital-marketing",
    "/services/ui-ux-design",
    "/services/cloud-devops",
    "/services/ai-ml",
    "/portfolio",
    "/blog",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}