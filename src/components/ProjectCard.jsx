import { Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="glass-card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {project.short || "Project"}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h2>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/60 bg-white/50 text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-cyan-200">
          <Code2 size={20} />
        </span>
      </div>
      <p className="flex-1 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="skill-pill">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
