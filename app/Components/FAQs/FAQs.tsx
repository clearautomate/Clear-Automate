'use client'
import React, { useState } from "react";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import styles from "./faqs.module.css";
import { Reveal, RevealGroup } from "../Reveal/Reveal";

type FAQ = {
    question: string;
    answer: string;
};

export default function FAQs({ faqs }: { faqs: FAQ[] }) {
    const [openSet, setOpenSet] = useState<Set<number>>(new Set());

    const toggle = (index: number) => {
        setOpenSet(prev => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    return (
        <RevealGroup>
            <div className="section page-width">
                <Reveal delay={0}>
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                </Reveal>
                <div className={styles.faqs}>
                    {faqs.map((faq, index) => {
                        const isOpen = openSet.has(index);
                        return (
                            <Reveal key={index} delay={(index + 1) / 5}>
                                <div
                                    key={index}
                                    className={`${styles.faq} card hoverable-card`}
                                    onClick={() => toggle(index)}
                                >
                                    <div className={styles.question}>
                                        <div className={styles.questionText}>
                                            <QuestionMarkCircleIcon className={styles.icon} />
                                            <p><b>{faq.question}</b></p>
                                        </div>
                                        <ChevronDownIcon
                                            className={styles.icon}
                                            style={{
                                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s ease",
                                            }}
                                        />
                                    </div>
                                    {isOpen && (
                                        <p className={styles.answer}>{faq.answer}</p>
                                    )}
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </RevealGroup>
    );
}
