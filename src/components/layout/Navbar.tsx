import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:py-8 flex justify-between items-center bg-ink/80 backdrop-blur-md border-b border-white/5">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl md:text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
                <div className="w-7 h-7 md:w-8 md:h-8 bg-accent rounded-lg flex items-center justify-center text-ink text-xs md:text-sm font-black">PK</div>
                PREETI KHATRI
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        whileHover={{ scale: 1.05, color: "#FFF" }}
                        className="transition-colors"
                    >
                        {item}
                    </motion.a>
                ))}
            </div>

            {/* Mobile hamburger */}
            <button
                className="md:hidden text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-dark-surface p-8 flex flex-col gap-6 md:hidden text-white border-b border-white/10"
                    >
                        {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold tracking-tighter"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
