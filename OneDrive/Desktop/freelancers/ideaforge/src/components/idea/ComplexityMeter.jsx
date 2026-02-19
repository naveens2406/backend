import styles from './ComplexityMeter.module.css';

export default function ComplexityMeter({ label, value, featured = false }) {
    return (
        <div className={`${styles.meter} ${featured ? styles.featured : ''}`}>
            <div className={styles.info}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}%</span>
            </div>
            <div className={styles.track}>
                <div
                    className={styles.fill}
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}
