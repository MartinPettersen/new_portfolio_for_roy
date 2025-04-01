"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [{name: "Prosjekter", url: "/"}, {name: "About", url: "/about"}];
  const pathname = usePathname();

  return (
    <nav className="w-[50%] relative flex justify-start items-end ">
      
      {pages.map((page) => (
        <Link href={`${page.url.toLowerCase()}`}
          key={page.name}
          className={`${pathname === page.url? "w-[50%] h-24 shadow-custom z-[53]" : "w-[45%] h-20 z-[51] shadow-weak"}   flex items-center rounded-t-xl justify-center   font-medium  ${pathname === page.url? "bg-[#E4D9C4]" : "bg-[#B7AF9F]"}`}
        >
          <p className="text-lg ">
            {page.name}
          </p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
