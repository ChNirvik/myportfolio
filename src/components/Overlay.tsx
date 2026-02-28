'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Overlay() {
    const { scrollYProgress } = useScroll();
    const [hasFadedOut, setHasFadedOut] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.15 && !hasFadedOut) {
            setHasFadedOut(true);
        } else if (latest <= 0.05 && hasFadedOut) {
            setHasFadedOut(false);
        }
    });

    // Basic 3 sections fading in and out based on scroll depth (0 to 1)

    // Section 1: fades out early and stays gone — no y parallax to avoid any bounce-back
    const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0], { clamp: true });

    // Section 3: 60% to 80%
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">

            {/* Section 1 - Centered */}
            {!hasFadedOut && (
                <motion.div
                    style={{ opacity: opacity1 }}
                    className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                        Nirvik Chakraborty
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                        Marketing Generalist
                    </p>
                </motion.div>
            )}

            {/* Section 3 - Right Aligned */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute top-1/2 right-[10%] -translate-y-1/2 max-w-lg px-4 text-right"
            >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    Bridging<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                        design & engineering.
                    </span>
                </h2>
            </motion.div>

        </div>
    );
}
