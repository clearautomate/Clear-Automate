'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { ChartBarIcon, PresentationChartLineIcon, CogIcon, ArrowPathIcon, LinkIcon, Squares2X2Icon, DevicePhoneMobileIcon, ArrowTrendingUpIcon, DocumentTextIcon, UserIcon, FireIcon, ClockIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import styles from './hero.module.css'
import Link from 'next/link'
import Video from './Video/Video'
import ReviewsRibbon from '../../ReviewsRibbon/ReviewsRibbon'

const chips = [
    { text: 'Admin dashboards', icon: ChartBarIcon },
    { text: 'KPI dashboards', icon: PresentationChartLineIcon },
    // { text: 'Maintenance & support', icon: CogIcon },
    { text: 'Workflow automation', icon: ArrowPathIcon },
    { text: 'API integrations', icon: LinkIcon },
    { text: 'Real-time visualization', icon: Squares2X2Icon },
    // { text: 'Mobile-friendly dashboards', icon: DevicePhoneMobileIcon },
    { text: 'Performance tracking', icon: ArrowTrendingUpIcon },
    { text: 'BI reporting', icon: DocumentTextIcon },
    // { text: 'User permissions', icon: UserIcon },
]

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
            If you don't save <span className={styles.boldText}>10 hours a week after 7 days</span>, <span className={styles.highlightedText}>I’ll give your money back — plus $100</span>
        </>,
        <>
            <span className={styles.highlightedText}>Only <span className={styles.boldText}>5 spots</span> available</span> — I'm starting small to give each client my full attention
        </>,
        <>
            <span className={styles.highlightedText}>Book a free call</span> to see exactly how much time I can save you — <span className={styles.boldText}>no pressure, no commitment</span>
        </>
    ];


    return (
        <div className="page-width">
            <div className={`grid2 ${styles.layout}`}>
                <div>
                    <h1 className={styles.title}>
                        <span>I build <span style={{ color: 'rgb(var(--primary-accent))' }}>custom tools</span> that take the <span style={{ color: 'rgb(var(--primary-accent))' }}>headaches</span> out of <span style={{ color: 'rgb(var(--primary-accent))' }}>manual tasks</span>.</span>
                    </h1>
                    {/* <div className={styles.chips}>
                        {chips.map(({ text, icon: Icon }) => (
                            <span key={text} className="chip">
                                <Icon className={styles.icon} aria-hidden="true" />
                                {text}
                            </span>
                        ))}
                    </div> */}
                    <div className={`${styles.offerCard}`}>
                        {offers.map((text, index) => (
                            <div className={styles.offerList} key={index}>
                                <div className={styles.offerCardIcon}>
                                    <CheckCircleIcon />
                                </div>
                                <p>
                                    <span className={styles.offerText}>{text}</span>
                                </p>
                            </div>
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
                            }}>
                            <p>Get Me Started Risk-Free</p>
                        </button>
                    </div>
                </div>
                <div>
                    <video />
                    {/* <Video /> */}
                </div>
            </div>
        </div>
    )
}
