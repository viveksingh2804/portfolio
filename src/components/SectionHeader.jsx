export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-8 max-w-3xl animate-rise">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
      <h1 className="text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-5xl">{title}</h1>
      {children && <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">{children}</p>}
    </div>
  );
}
