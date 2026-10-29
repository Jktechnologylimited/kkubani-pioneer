"use client";
import { useState } from "react";
import { saveHomepage, leaveEditor } from "./actions";
const labels = {
  heroTitle: "Hero heading",
  heroDescription: "Hero description",
  welcomeTitle: "Welcome heading",
  welcomeSubtitle: "Welcome description",
};
export function HomepageEditor({
  draft,
  revision: initial,
  scope,
}: {
  draft: Record<keyof typeof labels, string>;
  revision: number;
  scope: readonly string[];
}) {
  const [fields, setFields] = useState(draft),
    [revision, setRevision] = useState(initial),
    [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  async function save(publish: boolean) {
    setBusy(true);
    setMessage("");
    try {
      const r = await saveHomepage(fields, revision, publish);
      if (r.ok) {
        setRevision(r.revision);
        setMessage(
          publish
            ? "Published. Open the website to see the changes."
            : "Draft saved. The public website is unchanged.",
        );
      } else setMessage(r.error);
    } catch {
      setMessage("Connection interrupted. Reload before retrying.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section>
      <p className="my-5 text-sm">
        Only the four homepage text fields below are editable. Publishing
        changes website content; it does not change source code, case data,
        email accounts or deployment settings.
      </p>
      {Object.entries(labels).map(([key, label]) => (
        <label className="my-5 block text-sm" key={key}>
          {label}
          <textarea
            className="mt-2 block w-full rounded border border-slate-400 bg-white p-3 text-slate-950"
            rows={key.endsWith("Title") ? 2 : 3}
            maxLength={
              key === "heroTitle" ? 120 : key === "welcomeTitle" ? 160 : 500
            }
            value={fields[key as keyof typeof labels]}
            disabled={!scope.includes("content:write")}
            onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
          />
        </label>
      ))}
      {message && (
        <p role="status" className="my-5 border border-slate-300 p-4">
          {message}
        </p>
      )}
      <div className="my-6 flex flex-wrap gap-4">
        <button
          type="button"
          disabled={busy || !scope.includes("content:write")}
          onClick={() => void save(false)}
          className="rounded bg-slate-800 px-5 py-3 text-white disabled:opacity-50"
        >
          Save draft
        </button>
        <button
          type="button"
          disabled={busy || !scope.includes("content:publish")}
          onClick={() => void save(true)}
          className="rounded bg-orange-600 px-5 py-3 text-white disabled:opacity-50"
        >
          Publish to website
        </button>
      </div>
      <form action={leaveEditor}>
        <button className="underline">Leave editor</button>
      </form>
    </section>
  );
}
