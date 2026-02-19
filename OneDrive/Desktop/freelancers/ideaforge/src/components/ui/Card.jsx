import styles from './Card.module.css';

export default function Card({ children, className = '', hover = true, topBorder = true, ...props }) {
    return (
        <div
            className={`${styles.card} ${hover ? styles.hover : ''} ${topBorder ? styles.topBorder : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
