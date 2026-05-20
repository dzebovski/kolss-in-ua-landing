import { LandingPage } from "@/components/landing/landing-page";
import { pageMetadata, pages } from "@/lib/kolss-content";

export const metadata = pageMetadata(pages.contacts);

export default function ContactsPage() {
  return <LandingPage page={pages.contacts} />;
}
