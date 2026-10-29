"use client";
import { createContext, useContext } from "react";
import { defaults } from "./content-model.mjs";
const ContentContext = createContext<Record<string, string>>(defaults);
export function SiteContent({
  values,
  children,
}: {
  values: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
}
export function useSiteCopy() {
  const values = useContext(ContentContext);
  return (id: string) => values[id] ?? defaults[id] ?? "";
}
