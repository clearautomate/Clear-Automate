import { FaEnvelope, FaLinkedin, FaLinkedinIn } from 'react-icons/fa6'
import PulseDot from '../../PulseDot/PulseDot'
import styles from './about.module.css'
import Link from 'next/link'
import { SiFiverr } from 'react-icons/si'
import { TbBrandFiverr } from 'react-icons/tb'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

export default function About() {
    return (
        <div className="page-width section">
            <div className="section-header">
                <h2>Meet the Founder</h2>
            </div>
            <div className={`${styles.grid} grid2`}>
                <img src={'/me.jpg'} />
                <PulseDot>
                    <p className={styles.aboutMe}>
                        {/* <span className={styles.text}>
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
                        </span> */}
                        <span>Hi, <span className={styles.boldText}>I'm Joel Carmenini</span>, the founder of Clear Automate. I started this company after seeing how many businesses were losing time on manual, repetitive work. With a background in software development, I build automation systems that help companies streamline operations and save hours every week.</span>
                    </p>
                    <div className={styles.stat}>
                        <div className={styles.badgeIcon}>
                            <CheckBadgeIcon />
                        </div>
                        <h3><span className={styles.highlightedText}>8+</span> Years Programming Experience</h3>
                    </div>
                    <div className={styles.socials}>
                        <Link className={styles.socialIcon} href={'https://www.linkedin.com/in/joelcarmenini/'} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </Link>
                        <Link className={styles.socialIcon} href={'mailto:joel@clearautomate.io'} target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </Link>
                        <Link className={styles.socialIcon} href={'https://www.fiverr.com/joel_carmenini'} target="_blank" rel="noopener noreferrer">
                            <TbBrandFiverr />
                        </Link>
                    </div>
                </PulseDot >
            </div>
        </div>
    )
}