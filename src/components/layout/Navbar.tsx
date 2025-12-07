import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navbarAnimation } from "./Navbar.animation"; // Adjust path if needed

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Trigger Animation on Mount
  useEffect(() => {
    if (!navRef.current) return;
    
    const ctx = navbarAnimation(navRef.current);
    
    return () => ctx.revert(); // Cleanup
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 border-b border-[#111] bg-[#111]/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo - Added 'nav-logo' class */}
        <a href="#" className="nav-logo text-xl font-bold text-[#f8fafc]">
          Habibi<span className="text-[#38bdf8]">.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#94a3b8]">
          {navLinks.map((link) => (
            <li key={link.href}>
              {/* Added 'nav-link' class */}
              <a 
                href={link.href} 
                className="nav-link inline-block hover:text-[#38bdf8] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon - Added 'nav-toggle' class */}
        <button
          className="nav-toggle md:hidden text-[#f8fafc] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-[#1e293b] flex flex-col items-center gap-6 py-6 shadow-2xl transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};