import { motion } from "motion/react";
import { GravityHeading } from "../ui/GravityHeading";
import { EXPERIENCES } from "../../constants";

export function Journey() {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 md:px-24 bg-dark-surface flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-xs mb-4 tracking-widest uppercase">// 03_THE_JOURNEY</div>

                <GravityHeading
                    as="h2"
                    text="My Journey"
                    className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6"
                    spanClassName="text-gradient"
                />

                <p className="text-white/40 max-w-xl mx-auto mb-12 md:mb-24 text-sm md:text-base">
                    A chronological path from first principles to production systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
                    {EXPERIENCES.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, y: -10 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-6 md:p-8 group hover:border-accent/50 transition-all duration-500 cursor-default"
                        >
                            <div className="text-accent font-mono text-[10px] mb-4 tracking-widest group-hover:tracking-[0.2em] transition-all">
                                {exp.phase} — {exp.period}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                                {exp.company}
                            </h3>
                            <p className="text-sm text-white/60 leading-relaxed mb-6 md:mb-8 group-hover:text-white/80 transition-colors">
                                {exp.description}
                            </p>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">{exp.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
