import { ExperienceEntry } from "@/components/experience-entry";
import { SectionHeading } from "@/components/section-heading";
import { experienceEntries, mathAccomplishments } from "@/data/site";

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Robotics, software, and systems work"
        description="My experience has centered on autonomous software, control, and team-based engineering in fast-moving technical environments."
      />

      <div className="mt-10 grid gap-6">
        {experienceEntries.map((entry) => (
          <ExperienceEntry key={entry.company} {...entry} />
        ))}
      </div>

      <section className="mt-20 rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
        <h2 className="text-2xl font-semibold text-stone-950">Mathematics</h2>
        <ul className="mt-5 grid gap-3 text-base text-stone-700 sm:grid-cols-2">
          {mathAccomplishments.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
