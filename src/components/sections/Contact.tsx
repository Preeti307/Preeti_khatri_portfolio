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
            <div className="relative z-10 w-full max-w-6xl text-center mb-12 md:mb-20 flex flex-col items-center">
                <div className="text-accent font-mono text-xs mb-6 md:mb-8 tracking-widest uppercase">// CONTACT_INIT</div>
                <GravityHeading
                    as="h2"
                    text="Say Hello."
                    className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-none"
                    spanClassName="text-gradient"
                />
                <p className="text-white/40 text-base md:text-lg max-w-xl">
                    Whether you have a project, an opportunity, or just want to connect — the terminal is open.
                </p>
            </div>

            {/* Content grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 w-full max-w-6xl">
                {/* Contact info */}
                <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email</div>
                            <div className="text-white font-mono text-sm md:text-base break-all">{CONTACT_INFO.email}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">LinkedIn</div>
                            <a
                                href={CONTACT_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-mono text-sm md:text-base hover:text-accent transition-colors"
                            >
                                preeti-khatri-614689319
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="glass-card p-6 md:p-8 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-6 md:mb-8 text-white/20">
                        <TerminalIcon size={14} />
                        <span className="text-xs md:text-sm">contact.sh — mode=professional</span>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <label className="block text-accent mb-2 text-xs">$ YOUR_NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded p-2 md:p-3 text-white focus:border-accent outline-none transition-colors text-xs md:text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-accent mb-2 text-xs">$ EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded p-2 md:p-3 text-white focus:border-accent outline-none transition-colors text-xs md:text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-accent mb-2 text-xs">$ SUBJECT</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded p-2 md:p-3 text-white focus:border-accent outline-none transition-colors text-xs md:text-sm"
                                placeholder="Project Inquiry..."
                            />
                        </div>
                        <div>
                            <label className="block text-accent mb-2 text-xs">$ MESSAGE</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded p-2 md:p-3 text-white focus:border-accent outline-none transition-colors h-28 md:h-32 resize-none text-xs md:text-sm"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button className="w-full py-3 md:py-4 bg-accent text-ink font-bold rounded hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all text-xs md:text-sm">
                            $ send_message --async
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
