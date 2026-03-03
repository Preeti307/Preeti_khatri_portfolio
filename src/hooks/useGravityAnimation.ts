import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

/**
 * Scroll-based gravity animation hook.
 * - isFalling becomes true when the heading's top edge reaches within 100px of viewport top.
 * - isFalling resets to false when the heading scrolls back down below 100px — allowing re-trigger.
 */
export function useGravityAnimation() {
    const headingRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const [isFalling, setIsFalling] = useState(false);

    useMotionValueEvent(scrollY, "change", () => {
        if (!headingRef.current) return;
        const { top } = headingRef.current.getBoundingClientRect();
        if (top <= 100) {
            if (!isFalling) setIsFalling(true);
        } else {
            if (isFalling) setIsFalling(false);
        }
    });

    return { headingRef, isFalling };
}
