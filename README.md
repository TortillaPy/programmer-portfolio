# Portfolio Landing Page — Clean Architecture Design

This developer portfolio landing page is designed using **Clean Architecture** principles to separate core domain logic and data structures from presentation UI and third-party bindings. It is built using **React 19**, **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🏛️ Architectural Layers

The codebase is organized into four main layers, ensuring modularity, easy testability, and a clear flow of dependencies.

```
src/
├── app/                  # Next.js App Router (Composition Root)
├── domain/               # Domain Entities (Pure TypeScript)
├── data/                 # Data Layer (Static datasets / implementations)
├── application/          # Application Logic (Custom hooks)
└── presentation/         # Presentation Layer (UI components & sections)
```

```
┌─────────────────────────────────────────────────────────┐
│                     App / App Router                    │
│                    (Composition Root)                   │
└────────────────────────────┬────────────────────────────┘
                             │ (Imports & hydrates)
                             ▼
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                   │
│               (React components & sections)             │
└──────────┬───────────────────────────────────┬──────────┘
           │ (Calls hooks)                     │ (Maps entities)
           ▼                                   ▼
┌──────────────────────┐             ┌────────────────────┐
│  Application Layer   │             │    Domain Layer    │
│    (Custom hooks)    │             │ (Types/Interfaces) │
└──────────────────────┘             └─────────▲──────────┘
                                               │ (Implements types)
                                     ┌─────────┴──────────┐
                                     │     Data Layer     │
                                     │ (Static Datasets)  │
                                     └────────────────────┘
```

### 1. Domain Layer (`src/domain/`)
- Contains **pure TypeScript types and interfaces** that model the core business logic of the portfolio.
- **No external dependencies** or framework imports are allowed here. It represents the structural contract of our application.
  - `project.ts`: Defines structure of a portfolio Project card.
  - `experience.ts`: Schema for career milestones and highlights.
  - `skill.ts`: Schema for technological stack items.

### 2. Data Layer (`src/data/`)
- Contains implementations of our domain schemas and acts as our local data store.
- If we later connect a database or CMS (like Firestore or Contentful), only this layer would need to change.
  - `projects.ts`: Mockups representing backend-oriented projects (NestJS, Express, Postgres).
  - `skills.ts`: Categorized tech stack definitions.
  - `experience.ts`: Timeline milestones focused on transition and quick learning.

### 3. Application Layer (`src/application/`)
- Encapsulates **business rules and side-effects** through custom React hooks.
- Keeps presentation components thin and focused purely on rendering UI.
  - `useTheme.ts`: Handles dark/light theme toggle, preferences sync, and FOUC prevention.
  - `useClipboard.ts`: Reusable copier logic for the recruiter fast pass buttons with timeout state management.

### 4. Presentation Layer (`src/presentation/`)
- Contains purely visual UI elements and modular sections.
- Elements in this layer are driven by configurations passed down from the composition root.
  - `components/ui/`: Atomic elements (ThemeToggle, GlowBackground, ProgressBar).
  - `components/sections/`: High-level semantic sections (Hero, RecruiterPass, Skills, Projects, Timeline, Contact).

### 5. Composition Root (`src/app/`)
- Next.js page components (`page.tsx` and `layout.tsx`) serve as the entry points where layers are instantiated, parameters are hydrated, and custom styles are applied.

---

## 🚀 Key Tailwind CSS v4 features
- Uses native `@import "tailwindcss"` in `src/app/globals.css`.
- Extends the theme block dynamically using native `oklch()` color tokens and animations defined inside `@theme`.
- Implements CSS Scroll-driven animations (`animation-timeline: scroll()`) to avoid heavy JavaScript event listeners.

---

## 🛠️ Commands
- **Development**: `npm run dev`
- **Build Static Export**: `npm run build` (outputs HTML/CSS files to `out/` ready for GitHub Pages hosting).
