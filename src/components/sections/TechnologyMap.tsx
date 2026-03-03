import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { GravityHeading } from "../ui/GravityHeading";
import { SKILLS_NODES, SKILLS_LINKS } from "../../constants";

export function TechnologyMap() {
    const svgRef = useRef<SVGSVGElement>(null);

    // Inject animation keyframes once
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `@keyframes dash { to { stroke-dashoffset: -10; } }`;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    useEffect(() => {
        if (!svgRef.current) return;
        const width = 800;
        const height = 500;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const simulation = d3.forceSimulation(SKILLS_NODES as any)
            .force("link", d3.forceLink(SKILLS_LINKS).id((d: any) => d.id).distance(100))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg.append("g")
            .attr("stroke", "#FFF").attr("stroke-opacity", 0.1)
            .selectAll("line").data(SKILLS_LINKS).join("line")
            .attr("stroke-width", 1).attr("class", "skill-link");

        const node = svg.append("g").selectAll("g").data(SKILLS_NODES).join("g")
            .attr("class", "skill-node-group")
            .on("mouseenter", (event, d: any) => {
                link
                    .attr("stroke-opacity", (l: any) => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.02)
                    .attr("stroke-width", (l: any) => (l.source.id === d.id || l.target.id === d.id) ? 3 : 1)
                    .attr("stroke", (l: any) => (l.source.id === d.id || l.target.id === d.id) ? d.color : "#FFF")
                    .style("stroke-dasharray", (l: any) => (l.source.id === d.id || l.target.id === d.id) ? "5,5" : "none")
                    .style("animation", (l: any) => (l.source.id === d.id || l.target.id === d.id) ? "dash 1s linear infinite" : "none");
                node.attr("opacity", (n: any) => {
                    const connected = SKILLS_LINKS.some((l: any) =>
                        (l.source.id === d.id && l.target.id === n.id) ||
                        (l.target.id === d.id && l.source.id === n.id) || n.id === d.id
                    );
                    return connected ? 1 : 0.1;
                });
                d3.select(event.currentTarget).select("circle")
                    .transition().duration(300).attr("r", 15)
                    .style("filter", `drop-shadow(0 0 15px ${d.color})`);
            })
            .on("mouseleave", (event) => {
                link.attr("stroke-opacity", 0.1).attr("stroke-width", 1).attr("stroke", "#FFF")
                    .style("stroke-dasharray", "none").style("animation", "none");
                node.attr("opacity", 1);
                d3.select(event.currentTarget).select("circle")
                    .transition().duration(300).attr("r", 8).style("filter", "none");
            })
            .call(d3.drag<any, any>()
                .on("start", (event, d) => { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
                .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
                .on("end", (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
            );

        node.append("circle").attr("r", 8).attr("fill", (d: any) => d.color).attr("class", "tech-node");
        node.append("text").text((d: any) => d.id)
            .attr("x", 12).attr("y", 4).attr("fill", "white")
            .attr("font-size", "10px").attr("font-family", "JetBrains Mono").attr("opacity", 0.6);

        simulation.on("tick", () => {
            link.attr("x1", (d: any) => d.source.x).attr("y1", (d: any) => d.source.y)
                .attr("x2", (d: any) => d.target.x).attr("y2", (d: any) => d.target.y);
            node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
        });

        return () => simulation.stop();
    }, []);

    return (
        <section id="skills" className="py-24 md:py-32 px-6 md:px-24 bg-ink flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-6xl">
                <div className="text-accent font-mono text-xs mb-4 tracking-widest uppercase">// 02_SKILLS_CONSTELLATION</div>

                <GravityHeading
                    as="h2"
                    text="Technology Map"
                    className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6"
                    spanClassName="text-gradient"
                />

                <p className="text-white/40 max-w-lg mx-auto mb-12 md:mb-24 text-sm md:text-base">
                    Every tool in my stack, and how they connect. Hover any node to explore the relationships.
                </p>

                <div className="relative glass-card p-4 md:p-8 overflow-hidden">
                    <svg ref={svgRef} viewBox="0 0 800 500" className="w-full h-auto max-w-4xl mx-auto" />

                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex gap-4 md:gap-6">
                        {[
                            { color: "bg-accent", label: "Data" },
                            { color: "bg-neon-purple", label: "Web" },
                            { color: "bg-neon-pink", label: "Core" },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
