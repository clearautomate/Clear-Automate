'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { ChartBarIcon, PresentationChartLineIcon, ArrowPathIcon, LinkIcon, Squares2X2Icon, ArrowTrendingUpIcon, DocumentTextIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import styles from './hero.module.css'
import Link from 'next/link'
import Video from './Video/Video'
import ReviewsRibbon from '../../ReviewsRibbon/ReviewsRibbon'
import Image from 'next/image'
import { Reveal, RevealGroup } from '../../Reveal/Reveal'

const chips = [
    { text: 'Lead routing', icon: ArrowPathIcon },
    { text: 'Listing intake', icon: TableCellsIcon },
    { text: 'CRM syncing', icon: LinkIcon },
    { text: 'Pipeline dashboards', icon: Squares2X2Icon },
    { text: 'Offer tracking', icon: PresentationChartLineIcon },
    { text: 'Showing follow-ups', icon: ArrowTrendingUpIcon },
];

const data = [
    { month: 'Jan', clv: 120 },
    { month: 'Feb', clv: 200 },
    { month: 'Mar', clv: 300 },
    { month: 'Apr', clv: 450 },
    { month: 'May', clv: 600 },
    { month: 'Jun', clv: 800 },
]

export default function Hero() {
    const offers = [
        <>
            If you don't save <span className={styles.boldText}>10 hours a week after 7 days</span>, <span className={styles.highlightedText}>I'll give your money back — plus $100</span>
        </>,
        <>
            <span className={styles.highlightedText}>Only <span className={styles.boldText}>5 spots</span> available</span> — I'm starting small to give each client my full attention
        </>,
        <>
            <span className={styles.highlightedText}>Book a free call</span> to see exactly how much time I can save you — <span className={styles.boldText}>no pressure, no commitment</span>
        </>
    ]

    // 🌈 Dynamic Chip Colors
    const baseHue = 210
    const hueStep = 360 / chips.length

    return (
        <RevealGroup>
            <div className="page-width">
                <div className={`grid2 ${styles.layout}`}>
                    <div>
                        <Reveal delay={0}>
                            <h1 className={styles.title}>
                                <span>
                                    Automate Your <span style={{ color: 'rgb(var(--primary-accent))' }}>Real Estate</span> <span className={styles.highlightedText}>Business</span>.
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h3 className={styles.subtitle}>
                                Turn your <span>listing and lead busywork</span> into
                                <span className={styles.boldText}> automated systems</span>.
                            </h3>
                        </Reveal>

                        {/* 🌈 Chips with custom HSL hue */}
                        <Reveal delay={0.4}>
                            <div className={styles.chips}>
                                {chips.map(({ text, icon: Icon }, index) => {
                                    const hue = (baseHue + index * hueStep) % 360
                                    const chipColor = `hsl(${hue} 0% 0%)`
                                    const chipBg = `hsl(${hue} 100% 50%)`
                                    const chipBorder = `hsl(${hue} 0% 0%)`

                                    return (
                                        <span
                                            key={text}
                                            className="chip"
                                            style={{
                                                color: chipColor,
                                                borderColor: chipBorder,
                                            }}
                                        >
                                            <Icon className={styles.icon} aria-hidden="true" />
                                            {text}
                                        </span>
                                    )
                                })}
                            </div>
                        </Reveal>

                        <Reveal delay={0.6}>
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
                        </Reveal>x2

                        <Reveal delay={0.8}>
                            <div className={styles.reviews}>
                                <ReviewsRibbon />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.4}>
                        <div className={styles.imgWrapper}>
                            <div className={styles.squareBox}>
                                <Image
                                    className={styles.heroImg}
                                    width={1080}
                                    height={1080}
                                    src={'/hero-graphic.png'}
                                    alt="real estate automation"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </RevealGroup>
    )
}
