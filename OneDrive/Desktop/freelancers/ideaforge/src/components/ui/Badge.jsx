import styles from './Badge.module.css';

const domainColors = {
    health: '#00e5a0',
    fintech: '#ffb347',
    education: '#00e5ff',
    ecommerce: '#ff7e5f',
    social: '#a78bfa',
    productivity: '#6d59ff',
    gaming: '#f472b6',
    environment: '#4ade80',
};

export default function Badge({ children, variant = 'default', domain, size = 'sm' }) {
    const style = domain
        ? { '--badge-color': domainColors[domain.toLowerCase()] || 'var(--accent)' }
        : {};

    return (
        <span
            className={`${styles.badge} ${styles[variant]} ${styles[size]} ${domain ? styles.domain : ''}`}
            style={style}
        >
            {children}
        </span>
    );
}
