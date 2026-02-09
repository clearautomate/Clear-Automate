"use client"

import React from "react"
import styles from "./threeSteps.module.css"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Reveal, RevealGroup } from "../Reveal/Reveal"

export default function ThreeSteps() {
    const steps = [
        {
            number: "01",
            title: "Book your free audit call",
            description:
                "Tell me about your team, your tools, and where you’re losing time each week.",
        },
        {
            number: "02",
            title: "Get a custom automation blueprint",
            description:
                "I map your lead-to-close workflow, identify quick wins, and design a simple, ROI-focused automation plan.",
        },
        {
            number: "03",
            title: "Launch, refine, and scale",
            description:
                "I build your automations, connect your CRM and listing tools, and refine everything based on real-world results.",
        },
    ]

    const scrollToContact = () => {
        const el = document.getElementById("contact")
        if (!el) return
        const yOffset = -100
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
    }

    return (
        <RevealGroup>
            <div className={styles.wrapper}>
                <div className="page-width section">
                    <Reveal delay={0}>
                        <div className="section-header">
                            <h2>Our Simple Process To Get Started</h2>
                            <p>
                                Three simple steps to go from manual tasks to streamlined real
                                estate systems.
                            </p>
                        </div>
                    </Reveal>

                    <div className={styles.grid}>
                        {steps.map((step, index) => {
                            const isLast = index === steps.length - 1
                            const delay = (index + 1) / 5

                            return (
                                <React.Fragment key={step.number}>
                                    {/* Card */}
                                    <Reveal delay={delay}>
                                        <div className={`${styles.card} card`}>
                                            <div className={styles.cardContent}>
                                                <div className={styles.number}>{step.number}</div>
                                                <h3 className="three-steps__title">{step.title}</h3>
                                                <p className="three-steps__description">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>

                                    {/* Arrow (only between cards) */}
                                    {!isLast && (
                                        <Reveal delay={delay + 0.05}>
                                            <div className={styles.arrow} aria-hidden="true">
                                                <ArrowRightIcon />
                                            </div>
                                        </Reveal>
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </div>

                    <Reveal delay={0.8}>
                        <div className={styles.contact}>
                            <button
                                className={`button-solid ${styles.pulse}`}
                                onClick={scrollToContact}
                                type="button"
                            >
                                <p>Book My FREE Audit - Only 3 Spots Left!</p>
                            </button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </RevealGroup>
    )
}
