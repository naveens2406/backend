import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
    return (
        <div className={styles.bar}>
            <span className={styles.badge}>NEW</span>
            <span className={styles.text}>IdeaForge now supports 8 domains and 50+ languages</span>
            <a href="#features" className={styles.link}>
                Learn more →
            </a>
        </div>
    );
}
