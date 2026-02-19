import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs, defaultTab, children }) {
    const [active, setActive] = useState(defaultTab || tabs[0]?.id);

    return (
        <div className={styles.wrapper}>
            <div className={styles.tabBar} role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        role="tab"
                        aria-selected={active === tab.id}
                        className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
                        onClick={() => setActive(tab.id)}
                    >
                        {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.content}>
                {typeof children === 'function' ? children(active) : children}
            </div>
        </div>
    );
}
