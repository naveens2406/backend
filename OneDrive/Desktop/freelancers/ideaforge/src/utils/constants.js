export const DOMAINS = [
    'Health',
    'Fintech',
    'Education',
    'E-commerce',
    'Social',
    'Productivity',
    'Gaming',
    'Environment'
];

export const PROJECT_TYPES = [
    'Web App',
    'Mobile App',
    'CLI Tool',
    'API Service',
    'Chrome Extension',
    'AI Agent'
];

export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export const DEFAULT_PREFERENCES = {
    includeDbSchema: false,
    includeApiDesign: false,
    includeUiWireframe: false
};

export const COMPLEXITY_LABELS = {
    frontend: 'Frontend Complexity',
    backend: 'Backend Complexity',
    ai: 'AI Integration',
    overall: 'Overall Difficulty'
};

export const ROADMAP_PHASES = [
    { phase: 1, title: 'Foundation', defaultDuration: '2 weeks' },
    { phase: 2, title: 'Core Features', defaultDuration: '4 weeks' },
    { phase: 3, title: 'Launch', defaultDuration: '2 weeks' }
];

export const TECH_CATEGORIES = [
    'frontend',
    'backend',
    'database',
    'auth',
    'devops',
    'ai'
];

export const FEATURE_CATEGORIES = {
    mvp: { label: 'MVP Features', icon: '✓' },
    advanced: { label: 'Advanced Features', icon: '⚡' },
    niceToHave: { label: 'Nice to Have', icon: '💡' }
};

export const HTTP_METHODS = {
    GET: '#00e5a0',
    POST: '#6d59ff',
    PUT: '#ffb347',
    DELETE: '#ff4757',
    PATCH: '#00e5ff'
};

export const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    SAVED_IDEAS: 'saved_ideas',
    THEME: 'theme',
    USER_PREFERENCES: 'user_preferences'
};

export const MAX_GUEST_SAVES = 5;
export const MAX_TOKENS = 2048;
