import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect } from "react";

export function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Primary cursor - tight, responsive follow
    const cursorX = useSpring(mouseX, { damping: 28, stiffness: 500, mass: 0.4, restDelta: 0.001 });
    const cursorY = useSpring(mouseY, { damping: 28, stiffness: 500, mass: 0.4, restDelta: 0.001 });

    // Secondary follower - smooth elastic trail
    const followerX = useSpring(mouseX, { damping: 22, stiffness: 140, mass: 0.8, restDelta: 0.001 });
    const followerY = useSpring(mouseY, { damping: 22, stiffness: 140, mass: 0.8, restDelta: 0.001 });

    // Tertiary element for extra depth
    const trailX = useSpring(mouseX, { damping: 20, stiffness: 80, mass: 1.2, restDelta: 0.001 });
    const trailY = useSpring(mouseY, { damping: 20, stiffness: 80, mass: 1.2, restDelta: 0.001 });

    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [cursorSize, setCursorSize] = useState<"small" | "medium" | "large">("small");

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = !!target.closest('button, a, .tech-node, input, textarea, [role="button"], .glass-card, [data-interactive]');
            setIsHovering(isClickable);

            // Determine cursor size based on element type
            if (target.closest('input, textarea')) {
                setCursorSize("small");
            } else if (target.closest('.glass-card')) {
                setCursorSize("medium");
            } else if (isClickable) {
                setCursorSize("medium");
            } else {
                setCursorSize("small");
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        // Use passive listeners for better performance
        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        window.addEventListener("mousedown", handleMouseDown, { passive: true });
        window.addEventListener("mouseup", handleMouseUp, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY]);

    const getCursorScale = () => {
        if (isClicked) return 0.75;
        if (isHovering) {
            return cursorSize === "small" ? 1.8 : cursorSize === "medium" ? 2.2 : 2.5;
        }
        return 1;
    };

    const getFollowerScale = () => {
        if (isClicked) return 1.15;
        if (isHovering) {
            return cursorSize === "small" ? 1.6 : cursorSize === "medium" ? 1.9 : 2.2;
        }
        return 1;
    };

    const getFollowerOpacity = () => {
        if (isClicked) return 0.6;
        return isHovering ? 0.9 : 0.35;
    };

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                    left: 0,
                    top: 0,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: getCursorScale(),
                }}
                transition={{
                    scale: { type: "spring", damping: 32, stiffness: 600, mass: 0.3 }
                }}
            />

            {/* Primary follower ring */}
            <motion.div
                className="custom-cursor-follower"
                style={{
                    x: followerX,
                    y: followerY,
                    left: 0,
                    top: 0,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: getFollowerScale(),
                    opacity: getFollowerOpacity(),
                }}
                transition={{
                    scale: { type: "spring", damping: 28, stiffness: 400, mass: 0.5 },
                    opacity: { duration: 0.3 }
                }}
            />

            {/* Subtle trail element */}
            <motion.div
                className="custom-cursor-trail"
                style={{
                    x: trailX,
                    y: trailY,
                    left: 0,
                    top: 0,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicked ? 0.8 : isHovering ? 1.4 : 0.6,
                    opacity: isClicked ? 0.3 : isHovering ? 0.5 : 0.15,
                }}
                transition={{
                    scale: { type: "spring", damping: 25, stiffness: 250, mass: 0.8 },
                    opacity: { duration: 0.4 }
                }}
            />
        </>
    );
}
