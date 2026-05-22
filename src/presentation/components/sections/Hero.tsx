import React from "react";

export function Hero() {
  return (
    <section id="about" className="scroll-reveal mb-24 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
      <div className="lg:col-span-3">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-6 tracking-wide uppercase">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Seeking Remote Backend Opportunities
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          LAW TURNED TECH.
          <span className="block mt-2 bg-gradient-to-r from-brand-500 via-brand-600 to-accent-600 bg-clip-text text-transparent">
            Backend Developer
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
          Transitioning from a legal career, bringing analytical precision, compliance awareness, and structured problem-solving into software engineering. Focused on scalable, type-safe API architectures, clean server-side logic, and maintainable backend systems using <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>SQL</strong>, and <strong>Firebase</strong>.
        </p>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
          <div>
            <p className="text-3xl font-display font-extrabold text-brand-500">GDG</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Active Member</p>
          </div>
          <div>
            <p className="text-3xl font-display font-extrabold text-brand-500">Analytical</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Precision</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-3xl font-display font-extrabold text-brand-500">B2 English</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Proficiency</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-center">
        {/* Aesthetic Developer Graphic */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden glass border-2 border-white/20 p-6 flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500">law_to_backend.sh</span>
          </div>
          
          <div className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-2 py-4">
            <p><span className="text-brand-500 dark:text-brand-200">class</span> Transition &#123;</p>
            <p className="pl-4">from: <span className="text-accent-600">&quot;Legal Career&quot;</span>,</p>
            <p className="pl-4">to: <span className="text-accent-600">&quot;Backend Developer&quot;</span>,</p>
            <p className="pl-4">skills: [<span className="text-brand-500">&quot;TypeScript&quot;</span>, <span className="text-brand-500">&quot;Node.js&quot;</span>, <span className="text-brand-500">&quot;Firebase&quot;</span>],</p>
            <p className="pl-4">mode: <span className="text-accent-600">&quot;Structured_Problem_Solving&quot;</span></p>
            <p>&#125;;</p>
          </div>

          <div className="flex items-center gap-3 p-3 bg-brand-500/10 border border-brand-500/20 rounded-2xl">
            <div className="w-8 h-8 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-700 dark:text-brand-400">Analytical Mindset</p>
              <p className="text-[10px] text-brand-600/70 dark:text-brand-400/70">Bridging compliance and logic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
