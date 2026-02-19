import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    { q: 'What domains are supported?', a: 'We support 8 domains: Health, Fintech, Education, E-commerce, Social, Productivity, Gaming, and Environment.' },
    { q: 'How does the AI generate blueprints?', a: 'We use Claude AI to analyze your preferences and generate complete project blueprints including tech stack, features, roadmap, and API design.' },
    { q: 'Can I save and export my ideas?', a: 'Yes! Free users can save up to 5 ideas locally. Pro users get unlimited cloud saves and can export to PDF or Markdown.' },
    { q: 'What skill levels are available?', a: 'We support Beginner, Intermediate, and Advanced skill levels. Each level tailors the complexity and tech stack recommendations.' },
    { q: 'Is there a free plan?', a: 'Yes! Our free plan gives you 5 ideas per week with basic features. Upgrade to Pro for unlimited access.' },
    { q: 'Can I use this for academic projects?', a: 'Absolutely! Many students use IdeaForge to generate project ideas for coursework, hackathons, and portfolio projects.' },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Frequently asked questions</h2>
            <div className={styles.list}>
                {faqs.map((faq, i) => (
                    <div key={i} className={styles.item}>
                        <button
                            className={styles.question}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <span>{faq.q}</span>
                            <span className={`${styles.arrow} ${open === i ? styles.arrowOpen : ''}`}>↓</span>
                        </button>
                        {open === i && (
                            <p className={styles.answer}>{faq.a}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
