import { GravityHeading } from "../ui/GravityHeading";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-6 md:px-24 bg-ink flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl w-full flex flex-col items-center">
                <div className="text-accent font-mono text-xs mb-6 md:mb-8 tracking-widest uppercase">// 01_THE_PHILOSOPHY</div>

                <GravityHeading
                    as="h2"
                    text="From Foundations to Production."
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 md:mb-12 leading-tight"
                    spanClassName="text-gradient"
                />

                <p className="text-base md:text-xl text-white/40 leading-relaxed mb-8 md:mb-12 font-light max-w-3xl">
                    A deliberate progression — not just accumulating skills, but building the judgment to apply them at scale.
                    I specialize in extracting value from complex datasets and building the systems that deliver those insights to users.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full text-left">
                    {[
                        { label: "Data First", desc: "Every decision backed by evidence, not intuition." },
                        { label: "Systems Thinking", desc: "Building for scale, not just for today." },
                        { label: "Continuous Growth", desc: "Phase by phase, always pushing the boundary." },
                    ].map((item) => (
                        <div key={item.label} className="glass-card p-6">
                            <div className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2">{item.label}</div>
                            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
