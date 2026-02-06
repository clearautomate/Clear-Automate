// components/ReviewsCarousel.tsx
'use client'
import { useState } from 'react'
import Script from 'next/script'

declare global {
    interface Window {
        carouselInlineWidget?: any
    }
}

export default function ReviewsCarousel() {
    const [loaded, setLoaded] = useState(false)

    const initWidget = () => {
        if (window.carouselInlineWidget) {
            new window.carouselInlineWidget('reviewsio-carousel-widget', {
                store: 'clearautomate.io',
                sku: '',
                lang: 'en',
                carousel_type: 'topHeader',
                styles_carousel: 'CarouselWidget--topHeader',
                options: {
                    general: {
                        review_type: 'company, product',
                        min_reviews: '1',
                        max_reviews: '20',
                        address_format: 'CITY, COUNTRY',
                        enable_auto_scroll: 10000,
                    },
                    header: {
                        enable_overall_stars: true,
                        rating_decimal_places: 2,
                    },
                    reviews: {
                        enable_customer_name: true,
                        enable_customer_location: true,
                        enable_verified_badge: true,
                        enable_subscriber_badge: true,
                        enable_recommends_badge: true,
                        enable_photos: true,
                        enable_videos: true,
                        enable_review_date: true,
                        disable_same_customer: true,
                        min_review_percent: 4,
                        third_party_source: true,
                        hide_empty_reviews: true,
                        enable_product_name: true,
                    },
                    popups: {
                        enable_review_popups: true,
                        enable_helpful_buttons: true,
                        enable_helpful_count: true,
                        enable_share_buttons: true,
                    },
                },
                translations: {
                    verified_customer: 'Verified Customer',
                },
                styles: {
                    '--base-font-size': '16px',
                    '--base-maxwidth': '100%',
                    '--reviewsio-logo-style': 'var(--logo-normal)',
                    '--common-star-color': 'orange',
                    '--common-star-disabled-color': 'rgba(0,0,0,0.25)',
                    '--medium-star-size': '22px',
                    '--small-star-size': '19px',
                    '--x-small-star-size': '16px',
                    '--item-maximum-columns': '4',
                    '--heading-text-color': 'rgb(var(--text-color))',
                    '--body-text-color': 'rgb(var(--text-color))',
                    '--scroll-button-icon-color': 'rgb(var(--text-color))',
                    '--badge-icon-color': 'rgb(var(--primary-accent))',
                    '--badge-text-color': 'rgb(var(--text-color))',
                    '--popup-backdrop-color': 'rgba(0,0,0,0.75)',
                },
            })
            setLoaded(true)
        }
    }

    return (
        <div className='section page-width'>
            <div className='section-header'>
                <h2>What Real Estate Teams Say</h2>
                <p>Insights from agents and brokerages using our automations.</p>
            </div>
            <Script
                src="https://widget.reviews.io/carousel-inline-iframeless/dist.js?_t=2025072216"
                strategy="afterInteractive"
                onLoad={initWidget}
            />
            {!loaded && <p>Loading reviews...</p>}
            <div id="reviewsio-carousel-widget" />
        </div>
    )
}
