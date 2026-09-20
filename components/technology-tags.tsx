type TechnologyTagsProps = {
  items: string[];
};

export function TechnologyTags({ items }: TechnologyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-slate-50/80 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
