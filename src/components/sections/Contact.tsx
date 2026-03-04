import { useState } from "react";
import { Mail, Linkedin, Terminal as TerminalIcon } from "lucide-react";
import { GravityHeading } from "../ui/GravityHeading";
import { CONTACT_INFO } from "../../constants";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-24 bg-ink relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]" />
            </div>

            {/* Centered heading block */}
            <div className="relative z-10 w-full max-w-6xl text-center mb-16 md:mb-24 flex flex-col items-center">
                <div className="text-accent font-mono text-[9px] md:text-[10px] mb-8 tracking-[0.3em] uppercase">// CONTACT_INIT</div>
                <GravityHeading
                    as="h2"
                    text="Say Hello."
                    className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-6 md:mb-8 leading-tight"
                    spanClassName="text-gradient"
                />
                <p className="text-white/50 text-base md:text-lg max-w-2xl leading-[1.6]">
                    Whether you have a project, an opportunity, or just want to connect — the terminal is open.
                </p>
            </div>

            {/* Content grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 w-full max-w-6xl">
                {/* Contact info */}
                <div className="space-y-8 md:space-y-10">
                    <div className="flex items-center gap-5 md:gap-7">
                        <div className="w-11 h-11 md:w-13 md:h-13 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-1.5">Email</div>
                            <div className="text-white font-mono text-sm md:text-base break-all">{CONTACT_INFO.email}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 md:gap-7">
                        <div className="w-11 h-11 md:w-13 md:h-13 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-1.5">LinkedIn</div>
                            <a
                                href={CONTACT_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-mono text-sm md:text-base hover:text-accent transition-colors duration-300"
                            >
                                preeti-khatri-614689319
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="glass-card p-7 md:p-9 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-8 md:mb-10 text-white/30">
                        <TerminalIcon size={15} />
                        <span className="text-[11px] md:text-xs">contact.sh — mode=professional</span>
                    </div>

                    <div className="space-y-5 md:space-y-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
                            <div>
                                <label className="block text-accent mb-2.5 text-xs font-semibold">$ YOUR_NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-accent/50 focus:bg-white/8 outline-none transition-all duration-300 text-xs md:text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-accent mb-2.5 text-xs font-semibold">$ EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-accent/50 focus:bg-white/8 outline-none transition-all duration-300 text-xs md:text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-accent mb-2.5 text-xs font-semibold">$ SUBJECT</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-accent/50 focus:bg-white/8 outline-none transition-all duration-300 text-xs md:text-sm"
                                placeholder="Project Inquiry..."
                            />
                        </div>
                        <div>
                            <label className="block text-accent mb-2.5 text-xs font-semibold">$ MESSAGE</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 md:p-3 text-white focus:border-accent/50 focus:bg-white/8 outline-none transition-all duration-300 h-32 md:h-36 resize-none text-xs md:text-sm"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button className="w-full py-3.5 md:py-4 bg-accent text-ink font-semibold rounded-lg hover:shadow-[0_0_28px_rgba(0,242,255,0.5)] transition-all duration-300 text-xs md:text-sm">
                            $ send_message --async
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
