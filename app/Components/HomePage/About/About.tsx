import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa6'
import { TbBrandFiverr } from 'react-icons/tb'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import PulseDot from '../../PulseDot/PulseDot'
import { Reveal, RevealGroup } from '../../Reveal/Reveal'
import styles from './about.module.css'

export default function About() {
    return (
        <RevealGroup>
            <div className="page-width section">
                <Reveal delay={0}>
                    <div className="section-header">
                        <h2>Meet the Founder</h2>
                    </div>
                </Reveal>

                <div className={`${styles.grid} grid2`}>
                    <Reveal delay={0.2}>
                        <img src="me.webp" alt="Joel Carmenini" />
                    </Reveal>

                    <PulseDot>
                        <>
                            <Reveal delay={0.4}>
                                <p className={styles.aboutMe}>
                                    <span>
                                        Hi, <span className={styles.boldText}>I'm Joel Carmenini</span>, the founder
                                        of Clear Automate. I started this company after seeing how many real estate
                                        teams were losing time on manual, repetitive work. With a background in
                                        software development, I build automation systems that help agents and
                                        brokerages streamline operations and save hours every week.
                                    </span>
                                </p>
                            </Reveal>

                            <Reveal delay={0.6}>
                                <div className={styles.desktopStats}>
                                    <div className={styles.stat}>
                                        <div className={styles.badgeIcon}>
                                            <CheckBadgeIcon />
                                        </div>
                                        <h3>
                                            <span className={styles.highlightedText}>8+</span> Years Programming
                                            Experience
                                        </h3>
                                    </div>

                                    <div className={styles.socials}>
                                        <Link
                                            className={styles.socialIcon}
                                            href="https://www.linkedin.com/in/joelcarmenini/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedinIn />
                                        </Link>

                                        <Link
                                            className={styles.socialIcon}
                                            href="mailto:joel@clearautomate.io"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaEnvelope />
                                        </Link>

                                        <Link
                                            className={styles.socialIcon}
                                            href="https://www.fiverr.com/joel_carmenini"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TbBrandFiverr />
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>

                            <div className={styles.mobileStats}>
                                <Reveal delay={0.6}>
                                    <div className={styles.stat}>
                                        <div className={styles.badgeIcon}>
                                            <CheckBadgeIcon />
                                        </div>
                                        <h3>
                                            <span className={styles.highlightedText}>8+</span> Years Programming
                                            Experience
                                        </h3>
                                    </div>
                                </Reveal>

                                <div className={styles.socials}>
                                    <Reveal delay={0.8}>
                                        <Link
                                            className={styles.socialIcon}
                                            href="https://www.linkedin.com/in/joelcarmenini/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedinIn />
                                        </Link>
                                    </Reveal>

                                    <Reveal delay={0.85}>
                                        <Link
                                            className={styles.socialIcon}
                                            href="mailto:joel@clearautomate.io"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaEnvelope />
                                        </Link>
                                    </Reveal>

                                    <Reveal delay={0.9}>
                                        <Link
                                            className={styles.socialIcon}
                                            href="https://www.fiverr.com/joel_carmenini"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TbBrandFiverr />
                                        </Link>
                                    </Reveal>
                                </div>
                            </div>
                        </>
                    </PulseDot>
                </div>
            </div>
        </RevealGroup>
    )
}
