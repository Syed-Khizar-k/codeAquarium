export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        section-x section-y max-w-3xl
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-ink
        [&_h2:first-child]:mt-0
        [&_p]:text-slatey [&_p]:leading-relaxed [&_p]:mb-4
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slatey [&_ul]:mb-4 [&_li]:mb-1.5
        [&_a]:text-ocean-700 [&_a]:underline
      "
    >
      {children}
    </div>
  );
}
