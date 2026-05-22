import React, { useEffect } from "react";

export function ProgressBar() {
  useEffect(() => {
    const hasScrollTimeline = window.CSS && CSS.supports("animation-timeline", "scroll()");
    if (hasScrollTimeline) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercentage = scrollable > 0 ? scrolled / scrollable : 0;
      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progressPercentage})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="progress-bar"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 origin-left scale-x-0 z-50 transition-transform duration-75"
    />
  );
}
