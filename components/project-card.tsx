import Link from "next/link";
import { TechnologyTags } from "@/components/technology-tags";

type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
  ctaLabel?: string;
};

export function ProjectCard({ title, type, description, tags, href, ctaLabel = "Learn more" }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
      <p className="text-[0.68rem] font-bold tracking-[0.2em] text-amber-700 uppercase">{type}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>

      <div className="mt-auto pt-5">
        <div>
          <TechnologyTags items={tags} />
        </div>
        <Link
          href={href}
          className="mt-6 inline-flex text-sm font-semibold text-teal-800 underline decoration-teal-700/40 underline-offset-4 transition-colors duration-200 group-hover:text-teal-900 group-hover:decoration-teal-700"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
