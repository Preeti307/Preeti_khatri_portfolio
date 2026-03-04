import { motion } from "motion/react";
import { MapPin, Github, Linkedin } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { CONTACT_INFO } from "../../constants";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-24 overflow-hidden bg-ink pt-24">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent-dark/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center w-full"
            >
                <div className="text-accent font-mono text-[9px] md:text-[10px] mb-8 tracking-[0.3em] uppercase opacity-80">
                    System.Initialize(Preeti_Khatri)
                </div>

                <GravityHeading
                    as="h1"
                    text="PREETI KHATRI"
                    className="text-[13vw] sm:text-[11vw] md:text-[8vw] font-black leading-tight tracking-tighter text-white mb-10 md:mb-14 font-display"
                    spanClassName="text-gradient"
                />

                <p className="max-w-2xl text-base md:text-lg lg:text-xl text-white/50 leading-[1.7] mb-12 md:mb-18 font-light">
                    Engineering{" "}
                    <span className="text-white font-semibold">high-performance data architectures</span>{" "}
                    and delivering intelligent digital experiences that redefine the boundary between data and decision.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 md:gap-8 w-full px-4 sm:px-0 justify-center">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 md:px-10 py-3.5 md:py-4 bg-accent text-ink font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(0,242,255,0.5)] transition-all duration-300 text-sm md:text-base"
                    >
                        See Case Studies
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 md:px-10 py-3.5 md:py-4 border border-white/20 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:border-white/40 hover:bg-white/[0.03] transition-all duration-300 text-sm md:text-base"
                    >
                        Start a Conversation
                    </motion.a>
                </div>

                <div className="mt-16 md:mt-24 flex items-center gap-6 md:gap-8 text-white/40 text-sm">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="flex-shrink-0" />
                        <span className="text-[11px] md:text-xs uppercase tracking-wider">Indore, India</span>
                    </div>
                    <div className="w-px h-5 bg-white/10" />
                    <div className="flex gap-5">
                        <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-accent to-transparent"
                />
            </div>
        </section>
    );
}
