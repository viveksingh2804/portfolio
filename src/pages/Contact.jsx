import { Download, Github, Linkedin, Mail, Phone, Trophy } from "lucide-react";
import SectionHeader from "../components/SectionHeader.jsx";
import { profile } from "../data.js";

const contactItems = [
  { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}`, icon: Mail },
  { label: "Phone", value: profile.contact.phone, href: `tel:${profile.contact.phone}`, icon: Phone },
  { label: "GitHub", value: "github.com/viveksingh2804", href: profile.contact.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/vivek-singh-a56189158", href: profile.contact.linkedin, icon: Linkedin },
  { label: "LeetCode", value: "leetcode.com/u/kgolu2804g", href: profile.contact.leetcode, icon: Trophy },
  { label: "HackerRank", value: "hackerrank.com/profile/vivek_singh_2804", href: profile.contact.hackerrank, icon: Trophy },
];

export default function Contact() {
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Contact" title="Let’s connect around roles, projects, or collaborations.">
        I’m preparing for campus placements and interested in opportunities where strong fundamentals, backend engineering, and product-focused development matter.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <a className="glass-card flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-glow" href={item.href} key={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span className="icon-badge"><Icon size={20} /></span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-cyan-700 dark:text-cyan-300">{item.label}</span>
                <span className="block truncate font-medium">{item.value}</span>
              </span>
            </a>
          );
        })}
      </div>

      <section className="glass-panel p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Resume</h2>
        <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
          Download my resume for education details, technical skills, and project overview.
        </p>
        <a className="primary-button mt-6 inline-flex" href={profile.resumePath} download>
          <Download size={18} />
          Download Resume
        </a>
      </section>
    </div>
  );
}
