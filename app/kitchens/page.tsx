import { LandingPage } from "@/components/landing/landing-page";
import { pageMetadata, pages } from "@/lib/kolss-content";

export const metadata = pageMetadata(pages.kitchens);

export default function KitchensPage() {
  return <LandingPage page={pages.kitchens} />;
}
