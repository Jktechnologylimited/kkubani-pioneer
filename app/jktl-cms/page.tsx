import { redirect } from "next/navigation";
import { businessEditorUrl } from "@/lib/jktl/site-connection";
export const metadata = {
  title: "Manage website | JKTL Business",
  robots: { index: false, follow: false },
};
export default function Page() {
  redirect(businessEditorUrl);
}
