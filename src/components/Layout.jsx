import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../data.js";
import ScrollToTop from "./ScrollToTop.jsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-mist text-ink transition-colors duration-300 dark:bg-[#090b10] dark:text-white">
      <ScrollToTop />
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-cyanGlass/35 blur-3xl dark:bg-cyanGlass/20" />
        <div className="absolute right-[-8rem] top-1/4 h-80 w-80 rounded-full bg-coralGlass/25 blur-3xl dark:bg-coralGlass/20" />
        <div className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-limeGlass/25 blur-3xl dark:bg-limeGlass/10" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/55 backdrop-blur-2xl dark:border-white/10 dark:bg-black/25">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/60 bg-white/50 font-bold shadow-glass dark:border-white/10 dark:bg-white/10">
              VS
            </span>
            <span>
              <span className="block text-sm font-semibold leading-5">{profile.name}</span>
              <span className="block text-xs text-slate-600 dark:text-slate-400">CSE 2027</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-2 rounded-full border border-white/55 bg-white/45 p-1 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/10 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-ink text-white shadow-sm dark:bg-white dark:text-ink"
                      : "text-slate-700 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle dark mode">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-button md:hidden" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mx-4 mb-4 rounded-3xl border border-white/60 bg-white/75 p-2 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-[#111827]/80 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive ? "bg-ink text-white dark:bg-white dark:text-ink" : "text-slate-700 dark:text-slate-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-8 text-sm text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
        <div className="glass-panel flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Vivek Singh</span>
          <span>Built with React, Tailwind CSS, and focused engineering energy.</span>
        </div>
      </footer>
    </div>
  );
}
