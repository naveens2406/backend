import styles from './Toggle.module.css';

const options = [
    { id: 'beginner', label: '🌱 Beginner' },
    { id: 'intermediate', label: '⚡ Intermediate' },
    { id: 'advanced', label: '🔥 Advanced' },
];

export default function Toggle({ value, onChange }) {
    return (
        <div className={styles.toggle} role="group">
            {options.map((opt) => (
                <button
                    key={opt.id}
                    type="button"
                    className={`${styles.option} ${value === opt.id ? styles.active : ''}`}
                    onClick={() => onChange(opt.id)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}
