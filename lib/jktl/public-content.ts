import "server-only";
import { cache } from "react";
import { publishedHomepage } from "./content-store";
export const publishedSite = cache(publishedHomepage);
export async function siteCopy() {
  const values: Record<string, string> = await publishedSite();
  return (id: string) => values[id] ?? "";
}
