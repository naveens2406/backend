import { CheckCircle2, ChevronRight, Star } from 'lucide-react';
import styles from './FeatureListTab.module.css';

export default function FeatureListTab({ blueprint }) {
    const { features } = blueprint;

    const sections = [
        { key: 'mvp', label: 'MVP Features', icon: <CheckCircle2 size={16} />, color: 'var(--success)' },
        { key: 'advanced', label: 'Advanced Features', icon: <ChevronRight size={16} />, color: 'var(--accent)' },
        { key: 'niceToHave', label: 'Nice to Have', icon: <Star size={16} />, color: 'var(--accent-2)' },
    ];

    return (
        <div className={styles.container}>
            {sections.map(({ key, label, icon, color }) => {
                const list = features[key];
                if (!list || list.length === 0) return null;

                return (
                    <div key={key} className={styles.section}>
                        <div className={styles.sectionHeader} style={{ color }}>
                            {icon}
                            <h3 className={styles.sectionTitle}>{label}</h3>
                        </div>
                        <div className={styles.list}>
                            {list.map((feature, i) => (
                                <div key={i} className={styles.item}>
                                    <h4 className={styles.itemTitle}>{feature.title || feature}</h4>
                                    {(feature.description || feature.desc) && (
                                        <p className={styles.itemDesc}>{feature.description || feature.desc}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
