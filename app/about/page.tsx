import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Computer science student building dependable systems"
        description="I am a student at Carnegie Mellon studying computer science with a concentration in machine learning, motivated by the design of software that interacts with the physical world."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
          <p className="text-xs font-bold tracking-[0.18em] text-amber-700 uppercase">Profile</p>
          <dl className="mt-5 space-y-4 text-sm text-stone-700">
            <div className="border-b border-stone-200 pb-3">
              <dt className="font-semibold text-stone-950">Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div className="border-b border-stone-200 pb-3">
              <dt className="font-semibold text-stone-950">School</dt>
              <dd>{profile.school}</dd>
            </div>
            <div className="border-b border-stone-200 pb-3">
              <dt className="font-semibold text-stone-950">Degree</dt>
              <dd>{profile.degree}</dd>
            </div>
            <div className="border-b border-stone-200 pb-3">
              <dt className="font-semibold text-stone-950">Graduation</dt>
              <dd>{profile.graduation}</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-950">Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-6 rounded-lg border border-stone-200 bg-white/58 p-6 text-base leading-8 text-stone-700 shadow-sm shadow-stone-900/5">
          <p>
            My interest in software began with building systems that can reason, react, and adapt under uncertainty. That
            direction led me toward robotics, machine learning, and autonomous systems, where reliable algorithms and careful
            engineering matter as much as theoretical insight.
          </p>
          <p>
            Through team-based engineering work, I have built experience with perception, planning, localization, and control in
            complex autonomous systems. I care about designing software that is not only effective in simulation or lab settings,
            but also robust enough to handle noisy data and real-world constraints.
          </p>
          <p>
            Outside of academics and engineering, I enjoy badminton and chess, both of which reinforce focus, pattern recognition,
            and strategic thinking.
          </p>
        </div>
      </div>
    </main>
  );
}
