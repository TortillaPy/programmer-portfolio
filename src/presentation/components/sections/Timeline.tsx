import React from "react";
import { Experience } from "@/domain/experience";

interface TimelineProps {
  experience: Experience[];
}

export function Timeline({ experience }: TimelineProps) {
  return (
    <section id="experience" className="scroll-reveal mb-24">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Career Trajectory</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">Professional Timeline</h2>
        <p className="text-sm text-slate-550 dark:text-slate-400 mt-2">
          An analytical transition combining rigorous logic, cultural adaptability, and tech milestones.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <article key={index} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute left-[-31px] md:left-[-47px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-500 bg-white dark:bg-slate-950 group-hover:scale-125 transition-transform duration-200" />

            <div className="glass border border-slate-200/40 dark:border-slate-800/40 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-brand-500 mt-0.5">{exp.company}</p>
                </div>
                <span className="px-3.5 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-900 rounded-full text-slate-550 dark:text-slate-400 self-start sm:self-center">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-light list-disc pl-4 marker:text-brand-500">
                {exp.highlights.map((highlight, hIdx) => {
                  const parts = highlight.split(/\*\*(.*?)\*\*/g);
                  return (
                    <li key={hIdx}>
                      {parts.map((part, pIdx) =>
                        pIdx % 2 === 1 ? (
                          <strong key={pIdx} className="font-semibold text-slate-800 dark:text-white">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
