import Link from "next/link";
import { TechnologyTags } from "@/components/technology-tags";

type ExperienceEntryProps = {
  title: string;
  company: string;
  period: string;
  summary: string;
  details: string[];
  highlight: string;
  items?: string[];
  href?: string;
};

export function ExperienceEntry({
  title,
  company,
  period,
  summary,
  details,
  highlight,
  items = [],
  href,
}: ExperienceEntryProps) {
  return (
    <article className="group rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_52px_rgba(15,23,42,0.08)] sm:p-7">
      <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[0.68rem] font-bold tracking-[0.2em] text-teal-800 uppercase">{company}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
        </div>
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600">
          {period}
        </span>
      </div>

      <p className="mt-5 text-base leading-7 text-slate-600">{summary}</p>

      <div className="mt-6">
        <TechnologyTags items={details} />
      </div>

      <p className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-800">
        {highlight}
      </p>

      {items.length > 0 ? (
        <ul className="mt-8 space-y-4 text-base leading-7 text-slate-600">
          {items.map((item) => (
            <li key={item} className="grid grid-cols-[0.5rem_1fr] items-start gap-3 py-0.5">
              <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-teal-700" />
              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {href ? (
        <Link
          href={href}
          className="mt-8 inline-flex text-sm font-semibold text-teal-800 underline decoration-teal-700/40 underline-offset-4 transition-colors duration-200 group-hover:text-teal-900 group-hover:decoration-teal-700"
        >
          View details
        </Link>
      ) : null}
    </article>
  );
}
