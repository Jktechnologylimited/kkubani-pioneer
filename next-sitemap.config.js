const fs = require("node:fs");
const path = require("node:path");
function publicRoutes(directory = "app", segments = []) {
  const routes = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && !["api", "jktl-cms"].includes(entry.name))
      routes.push(
        ...publicRoutes(path.join(directory, entry.name), [
          ...segments,
          entry.name,
        ]),
      );
    else if (entry.isFile() && entry.name === "page.tsx")
      routes.push("/" + segments.join("/"));
  }
  return routes;
}
module.exports = {
  siteUrl: "https://www.kkubaniandco.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/jktl-cms", "/jktl-cms/*", "/api/*"],
  // Public pages now render published content dynamically; keep them discoverable.
  additionalPaths: async () =>
    publicRoutes().map((loc) => ({
      loc,
      changefreq: "weekly",
      priority: loc === "/" ? 1 : 0.7,
    })),
};
