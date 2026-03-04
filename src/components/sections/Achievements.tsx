import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { ACHIEVEMENTS } from "../../constants";

export function Achievements() {
    return (
        <section className="py-28 md:py-36 px-6 md:px-24 bg-dark-surface flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-[9px] md:text-[10px] mb-6 tracking-[0.3em] uppercase">// 05_PROOF_VERIFIED</div>

                <GravityHeading
                    as="h2"
                    text="Verified Achievements"
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-6 md:mb-8"
                    spanClassName="text-gradient"
                />

                <p className="text-white/50 max-w-2xl mx-auto mb-16 md:mb-28 text-base md:text-lg leading-[1.6]">
                    Certifications, awards, and milestones that validate the craft.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-9 text-left">
                    {ACHIEVEMENTS.map((ach, idx) => (
                        <motion.div
                            key={ach.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-7 md:p-8 flex flex-col justify-between group hover:border-accent/40 transition-all duration-500 cursor-default"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-5 md:mb-7">
                                    <div className="text-[8px] md:text-[9px] font-mono px-2.5 py-1.5 bg-accent/10 border border-accent/20 rounded-md text-accent uppercase tracking-wider font-semibold group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                                        {ach.type}
                                    </div>
                                    <div className="text-[9px] md:text-[10px] font-mono text-white/40">{ach.year}</div>
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                                    {ach.title}
                                </h3>
                                <div className="text-sm text-white/50 mb-7 md:mb-8 group-hover:text-white/65 transition-colors duration-300">
                                    {ach.issuer}
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5 text-emerald-500 font-mono text-[9px] md:text-[10px] uppercase tracking-wider font-semibold group-hover:text-emerald-400 transition-colors duration-300">
                                <CheckCircle2 size={14} className="group-hover:scale-110 transition-transform" />
                                Verified
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
