import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "light" | "reef" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 font-semibold text-[0.95rem] px-6 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ocean-500";

const variants: Record<Variant, string> = {
  primary: "bg-ocean-700 text-white hover:bg-ocean-800",
  light: "bg-white text-ink hover:bg-ocean-50",
  reef: "bg-reef text-white hover:bg-teal-600",
  ghost: "bg-transparent text-ink hover:text-ocean-700 px-0 py-0",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: ButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
