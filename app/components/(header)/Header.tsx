import { getSiteData } from "@/sanity/sanity-utils";
import HeaderBanner from "./HeaderBanner";

export default async function Header() {
    const siteData = await getSiteData();

    if (!siteData) {
      return <div>Loading...</div>
    }

  return (
    <header className="w-full flex flex-col">
      <HeaderBanner siteData={siteData} />
    </header>
  );
}
