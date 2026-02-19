import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Generated a complete startup blueprint in under 30 seconds. Incredible!",
        author: "Alex M.",
        role: "Startup Founder",
        initials: "AM",
    },
    {
        quote: "Perfect for students looking for project ideas with proper guidance.",
        author: "Sarah K.",
        role: "CS Student",
        initials: "SK",
    },
    {
        quote: "The roadmap feature alone saved me weeks of planning.",
        author: "David R.",
        role: "Software Engineer",
        initials: "DR",
    },
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <p className={styles.label}>LOVED BY DEVELOPERS</p>
            <h2 className={styles.title}>What our users are saying</h2>
            <div className={styles.grid}>
                {testimonials.map((t) => (
                    <div key={t.author} className={styles.card}>
                        <div className={styles.stars}>★★★★★</div>
                        <p className={styles.quote}>{t.quote}</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>{t.initials}</div>
                            <div>
                                <span className={styles.name}>{t.author}</span>
                                <span className={styles.role}>{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
