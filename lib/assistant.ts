export function answerQuestion(message: string, copy: (key: string) => string) {
  const q = message.toLowerCase();
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
  return {
    text: "I can help with the firm’s services, contact details and meeting requests. I cannot give legal advice or assess a case. For a question specific to your circumstances, please request a consultation with the team.",
    booking: false,
  };
}
