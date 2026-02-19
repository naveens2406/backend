import { useEffect, useRef } from 'react';
import styles from './PageWrapper.module.css';

export default function PageWrapper({ children, className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            const sections = ref.current.querySelectorAll('[data-animate]');
            sections.forEach((el, i) => {
                el.style.animationDelay = `${i * 0.1}s`;
                observer.observe(el);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main ref={ref} className={`${styles.wrapper} ${className}`}>
            {children}
        </main>
    );
}
