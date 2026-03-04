import { CONTACT_INFO } from "../../constants";

export function Footer() {
    return (
        <footer className="py-14 md:py-16 px-6 md:px-24 bg-dark-surface border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-4 md:gap-5">
                    <div className="w-11 h-11 bg-accent rounded-lg flex items-center justify-center text-ink font-bold text-sm">PK</div>
                    <div>
                        <div className="text-white font-semibold tracking-tight">Preeti Khatri</div>
                        <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/40">Data Scientist &amp; Engineer</div>
                    </div>
                </div>

                <div className="flex gap-10 md:gap-14 text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-white/40">
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">GitHub</a>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
                </div>

                <div className="text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-white/30">
                    Built with Vite + React + Tailwind
                </div>
            </div>
        </footer>
    );
}
