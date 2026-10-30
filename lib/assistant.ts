import { manifest } from "./jktl/content-model.mjs";
type Answer = {
  text: string;
  booking: boolean;
  human?: boolean;
  source?: string;
};
export function answerQuestion(
  message: string,
  copy: (key: string) => string,
): Answer {
  const q = message.toLowerCase();
  if (
    /human|real person|someone|agent|receptionist|live chat|speak to|talk to/.test(
      q,
    )
  )
    return {
      text: "Of course. You can contact a member of the team below. I’m the automated website assistant; email info@kkubaniandco.com and a team member will reply when available.",
      booking: false,
      human: true,
    };
  if (/hours|opening|open today|weekend|office time/.test(q))
    return {
      text: `Our published office hours are ${copy("components.Footer.field10")} ${copy("components.Footer.field11")}. ${copy("components.Footer.field12")}.`,
      booking: false,
      source: "/contact",
    };
  if (/where|address|location|located/.test(q))
    return {
      text: `You can find the firm at ${copy("components.Footer.field4")}. Would you like to request a meeting before visiting?`,
      booking: false,
      source: "/contact",
    };
  if (/about|who are you|your firm|experience/.test(q))
    return {
      text: copy("components.AboutUs.field5"),
      booking: false,
      source: "/about",
    };
  if (/book|meeting|appointment|consultation|schedule/.test(q))
    return {
      text: "I can help you request a consultation. Choose your preferred date and time below. The firm will confirm availability; submitting a request does not reserve a slot.",
      booking: true,
    };
  if (/price|cost|fee|charge|free/.test(q))
    return {
      text: "Fees depend on the matter and scope of work. The firm can discuss fees with you before you proceed. Would you like to request a consultation?",
      booking: false,
    };
  if (/email|phone|contact|call/.test(q))
    return {
      text: `You can reach the firm at ${copy("components.Topbar.field4")} or ${copy("components.Topbar.field3")}. You can also request a consultation here.`,
      booking: false,
    };
  const practices = [
    "corporate",
    "commercial",
    "banking",
    "finance",
    "estate",
    "property",
    "litigation",
    "dispute",
    "intellectual",
    "employment",
    "labour",
    "tax",
    "energy",
    "shipping",
    "maritime",
    "telecommunication",
    "aviation",
    "investment",
  ];
  if (
    /service|practice|expertise|help/.test(q) ||
    practices.some((p) => q.includes(p))
  ) {
    const entries = Array.from({ length: 15 }, (_, i) => ({
      title: copy(`components.Services.field${i * 4 + 1}`),
      description: copy(`components.Services.field${i * 4 + 3}`),
    }));
    const matched = entries.filter((e) =>
      e.title
        .toLowerCase()
        .split(/\W+/)
        .some((w) => w.length > 3 && q.includes(w)),
    );
    return {
      text: matched.length
        ? matched.map((e) => `${e.title}: ${e.description}`).join("\n\n")
        : "The firm advises on corporate and commercial matters, dispute resolution, real estate, banking and finance, employment, intellectual property and more. Which area would you like to discuss?",
      booking: false,
    };
  }
  if (/hello|^hi\b|hey/.test(q))
    return {
      text: "Hello! I can explain the firm’s services, share contact details, or help request a meeting. What would you like to do?",
      booking: false,
    };
  // Retrieve only public, substantive website copy. Form statuses and placeholders
  // are deliberately excluded from the answer index.
  const stop = new Set([
    "what",
    "does",
    "your",
    "with",
    "that",
    "this",
    "have",
    "tell",
    "about",
    "please",
    "could",
    "would",
    "they",
    "their",
  ]);
  const words = q.match(/[a-z]{4,}/g)?.filter((w) => !stop.has(w)) || [];
  const candidates = Object.entries(manifest)
    .filter(
      ([key, field]) =>
        field.kind === "text" &&
        !/seo/.test(key) &&
        (field.source.startsWith("app/") ||
          field.source === "components/AboutUs.tsx"),
    )
    .map(([key, field]) => {
      const text = copy(key);
      return {
        text,
        source: field.source,
        score:
          text.length > 100
            ? words.filter((w) => text.toLowerCase().includes(w)).length
            : 0,
      };
    })
    .filter((entry) => entry.score >= 2)
    .sort((a, b) => b.score - a.score);
  if (candidates[0]) {
    const best = candidates[0];
    const source = best.source.startsWith("app/")
      ? "/" + best.source.replace(/^app\//, "").replace(/\/?page\.tsx$/, "")
      : "/about";
    return {
      text: `Here’s what our website says: ${best.text}`,
      booking: false,
      source,
    };
  }
  return {
    text: "I can help with the firm’s services, contact details and meeting requests. I cannot give legal advice or assess a case. For a question specific to your circumstances, please request a consultation with the team.",
    booking: false,
  };
}
