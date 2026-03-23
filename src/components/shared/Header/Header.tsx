"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/mattrika_logo.png"
import { navLinks } from "@/data/data";

import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const agencyName = "Mattrika Technologies";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--brand-parchment)/95 backdrop-blur-md border-b border-[#00473e]/5">
      <div className="main-container px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label={`${agencyName} Home`}>
          <Image src={logo} alt={`${agencyName} Logo`} width={100} height={100} priority />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-bold transition-colors ${
                pathname === item.href ? "text-[#00473e]" : "text-[#00473e]/60 hover:text-[#00473e]"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">

          <button className="bg-(--brand-primary) hover:bg-(--brand-primary-hover) text-[#fbf8f3] px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2" aria-label="Book a consultation call">
            Book a call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
