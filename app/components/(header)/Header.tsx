import { getAbout } from "@/sanity/sanity-utils";
import HeaderBanner from "./HeaderBanner";

export default async function Header() {
    const aboutData = await getAbout();
  return (
    <header className="w-full flex flex-col">
      <HeaderBanner aboutData={aboutData} />
    </header>
  );
}
