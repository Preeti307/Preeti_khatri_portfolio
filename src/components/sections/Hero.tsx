import { motion } from "motion/react";
import { MapPin, Github, Linkedin } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { CONTACT_INFO } from "../../constants";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-24 overflow-hidden bg-ink">
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
                <div className="text-accent font-mono text-[10px] md:text-xs mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] uppercase opacity-80">
                    System.Initialize(Preeti_Khatri)
                </div>

                <GravityHeading
                    as="h1"
                    text="PREETI KHATRI"
                    className="text-[13vw] sm:text-[11vw] md:text-[8vw] font-black leading-none tracking-tighter text-white mb-8 md:mb-12 font-display"
                    spanClassName="text-gradient"
                />

                <p className="max-w-xl md:max-w-2xl text-base md:text-xl lg:text-2xl text-white/40 leading-relaxed mb-10 md:mb-16 font-light px-4 md:px-0">
                    Engineering{" "}
                    <span className="text-white font-medium">high-performance data architectures</span>{" "}
                    and delivering intelligent digital experiences that redefine the boundary between data and decision.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 w-full px-4 sm:px-0">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 md:py-4 bg-accent text-ink font-bold rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all text-sm md:text-base"
                    >
                        See Case Studies
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/5 transition-all text-sm md:text-base"
                    >
                        Start a Conversation
                    </motion.a>
                </div>

                <div className="mt-12 md:mt-24 flex items-center gap-6 text-white/40">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="md:w-4 md:h-4" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest">Indore, India</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex gap-4">
                        <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={16} className="md:w-[18px] md:h-[18px]" /></a>
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={16} className="md:w-[18px] md:h-[18px]" /></a>
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-accent to-transparent"
                />
            </div>
        </section>
    );
}
