import { useRef, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactAnimation } from "./Contact.animation"; // Adjust path if needed

export const Contact = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = contactAnimation(containerRef.current);
    
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="contact"
      // CHANGED: bg-[#0f172a] matches the theme better than pure black
      className="bg-[#000] min-h-screen py-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow blobs */}
      {/* FIXED: Changed invisible bg-[#000]/10 to visible bg-[#38bdf8]/10 */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#38bdf8]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        
        {/* Header - Class: contact-header */}
        <div className="contact-header">
          <h2 className="text-4xl font-bold text-white">
            Let's <span className="text-[#38bdf8]">Connect</span>
          </h2>
          <p className="text-[#94a3b8] mt-4 text-lg leading-relaxed">
            Have a project in mind or just want to say hello?  
            Feel free to reach out — I'm always open to collaborating and exploring new ideas.
          </p>
        </div>

        {/* Contact Card - Class: contact-card */}
        <div className="contact-card mt-12 bg-[#1e293b]/40 backdrop-blur-md p-10 rounded-2xl border border-white/5 shadow-xl">
          <div className="flex flex-col items-center space-y-6">
            
            {/* Email Button - Class: contact-item */}
            <a
              href="mailto:yourmail@example.com"
              className="contact-btn inline-flex items-center gap-3 bg-[#38bdf8] text-black px-8 py-4 rounded-lg 
                         font-bold hover:bg-[#0ea5e9] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              <Mail size={20} />
              Send me an Email
            </a>

            {/* Divider Text - Class: contact-item */}
            <p className="contact-item text-[#94a3b8] text-sm font-medium uppercase tracking-wider">
              Or find me on
            </p>

            {/* Social Links - Class: contact-item */}
            <div className="contact-item flex items-center gap-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#38bdf8] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};