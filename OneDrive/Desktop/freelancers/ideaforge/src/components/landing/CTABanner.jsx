import styles from './CTABanner.module.css';

export default function CTABanner() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Start generating ideas today</h2>
            <p className={styles.subtitle}>Join thousands of developers building their next project</p>
            <div className={styles.form}>
                <input type="email" placeholder="Enter your email" className={styles.input} />
                <button className={styles.btn}>Get Started Free</button>
            </div>
            <p className={styles.note}>✓ Free plan available  ·  ✓ No credit card required</p>
        </section>
    );
}
