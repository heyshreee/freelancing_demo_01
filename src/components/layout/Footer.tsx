import React, { useRef, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { footerAnimation } from "./Footer.animation"; // Adjust path if needed

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!footerRef.current) return;
    
    const ctx = footerAnimation(footerRef.current);
    
    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      // CHANGED: bg-[#0f172a] to match the theme consistency
      className="bg-[#000] py-12 border-t border-white/10 relative overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-[#38bdf8]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Logo / Name - Class: footer-logo */}
        <h2 className="footer-logo text-2xl font-bold text-white mb-6">
          Habibi<span className="text-[#38bdf8]">.dev</span>
        </h2>

        {/* Social Icons - Class: footer-social */}
        <div className="footer-social flex items-center gap-6 mb-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-white transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:yourmail@example.com"
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-all hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Links - Class: footer-nav */}
        <div className="footer-nav flex items-center gap-6 text-sm text-[#94a3b8] mb-8">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Divider - Class: footer-divider */}
        <div className="footer-divider w-full max-w-2xl h-px bg-white/10 mb-8"></div>

        {/* Copyright - Class: footer-copy */}
        <p className="footer-copy text-[#64748b] text-sm">
          © {year} Habibi.dev — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};