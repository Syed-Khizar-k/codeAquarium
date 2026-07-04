import Link from "next/link";
import {
 Linkedin,
 Facebook,
 Instagram,
 Github,
 ArrowRight,
} from "lucide-react";
import Logo from "@/components/brand/Logo";
import { site, footerNav } from "@/lib/site";

export default function Footer() {
 const socials = [
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: site.socials.github, label: "GitHub", Icon: Github },
 ];

 return (
  <footer className="bg-black text-white">
   <div className="max-w-page mx-auto px-5 py-14 md:px-20 lg:px-32 md:py-16">
    <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
     {/* Brand + newsletter */}
     <div className="flex flex-col gap-6 max-w-md">
      <Logo />
      <p className="text-white/60 leading-relaxed">{site.description}</p>
      <div>
       <p className="text-sm font-semibold text-white/80 mb-3">
        Subscribe to our newsletter
       </p>
       <form action="/contact" className="relative max-w-sm">
        <label htmlFor="footer-email" className="sr-only">
         Email address
        </label>
        <input
         id="footer-email"
         name="email"
         type="email"
         placeholder="you@company.com"
         className="w-full bg-transparent border border-white/20 px-5 py-3 pr-14 focus:outline-none focus:border-ocean-400 placeholder:text-white/40"
        />
        <button
         type="submit"
         aria-label="Subscribe"
         className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white hover:bg-ocean-500 p-2.5 transition-colors">
         <ArrowRight className="h-4 w-4 text-black" />
        </button>
       </form>
      </div>
     </div>

     {/* Link columns */}
     <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
      <div>
       <h2 className="text-white/50 uppercase tracking-wider text-sm mb-4">
        Explore
       </h2>
       <ul className="flex flex-col gap-2.5">
        {footerNav.explore.map((l) => (
         <li key={l.href}>
          <Link
           href={l.href}
           className="text-white/75 hover:text-ocean-300 transition-colors">
           {l.label}
          </Link>
         </li>
        ))}
       </ul>
      </div>
      <div>
       <h2 className="text-white/50 uppercase tracking-wider text-sm mb-4">
        Legal
       </h2>
       <ul className="flex flex-col gap-2.5">
        {footerNav.legal.map((l) => (
         <li key={l.href}>
          <Link
           href={l.href}
           className="text-white/75 hover:text-ocean-300 transition-colors">
           {l.label}
          </Link>
         </li>
        ))}
       </ul>
      </div>
      <div className="col-span-2 sm:col-span-1">
       <h2 className="text-white/50 uppercase tracking-wider text-sm mb-4">
        Contact
       </h2>
       <ul className="flex flex-col gap-2.5">
        <li>
         <a
          href={`tel:${site.phoneHref}`}
          className="text-white/75 hover:text-ocean-300 transition-colors">
          {site.phone}
         </a>
        </li>
        <li>
         <a
          href={`mailto:${site.email}`}
          className="text-white/75 hover:text-ocean-300 transition-colors">
          {site.email}
         </a>
        </li>
        <li className="text-white/75">{site.location}</li>
       </ul>
       <div className="flex gap-4 mt-5">
        {socials.map(({ href, label, Icon }) => (
         <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white/60 hover:text-ocean-300 transition-colors">
          <Icon className="h-5 w-5" />
         </a>
        ))}
       </div>
      </div>
     </div>
    </div>

    <div className="mt-14 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
     © {new Date().getFullYear()} {site.legalName}. All rights reserved.
    </div>
   </div>
  </footer>
 );
}
