import type { Metadata } from "next";
import { requireCms } from "@/lib/jktl/authorize";
import { readContent } from "@/lib/jktl/content-store";
import { HomepageEditor } from "./editor";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Website content | K.K. Ubani & Co.",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};
export default async function Page() {
  let content;
  try {
    const { config, identity } = await requireCms();
    const snapshot = await readContent(config.projectId);
    content = (
      <HomepageEditor
        draft={snapshot.data.draft}
        revision={snapshot.data.revision}
        scope={identity.scope}
      />
    );
  } catch {
    content = (
      <p className="my-8">
        This editor requires an active, approved project connection. Open Manage
        Website from your JKTL Business account or contact JKTL support.
      </p>
    );
  }
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-white px-6 py-10 text-slate-950">
      <p className="text-sm uppercase tracking-widest">
        K.K. Ubani & Co. / JKTL Business
      </p>
      <h1 className="my-6 text-4xl">Website content</h1>
      <nav className="flex flex-wrap gap-5 text-sm underline">
        <a href="/" target="_blank" rel="noopener noreferrer">
          View website
        </a>
        <a href="https://business.jktl.com.ng/business/custom">
          Back to JKTL Business
        </a>
      </nav>
      {content}
    </main>
  );
}
