type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "between";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div
      className={
        align === "between"
          ? "grid gap-5 border-t border-slate-200 pt-8 lg:grid-cols-[0.8fr_1fr] lg:items-start"
          : "max-w-2xl border-t border-slate-200 pt-8"
      }
    >
      <div className="space-y-3">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-teal-700">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">{title}</h2>
      </div>
      {description ? <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
