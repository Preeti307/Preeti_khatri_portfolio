import { motion } from "motion/react";
import { useGravityAnimation } from "../../hooks/useGravityAnimation";
import type { ElementType } from "react";

interface GravityHeadingProps {
    text: string;
    as?: ElementType;
    className?: string;
    spanClassName?: string;
}

/**
 * GravityHeading — splits text into words, then animates each letter individually.
 * Letters within a word are wrapped in a `whitespace-nowrap` span so words never
 * break mid-way across lines.
 *
 * On scroll, when the heading reaches the top of the viewport each letter falls
 * downward with a staggered gravity effect and fades out.
 * Resets automatically when the user scrolls back up.
 */
export function GravityHeading({
    text,
    as: Tag = "h2",
    className = "",
    spanClassName = "",
}: GravityHeadingProps) {
    const { headingRef, isFalling } = useGravityAnimation();

    // Split into words; each word gets rendered as a block that won't break mid-word.
    const words = text.split(" ");

    // Keep a running letter index so stagger delays are consistent across words.
    let globalIdx = 0;

    return (
        <Tag
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className={`flex flex-wrap justify-center gap-x-[0.25em] ${className}`}
        >
            {words.map((word, wordIdx) => {
                const wordStart = globalIdx;
                globalIdx += word.length;

                return (
                    // whitespace-nowrap ensures the word never breaks across lines
                    <span key={wordIdx} className="whitespace-nowrap inline-flex">
                        {word.split("").map((char, charIdx) => {
                            const letterIdx = wordStart + charIdx;
                            return (
                                <motion.span
                                    key={charIdx}
                                    initial={{ opacity: 1, y: 0, rotateZ: 0 }}
                                    animate={
                                        isFalling
                                            ? {
                                                y: "110vh",
                                                opacity: 0,
                                                rotateZ:
                                                    (letterIdx % 2 === 0 ? 1 : -1) *
                                                    (10 + (letterIdx % 5) * 6),
                                            }
                                            : { y: 0, opacity: 1, rotateZ: 0 }
                                    }
                                    transition={
                                        isFalling
                                            ? {
                                                duration: 0.8,
                                                delay: letterIdx * 0.04,
                                                ease: [0.55, 0, 1, 0.45],
                                            }
                                            : {
                                                duration: 0.5,
                                                delay: letterIdx * 0.02,
                                                ease: "easeOut",
                                            }
                                    }
                                    className={`inline-block ${spanClassName}`}
                                    style={{ willChange: "transform, opacity" }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>
                );
            })}
        </Tag>
    );
}
