import React, { useRef, useEffect } from "react";
import { aboutAnimation } from "./About.animation"; // Adjust path if needed

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize Animation
    const ctx = aboutAnimation(containerRef.current);
    
    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-[#000] py-24 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* --- Background Blobs --- */}
      {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#38bdf8]/20 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div> */}

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#f8fafc 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header - Added 'about-header' class */}
        <h2 className="about-header text-4xl md:text-5xl font-bold text-center text-[#f8fafc] mb-12">
          About <span className="text-[#38bdf8]">Me</span>
        </h2>

        {/* Outer glow wrapper */}
        <div className="relative group">
          {/* Soft gradient glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8]/30 to-purple-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>

          {/* Card - Added 'about-card' class */}
          <div className="about-card relative bg-[#1e293b]/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-[#38bdf8]/20 shadow-2xl">
            
            <div className="flex flex-col space-y-6 text-lg leading-relaxed text-[#94a3b8]">
              {/* Paragraphs - Added 'about-text' class */}
              <p className="about-text">
                I'm a frontend-focused developer who loves crafting{" "}
                <span className="text-[#f8fafc] font-semibold">smooth</span>,{" "}
                <span className="text-[#f8fafc] font-semibold">interactive</span>, 
                and <span className="text-[#f8fafc] font-semibold">performance-driven</span>{" "}
                web experiences. I care about structure, clean code, and UI that feels
                alive.
              </p>

              <p className="about-text">
                I specialize in{" "}
                <span className="text-[#38bdf8]">React</span>,{" "}
                <span className="text-[#38bdf8]">TypeScript</span>,{" "}
                <span className="text-[#38bdf8]">Node.js</span>,{" "}
                <span className="text-[#38bdf8]">Tailwind</span>, and{" "}
                <span className="text-[#38bdf8]">GSAP</span>.  
                My workflow blends engineering discipline with motion-driven UI.
              </p>

              <p className="about-text">
                I'm constantly pushing myself to learn new tools, refine my animation 
                techniques, and build digital experiences that feel intuitive and effortless.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-10 pt-8 border-t border-[#f8fafc]/10 flex flex-wrap justify-center gap-3">
              {["React", "TypeScript", "Node.js", "Tailwind", "GSAP"].map(
                (tech) => (
                  <span
                    key={tech}
                    // Added 'tech-pill' class
                    className="tech-pill px-4 py-2 text-sm font-medium text-[#38bdf8] bg-[#000]/30 rounded-full border border-[#38bdf8]/30 hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};