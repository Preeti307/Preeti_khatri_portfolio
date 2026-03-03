import { motion } from "motion/react";
import { Code2, BarChart3, Award, Github } from "lucide-react";

const stats = [
    { label: "Projects Completed", value: "10+", icon: <Code2 className="text-accent" /> },
    { label: "Data Insights", value: "500+", icon: <BarChart3 className="text-neon-purple" /> },
    { label: "Certifications", value: "3", icon: <Award className="text-neon-pink" /> },
    { label: "GitHub Repos", value: "20", icon: <Github className="text-accent" /> },
];

export function Stats() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-24 bg-dark-surface border-y border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center text-center group cursor-default"
                    >
                        <div className="mb-3 md:mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                        <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 tracking-tighter group-hover:text-accent transition-colors">
                            {stat.value}
                        </div>
                        <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
