"use client";

import Link from "next/link";
import Image from "next/image";
import { salesHeader } from "../../data/salesPageContent";

export default function SalesPageHeader() {
  return (
    <header className="section pt-6">
      <div
        className="h-16 md:h-18 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                        shadow-[0_0_0_1px_rgba(255,255,255,0.04)] px-4 md:px-6
                        flex items-center justify-between gap-3"
      >
        <Link href="/" className="flex items-center pl-2 md:pl-4 shrink-0 min-w-0">
          <Image
            src="/logo.svg?v=4"
            alt="Whik"
            width={160}
            height={52}
            priority
            className="object-contain h-14 md:h-16 filter-none max-w-[min(160px,42vw)]"
            style={
              {
                imageRendering: "crisp-edges",
                WebkitImageRendering: "crisp-edges",
                msInterpolationMode: "nearest-neighbor",
              } as React.CSSProperties
            }
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
          {salesHeader.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary h-9 px-3 sm:px-4 text-sm leading-none shrink-0">
          {salesHeader.cta}
        </a>
      </div>
    </header>
  );
}
