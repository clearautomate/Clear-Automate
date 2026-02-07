'use client';

import React from 'react';
import {
    motion,
    useInView,
    type Variants,
    useAnimationControls,
} from 'framer-motion';

/* --------------------------------------------------
   Context
-------------------------------------------------- */

type RevealGroupContextType = {
    started: boolean;
    t0: number | null; // performance.now()
};

const RevealGroupContext =
    React.createContext<RevealGroupContextType | null>(null);

/* --------------------------------------------------
   RevealGroup
-------------------------------------------------- */

type RevealGroupProps = {
    children: React.ReactNode;
    once?: boolean;
    className?: string;
};

export function RevealGroup({
    children,
    once = true,
    className,
}: RevealGroupProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);

    const inView = useInView(ref, {
        once,
        margin: '0px 0px -5% 0px', // ✅ TS-safe
    });

    const t0Ref = React.useRef<number | null>(null);
    const [started, setStarted] = React.useState(false);

    React.useEffect(() => {
        if (inView && !started) {
            t0Ref.current = performance.now();
            setStarted(true);
        }
    }, [inView, started]);

    return (
        <div ref={ref} className={className}>
            <RevealGroupContext.Provider
                value={{ started, t0: t0Ref.current }}
            >
                {children}
            </RevealGroupContext.Provider>
        </div>
    );
}

/* --------------------------------------------------
   Reveal
-------------------------------------------------- */

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
    className?: string;
};

export function Reveal({
    children,
    delay = 0,
    duration = 0.9,
    y = 18,
    once = true,
    className,
}: RevealProps) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const controls = useAnimationControls();
    const group = React.useContext(RevealGroupContext);

    const inView = useInView(ref, {
        once,
        margin: '0px 0px -5% 0px', // ✅ TS-safe
    });

    // compute remaining delay when this element enters view
    const remainingDelay = React.useMemo(() => {
        if (!group?.started || group.t0 == null) return delay;

        const elapsedSec = (performance.now() - group.t0) / 1000;
        return Math.max(0, delay - elapsedSec);
    }, [delay, group?.started, group?.t0, inView]);

    React.useEffect(() => {
        if (inView) controls.start('show');
        else controls.start('hidden');
    }, [inView, controls]);

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y,
            filter: 'blur(6px)',
        },
        show: (d: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration,
                delay: d,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            custom={remainingDelay}
            initial="hidden"
            animate={controls}
        >
            {children}
        </motion.div>
    );
}
