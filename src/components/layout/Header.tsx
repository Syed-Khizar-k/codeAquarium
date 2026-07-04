"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { mainNav } from "@/lib/site";

export default function Header() {
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
  setOpen(false);
 }, [pathname]);

 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);

 useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";
  return () => {
   document.body.style.overflow = "";
  };
 }, [open]);

 return (
  <header
   className={`sticky top-0 z-50 transition-colors duration-300 ${
    scrolled
     ? "bg-[var(--brand)] backdrop-blur border-b border-white/10"
     : "bg-transparent"
   }`}>
   <div className="max-w-page mx-auto section-x">
    <nav className="flex items-center justify-between py-4">
     <Link href="/" aria-label="Code Aquarium home">
      <Logo />
     </Link>

     <div className="hidden md:flex items-center gap-8">
      <ul className="flex gap-8 text-white/90 text-[1.05rem]">
       {mainNav.map((item) => (
        <li key={item.href}>
         <Link
          href={item.href}
          className={`transition-colors hover:text-ocean-300 ${
           pathname.startsWith(item.href) ? "text-ocean-300" : ""
          }`}>
          {item.label}
         </Link>
        </li>
       ))}
      </ul>
      <Link
       href="/contact"
       className="bg-white text-ink px-6 py-2.5 font-semibold hover:bg-ocean-500 hover:text-white transition-colors">
       Get in touch
      </Link>
     </div>

     <button
      type="button"
      className="md:hidden text-white p-2"
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}>
      {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
     </button>
    </nav>
   </div>

   {/* Mobile menu */}
   <div
    className={`md:hidden overflow-hidden bg-ink border-t border-white/10 transition-all duration-300 ${
     open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}>
    <ul className="flex flex-col gap-1 px-5 py-4 text-white text-[1.1rem]">
     {mainNav.map((item) => (
      <li key={item.href}>
       <Link href={item.href} className="block py-2.5 hover:text-ocean-300">
        {item.label}
       </Link>
      </li>
     ))}
     <li className="pt-2">
      <Link
       href="/contact"
       className="inline-block bg-reef text-white px-6 py-2.5 font-semibold">
       Get in touch
      </Link>
     </li>
    </ul>
   </div>
  </header>
 );
}
