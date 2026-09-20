"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = isHome
    ? [
        { href: "/", label: "Home" },
        { href: "#introduction", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
      ];

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f9f7f3]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-sm font-semibold text-slate-950 transition-colors hover:text-teal-800"
          aria-label="Joshua Chong home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-950 font-mono text-[0.7rem] text-white shadow-[0_10px_18px_rgba(15,23,42,0.14)]">
            JC
          </span>
          <span className="hidden text-[0.8rem] tracking-[-0.02em] sm:inline">Joshua Chong</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto text-[0.72rem] font-medium uppercase tracking-[0.14em] text-slate-600 sm:gap-2 md:gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-1.5 transition-all duration-200 hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={socialLinks.resume}
          className="hidden shrink-0 items-center rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-950 hover:text-white sm:inline-flex"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
