import { Terminal } from 'lucide-react';
import styles from './EmptyState.module.css';

export default function EmptyState() {
    return (
        <div className={styles.container}>
            <div className={styles.dashedBox}>
                <div className={styles.glow} />
                <Terminal size={40} className={styles.icon} />
            </div>
            <h3 className={styles.title}>Ready to Generate</h3>
            <p className={styles.text}>
                Configure your preferences in the left panel and click
                <strong> Generate Blueprint</strong> to start crafting your next project.
            </p>
        </div>
    );
}
