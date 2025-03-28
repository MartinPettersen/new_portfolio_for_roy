import { getAbout } from "@/sanity/sanity-utils";
import Navbar from "../(navigation)/Navbar";
import HeaderBanner from "./HeaderBanner";

export default async function Header() {
    const aboutData = await getAbout();
  return (
    <header className="z-50 w-full flex flex-col">
      <HeaderBanner aboutData={aboutData} />
      <Navbar />
    </header>
  );
}
