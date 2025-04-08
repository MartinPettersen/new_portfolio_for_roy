"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [{name: "Prosjekter", url: "/"}, {name: "About", url: "/about"}];
  const pathname = usePathname();

  return (
    <nav className="w-[50%] flex justify-start items-end ">
      
      {pages.map((page) => (
        <Link href={`${page.url.toLowerCase()}`}
          key={page.name}
          className={`${pathname === page.url? "w-[50%] h-[76]  shadow-nav  z-[13]" : "w-[45%] pb-4 -mb-4 h-[80px] z-[1] "}   flex items-center rounded-t-xl justify-center   font-medium  ${pathname === page.url? "bg-[#E8D5B0]" : "bg-[#9E9178] hover:bg-[#C3B394]"}`}
        >
          <p className="text-lg font-space-mono">
            {page.name}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
