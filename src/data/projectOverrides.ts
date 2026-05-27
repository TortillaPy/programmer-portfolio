export interface LocalProjectOverride {
  title?: string;
  category?: "frontend" | "backend" | "fullstack";
  challenge: string;
  outcome: string;
  tech?: string[];
}

export const LOCAL_PROJECT_OVERRIDES: Record<string, LocalProjectOverride> = {
  "baby-shower-registry": {
    title: "Baby Shower Gift Registry Application",
    category: "backend",
    challenge: "Improving data consistency across concurrent user requests by applying state validation and controlled update logic.",
    outcome: "Integrated Firebase for persistent data storage and authentication, enabling reliable, concurrent backend state management.",
    tech: ["TypeScript", "Node.js", "Express", "Firebase", "API Architecture"]
  },
  "task-tracker-cli": {
    title: "Task Tracker CLI",
    category: "backend",
    challenge: "Structuring persistent local storage while ensuring runtime safety by validating inputs and handling empty datasets.",
    outcome: "Implemented persistent local storage using native Node.js fs module, JSON serialization, strict typing, and robust error checking.",
    tech: ["TypeScript", "Node.js", "CLI Development", "JSON Persistence", "Git"]
  },
  "algorithmic-optimization": {
    title: "Algorithmic Optimization & API Challenges",
    category: "backend",
    challenge: "Solving classic logic challenges such as Trapping Rain Water, targeting O(N) efficiency and minimal auxiliary space.",
    outcome: "Translated abstract constraints into clean, testable, and maintainable server-side logic using two-pointer techniques.",
    tech: ["TypeScript", "JavaScript ES6+", "Algorithms", "Data Structures", "Complexity Optimization"]
  }
};
