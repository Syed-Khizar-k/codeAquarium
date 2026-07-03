import type { Config } from "tailwindcss";

/**
 * Brand color system — driven entirely by two CSS variables defined in
 * src/app/globals.css:  --brand (the dark navy) and --accent (the reef teal).
 *
 * The full `ocean` scale, `ink`, `abyss` and the gradients are all derived
 * from `--brand` at runtime via color-mix(), so changing that one hex in
 * globals.css re-themes the entire site. The `rgb(from … r g b / <alpha-value>)`
 * wrapper keeps Tailwind opacity modifiers (e.g. bg-ocean-300/40) working.
 */
const B = "var(--brand)";
const A = "var(--accent)";

/** derive a tint (mix toward white) / shade (mix toward black) of the brand */
const mix = (pct: number, towards: "white" | "black") =>
  `color-mix(in srgb, ${B} ${pct}%, ${towards})`;
/** wrap any color so Tailwind's <alpha-value> opacity modifiers still apply */
const alpha = (color: string) => `rgb(from ${color} r g b / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Code Aquarium brand — all derived from --brand / --accent
        ink: alpha(B), // dark navy (primary text / dark surfaces) = --brand
        abyss: alpha(mix(88, "black")), // deeper navy
        ocean: {
          50: alpha(mix(6, "white")),
          100: alpha(mix(12, "white")),
          200: alpha(mix(26, "white")),
          300: alpha(mix(42, "white")),
          400: alpha(mix(60, "white")),
          500: alpha(mix(76, "white")),
          600: alpha(mix(88, "white")),
          700: alpha(B), // primary brand = --brand
          800: alpha(mix(82, "black")),
          900: alpha(mix(66, "black")),
        },
        reef: alpha(A), // accent — CTA / highlight
        coral: "#FF7A59", // warm accent
        slatey: "#64748B",
        mist: "#F0F9FF",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "2560px",
      },
      backgroundImage: {
        // Both gradients derive from --brand (+ a touch of --accent), so they
        // re-theme with the rest of the site.
        "hero-deep": `radial-gradient(120% 120% at 15% 10%, color-mix(in srgb, ${B} 68%, ${A}) 0%, ${mix(
          82,
          "black"
        )} 48%, ${B} 100%)`,
        "ocean-gradient": `linear-gradient(120deg, ${mix(85, "black")} 0%, ${B} 55%, color-mix(in srgb, ${B} 62%, ${A}) 100%)`,
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
