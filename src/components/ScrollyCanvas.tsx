'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

const TOTAL_FRAMES = 192; // Total frames on disk
const STEP = 6;           // Use every 6th frame → 32 frames total
const FRAME_COUNT = Math.ceil(TOTAL_FRAMES / STEP);

export default function ScrollyCanvas({ children }: { children?: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Store images in a ref so renders don't trigger re-renders
    const imagesRef = useRef<HTMLImageElement[]>(Array(FRAME_COUNT).fill(null));
    const loadedRef = useRef(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Draw a specific frame index on the canvas
    const drawFrame = (idx: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const clamped = Math.min(Math.max(Math.floor(idx), 0), FRAME_COUNT - 1);
        const img = imagesRef.current[clamped];
        if (!img || !img.complete) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const cx = (canvas.width - img.width * ratio) / 2;
        const cy = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * ratio, img.height * ratio);
    };

    useEffect(() => {
        // Preload all sampled frames
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const actualFrame = i * STEP;
            const padded = actualFrame.toString().padStart(3, '0');
            img.src = `/sequence/frame_${padded}.webp`;
            img.onload = () => {
                imagesRef.current[i] = img;
                // Draw frame 0 as soon as it's available
                if (i === 0 && !loadedRef.current) {
                    loadedRef.current = true;
                    drawFrame(0);
                }
            };
        }

        // Subscribe to scroll changes
        const unsubscribe = frameIndex.on('change', (latest) => {
            drawFrame(latest);
        });

        // Handle resize
        const handleResize = () => drawFrame(frameIndex.get());
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="h-full w-full" />
                {children}
            </div>
        </div>
    );
}



