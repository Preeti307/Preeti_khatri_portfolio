import { motion } from "motion/react";
import { GravityHeading } from "../ui/GravityHeading";
import { EXPERIENCES } from "../../constants";

export function Journey() {
    return (
        <section id="experience" className="py-28 md:py-36 px-6 md:px-24 bg-dark-surface flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-[9px] md:text-[10px] mb-6 tracking-[0.3em] uppercase">// 03_THE_JOURNEY</div>

                <GravityHeading
                    as="h2"
                    text="My Journey"
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-6 md:mb-8"
                    spanClassName="text-gradient"
                />

                <p className="text-white/50 max-w-2xl mx-auto mb-16 md:mb-28 text-base md:text-lg leading-[1.6]">
                    A chronological path from first principles to production systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-9 text-left">
                    {EXPERIENCES.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, y: -8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-7 md:p-8 group hover:border-accent/40 transition-all duration-500 cursor-default"
                        >
                            <div className="text-accent font-mono text-[8px] md:text-[9px] mb-5 tracking-wider group-hover:tracking-[0.15em] transition-all font-semibold">
                                {exp.phase} — {exp.period}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                                {exp.company}
                            </h3>
                            <p className="text-sm text-white/55 leading-[1.65] mb-7 md:mb-8 group-hover:text-white/70 transition-colors duration-300">
                                {exp.description}
                            </p>
                            <div className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-white/40">{exp.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
