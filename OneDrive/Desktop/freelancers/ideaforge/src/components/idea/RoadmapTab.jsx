import styles from './RoadmapTab.module.css';

export default function RoadmapTab({ blueprint }) {
    const { roadmap } = blueprint;

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {roadmap.map((phase) => (
                    <div key={phase.phase} className={styles.card}>
                        <div className={styles.header}>
                            <span className={styles.phaseLabel}>Phase {phase.phase}</span>
                            <span className={styles.duration}>{phase.duration}</span>
                        </div>
                        <h3 className={styles.title}>{phase.title}</h3>
                        <ul className={styles.tasks}>
                            {phase.tasks.map((task, i) => (
                                <li key={i} className={styles.task}>
                                    <span className={styles.bullet}>•</span>
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
