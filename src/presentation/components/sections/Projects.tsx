import React from "react";
import { Project } from "@/domain/project";

interface ProjectsProps {
  projects: Project[];
  selectedTech: string | null;
  setSelectedTech: (tech: string | null) => void;
  activeTab: "all" | "backend";
  setActiveTab: (tab: "all" | "backend") => void;
}

export function Projects({
  projects,
  selectedTech,
  setSelectedTech,
  activeTab,
  setActiveTab,
}: ProjectsProps) {
  // Filter projects by category first, then tech stack mapping
  const filteredProjects = projects.filter((project) => {
    const matchesTab = activeTab === "all" || project.category === activeTab;
    if (selectedTech) {
      return matchesTab && project.tech.includes(selectedTech);
    }
    return matchesTab;
  });

  return (
    <section id="projects" className="scroll-reveal mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Case Studies</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">Featured Backend Projects</h2>
          <p className="text-sm text-slate-550 dark:text-slate-400 mt-2 max-w-md">
            Interactive mockups showcasing design patterns, safety audits, and performance optimizations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1.5 p-1 glass border border-slate-200/40 dark:border-slate-800/40 rounded-2xl self-start md:self-end">
          {(["all", "backend"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl capitalize tracking-wide transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
              }`}
            >
              {tab === "all" ? "All Projects" : "Backend"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          const matchesHighlight = selectedTech && project.tech.includes(selectedTech);
          const hasGlobalTechFilter = selectedTech !== null;
          
          return (
            <article
              key={project.id}
              className={`glass border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 ${
                matchesHighlight
                  ? "ring-2 ring-brand-500 border-brand-500/50 shadow-brand-500/10 shadow-lg scale-[1.01]"
                  : hasGlobalTechFilter
                  ? "opacity-40 grayscale-[20%]"
                  : "border-slate-200/40 dark:border-slate-800/40"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                    {/* Demo link */}
                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Mockup Demo: Link points to a template. Live demo will be available once repository is populated.");
                      }}
                      className="hover:text-brand-500 transition-colors"
                      aria-label="View demo"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {/* Source code link */}
                    <a
                      href={project.codeUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Mockup Code: Source code repository will link here.");
                      }}
                      className="hover:text-brand-500 transition-colors"
                      aria-label="View source code"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-slate-800 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Challenge & Outcome box */}
                <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/30 dark:border-slate-800/30 space-y-3 mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block mb-0.5">Core Technical Challenge</span>
                    <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-light">{project.challenge}</p>
                  </div>
                  <div className="pt-2.5 border-t border-slate-200/40 dark:border-slate-850">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 block mb-0.5">Quantifiable Outcome</span>
                    <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed font-light">{project.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Tech stack items */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => {
                  const matchesTagFilter = selectedTech === t;
                  return (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border transition-all ${
                        matchesTagFilter
                          ? "bg-brand-500 border-brand-500 text-white"
                          : "bg-slate-100/30 dark:bg-slate-900/20 border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 glass border border-slate-200/30 dark:border-slate-800/30 rounded-3xl">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            No projects match the selected tech tag under this category.
          </p>
          <button
            onClick={() => setSelectedTech(null)}
            className="mt-3 text-xs text-brand-500 font-semibold hover:underline cursor-pointer"
          >
            Clear tech filter
          </button>
        </div>
      )}
    </section>
  );
}
