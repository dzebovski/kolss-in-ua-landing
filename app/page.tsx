import { LandingPage } from "@/components/landing/landing-page";
import { pageMetadata, pages } from "@/lib/kolss-content";

export const metadata = pageMetadata(pages.home);

export default function HomePage() {
  return <LandingPage page={pages.home} />;
}
