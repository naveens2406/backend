export const SYSTEM_PROMPT = `You are an expert software architect and project idea generator.`;

export function buildGenerationPrompt(config) {
    return `Generate a complete project blueprint based on:
- Domain: ${config.domain}
- Project Type: ${config.projectType}
- Skill Level: ${config.skillLevel}
- Keywords: ${config.keywords || 'None specified'}

Return a structured JSON object with:
{
  "title": "Project name",
  "tagline": "One line description",
  "problem": "Problem statement paragraph",
  "techStack": { "frontend": [{"name": "", "desc": ""}], "backend": [], "database": [], "auth": [], "devops": [], "ai": [] },
  "features": { "mvp": [{"title": "", "desc": ""}], "advanced": [], "niceToHave": [] },
  "roadmap": [
    { "phase": 1, "title": "Foundation", "duration": "2 weeks", "tasks": [] },
    { "phase": 2, "title": "Core Features", "duration": "4 weeks", "tasks": [] },
    { "phase": 3, "title": "Launch", "duration": "2 weeks", "tasks": [] }
  ],
  "complexity": { "frontend": 70, "backend": 60, "ai": 80, "overall": 70 },
  "apiEndpoints": [{"method": "GET", "path": "", "description": ""}]
}`;
}

export const BLUEPRINT_PROMPT_TEMPLATE = {
    title: 'string - Creative project name',
    tagline: 'string - One-line compelling description',
    problem: 'string - Clear problem statement explaining the need',
    techStack: {
        frontend: 'array of {name, desc}',
        backend: 'array of {name, desc}',
        database: 'array of {name, desc}',
        auth: 'array of {name, desc}',
        devops: 'array of {name, desc}',
        ai: 'array of {name, desc}'
    },
    features: {
        mvp: 'array of {title, desc} - core must-haves',
        advanced: 'array of {title, desc} - phase 2 additions',
        niceToHave: 'array of {title, desc} - stretch goals'
    },
    roadmap: 'array of {phase, title, duration, tasks}',
    complexity: '{frontend: 0-100, backend: 0-100, ai: 0-100, overall: 0-100}',
    apiEndpoints: 'array of {method, path, description}'
};

export const EXAMPLE_BLUEPRINT = {
    title: "PulseGuard: AI Health Companion",
    tagline: "Intelligent vital tracking and early warning system for elderly care",
    domain: "Health",
    level: "Intermediate",
    problem: "Elderly patients living alone often struggle to monitor their vital signs consistently, leading to delayed medical interventions. PulseGuard solves this by providing continuous monitoring and real-time alerts to caregivers.",
    techStack: {
        frontend: [
            { name: "React + Vite", desc: "For a high-performance, modern UI." },
            { name: "Tailwind CSS", desc: "For rapid, responsive styling." }
        ],
        backend: [
            { name: "Node.js (Express)", desc: "Scalable backend to handle vital data streams." }
        ],
        database: [
            { name: "PostgreSQL with Prisma", desc: "Relational data for users and vital history." }
        ],
        auth: [
            { name: "Firebase Auth", desc: "Secure OAuth and email authentication." }
        ],
        ai: [
            { name: "Claude API", desc: "Predictive analysis for vital trends and risk assessment." }
        ],
        devops: [
            { name: "Docker", desc: "Containerized deployment for consistency." }
        ]
    },
    features: {
        mvp: [
            { title: "Real-time Vital Dashboard", desc: "Live visualization of heart rate and SPO2 data." },
            { title: "Caregiver Notification System", desc: "Automated SMS/Email alerts for abnormal readings." }
        ],
        advanced: [
            { title: "AI Risk Prediction", desc: "ML-based forecasting of potential health issues." }
        ],
        niceToHave: [
            { title: "Hospital Integration", desc: "Direct data push to electronic health records." }
        ]
    },
    roadmap: [
        { phase: 1, title: "Foundation", duration: "2 weeks", tasks: ["Setup DB schema", "Basic Auth", "Vital simulation API"] },
        { phase: 2, title: "Core Features", duration: "4 weeks", tasks: ["Dashboard UI", "Alert engine", "AI model integration"] },
        { phase: 3, title: "Launch", duration: "2 weeks", tasks: ["Mobile optimization", "Testing", "Deployment"] }
    ],
    complexity: { frontend: 65, backend: 70, ai: 85, overall: 75 },
    apiEndpoints: [
        { method: "POST", path: "/vitals", description: "Record new vital signs" },
        { method: "GET", path: "/vitals/:userId", description: "Fetch history for a user" },
        { method: "POST", path: "/alerts", description: "Trigger manual caregiver alert" }
    ]
};
