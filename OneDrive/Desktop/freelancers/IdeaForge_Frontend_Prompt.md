# IdeaForge — AI Project Idea Generator
## Complete Frontend Developer Prompt

---

> **You are a senior frontend developer. Build a fully responsive, production-grade React.js web application called "IdeaForge" — an AI-powered project idea generator for students and startups. The design must match the aesthetic of JetBrains Junie website: dark-themed, developer-focused, ultra-clean, premium, and modern with subtle grid backgrounds, glowing accent colors, and monospace + sans-serif font pairing.**

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0d0d11` | Main background |
| `--bg-secondary` | `#13131a` | Section backgrounds |
| `--bg-card` | `#18181f` | Card backgrounds |
| `--bg-card-hover` | `#1e1e28` | Card hover state |
| `--accent` | `#6d59ff` | Primary accent (Purple) |
| `--accent-2` | `#00e5ff` | Secondary accent (Cyan) |
| `--success` | `#00e5a0` | Success / checkmarks |
| `--warning` | `#ffb347` | Warning states |
| `--text-primary` | `#f0f0f5` | Main text |
| `--text-secondary` | `#8888aa` | Subtext |
| `--text-muted` | `#44445a` | Placeholder / labels |
| `--border` | `rgba(255,255,255,0.07)` | Default borders |
| `--border-active` | `rgba(109,89,255,0.5)` | Focused/active borders |

### Typography

| Role | Font | Weights |
|---|---|---|
| Display / Code / Labels | `JetBrains Mono` | 300, 400, 500, 700 |
| Body / UI / Headings | `Space Grotesk` | 300, 400, 500, 600, 700 |

> Load both from Google Fonts. Never use Inter, Roboto, or system fonts.

### Visual Effects (Apply Globally)

- **Background:** Subtle CSS line grid using `linear-gradient` repeating at `40px × 40px` in `rgba(109,89,255,0.03)`
- **Noise Texture:** SVG `feTurbulence` filter overlay at `4% opacity` fixed position
- **Glow:** Radial gradient glows `rgba(109,89,255,0.12)` behind hero and key sections
- **Glassmorphism Nav:** `backdrop-filter: blur(20px)` + `background: rgba(13,13,17,0.85)`
- **Card Top Border:** 1px gradient line `transparent → accent → transparent` on every panel
- **Hover State:** `transform: translateY(-2px)` + `box-shadow: 0 8px 32px rgba(109,89,255,0.3)`
- **Buttons:** Shimmer `::before` overlay on hover using `linear-gradient(rgba(255,255,255,0.1), transparent)`

---

## 🧭 Pages & Routing

Use **React Router v6**. Build the following routes:

| Route | Page |
|---|---|
| `/` | Landing Page |
| `/generate` | Main Generator App |
| `/saved` | Saved & Bookmarked Ideas |
| `/idea/:id` | Full Blueprint Detail View |

---

## 📄 Page-by-Page Breakdown

---

### 1. Landing Page — `/`

#### Navbar (Fixed, Glassmorphism)

- **Left:** Logo icon (gradient square) + `IdeaForge` in JetBrains Mono bold
- **Center:** Nav links — `Features`, `How It Works`, `Pricing`, `Docs`
- **Right:** `Sign In` ghost button + `Get Started Free` primary accent button
- On scroll: add subtle bottom border + darken background via JS scroll listener

#### Hero Section

- Animated badge: `● Powered by Claude AI` — pulsing dot, accent border, monospace font
- **H1:** ~80px, letter-spacing `-0.04em`, weight 700
  - Example: *"Turn Ideas Into Blueprints Instantly"*
  - Apply `gradient-text` class to key phrase using `background-clip: text`
- **Subheading:** 18px, `var(--text-secondary)`, max-width `580px`, line-height `1.7`
- **CTAs:** `Generate Your First Idea →` (primary) + `View Example` (ghost)
- **Background:** Radial glow + animated CSS grid
- **Stats Row** below CTAs (monospace numbers):
  - `12,000+` Ideas Generated
  - `8` Domains
  - `3` Skill Levels

#### How It Works Section

