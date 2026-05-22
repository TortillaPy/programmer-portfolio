import React from "react";

interface RecruiterPassProps {
  emailAddress: string;
  recruiterPitch: string;
  copiedEmail: boolean;
  copiedPitch: boolean;
  handleCopyEmail: () => void;
  handleCopyPitch: () => void;
}

export function RecruiterPass({
  emailAddress,
  recruiterPitch,
  copiedEmail,
  copiedPitch,
  handleCopyEmail,
  handleCopyPitch,
}: RecruiterPassProps) {
  return (
    <section id="recruiter-pass" className="scroll-reveal mb-24">
      <div className="glass border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[30%] aspect-square rounded-full bg-brand-500/5 blur-[50px] -z-10" />
        
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-8 pb-8 border-b border-slate-200/50 dark:border-slate-800/50">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Recruiter Quick Portal</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1">Recruiter Fast Pass</h2>
            <p className="text-sm text-slate-550 dark:text-slate-400 mt-2 max-w-xl">
              I am seeking a remote role in backend development. Copy my details below to share with your hiring team.
            </p>
          </div>

          {/* PDF Resume Download Link */}
          <a
            href="/Marco_Antonio_Bacchetta_CV.pdf"
            download="Marco_Antonio_Bacchetta_CV.pdf"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-brand-500 text-white font-medium hover:bg-brand-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-brand-500/10 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Copy Email & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Direct Email Address</span>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 hover:bg-slate-200/40 dark:hover:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 text-left transition-all group cursor-pointer"
              >
                <span className="font-mono font-medium text-sm sm:text-base text-slate-750 dark:text-slate-200">{emailAddress}</span>
                <span className="flex items-center gap-1.5 text-xs text-brand-500 font-semibold group-hover:scale-105 transition-all">
                  {copiedEmail ? (
                    <>
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2" />
                      </svg>
                      Copy
                    </>
                  )}
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-100/30 dark:bg-slate-900/30 border border-slate-200/30 dark:border-slate-800/30">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Target Role</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Backend Developer</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-100/30 dark:bg-slate-900/30 border border-slate-200/30 dark:border-slate-800/30">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Location</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Paraguay (Remote)</p>
              </div>
            </div>
          </div>

          {/* Quick Recruiter pitch copy */}
          <div className="lg:col-span-7 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Slack / Email Summary Pitch</span>
              <button
                onClick={handleCopyPitch}
                className="flex items-center gap-1.5 text-xs text-brand-500 font-semibold hover:text-brand-600 transition-colors cursor-pointer"
              >
                {copiedPitch ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Pitch Copied! 🎉
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Copy Recruiter Pitch
                  </>
                )}
              </button>
            </div>
            <div className="relative">
              <pre className="font-mono text-xs text-slate-650 dark:text-slate-300 p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 overflow-x-auto whitespace-pre-wrap select-all max-h-44 scrollbar-thin">
                {recruiterPitch}
              </pre>
              <div className="absolute bottom-2 right-2 px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-widest text-slate-400 bg-slate-200/60 dark:bg-slate-800/80 rounded-lg pointer-events-none">
                Markdown Format
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
