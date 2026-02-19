import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>IF</span>
                    <span className={styles.logoText}>IdeaForge</span>
                </Link>

                <ul className={styles.links}>
                    {['Features', 'How it Works', 'Pricing', 'Docs'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className={styles.link}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <button className={styles.ghostBtn}>Sign In</button>
                    <Link to="/generate" className={styles.gradientBtn}>
                        Get Started Free
                    </Link>
                </div>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {['Features', 'How it Works', 'Pricing', 'Docs'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className={styles.mobileLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className={styles.mobileActions}>
                        <button className={styles.ghostBtn}>Sign In</button>
                        <Link to="/generate" className={styles.gradientBtn}>
                            Get Started Free
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
