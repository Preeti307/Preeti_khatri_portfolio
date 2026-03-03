import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect } from "react";

export function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const cursorX = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.5 });
    const cursorY = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.5 });

    const followerX = useSpring(mouseX, { damping: 25, stiffness: 120, mass: 1 });
    const followerY = useSpring(mouseY, { damping: 25, stiffness: 120, mass: 1 });

    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('button, a, .tech-node, input, textarea, [role="button"]'));
        };
        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{ x: cursorX, y: cursorY, left: 0, top: 0, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: isClicked ? 0.8 : isHovering ? 2 : 1 }}
            />
            <motion.div
                className="custom-cursor-follower"
                style={{ x: followerX, y: followerY, left: 0, top: 0, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: isClicked ? 1.2 : isHovering ? 1.8 : 1, opacity: isHovering ? 0.8 : 0.3 }}
            />
        </>
    );
}
