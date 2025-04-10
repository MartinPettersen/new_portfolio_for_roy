import { getSiteData } from "@/sanity/sanity-utils";
//import HeaderBanner from "./HeaderBanner";
import Loading from "../(loading)/Loading";
//import ParallaxHeaderBanner from "./ParallaxHeaderBanner";
import ComboBanner from "./ComboBanner";



export default async function Header() {
    const siteData = await getSiteData();

    if (!siteData) {
      return <Loading />
    }

  return (
    <header className="w-full flex flex-col parallax">
      <ComboBanner siteData={siteData}/>
    </header>
  );
}
