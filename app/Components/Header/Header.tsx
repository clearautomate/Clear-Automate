'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './header.module.css'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
    { href: '/', label: 'HOME' },
    { href: '/works', label: 'MY WORK' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [menu, setMenu] = useState(true)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        setMounted(true)

        function onScroll() {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        if (pathname === '/') {
            const el = document.getElementById('contact')
            if (el) {
                const yOffset = -100
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
                window.scrollTo({ top: y, behavior: 'smooth' })
            } else {
                router.push('/#contact')
            }
        } else {
            router.push('/#contact')
        }
    }

    if (!mounted) return null

    return (
        <nav className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`page-width ${styles.contents}`}>
                <Link href="/" className={styles.logo}>
                    <Image src={'/logo.svg'} width={32} height={32} alt='Logo' />
                    Clear Automate
                </Link>
                {menu ? <button className={styles.hamburgerIcon} onClick={() => { setMenu(!menu) }}><Bars3Icon /></button> :
                    <button className={styles.hamburgerIcon} onClick={() => { setMenu(!menu) }}><XMarkIcon /></button>}
                <ul className={`${styles.links} ${menu ? styles.menu : ''}`}>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className={pathname === href ? styles.activeLink : ''}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a href="/#contact" className={`button-solid ${styles.contactBtn}`} onClick={handleContactClick}>
                    Book My FREE Audit
                </a>
            </div>
        </nav>
    )
}