- Section label: `// HOW IT WORKS` in JetBrains Mono, uppercase, accent color
- 3-step horizontal flow with dark cards connected by dashed arrows:
  1. Choose Domain & Skill Level
  2. AI Generates Full Blueprint
  3. Save, Export & Build
- Each card: number badge, icon, title, description

#### Features Grid (3 × 2)

- Section label: `// FEATURES`
- Six feature cards with icon + title + description:
  - 🎯 Domain-Based Generation
  - ⚡ Instant Tech Stack
  - 🗺️ Implementation Roadmap
  - 💾 Save & Bookmark
  - 📊 Complexity Meter
  - 🔒 Auth & User Profiles

#### Pricing Section

- 3 columns: `Free` / `Pro` / `Institution`
- **Featured (Pro):** accent border + `MOST POPULAR` tab badge at top
- Large bold price, period label, feature list with `✓` / `—` indicators
- CTA button per card

#### Footer

- Left: Logo + tagline + `© 2024 IdeaForge` in JetBrains Mono
- Right: Navigation links grouped by category (Product, Docs, Company)

---

### 2. Generator Page — `/generate`

#### Layout

Two-column layout: `380px` fixed sidebar + fluid output panel

---

#### Left Panel — Input Controls

Panel title: `⚙ Configuration`

**Form Fields:**

1. **Domain** (Select dropdown)
   - Options: Health, Fintech, Education, E-commerce, Social, Productivity, Gaming, Environment

2. **Project Type** (Select dropdown)
   - Options: Web App, Mobile App, CLI Tool, API Service, Chrome Extension, AI Agent

3. **Skill Level** (Segmented Toggle — 3 buttons)
   - `🌱 Beginner` | `⚡ Intermediate` | `🔥 Advanced`
   - Active state: accent background + border

4. **Keywords / Focus Area** (Text input, optional)
   - Placeholder: `e.g. real-time collaboration, maps integration...`

5. **Output Preferences** (Checkboxes)
   - ☐ Include Database Schema
   - ☐ Include API Design
   - ☐ Include UI Wireframe Description

**Generate Button:**
- Full width, gradient background (`#6d59ff → #5040dd`)
- Label: `✦ Generate Blueprint`
- Loading state: spinner replaces text, `cursor: not-allowed`, reduced opacity
- `box-shadow: 0 4px 24px rgba(109,89,255,0.3)`

**Token Counter** (below button):
- `font-family: JetBrains Mono`
- `Tokens used: 0 / 2,048`

---

#### Right Panel — Output Area

**Empty State:**
- Centered icon in accent-glow box
- Heading: `Ready to Generate`
- Subtext: `Configure your preferences and click Generate`
- Subtle dashed border animation on container

**Loading State:**
- Pulsing skeleton loaders in place of all content blocks
- Use CSS `@keyframes pulse` for shimmer effect

**Generated Output (Tabbed Interface):**

Tab bar in JetBrains Mono:
`Overview` | `Tech Stack` | `Features` | `Roadmap` | `API Design`

---

##### Overview Tab

- **Tags row:** domain tag (cyan), level tag (green)
- **Project Title:** 26px, weight 700, letter-spacing `-0.02em`
- **Problem Statement:** 14px body text, `var(--text-secondary)`
- **Complexity Meters** (animated progress bars on mount):
  - Frontend Complexity
  - Backend Complexity
  - AI Integration
  - Overall Difficulty
  - Each: label (monospace) + bar + percentage value
- **Action buttons:** Bookmark icon + Copy icon + Share icon

---

##### Tech Stack Tab

Grouped rows with category labels:

| Category | Example |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Database | PostgreSQL, Prisma ORM |
| Auth | Firebase Auth / JWT |
| DevOps | Docker, GitHub Actions |
| AI / ML | Claude API, LangChain |

Each item: tech badge in monospace (accent background) + short description

---

##### Features Tab

Three lists:
- **MVP Features** — core must-haves with `✓` and title + description
- **Advanced Features** — phase 2 additions
- **Nice to Have** — stretch goals

---

##### Roadmap Tab

3 phase cards displayed side-by-side:

| Phase 1 | Phase 2 | Phase 3 |
|---|---|---|
| Foundation | Core Features | Launch |
| Setup, Auth, DB | Main logic, AI, UI | Testing, Deploy, Marketing |

