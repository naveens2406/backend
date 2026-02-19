import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import ConfigPanel from '../components/generator/ConfigPanel';
import OutputPanel from '../components/generator/OutputPanel';
import styles from './Generate.module.css';

// Mock blueprint for UI testing
const mockBlueprint = {
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
            { title: "Hospital Integration", desc: "Direct data push to participant electronic health records." }
        ]
    },
    roadmap: [
        { phase: 1, title: "Foundation", duration: "2 weeks", tasks: ["Setup DB schema", "Basic Auth", "Vital simulation API"] },
        { phase: 2, title: "Core Features", duration: "4 weeks", tasks: ["Dashboard UI", "Alert engine", "AI model integration"] },
        { phase: 3, title: "Launch", duration: "2 weeks", tasks: ["Mobile optimization", "Rigorous testing", "Deployment"] }
    ],
    complexity: { frontend: 65, backend: 70, ai: 85, overall: 75 },
    apiEndpoints: [
        { method: "POST", path: "/vitals", description: "Record new vital signs" },
        { method: "GET", path: "/vitals/:userId", description: "Fetch history for a user" },
        { method: "POST", path: "/alerts", description: "Trigger manual caregiver alert" }
    ]
};

export default function Generate() {
    const [loading, setLoading] = useState(false);
    const [blueprint, setBlueprint] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const handleGenerate = (_config) => {
        setLoading(true);
        setBlueprint(null);

        // Simulate API delay
        setTimeout(() => {
            setBlueprint(mockBlueprint);
            setLoading(false);
        }, 2500);
    };

    return (
        <PageWrapper className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <ConfigPanel onGenerate={handleGenerate} loading={loading} />
                    </aside>

                    <main className={styles.output}>
                        <OutputPanel blueprint={blueprint} loading={loading} />
                    </main>
                </div>
            </div>
        </PageWrapper>
    );
}
