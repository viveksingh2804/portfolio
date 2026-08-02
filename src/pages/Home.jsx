import { ArrowRight, Download, Github, Linkedin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { achievements, profile, projects, skills } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid min-h-[72vh] items-center gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-white/60 bg-white/55 px-4 py-2 text-sm font-medium text-cyan-800 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-cyan-200">
            B.Tech CSE 2027 · Java · Spring Boot · React
          </p>
          <h1 className="text-4xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Building practical software with clean systems thinking.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            I’m Vivek Singh, a CSE student focused on Java, backend systems, full-stack development, and computer vision projects while preparing for product-based placements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button" href={profile.resumePath} download>
              <Download size={18} />
              Download Resume
            </a>
            <Link className="secondary-button" to="/projects">
              View Projects
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-8 flex gap-3">
            <a className="icon-link" href={profile.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a className="icon-link" href={profile.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
            <a className="icon-link" href={profile.contact.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <Trophy size={19} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[30rem] animate-float">
          <div className="absolute inset-8 rounded-[2rem] border border-white/60 bg-white/35 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-white/10" />
          <div className="absolute inset-x-0 top-12 mx-auto h-52 w-52 rounded-full border border-cyan-200/70 bg-gradient-to-br from-cyan-200/80 via-white/70 to-lime-200/70 blur-sm dark:border-cyan-300/20 dark:from-cyan-300/25 dark:via-white/10 dark:to-lime-300/20" />
          <div className="glass-card absolute inset-x-8 bottom-10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Current Focus</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">Placement-ready full-stack engineering</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Java", "Spring Boot", "React", "OpenCV"].map((item) => (
                <span key={item} className="rounded-2xl border border-white/55 bg-white/50 px-4 py-3 text-center text-sm font-semibold dark:border-white/10 dark:bg-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {achievements.map((item) => (
          <div className="glass-panel p-6" key={item.label}>
            <p className="text-3xl font-bold text-slate-950 dark:text-white">{item.value}</p>
            <p className="mt-2 font-semibold">{item.label}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">Selected Work</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">Projects</h2>
          </div>
          <Link className="text-sm font-semibold text-cyan-800 dark:text-cyan-200" to="/projects">
            See all
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">Core Stack</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {skills.slice(0, 3).map((group) => (
            <div key={group.group}>
              <h3 className="font-semibold text-slate-950 dark:text-white">{group.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
