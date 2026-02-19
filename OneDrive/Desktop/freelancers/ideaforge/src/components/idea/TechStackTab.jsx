import Badge from '../ui/Badge';
import styles from './TechStackTab.module.css';

export default function TechStackTab({ blueprint }) {
    const { techStack } = blueprint;

    const categories = [
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'database', label: 'Database' },
        { key: 'auth', label: 'Authentication' },
        { key: 'ai', label: 'AI / ML' },
        { key: 'devops', label: 'DevOps' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {categories.map(({ key, label }) => {
                    const techs = techStack[key];
                    if (!techs || techs.length === 0) return null;

                    return (
                        <div key={key} className={styles.row}>
                            <div className={styles.category}>
                                <span className={styles.categoryLabel}>{label}</span>
                            </div>
                            <div className={styles.techs}>
                                {techs.map((tech) => (
                                    <div key={tech.name || tech} className={styles.techCard}>
                                        <Badge variant="default" size="sm">{tech.name || tech}</Badge>
                                        {(tech.description || tech.desc) && (
                                            <p className={styles.desc}>{tech.description || tech.desc}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
