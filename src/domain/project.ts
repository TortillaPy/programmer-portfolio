export interface Project {
  id: number;
  title: string;
  category: "frontend" | "backend" | "fullstack";
  description: string;
  challenge: string;
  outcome: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
}
