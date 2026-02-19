import styles from './DemoSection.module.css';

export default function DemoSection() {
    return (
        <section className={styles.section} id="demo">
            <h2 className={styles.title}>See it in action</h2>
            <p className={styles.subtitle}>Watch how IdeaForge generates a complete project blueprint</p>
            <div className={styles.videoCard}>
                <div className={styles.playBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
        </section>
    );
}