Each phase: accent label, title, bulleted task list

---

##### API Design Tab

- Dark code block with monospace font
- Syntax-colored REST endpoint list
- Copy code button (top-right of block)

Example output format:
```
POST   /api/generate        Generate new idea blueprint
GET    /api/ideas           Fetch all saved ideas
POST   /api/ideas           Save an idea
DELETE /api/ideas/:id       Delete a saved idea
GET    /api/ideas/:id       Get blueprint detail
```

---

### 3. Saved Ideas Page — `/saved`

- Page header: `// SAVED BLUEPRINTS` with count badge (e.g. `12`)
- **Filter bar:** `All` / `By Domain` / `By Level` (pill toggle buttons)
- **Ideas Grid** (auto-fill, min `280px` per card):
  - Domain + level tags
  - Project title (bold)
  - 2-line description
  - Tech stack pill row
  - Bottom: date saved + filled bookmark icon + open arrow
  - Top 2px gradient border on hover (domain-specific color)
- **Empty state** if no saved ideas: icon + message + CTA to generate

---

### 4. Blueprint Detail Page — `/idea/:id`

- Full-width layout with **sticky sidebar TOC** on right
- Sections rendered as full blocks:
  - Overview
  - Problem Statement
  - Tech Stack
  - Features
  - Roadmap
  - API Design
  - Export Options
- **Export buttons:**
  - `Download as PDF`
  - `Copy Markdown`
  - `Share Link`
- **Related Ideas** section at bottom (3 idea cards)

---

## 🔌 API Integration

### Backend (Node.js + Express)

```
POST   /api/generate         Body: { domain, projectType, skillLevel, keywords, preferences }
                             Returns: streaming JSON blueprint
GET    /api/ideas            Returns: array of saved ideas (auth required)
POST   /api/ideas            Body: { blueprint }  → saves idea
DELETE /api/ideas/:id        Deletes a saved idea
GET    /api/ideas/:id        Returns full blueprint detail
```

### Frontend Integration Rules

- Use `axios` with a base instance pointing to `http://localhost:5000`
- Handle streaming response via `fetch` + `ReadableStream` API
- Update UI token-by-token using `useState` + streaming decoder
- Global error handling with `react-hot-toast` notifications
- Wrap all API calls in `try/catch` with user-friendly error messages

---

## 🧩 React Component Architecture

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── Card.jsx
│   │   ├── Tabs.jsx
│   │   ├── Toggle.jsx
│   │   ├── Spinner.jsx
│   │   ├── Skeleton.jsx
│   │   └── Tooltip.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   └── PageWrapper.jsx
│   ├── generator/
│   │   ├── ConfigPanel.jsx
│   │   ├── OutputPanel.jsx
│   │   ├── SkillSelector.jsx
│   │   ├── DomainSelect.jsx
│   │   ├── TokenCounter.jsx
│   │   └── EmptyState.jsx
│   ├── idea/
│   │   ├── IdeaCard.jsx
│   │   ├── TechStackTab.jsx
│   │   ├── FeatureListTab.jsx
│   │   ├── RoadmapTab.jsx
│   │   ├── ApiDesignTab.jsx
│   │   ├── ComplexityMeter.jsx
│   │   └── OverviewTab.jsx
│   └── landing/
│       ├── Hero.jsx
│       ├── HowItWorks.jsx
│       ├── FeaturesGrid.jsx
│       └── Pricing.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Generate.jsx
│   ├── Saved.jsx
│   └── IdeaDetail.jsx
├── hooks/
│   ├── useGenerate.js
│   ├── useSavedIdeas.js
│   ├── useAuth.js
│   └── useStream.js
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── api/
│   ├── axiosInstance.js
│   ├── generateAPI.js
│   └── ideasAPI.js
├── utils/
│   ├── formatters.js
│   ├── constants.js
│   └── prompts.js
└── styles/
    ├── globals.css
    ├── variables.css
    └── animations.css
