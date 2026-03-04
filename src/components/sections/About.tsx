import { GravityHeading } from "../ui/GravityHeading";

export function About() {
    return (
        <section id="about" className="py-28 md:py-36 px-6 md:px-24 bg-ink flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl w-full flex flex-col items-center">
                <div className="text-accent font-mono text-[9px] md:text-[10px] mb-8 tracking-[0.3em] uppercase">// 01_THE_PHILOSOPHY</div>

                <GravityHeading
                    as="h2"
                    text="From Foundations to Production."
                    className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-10 md:mb-14 leading-tight"
                    spanClassName="text-gradient"
                />

                <p className="text-base md:text-lg text-white/50 leading-[1.7] mb-10 md:mb-16 font-light max-w-3xl">
                    A deliberate progression — not just accumulating skills, but building the judgment to apply them at scale.
                    I specialize in extracting value from complex datasets and building the systems that deliver those insights to users.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-7 w-full text-left">
                    {[
                        { label: "Data First", desc: "Every decision backed by evidence, not intuition." },
                        { label: "Systems Thinking", desc: "Building for scale, not just for today." },
                        { label: "Continuous Growth", desc: "Phase by phase, always pushing the boundary." },
                    ].map((item) => (
                        <div key={item.label} className="glass-card p-6 md:p-7">
                            <div className="text-accent font-mono text-[8px] md:text-[9px] uppercase tracking-wider mb-3 font-semibold">{item.label}</div>
                            <p className="text-white/55 text-xs md:text-sm leading-[1.6]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
