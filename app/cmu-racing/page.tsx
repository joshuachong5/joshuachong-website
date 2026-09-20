import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { TechnologyTags } from "@/components/technology-tags";
import { technicalStack } from "@/data/site";

export default function CmuRacingPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/#top"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 transition-all duration-200 hover:border-slate-900 hover:text-slate-900"
        >
          <span aria-hidden="true">←</span>
          Back
        </Link>
      </div>

      <SectionHeading
        eyebrow="CMU Racing"
        title="Driverless path planning"
        description="I work on autonomous racing software in a large ROS2-based stack, contributing to mission-critical planning and state-estimation components that feed the vehicle behavior."
      />

      <div className="mt-10 rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
        <h2 className="text-2xl font-semibold text-stone-950">Overview</h2>
        <p className="mt-4 text-base leading-8 text-stone-700">
          Driverless path planning takes perception inputs such as cone detections and localization information, then generates
          drivable trajectories for the vehicle. The goal is to create paths that are feasible, safe, and consistent with the
          current state of the car and the track environment.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
          <h2 className="text-2xl font-semibold text-stone-950">Localization</h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            My work has included ROS2/C++ EKF localization using odometry and cone detections. This approach combines sensor
            information to estimate a consistent vehicle state while handling noisy measurements and imperfect observations.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            Robustness is important in this setting because cone detections can be unreliable and noisy. The system needs to remain
            stable under imperfect inputs and maintain dependable state estimation during operation.
          </p>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
          <h2 className="text-2xl font-semibold text-stone-950">SLAM</h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            I have also worked with GTSAM and iSAM2 for graph-based SLAM, including data association and loop closure. This was
            used to build a more globally consistent map and improve localization quality over longer runs.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            The work has included offline evaluation of SLAM performance, with ongoing effort toward reliable online execution in a
            real racing stack.
          </p>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
          <h2 className="text-2xl font-semibold text-stone-950">Trajectory optimization</h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            My planning work includes B-spline trajectory representation and minimum-curvature optimization. This formulation is
            useful for generating smooth, drivable paths that respect the vehicle dynamics and the constraints of the environment.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            This optimization is integrated with CarMaker in Python, providing an environment for evaluating the planned path in a
            realistic simulation workflow.
          </p>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white/82 p-6 shadow-sm shadow-stone-900/5">
          <h2 className="text-2xl font-semibold text-stone-950">Current engineering focus</h2>
          <p className="mt-4 text-base leading-8 text-stone-700">
            The immediate engineering focus is on robustness to noisy and outlier cone detections, thorough testing, reliable
            execution, and continued work on online localization and SLAM. There is also active attention to midline generation and
            producing dependable trajectory behavior in dynamic, uncertain conditions.
          </p>
        </section>
      </div>

      <section className="mt-16 rounded-lg border border-stone-800 bg-stone-950 p-6 text-stone-100 shadow-2xl shadow-stone-900/15">
        <p className="text-xs font-bold tracking-[0.2em] text-teal-200 uppercase">Competition result</p>
        <h2 className="mt-4 text-2xl font-semibold">Formula SAE Michigan 2026</h2>
        <p className="mt-4 text-base leading-8 text-stone-200">
          2nd Driverless, 4th Overall, with 100+ teams competing.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-stone-950">Technical stack</h2>
        <div className="mt-6 space-y-6 rounded-lg border border-stone-200 bg-white/58 p-6 shadow-sm shadow-stone-900/5">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-teal-800 uppercase">Languages</p>
            <TechnologyTags items={technicalStack.languages} />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-teal-800 uppercase">Frameworks / tools</p>
            <TechnologyTags items={technicalStack.frameworks} />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-teal-800 uppercase">Libraries</p>
            <TechnologyTags items={technicalStack.libraries} />
          </div>
        </div>
      </section>
    </main>
  );
}