```

---

## ⚙️ State Management

- **Global:** React Context + `useReducer` (no Redux)
- **Local:** `useState` / `useEffect` per component
- **Custom Hooks:**
  - `useGenerate()` — handles API call + loading + error
  - `useStream()` — handles ReadableStream token-by-token updates
  - `useSavedIdeas()` — CRUD for saved blueprints
- **Persistence:** `localStorage` fallback if user is not authenticated

---

## 🎞️ Animations & Micro-interactions

| Element | Animation |
|---|---|
| Page load | `fadeUp` stagger with `animation-delay` per section |
| Cards entering viewport | Scroll-triggered `fadeUp` with `IntersectionObserver` |
| Generate button | Shimmer `::before` sweep on hover |
| Output reveal | Typewriter streaming effect (character by character) |
| Complexity bars | Animated width fill on tab mount (0% → actual%) |
| All cards | `translateY(-2px)` + glow box-shadow on hover |
| Navbar | Smooth border + background appear on scroll |
| Skill toggle buttons | Slide + fade active indicator |
| Loading skeleton | CSS `@keyframes` shimmer left-to-right |

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 1280px` Desktop | Full two-column generator layout |
| `1024px – 1280px` Laptop | Narrower columns, tighter padding |
| `768px – 1024px` Tablet | Stack generator to single column, collapsible config panel |
| `< 768px` Mobile | Full mobile layout, hamburger nav, bottom sheet for config panel |

---

## 🛠️ Tech Stack (Exact)

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | CSS Modules + CSS Variables (no Tailwind) |
| HTTP Client | Axios |
| Streaming | Fetch `ReadableStream` API |
| Notifications | `react-hot-toast` |
| Icons | `lucide-react` |
| Fonts | Google Fonts — JetBrains Mono + Space Grotesk |
| Auth (UI) | Firebase Auth (Google + Email/Password) |
| Backend | Node.js + Express |
| AI | Anthropic Claude API (structured prompting) |

---

## 🔐 Authentication Flow

- Firebase Auth for login/signup
- Google OAuth + Email/Password provider
- On login: store `uid` + `token` in AuthContext
- Protected routes: redirect to `/` if not authenticated
- Guest mode: allow generation with `localStorage` save (limit 5/week)

---

## 📦 Package Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0",
    "axios": "^1.6.0",
    "react-hot-toast": "^2.4.0",
    "lucide-react": "^0.263.0",
    "firebase": "^10.0.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}
```

---

## 📝 Claude API Prompt Structure

Use this structured prompt template when calling Claude from the backend:

```
You are an expert software architect and project idea generator.

Generate a complete project blueprint based on:
- Domain: {domain}
- Project Type: {projectType}
- Skill Level: {skillLevel}
- Keywords: {keywords}

Return a structured JSON object with:
{
  "title": "Project name",
  "tagline": "One line description",
  "problem": "Problem statement paragraph",
  "techStack": { "frontend": [], "backend": [], "database": [], "auth": [], "devops": [], "ai": [] },
  "features": { "mvp": [], "advanced": [], "niceToHave": [] },
  "roadmap": [
    { "phase": 1, "title": "Foundation", "duration": "2 weeks", "tasks": [] },
    { "phase": 2, "title": "Core Features", "duration": "4 weeks", "tasks": [] },
    { "phase": 3, "title": "Launch", "duration": "2 weeks", "tasks": [] }
  ],
  "complexity": { "frontend": 70, "backend": 60, "ai": 80, "overall": 70 },
  "apiEndpoints": []
}
```

---

## ✅ Deliverables Checklist

- [ ] All 4 pages built and routable
- [ ] Responsive at all 4 breakpoints
- [ ] Dark JetBrains-inspired design system implemented
- [ ] Generator with real Claude API streaming output
- [ ] All 5 output tabs functional (Overview, Tech Stack, Features, Roadmap, API)
- [ ] Bookmark / save functionality with localStorage fallback
- [ ] Firebase Auth integration (Google + Email)
- [ ] Complexity meter bars animated
- [ ] Loading skeletons and empty states on all panels
- [ ] Toast notifications for all async actions
- [ ] Animations: page load stagger, hover states, tab transitions
- [ ] Pricing section on landing page
- [ ] Mobile hamburger nav + bottom sheet config panel
- [ ] Code block in API Design tab with copy button

---

> **Every UI element must feel like it belongs on a premium developer tool website — precise, intentional, and professional. No generic AI aesthetics. Think JetBrains, Vercel, Linear.**
