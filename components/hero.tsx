import { profile, socialLinks } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/90 bg-[#f9f7f3]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
            {profile.location} / Robotics / ML / Systems
          </p>

          <h1 className="mt-5 max-w-2xl text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-slate-950">
            {profile.name}
          </h1>

          <p className="mt-2 text-lg font-medium text-slate-800 sm:text-xl">
            {profile.tagline}
          </p>

          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I build software for robotics, machine learning, and autonomous systems, with an emphasis on reliable
            perception, planning, and real-world execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-50"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-50"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-50"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
