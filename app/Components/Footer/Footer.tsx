'use client'
import Image from 'next/image'
import Link from 'next/link'

import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={`${styles.background} section`}>
            <div className={`${styles.content} page-width`}>
                <div className={`${styles.header} section-header`}>
                    <h3>Get your software built, Risk free.</h3>
                    <p>Streamline your business with tailored automation solutions built just for you.</p>
                    <button
                        className='button-solid'
                        onClick={() => {
                            const el = document.getElementById('contact')
                            if (el) {
                                const yOffset = -100
                                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                                window.scrollTo({ top: y, behavior: 'smooth' })
                            }
                        }}>
                        Get Started Risk-Free
                    </button>
                </div>
                <div className={styles.websiteLinks}>
                    <Link href="/" className={styles.logo}>
                        <Image src={'logo.svg'} width={32} height={32} alt='Logo' />
                        Clear Automate
                    </Link>
                </div>
                <div className={styles.policyLinks}>
                    <Link href={'privacy-policy'} className={styles.link}>Privacy Policy</Link>
                    <p>&bull;</p>
                    <Link href={'terms'} className={styles.link}>Terms and Conditions</Link>
                </div>
                <p className={styles.copyright}>©2025 Clear Automate. All rights reserved.</p>
            </div>
        </div>
    )
}