"use client"

import React from 'react'
import styles from './threeSteps.module.css'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ThreeSteps() {
    const steps = [
        {
            number: "01",
            title: "Book your free audit call",
            description:
                "Tell me about your business, your current tools, and where you’re losing time each week.",
        },
        {
            number: "02",
            title: "Get a custom automation blueprint",
            description:
                "I map your workflows, identify quick wins, and design a simple, ROI-focused automation plan.",
        },
        {
            number: "03",
            title: "Launch, refine, and scale",
            description:
                "I build your automations, connect your tools, and refine everything based on real-world results.",
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className="page-width section">
                <div className="section-header">
                    <h2>Our Simple Process To Get Started</h2>
                    <p>Three simple steps to go from manual tasks to fully automated systems.</p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className={`${styles.card} card`}>
                                <div className={styles.number}>{step.number}</div>
                                <h3 className="three-steps__title">{step.title}</h3>
                                <p className="three-steps__description">{step.description}</p>
                            </div>

                            {index !== steps.length - 1 && (
                                <div className={styles.arrow}><ArrowRightIcon /></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>


                <div className={styles.contact}>
                    <button
                        className={`button-solid ${styles.pulse}`}
                        onClick={() => {
                            const el = document.getElementById('contact')
                            if (el) {
                                const yOffset = -100
                                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                                window.scrollTo({ top: y, behavior: 'smooth' })
                            }
                        }}
                    >
                        <p>Book My FREE Audit – Only 3 Spots Left!</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
