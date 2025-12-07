import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const variants = {
    primary:
      "px-8 py-3 bg-[#38bdf8] text-[#0f172a] font-bold rounded-lg hover:bg-[#0ea5e9] transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]",
    secondary:
      "px-8 py-3 border border-[#1e293b] text-[#94a3b8] font-medium rounded-lg hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all bg-[#0f172a]/50 backdrop-blur-sm",
    ghost:
      "bg-transparent text-white/70 hover:text-white hover:-translate-y-1",
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClass} onClick={onClick}>
      {children}
    </button>
  );
};
