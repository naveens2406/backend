import styles from './StatsRow.module.css';

const stats = [
    { value: '12,000+', label: 'Ideas Generated' },
    { value: '8', label: 'Domains' },
    { value: '3', label: 'Skill Levels' },
    { value: '50+', label: 'Languages' },
];

export default function StatsRow() {
    return (
        <div className={styles.row}>
            {stats.map((stat) => (
                <div key={stat.label} className={styles.card}>
                    <span className={styles.value}>{stat.value}</span>
                    <span className={styles.label}>{stat.label}</span>
                </div>
            ))}
        </div>
    );
}
