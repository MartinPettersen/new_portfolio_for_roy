import { getSiteData } from "@/sanity/sanity-utils";
import HeaderBanner from "./HeaderBanner";
import Loading from "../(loading)/Loading";

export const dynamic = 'force-dynamic';

export default async function Header() {
    const siteData = await getSiteData();

    if (!siteData) {
      return <Loading />
    }

  return (
    <header className="w-full flex flex-col">
      <HeaderBanner siteData={siteData} />
    </header>
  );
}
