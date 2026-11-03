import { useEffect } from "react";
import { useI18n } from "./index";
import { routes } from "../routes";
import { withBase } from "../lib/url";

/** Keeps the browser title and description in the selected language. */
export function PageMetadata() {
  const { t } = useI18n();
  useEffect(() => {
    const route = routes.find((item) => withBase(item.path) === window.location.pathname);
    const metadata = t.pageMetadata[route?.id ?? "notFound"];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
  }, [t]);
  return null;
}
