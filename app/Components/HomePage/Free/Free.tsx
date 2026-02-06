import PulseDot from '../../PulseDot/PulseDot'
import styles from './free.module.css'

export default function Free() {
    return (
        <div className="page-width section">
            <div className="section-header">
                <h2>Only Pay If You Like It <span style={{ fontWeight: 'normal' }}>(No Obligation)</span></h2>
            </div>
            <div className={styles.grid}>
                <PulseDot>
                    <p>
                        <span className={styles.text}>
                            As a new business owner, I’m offering to build <span className={styles.boldText}>your real estate automation for free</span>. If you like it and it helps you, then you can choose to pay—no obligation.
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            <span className={styles.highlightedText}>It’s a win-win:</span> you get expert support, and I build my portfolio with real clients like you.
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            I’m accepting <span className={styles.boldText}>2 new clients this month</span>. <span className={styles.boldText}>Spots are limited</span>, so don’t miss this exclusive opportunity.
                        </span>
                        <br /><br />
                        <span className={styles.text}>
                            All I ask is to feature your success story in my portfolio and, if you found the service valuable, to leave a <span className={styles.highlightedText}>great testimonial.</span>
                        </span>
                    </p>
                </PulseDot >
                {/* <img src={'https://img.freepik.com/premium-photo/man-portrait-tablet-with-smile-office-research-networking-stock-market-investment-portfolio-manager-tech-communication-with-clients-proposal-management-corporate-advice_590464-408461.jpg'} /> */}
            </div>
        </div>
    )
}
