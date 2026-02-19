import styles from './FeaturesGrid.module.css';

const features = [
    { icon: '🎯', title: 'Domain-Based Generation', desc: 'Choose from 8 domains: Health, Fintech, Education, E-commerce, Social, Productivity, Gaming, and Environment.', color: 'rgba(155, 89, 255, 0.15)' },
    { icon: '⚡', title: 'Instant Tech Stack', desc: 'Get a complete, opinionated tech stack recommendation tailored to your skill level and project type.', color: 'rgba(59, 130, 255, 0.15)' },
    { icon: '🗺️', title: 'Implementation Roadmap', desc: 'Three-phase roadmap with concrete milestones, tasks, and timelines to guide your build.', color: 'rgba(0, 232, 135, 0.15)' },
    { icon: '💾', title: 'Save & Bookmark', desc: 'Bookmark your favorite blueprints and access them anytime. Export to PDF or Markdown.', color: 'rgba(255, 51, 102, 0.15)' },
    { icon: '📊', title: 'Complexity Meter', desc: 'Visual complexity ratings for Frontend, Backend, AI, and overall difficulty to help you plan.', color: 'rgba(255, 140, 66, 0.15)' },
    { icon: '🔒', title: 'Auth & User Profiles', desc: 'Sign in with Google or Email. Sync your saved ideas across devices securely.', color: 'rgba(0, 212, 255, 0.15)' },
];

export default function FeaturesGrid() {
    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <p className={styles.label}>// FEATURES</p>
                <h2 className={styles.title}>Everything you need to start building</h2>
                <p className={styles.subtitle}>
                    From smart autocomplete to fully autonomous coding tasks
                </p>
                <div className={styles.grid}>
                    {features.map((f) => (
                        <div key={f.title} className={styles.card}>
                            <span className={styles.icon} style={{ background: f.color }}>{f.icon}</span>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
