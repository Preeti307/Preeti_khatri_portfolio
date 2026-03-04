import { motion } from "motion/react";
import { ArrowUpRight, Database } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { PROJECTS } from "../../constants";

export function Projects() {
    return (
        <section id="projects" className="py-28 md:py-36 px-6 md:px-24 bg-ink flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-[9px] md:text-[10px] mb-6 tracking-[0.3em] uppercase">// 04_CASE_STUDIES</div>

                <GravityHeading
                    as="h2"
                    text="Problems Solved."
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-6 md:mb-8"
                    spanClassName="text-gradient"
                />

                <p className="text-white/50 max-w-2xl mx-auto mb-16 md:mb-28 text-base md:text-lg">
                    A showcase of real data problems tackled with analytical precision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 text-left">
                    {PROJECTS.slice(0, 4).map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02, y: -8 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-card p-7 md:p-9 group relative overflow-hidden flex flex-col justify-between h-[340px] md:h-[420px] transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 p-7 md:p-9 opacity-10 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                                <ArrowUpRight size={36} className="text-accent" />
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2.5 mb-6 md:mb-8">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-[8px] md:text-[9px] font-mono px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-white/60 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-4 md:mb-5 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-white/45 leading-[1.65] group-hover:text-white/60 transition-colors duration-300 text-sm md:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 md:gap-5 mt-6">
                                <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-ink transition-all duration-500 flex-shrink-0">
                                    <Database size={18} />
                                </div>
                                <span className="text-[10px] md:text-[11px] uppercase tracking-wider font-semibold text-white/40 group-hover:text-white/80 transition-colors duration-300">
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
