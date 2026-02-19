import styles from './LogosBand.module.css';

const companies = ['Universities', 'Bootcamps', 'Startups', 'Hackathons', 'Students', 'Developers'];

export default function LogosBand() {
    return (
        <div className={styles.band}>
            <p className={styles.label}>TRUSTED BY DEVELOPERS & STUDENTS</p>
            <div className={styles.logos}>
                {companies.map((company) => (
                    <span key={company} className={styles.chip}>
                        {company}
                    </span>
                ))}
            </div>
        </div>
    );
}
