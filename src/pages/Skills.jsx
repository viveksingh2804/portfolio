import { BadgeCheck, Brain, Code, Database, Layers, MonitorCog } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { skills } from "../data.js";

const icons = [Code, Layers, MonitorCog, Brain, Database, BadgeCheck];

export default function Skills() {
  return (
    <div>
      <SectionHeader eyebrow="Skills" title="A practical stack for building, shipping, and debugging.">
        My strongest axis is Java and backend development, supported by frontend work, databases, computer vision, and algorithmic problem solving.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[index] || BadgeCheck;
          return (
            <section className="glass-card p-6" key={group.group}>
              <span className="icon-badge"><Icon size={20} /></span>
              <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{group.group}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="skill-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
