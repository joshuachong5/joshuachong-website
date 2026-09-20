import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featureProjects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Engineering work and research interests"
        description="A focused look at projects that combine systems thinking, autonomous behavior, and practical software engineering."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featureProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <section className="mt-20 rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
        <h2 className="text-2xl font-semibold text-stone-950">Current focus</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
          I am continuing to strengthen my engineering instincts through projects that require thoughtful design, careful
          validation, and system-level integration. My current work emphasizes reliability, testing, and technical depth rather
          than short-term novelty.
        </p>
      </section>
    </main>
  );
}
