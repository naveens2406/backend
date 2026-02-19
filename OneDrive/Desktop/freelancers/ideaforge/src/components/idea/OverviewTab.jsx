import { Bookmark, Copy, Share2 } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import ComplexityMeter from './ComplexityMeter';
import styles from './OverviewTab.module.css';

export default function OverviewTab({ blueprint }) {
    const { title, tagline, problem, domain, level, complexity } = blueprint;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.tags}>
                    <Badge domain={domain}>{domain}</Badge>
                    <Badge variant="cyan" size="sm">{level}</Badge>
                </div>
                <div className={styles.actions}>
                    <Button variant="ghost" size="sm" className={styles.actionBtn}>
                        <Bookmark size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className={styles.actionBtn}>
                        <Copy size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className={styles.actionBtn}>
                        <Share2 size={16} />
                    </Button>
                </div>
            </div>

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.tagline}>{tagline}</p>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Problem Statement</h3>
                <p className={styles.text}>{problem}</p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Complexity Metrics</h3>
                <div className={styles.meters}>
                    <ComplexityMeter label="Frontend" value={complexity.frontend} />
                    <ComplexityMeter label="Backend" value={complexity.backend} />
                    <ComplexityMeter label="AI Integration" value={complexity.ai} />
                    <ComplexityMeter label="Overall Difficulty" value={complexity.overall} featured />
                </div>
            </div>
        </div>
    );
}
