import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgLayer1} />
            <div className={styles.bgLayer2} />
            <div className={styles.bgLayer3} />
            <div className={styles.gridOverlay} />

            <div className={styles.badge}>
                <span className={styles.dot} />
                Powered by Claude AI
            </div>

            <h1 className={styles.headline}>
                <span>AI-Powered</span>
                <span className={styles.gradientText}>Project Idea Generator</span>
            </h1>

            <p className={styles.sub}>
                Generate complete project blueprints with tech stack, features, roadmap, and API design — in seconds. Built for students, developers, and startups.
            </p>

            <div className={styles.ctas}>
                <Link to="/generate" className={styles.btnPrimary}>
                    Generate Your First Idea →
                </Link>
                <a href="#how-it-works" className={styles.btnGhost}>
                    View Example
                </a>
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statValue}>12,000+</span>
                    <span className={styles.statLabel}>Ideas Generated</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statValue}>8</span>
                    <span className={styles.statLabel}>Domains</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statValue}>3</span>
                    <span className={styles.statLabel}>Skill Levels</span>
                </div>
            </div>

            <div className={styles.ideMockup}>
                <div className={styles.titlebar}>
                    <div className={styles.dots}>
                        <span className={styles.dotRed} />
                        <span className={styles.dotYellow} />
                        <span className={styles.dotGreen} />
                    </div>
                    <div className={styles.tabs}>
                        <span className={styles.tabActive}>Overview</span>
                        <span className={styles.tab}>Tech Stack</span>
                        <span className={styles.tab}>Roadmap</span>
                    </div>
                </div>

                <div className={styles.ideBody}>
                    <div className={styles.fileTree}>
                        <div className={styles.treeItem}>📁 Health</div>
                        <div className={`${styles.treeItem} ${styles.treeItemChild}`}>📄 Fintech</div>
                        <div className={`${styles.treeItem} ${styles.treeItemChild}`}>📄 Education</div>
                        <div className={`${styles.treeItem} ${styles.treeItemChild} ${styles.treeItemActive}`}>📄 E-commerce</div>
                        <div className={styles.treeItem}>📁 Social</div>
                        <div className={`${styles.treeItem} ${styles.treeItemChild}`}>📄 Productivity</div>
                        <div className={styles.treeItem}>📁 Gaming</div>
                        <div className={styles.treeItem}>📄 Environment</div>
                    </div>

                    <div className={styles.codeEditor}>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>1</span>
                            <span className={styles.keyword}>Project:</span> <span className={styles.string}>Smart Health Tracker</span>
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>2</span>
                            <span className={styles.keyword}>Domain:</span> <span className={styles.variable}>Health</span>
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>3</span>
                            <span className={styles.keyword}>Level:</span> <span className={styles.variable}>Intermediate</span>
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>4</span>
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>5</span>
                            <span className={styles.comment}>// Tech Stack</span>
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>6</span>
                            <span className={styles.function}>Frontend:</span> React, TypeScript, Tailwind
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>7</span>
                            <span className={styles.function}>Backend:</span> Node.js, Express, PostgreSQL
                        </div>
                        <div className={styles.codeLine}>
                            <span className={styles.lineNum}>8</span>
                            <span className={styles.function}>AI:</span> Claude API for insights
                        </div>
                    </div>

                    <div className={styles.aiPanel}>
                        <div className={styles.aiHeader}>
                            <div className={styles.aiAvatar} />
                            <span className={styles.aiName}>Claude AI</span>
                            <span className={styles.aiBadge}>Generator</span>
                        </div>

                        <div className={styles.userMsg}>
                            Generate a health tracking app for beginners
                        </div>

                        <div className={styles.aiMsg}>
                            Analyzing domain patterns... Building complete blueprint...
                        </div>

                        <div className={styles.statusRow}>
                            <span className={styles.statusDot} />
                            Generating roadmap...
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
