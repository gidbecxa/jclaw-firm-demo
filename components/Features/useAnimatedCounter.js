// hooks/useAnimatedCounter.js
import { useEffect, useState, useRef } from 'react';

export const useAnimatedCounter = (targetNumber, duration = 2000, startOnView = true) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!startOnView) {
            animateCounter();
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    animateCounter();
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animateCounter = () => {
        const startTime = performance.now();
        const increment = targetNumber / (duration / 16); // Roughly 60fps

        const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * targetNumber);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                setCount(targetNumber); // Ensure final number is exact
            }
        };

        requestAnimationFrame(updateCounter);
    };

    return [count, ref];
};