import styles from './Footer.module.css';

const links = {
    PRODUCT: ['Features', 'How it Works', 'Pricing', 'Changelog', 'Roadmap'],
    DEVELOPERS: ['Docs', 'API', 'Examples', 'Status'],
    COMPANY: ['About', 'Blog', 'Careers', 'Contact'],
    LEGAL: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>IF</span>
                        <span className={styles.logoText}>IdeaForge</span>
                    </div>
                    <p className={styles.tagline}>
                        AI-powered project idea generator for students and startups.
                    </p>
                    <div className={styles.social}>
                        {['GitHub', 'Twitter', 'LinkedIn', 'YouTube'].map((s) => (
                            <a key={s} href="#" className={styles.socialBtn}>
                                {s[0]}
                            </a>
                        ))}
                    </div>
                </div>
                {Object.entries(links).map(([category, items]) => (
                    <div key={category} className={styles.col}>
                        <h4 className={styles.colTitle}>{category}</h4>
                        <ul className={styles.colList}>
                            {items.map((item) => (
                                <li key={item}>
                                    <a href="#" className={styles.colLink}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={styles.bottom}>
                <span>© 2024 IdeaForge. All rights reserved.</span>
                <span>Made with ♥</span>
            </div>
        </footer>
    );
}
