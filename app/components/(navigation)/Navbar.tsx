"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [{name: "Prosjekter", url: "/"}, {name: "About", url: "/about"}];
  const pathname = usePathname();

  return (
    <nav className="w-screen  flex justify-evenly ">
      
      {pages.map((page) => (
        <div
          key={page.name}
          className={`w-[50%] flex items-center justify-center font-medium border-t-2 border-l-2 border-r-2 ${pathname === page.url? "bg-white" : "bg-slate-200"}`}
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
