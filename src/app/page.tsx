"use client";

import React, { useState, useEffect } from "react";

// Layer Imports: Domain (Entities) & Data
import { PROJECTS } from "@/data/projects";
import { EXPERIENCE } from "@/data/experience";
import { SKILL_CATEGORIES } from "@/data/skills";

// Layer Imports: Application Logic (Custom Hooks)
import { useClipboard } from "@/application/useClipboard";

// Layer Imports: Presentation (UI components & sections)
import { GlowBackground } from "@/presentation/components/ui/GlowBackground";
import { ProgressBar } from "@/presentation/components/ui/ProgressBar";
import { Hero } from "@/presentation/components/sections/Hero";
import { RecruiterPass } from "@/presentation/components/sections/RecruiterPass";
import { Skills } from "@/presentation/components/sections/Skills";
import { Projects } from "@/presentation/components/sections/Projects";
import { Timeline } from "@/presentation/components/sections/Timeline";
import { Contact } from "@/presentation/components/sections/Contact";

export default function Home() {
  // Mounting & Clipboard states
  const [mounted, setMounted] = useState(false);
  const { isCopied: copiedEmail, copy: copyEmail } = useClipboard();
  const { isCopied: copiedPitch, copy: copyPitch } = useClipboard(2500);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Layout presentation states
  const [activeTab, setActiveTab] = useState<"all" | "backend">("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Form mockup states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const emailAddress = "marcobacchetta95@gmail.com";
  const recruiterPitch = `Hi team,

I wanted to share Marco Antonio Bacchetta Villalba's profile:
- Role: Entry-Level Backend Developer (TypeScript | Node.js | API Architecture)
- Background: Former Legal Professional / Attorney (bringing analytical precision, compliance awareness, and structured problem-solving)
- Preferences: Remote / Located in Paraguay
- Technical Projects: Baby Shower Gift Registry, Task Tracker CLI, Algorithmic Optimization & API Challenges
- Portfolio: https://github.com/TortillaPy
- Contact: ${emailAddress}

Let me know if you would like to schedule a call!`;

  // Scroll Animations Fallback
  useEffect(() => {
    if (!mounted) return;

    const supportsScrollTimeline = window.CSS && CSS.supports("(animation-timeline: view()) and (animation-range: entry)");
    if (!supportsScrollTimeline) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [mounted]);

  // Shrinking Header Fallback
  useEffect(() => {
    const hasScrollRange = window.CSS && CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");
    if (hasScrollRange) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const header = document.querySelector("header.sticky-header");
      if (header) {
        const scrollPercent = Math.min(1, scrolled / 100);
        const initialHeight = 88; // h-22
        const finalHeight = 60;   // h-15
        const newHeight = initialHeight - (initialHeight - finalHeight) * scrollPercent;
        (header as HTMLElement).style.height = `${newHeight}px`;

        if (scrolled > 10) {
          header.classList.add("glass", "shadow-md", "border-slate-800/50");
          header.classList.remove("bg-transparent", "border-transparent");
        } else {
          header.classList.remove("glass", "shadow-md", "border-slate-800/50");
          header.classList.add("bg-transparent", "border-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    }, 4000);
  };

  return (
    <div className="min-h-screen relative text-slate-100 font-sans selection:bg-brand-500/20">
      {/* Background Glows Layer */}
      <GlowBackground />

      {/* Reading Progress Layer */}
      <ProgressBar />

      {/* Header layout */}
      <header className="sticky-header fixed top-0 left-0 right-0 h-22 flex items-center justify-between px-6 md:px-12 z-40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-brand-500 animate-ping absolute" />
          <span className="h-3 w-3 rounded-full bg-brand-500 relative" />
          <span className="font-display font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">
            marco.bacchetta.dev
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-350">
          <a href="#about" className="hover:text-brand-200 transition-colors">About</a>
          <a href="#recruiter-pass" className="hover:text-brand-200 transition-colors">Fast Pass</a>
          <a href="#skills" className="hover:text-brand-200 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-brand-200 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-brand-200 transition-colors">Timeline</a>
          <a href="#contact" className="hover:text-brand-200 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Quick CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-xl bg-white text-slate-950 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Hire Marco
          </a>
        </div>
      </header>

      {/* Composition Sections */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-20">
        {/* Hero Banner Section */}
        <Hero />

        {/* Recruiter Fast Action Portal */}
        <RecruiterPass
          emailAddress={emailAddress}
          recruiterPitch={recruiterPitch}
          copiedEmail={copiedEmail}
          copiedPitch={copiedPitch}
          handleCopyEmail={() => copyEmail(emailAddress)}
          handleCopyPitch={() => copyPitch(recruiterPitch)}
        />

        {/* Skills tagging grid */}
        <Skills
          categories={SKILL_CATEGORIES}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

        {/* Feature Projects Cards */}
        <Projects
          projects={PROJECTS}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Experience Timeline */}
        <Timeline experience={EXPERIENCE} />

        {/* Contact form simulation */}
        <Contact
          formSubmitted={formSubmitted}
          formName={formName}
          formEmail={formEmail}
          formMessage={formMessage}
          setFormName={setFormName}
          setFormEmail={setFormEmail}
          setFormMessage={setFormMessage}
          handleFormSubmit={handleFormSubmit}
        />
      </main>
    </div>
  );
}
