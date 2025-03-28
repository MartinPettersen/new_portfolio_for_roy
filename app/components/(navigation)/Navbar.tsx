"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [{name: "Prosjekter", url: "/"}, {name: "About", url: "/about"}];
  const pathname = usePathname();

  return (
    <nav className="w-[50%] h-24 flex justify-evenly ">
      
      {pages.map((page) => (
        <div
          key={page.name}
          className={`w-[50%] flex items-center rounded-t-xl justify-center font-medium  ${pathname === page.url? "bg-[#E4D9C4]" : "bg-[#B7AF9F]"}`}
        >
          <Link href={`${page.url.toLowerCase()}`} className="text-lg ">
            {page.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
