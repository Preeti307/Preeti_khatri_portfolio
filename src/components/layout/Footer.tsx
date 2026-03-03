import { CONTACT_INFO } from "../../constants";

export function Footer() {
    return (
        <footer className="py-12 px-6 md:px-24 bg-dark-surface border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-ink font-bold">PK</div>
                    <div>
                        <div className="text-white font-bold tracking-tight">Preeti Khatri</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40">Data Scientist &amp; Engineer</div>
                    </div>
                </div>

                <div className="flex gap-8 md:gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
                    Built with Vite + React + Tailwind
                </div>
            </div>
        </footer>
    );
}
