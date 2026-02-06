'use client'

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import styles from './testimonials.module.css';

const testimonialsData = [
    {
        id: 1,
        name: "Charles",
        jobTitle: "Team Lead",
        profilePic: "/profile pic.jpg",
        text: "Clear Automate helped our real estate team cut down hours of manual work with smart, efficient systems. Professional, easy to work with, and delivered great results."
    }
];

type Testimonial = typeof testimonialsData[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className={`card ${styles.card}`}
        >
            <div className={styles.profile}>
                <Image
                    src={testimonial.profilePic}
                    alt={`${testimonial.name} Profile Pic`}
                    width={128}
                    height={128}
                />
                <div className={styles.profileText}>
                    <p>
                        <strong>{testimonial.name}</strong>
                        <span className={styles.jobTitle}> &bull; {testimonial.jobTitle}</span>
                    </p>
                    <div className={styles.review}>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <Image src="/quotes.svg" alt="quotes" width={64} height={64} />
                <p>{testimonial.text}</p>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === testimonialsData.length - 1 ? 0 : prev + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    const goNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };

    const renderDots = () =>
        testimonialsData.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
            />
        ));

    return (
        <div className="page-width section">
            <div className="section-header">
                <h2>What My First Clients Are Saying</h2>
                <p>Genuine feedback from the teams I've supported</p>
            </div>
            <div className={styles.testimonials}>
                <button onClick={goPrev} className={styles.slideBtn}>
                    <ChevronLeftIcon />
                </button>

                <AnimatePresence mode="wait" initial={false}>
                    <TestimonialCard
                        key={testimonialsData[currentIndex].id}
                        testimonial={testimonialsData[currentIndex]}
                    />
                </AnimatePresence>

                <button onClick={goNext} className={styles.slideBtn}>
                    <ChevronRightIcon />
                </button>
            </div>

            <div className={styles.dotsContainer}>
                {renderDots()}
            </div>
        </div>
    );
}
