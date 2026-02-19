import { useState } from 'react';
import styles from './Pricing.module.css';

const plans = [
    {
        name: 'FREE',
        price: '$0',
        period: '/month',
        features: [
            { text: '5 ideas per week', check: true },
            { text: 'All 8 domains', check: true },
            { text: 'Tech stack + features', check: true },
            { text: 'localStorage save (5 max)', check: true },
            { text: 'Roadmap & API design', check: false },
            { text: 'PDF export', check: false },
        ],
        cta: 'Get Started Free',
        featured: false,
    },
    {
        name: 'PRO',
        price: '$9',
        period: '/month',
        features: [
            { text: 'Unlimited ideas', check: true },
            { text: 'All 8 domains', check: true },
            { text: 'Full blueprint (all tabs)', check: true },
            { text: 'Unlimited saved ideas', check: true },
            { text: 'Roadmap & API design', check: true },
            { text: 'PDF & Markdown export', check: true },
        ],
        cta: 'Start Pro Trial',
        featured: true,
    },
    {
        name: 'INSTITUTION',
        price: '$49',
        period: '/month',
        features: [
            { text: 'Unlimited ideas', check: true },
            { text: 'All 8 domains', check: true },
            { text: 'Up to 100 users', check: true },
            { text: 'Admin dashboard', check: true },
            { text: 'Custom domains', check: true },
            { text: 'Priority support', check: true },
        ],
        cta: 'Contact Us',
        featured: false,
    },
];

export default function Pricing() {
    const [annual, setAnnual] = useState(true);

    return (
        <section className={styles.section} id="pricing">
            <h2 className={styles.title}>Simple, transparent pricing</h2>
            <div className={styles.toggle}>
                <button
                    className={`${styles.toggleBtn} ${!annual ? styles.toggleActive : ''}`}
                    onClick={() => setAnnual(false)}
                >
                    Monthly
                </button>
                <button
                    className={`${styles.toggleBtn} ${annual ? styles.toggleActive : ''}`}
                    onClick={() => setAnnual(true)}
                >
                    Annual <span className={styles.save}>Save 20%</span>
                </button>
            </div>
            <div className={styles.grid}>
                {plans.map((plan) => (
                    <div key={plan.name} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
                        {plan.featured && <div className={styles.badge}>MOST POPULAR</div>}
                        <p className={styles.planName}>{plan.name}</p>
                        <div className={styles.priceRow}>
                            <span className={styles.price}>{plan.price}</span>
                            <span className={styles.period}>{plan.period}</span>
                        </div>
                        <ul className={styles.features}>
                            {plan.features.map((f) => (
                                <li key={f.text} className={styles.feature}>
                                    <span className={styles.check}>{f.check ? '✓' : '—'}</span>
                                    {f.text}
                                </li>
                            ))}
                        </ul>
                        <button className={`${styles.cta} ${plan.featured ? styles.ctaFeatured : ''}`}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
