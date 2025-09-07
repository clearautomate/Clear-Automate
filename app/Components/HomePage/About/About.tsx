import PulseDot from '../../PulseDot/PulseDot'
import styles from './about.module.css'

export default function About() {
    return (
        <div className="page-width section">
            <div className="section-header">
                <h2>Who am I?</h2>
            </div>
            <div className={`${styles.grid} grid2`}>
                <img src={'https://img.freepik.com/premium-photo/man-portrait-tablet-with-smile-office-research-networking-stock-market-investment-portfolio-manager-tech-communication-with-clients-proposal-management-corporate-advice_590464-408461.jpg'} />
                <PulseDot>
                    <p>
                        <span className={styles.text}>
                            I’m just getting started — <span className={styles.boldText}>it’s just me</span> behind this agency.
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            I’ve been programming for <span className={styles.boldText}>5 years</span>, specializing in <span className={styles.boldText}>Next.js, APIs, and database systems</span>. After my first project, I realized the impact the right software can have — <span className={styles.highlightedText}>I’m all in.</span>
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            Unlike other agencies, I <span className={styles.boldText}>stay involved</span> — <span className={styles.highlightedText}>handling updates and improvements</span> so your tools grow with your <span className={styles.boldText}>business.</span>
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            <span className={styles.highlightedText}>My goal:</span> streamline operations so you can focus on what matters. <span className={styles.boldText}>Open to new projects.</span>
                        </span>
                    </p>
                </PulseDot >
            </div>
        </div>
    )
}