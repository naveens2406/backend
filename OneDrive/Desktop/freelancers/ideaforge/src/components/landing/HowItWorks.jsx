import { useState } from 'react';
import styles from './HowItWorks.module.css';

const steps = [
    { num: '1', title: 'Choose Domain & Skill Level', desc: 'Select your target domain and skill level. Add optional keywords to focus your idea.' },
    { num: '2', title: 'AI Generates Full Blueprint', desc: 'Claude AI instantly generates a complete project blueprint with tech stack, features, and roadmap.' },
    { num: '3', title: 'Save, Export & Build', desc: 'Bookmark ideas, export to PDF or Markdown, and start building your next big project.' },
];

export default function HowItWorks() {
    const [active, setActive] = useState(0);

    return (
        <section className={styles.section} id="how-it-works">
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.label}>// HOW IT WORKS</p>
                    <h2 className={styles.title}>From idea to blueprint in seconds</h2>
                    <div className={styles.steps}>
                        {steps.map((step, i) => (
                            <div
                                key={step.num}
                                className={`${styles.step} ${active === i ? styles.stepActive : ''}`}
                                onMouseEnter={() => setActive(i)}
                            >
                                <span className={styles.stepNum}>{step.num}</span>
                                <div>
                                    <h4 className={styles.stepTitle}>{step.title}</h4>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <span>IdeaForge Generator</span>
                        </div>
                        <div className={styles.terminalBody}>
                            <p className={styles.line}>
                                <span className={styles.prompt}>$</span> Select domain: <span className={styles.variable}>Health</span>
                            </p>
                            <p className={styles.line}>
                                <span className={styles.prompt}>$</span> Skill level: <span className={styles.variable}>Intermediate</span>
                            </p>
                            <p className={styles.line}>
                                <span className={styles.success}>✓</span> Analyzing domain patterns...
                            </p>
                            <p className={styles.line}>
                                <span className={styles.success}>✓</span> Generating tech stack...
                            </p>
                            <p className={styles.line}>
                                <span className={styles.success}>✓</span> Building roadmap...
                            </p>
                            <p className={styles.line}>
                                <span className={styles.info}>→</span> Blueprint ready!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
