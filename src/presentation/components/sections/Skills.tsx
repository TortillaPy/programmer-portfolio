import React from "react";
import { SkillCategory } from "@/domain/skill";

interface SkillsProps {
  categories: SkillCategory[];
  selectedTech: string | null;
  setSelectedTech: (tech: string | null) => void;
}

export function Skills({ categories, selectedTech, setSelectedTech }: SkillsProps) {
  return (
    <section id="skills" className="scroll-reveal mb-24">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Expertise Tagging</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">Core Tech Stack</h2>
        <p className="text-sm text-slate-550 dark:text-slate-400 mt-2">
          Click a technology tag to highlight the specific projects where I deployed that stack. Click again to clear.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <div key={category.name} className="glass border border-slate-200/40 dark:border-slate-800/40 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display font-semibold text-lg border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-4 text-slate-700 dark:text-slate-200">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const isSelected = selectedTech === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => setSelectedTech(isSelected ? null : skill)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-brand-500 border-brand-500 text-white shadow-sm shadow-brand-500/20"
                        : "bg-slate-100/50 dark:bg-slate-900/40 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedTech && (
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedTech(null)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200/40 dark:border-slate-800/40 cursor-pointer"
          >
            Clear Tech Tag Highlight: <span className="text-brand-500 underline">{selectedTech}</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
