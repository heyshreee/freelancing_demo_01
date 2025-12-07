import React, { useRef, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../../common/Button";
import { heroAnimation } from "./Hero.animation";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element exists before running animation
    if (!heroRef.current) return;

    // Run animation and capture the Context (ctx)
    const ctx = heroAnimation(heroRef.current);

    // CLEANUP: This kills the ScrollTrigger and Animation when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center bg-[#000] px-6 overflow-hidden"
      id="home"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Social Links */}
      <div className="hero-social absolute top-1/2 left-6 md:left-12 transform -translate-y-1/2 hidden md:flex flex-col gap-6 text-[#94a3b8] z-20">
        <a
          href="#"
          className="hover:text-[#38bdf8] transition-colors hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="#"
          className="hover:text-[#38bdf8] transition-colors hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="#"
          className="hover:text-[#38bdf8] transition-colors hover:scale-110"
        >
          <Mail size={24} />
        </a>

        {/* Added 'hero-social-line' class to target the line specifically */}
        <div className="hero-social-line w-[1px] h-24 bg-[#1e293b] mx-auto mt-2 origin-top"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Added 'invisible' to prevent flash of unstyled content (FOUC) before GSAP loads, 
            but GSAP .from() usually handles this. If you see a flash, add CSS opacity:0 to these classes */}

        <h1 className="hero-title text-5xl md:text-7xl font-extrabold mb-6 text-[#f8fafc] tracking-tight leading-tight">
          Building <span className="text-[#38bdf8]">Smooth</span>,{" "}
          <br className="hidden md:block" /> Modern Web Experiences
        </h1>

        <h4 className="hero-subtitle text-[#f8fafc] text-xl md:text-2xl font-semibold mb-6 tracking-wide">
          Frontend Developer <span className="text-[#38bdf8]">•</span> React{" "}
          <span className="text-[#38bdf8]">•</span> TypeScript{" "}
          <span className="text-[#38bdf8]">•</span> GSAP
        </h4>

        {/* Added class 'hero-subtext' so GSAP can find it */}
        <p className="hero-subtext text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          I build fast, intuitive interfaces with meaningful animations and a
          focus on performance-first design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
          {/* Ensure your Button component accepts className */}
          <div className="hero-btn">
            <Button variant="primary">View Projects</Button>
          </div>
          <div className="hero-btn">
            <Button variant="secondary">Contact</Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <span className="text-[#94a3b8] text-sm mb-2 block text-center">
          Scroll
        </span>
        <ArrowDown className="text-[#38bdf8] w-6 h-6 mx-auto" />
      </div>
    </section>
  );
};
