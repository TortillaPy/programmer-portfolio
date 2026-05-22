import React from "react";

interface ContactProps {
  formSubmitted: boolean;
  formName: string;
  formEmail: string;
  formMessage: string;
  setFormName: (val: string) => void;
  setFormEmail: (val: string) => void;
  setFormMessage: (val: string) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export function Contact({
  formSubmitted,
  formName,
  formEmail,
  formMessage,
  setFormName,
  setFormEmail,
  setFormMessage,
  handleFormSubmit,
}: ContactProps) {
  return (
    <section id="contact" className="scroll-reveal mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 glass border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[40%] aspect-square rounded-full bg-accent-500/5 blur-[80px] -z-10" />

        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-500">Get in Touch</span>
            <h2 className="font-display text-3xl font-bold mt-1">Let&apos;s Connect</h2>
            <p className="text-sm text-slate-550 dark:text-slate-400 mt-3 leading-relaxed font-light">
              Are you looking for a remote backend engineer who can relocate? Reach out directly via the message portal or my email. I respond within 24 hours.
            </p>
          </div>

          {/* Social Connections */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-650 dark:text-slate-350">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/30 flex items-center justify-center text-slate-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm font-light">Available for US Relocation & Remote</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/TortillaPy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center text-slate-500 hover:text-brand-500 hover:scale-105 active:scale-95 transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marco-bacchetta-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center text-slate-500 hover:text-brand-500 hover:scale-105 active:scale-95 transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-wide mt-auto">
            marco.bacchetta.dev © 2026. Clean Architecture Design.
          </div>
        </div>

        {/* Visual Contact Form */}
        <div className="lg:col-span-7">
          {formSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center min-h-[300px] animate-pulse">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 scale-110">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-emerald-700 dark:text-emerald-400">Message Transmitted!</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400/80 mt-2 max-w-xs leading-relaxed">
                Thank you! The form simulation completed successfully. In production, this can be linked to Formspree or an API route.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="You Recruiter"
                    className="w-full p-3 text-sm rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 dark:text-slate-200"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full p-3 text-sm rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 dark:text-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Hi Marco, I saw your portfolio and would like to discuss a remote backend role..."
                  className="w-full p-3 text-sm rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 dark:text-slate-200 scrollbar-thin"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 font-semibold text-sm hover:bg-slate-850 dark:hover:bg-slate-50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
