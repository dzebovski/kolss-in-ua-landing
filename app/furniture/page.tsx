import { LandingPage } from "@/components/landing/landing-page";
import { pageMetadata, pages } from "@/lib/kolss-content";

export const metadata = pageMetadata(pages.furniture);

export default function FurniturePage() {
  return <LandingPage page={pages.furniture} />;
}
