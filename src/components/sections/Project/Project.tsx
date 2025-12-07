import React, { useRef, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectAnimation } from "./Project.animation"; // Adjust path if needed

export const Project = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize Animation
    const ctx = projectAnimation(containerRef.current);
    
    // Cleanup
    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern portfolio built with React, TypeScript, Tailwind CSS, and GSAP animations for smooth scrolling and rich interactions.",
      tech: ["React", "Tailwind", "GSAP", "TypeScript"],
      link: "#",
    },
    {
      title: "E-Commerce UI",
      desc: "A clean and responsive e-commerce frontend with product filtering, cart logic, modern animations and optimized UI flow.",
      tech: ["React", "Context API", "Tailwind"],
      link: "#",
    },
    {
      title: "Animated Landing Page",
      desc: "A high-performance landing page focused on micro-interactions, scroll-triggered animations, and pixel-perfect visuals.",
      tech: ["GSAP", "ScrollTrigger", "Vite", "TypeScript"],
      link: "#",
    },
    {
      title: "Real-Time Chat App",
      desc: "A simple yet powerful chat interface with typing indicators, smooth UI transitions, and WebSocket messaging.",
      tech: ["Node.js", "Express", "Socket.io", "React"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      desc: "A weather forecast UI with location search, real-time API data, responsive charts, and clean component-based design.",
      tech: ["React", "API", "Tailwind"],
      link: "#",
    },
    {
      title: "Task Manager App",
      desc: "A productivity-focused task tracker with animations, filters, drag-and-drop support, and local state persistence.",
      tech: ["React", "Framer Motion", "LocalStorage"],
      link: "#",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      // Changed bg-[#000] to bg-[#0f172a] to match the theme consistency
      className="bg-[#000] min-h-screen py-24 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#38bdf8]/10 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Added 'project-header' class for GSAP */}
        <h2 className="project-header text-4xl font-bold text-center text-[#f8fafc] mb-16">
          My <span className="text-[#38bdf8]">Projects</span>
        </h2>

        {/* Grid of Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Added wrapper div with 'project-card' class for animation target
            <div key={index} className="project-card h-full">
              <ProjectCard
                title={project.title}
                desc={project.desc}
                tech={project.tech}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};