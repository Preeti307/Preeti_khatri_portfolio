import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { ACHIEVEMENTS } from "../../constants";

export function Achievements() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-24 bg-dark-surface flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-xs mb-4 tracking-widest uppercase">// 05_PROOF_VERIFIED</div>

                <GravityHeading
                    as="h2"
                    text="Verified Achievements"
                    className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6"
                    spanClassName="text-gradient"
                />

                <p className="text-white/40 max-w-lg mx-auto mb-12 md:mb-24 text-sm md:text-base">
                    Certifications, awards, and milestones that validate the craft.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-left">
                    {ACHIEVEMENTS.map((ach, idx) => (
                        <motion.div
                            key={ach.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-6 md:p-8 flex flex-col justify-between group hover:border-accent/50 transition-all duration-500 cursor-default"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div className="text-[10px] font-mono px-2 py-1 bg-accent/10 border border-accent/20 rounded text-accent uppercase tracking-widest group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                                        {ach.type}
                                    </div>
                                    <div className="text-[10px] font-mono text-white/40">{ach.year}</div>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors">
                                    {ach.title}
                                </h3>
                                <div className="text-sm text-white/40 mb-6 md:mb-8 group-hover:text-white/60 transition-colors">
                                    {ach.issuer}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] uppercase tracking-widest font-bold group-hover:text-emerald-400 transition-colors">
                                <CheckCircle2 size={13} className="group-hover:scale-125 transition-transform" />
                                Verified
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
