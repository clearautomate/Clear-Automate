'use client'

import { useState } from 'react'
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline'
import styles from './contact.module.css'
import Image from 'next/image'
import { Reveal, RevealGroup } from '../Reveal/Reveal'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(false)
        setSuccess(false)

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, company }),
            })

            if (!res.ok) throw new Error('Failed to send email')

            setSuccess(true)
            setName('')
            setEmail('')
            setCompany('')
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <RevealGroup>
            <Reveal delay={0}>
                <form id="contact" className="page-width section" onSubmit={handleSubmit}>
                    <div className={`card ${styles.card}`}>
                        <h2>Let's Get Started!</h2>
                        <div className={styles.me}>
                            <div className={styles.active}>
                                <Image
                                    className={styles.proflie}
                                    src={'/profile.png'}
                                    alt="profile"
                                    width={128}
                                    height={128}
                                />
                            </div>
                            <div className={styles.activeText}>
                                <p>
                                    <strong>Joel Carmenini</strong>
                                    <span className={styles.jobTitle}> &bull; Owner & Developer</span>
                                </p>
                                <div className={styles.iconWithText}>
                                    <ClockIcon />
                                    <p style={{ opacity: 0.85 }}>Typically responds within a few hours</p>
                                </div>
                            </div>
                        </div>

                        <input
                            className="text-input"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            className="text-input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            className={`text-input ${styles.textArea}`}
                            rows={3}
                            placeholder="Describe your team or brokerage briefly"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className={`button-solid ${styles.btn} ${success ? styles.btnSubmited : ''}`}
                            disabled={loading || success} // only submit once if success
                        >
                            {!loading && !success && 'Book My FREE Audit – Only 3 Spots Left!'}
                            {loading && 'Sending...'}
                            {!loading && success && <><CheckCircleIcon className={styles.checkIcon} /> <p>Sent — I'll get back to you shortly!</p></>}
                        </button>

                        {error && <p className={styles.errorTxt}>Failed to send email. Try again.</p>}
                        <small>We'll never share your data with anyone.</small>
                    </div>
                </form>
            </Reveal>
        </RevealGroup>
    )
}
