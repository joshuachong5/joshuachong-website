import Link from "next/link";
import { Hero } from "@/components/hero";
import { ExperienceEntry } from "@/components/experience-entry";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  experienceEntries,
  featureProjects,
  mathAccomplishments,
  profile,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <section id="introduction" className="grid gap-8 scroll-mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Introduction"
              title="Engineering for real-world autonomy"
              description="I am a computer science student at Carnegie Mellon focused on software engineering, machine learning, robotics, and autonomous systems. My work sits at the intersection of perception, planning, and dependable execution in complex environments."
            />
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] text-amber-700 uppercase">Profile</p>
            <dl className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="border-b border-slate-200 pb-3.5">
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">School</dt>
                <dd className="mt-1.5 text-base text-slate-800">{profile.school}</dd>
              </div>
              <div className="border-b border-slate-200 pb-3.5">
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Degree</dt>
                <dd className="mt-1.5 text-base text-slate-800">{profile.degree}</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Expected graduation</dt>
                <dd className="mt-1.5 text-base text-slate-800">{profile.graduation}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="experience" className="mt-24 scroll-mt-24">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected experience"
            description="A small snapshot of the projects and teams that have shaped my work in robotics and autonomous systems."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {experienceEntries.map((entry) => (
              <ExperienceEntry key={entry.company} {...entry} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24 scroll-mt-24">
          <SectionHeading
            eyebrow="Projects"
            title="Ongoing engineering projects"
            description="Research and engineering work focused on building systems that are both technically sound and practically usable."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featureProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-24 scroll-mt-24">
          <SectionHeading
            eyebrow="Academic background"
            title="Mathematics and problem solving"
            description="A secondary interest in rigorous quantitative thinking and mathematically grounded problem solving."
          />
          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white/75 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.04)]">
            <ul className="grid gap-3 text-base text-slate-700 sm:grid-cols-2">
              {mathAccomplishments.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-teal-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-24 pb-4">
          <div className="rounded-[1.75rem] border border-slate-900 bg-slate-950 p-8 text-slate-100 shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:p-10">
            <p className="text-[0.68rem] font-bold tracking-[0.22em] text-teal-200 uppercase">Open to opportunities</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Software engineering, machine learning, robotics, and autonomous systems internships.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:joshchong5@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-50"
              >
                Contact
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200/60 hover:bg-white/10"
              >
                View projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
