import React, { useRef, useEffect } from "react";
import { 
  Code2, 
  Palette, 
  Database, 
  Terminal, 
  Users, 
  TrendingUp, 
  CheckCircle2 
} from "lucide-react";
import { skillsAnimation } from "./Skills.animation"; // Ensure path is correct

export const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize Animation
    const ctx = skillsAnimation(containerRef.current);
    
    // Cleanup function to prevent double-firing in React StrictMode
    return () => ctx.revert();
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      icon: <Code2 size={32} />,
      items: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "GSAP Animations"],
      accent: "text-blue-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]"
    },
    {
      title: "UI / Motion Design",
      icon: <Palette size={32} />,
      items: ["Framer Motion", "GSAP ScrollTrigger", "Responsive UI", "Micro-interactions", "Modern Layouts"],
      accent: "text-purple-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]"
    },
    {
      title: "Backend & APIs",
      icon: <Database size={32} />,
      items: ["Node.js", "Express", "REST APIs", "MongoDB", "Authentication"],
      accent: "text-green-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]"
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal size={32} />,
      items: ["Git & GitHub", "Vite", "Webpack", "Postman", "Dev Debugging"],
      accent: "text-yellow-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
    },
    {
      title: "Soft Skills",
      icon: <Users size={32} />,
      items: ["Clean Code", "Problem-Solving", "Attention to Detail", "Team Collaboration"],
      accent: "text-pink-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(244,114,182,0.4)]"
    },
    {
      title: "Learning & Growth",
      icon: <TrendingUp size={32} />,
      items: ["Advanced Animations", "Faster Workflows", "New UI Patterns", "Design Systems"],
      accent: "text-red-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(248,113,113,0.4)]"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="bg-[#000] min-h-screen py-24 relative overflow-hidden"
    >
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#38bdf8]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header - Class: skills-header */}
        <h2 className="skills-header text-4xl font-bold text-center text-[#f8fafc] mb-16">
          My <span className="text-[#38bdf8]">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              // Card - Class: skill-card
              className={`skill-card group p-8 rounded-2xl bg-[#1e293b]/40 backdrop-blur-md border border-white/5 
                hover:border-white/10 transition-all duration-300 hover:-translate-y-2 
                ${skill.glow}`}
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-white/5 ${skill.accent}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#f8fafc]">
                  {skill.title}
                </h3>
              </div>

              {/* List Items */}
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors duration-300">
                    <CheckCircle2 size={18} className={`mt-1 shrink-0 ${skill.accent}`} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};