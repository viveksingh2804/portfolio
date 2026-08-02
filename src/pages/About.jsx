import { GraduationCap, Target, Trophy } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { achievements, profile } from "../data.js";

export default function About() {
  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="About" title="A CSE student shaping placement-ready engineering depth.">
        I work primarily in Java and build across backend systems, React interfaces, and computer vision services. My current goal is to keep strengthening problem solving and project depth for product-based company placements.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="glass-card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="icon-badge"><GraduationCap size={20} /></span>
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Education</h2>
          </div>
          <div className="mt-7 border-l border-cyan-500/30 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">{profile.education.dates}</p>
            <h3 className="mt-2 text-xl font-semibold">{profile.education.degree}</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{profile.education.school}</p>
            <p className="mt-4 inline-flex rounded-full border border-white/60 bg-white/55 px-4 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/10">
              CGPA {profile.education.cgpa}
            </p>
          </div>
        </section>

        <section className="glass-card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="icon-badge"><Target size={20} /></span>
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Focus Areas</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Java-first backend development", "Spring Boot microservices", "React product interfaces", "Computer vision systems"].map((item) => (
              <div className="rounded-3xl border border-white/55 bg-white/40 p-5 dark:border-white/10 dark:bg-white/10" key={item}>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="glass-panel p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="icon-badge"><Trophy size={20} /></span>
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Achievements</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {achievements.map((item) => (
            <div className="rounded-3xl border border-white/55 bg-white/40 p-5 dark:border-white/10 dark:bg-white/10" key={item.label}>
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-2 font-semibold">{item.label}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
