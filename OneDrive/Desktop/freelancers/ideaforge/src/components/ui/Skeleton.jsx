import styles from './Skeleton.module.css';

export default function Skeleton({ width, height, borderRadius, className = '' }) {
    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{ width, height, borderRadius }}
        />
    );
}

export function SkeletonBlock({ lines = 3, className = '' }) {
    return (
        <div className={`${styles.block} ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    height="14px"
                    width={i === lines - 1 ? '60%' : '100%'}
                />
            ))}
        </div>
    );
}
