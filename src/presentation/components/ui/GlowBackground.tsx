import React from "react";

export function GlowBackground() {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none -z-10 h-[800px]">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-600/15 animate-glow" />
      <div className="absolute top-[30%] right-[-10%] w-[45%] aspect-square rounded-full bg-accent-500/10 blur-[120px] dark:bg-accent-600/15 animate-glow" />
    </div>
  );
}
