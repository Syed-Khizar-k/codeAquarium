import Image from "next/image";

type LogoProps = {
 className?: string;
 showWordmark?: boolean;
 /** Wordmark color — pass a Tailwind text color class */
 wordmarkClassName?: string;
};

/**
 * Code Aquarium logomark: a stylized fish formed from a code caret,
 * set inside a rounded "tank". Uses currentColor-friendly gradients.
 */
export default function Logo() {
 return (
  // <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
  //   <svg
  //     width="40"
  //     height="40"
  //     viewBox="0 0 40 40"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     aria-hidden="true"
  //     className="shrink-0"
  //   >
  //     <defs>
  //       <linearGradient id="ca-tank" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
  //         <stop stopColor="#06B6D4" />
  //         <stop offset="1" stopColor="#0E7490" />
  //       </linearGradient>
  //     </defs>
  //     <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#ca-tank)" />
  //     <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="#07182B" fillOpacity="0.12" />
  //     {/* fish body */}
  //     <path
  //       d="M12 20c0-4.4 3.9-8 8.6-8 3.2 0 6 1.6 7.5 4-1.5 2.4-4.3 4-7.5 4-1.2 0-2.4-.2-3.4-.7"
  //       stroke="#ECFEFF"
  //       strokeWidth="2.4"
  //       strokeLinecap="round"
  //       fill="none"
  //       transform="translate(0 4)"
  //     />
  //     {/* code caret as the fish / motion */}
  //     <path
  //       d="M15.5 15.5 11 20l4.5 4.5M24.5 15.5 29 20l-4.5 4.5"
  //       stroke="#ECFEFF"
  //       strokeWidth="2.6"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     />
  //     <circle cx="20" cy="20" r="1.7" fill="#ECFEFF" />
  //   </svg>
  //   {showWordmark && (
  //     <span className={`font-bold text-[1.15rem] tracking-tight leading-none ${wordmarkClassName}`}>
  //       Code Aquarium
  //     </span>
  //   )}
  // </span>
  <div className={`inline-flex items-center `}>
   <Image
    src="/logo/codeaquarium-logo-white.svg"
    alt="Code Aquarium Logo"
    width={160}
    height={80}
    className="shrink-0"
   />
  </div>
 );
}
