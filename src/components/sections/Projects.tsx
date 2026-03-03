import { motion } from "motion/react";
import { ArrowUpRight, Database } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { PROJECTS } from "../../constants";

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 px-6 md:px-24 bg-ink flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-xs mb-4 tracking-widest uppercase">// 04_CASE_STUDIES</div>

                <GravityHeading
                    as="h2"
                    text="Problems Solved."
                    className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6"
                    spanClassName="text-gradient"
                />

                <p className="text-white/40 max-w-xl mx-auto mb-12 md:mb-24 text-sm md:text-base">
                    A showcase of real data problems tackled with analytical precision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
                    {PROJECTS.slice(0, 4).map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, y: -10 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-card p-6 md:p-8 group relative overflow-hidden flex flex-col justify-between h-[320px] md:h-[400px] transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                                <ArrowUpRight size={32} className="text-accent" />
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-[9px] md:text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-white/60 group-hover:border-accent/30 group-hover:text-accent transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-3 md:mb-4 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors text-sm md:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-500">
                                    <Database size={16} />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-colors">
                                    {project.category}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
