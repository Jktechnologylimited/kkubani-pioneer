import "server-only";
import { defaults, fields } from "./content-model.mjs";
import { businessStorage } from "./business-storage";
export async function publishedHomepage(): Promise<Record<string, string>> {
  try {
    const result = await (await businessStorage("content")).json();
    return (
      result.published === null ? defaults : fields(result.published)
    ) as Record<string, string>;
  } catch {
    console.warn(
      "JKTL published content unavailable; preserving original website defaults",
    );
    return defaults;
  }
}
