import React from "react";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  tech,
  link,
}) => {
  return (
    <div
      className="group relative bg-[#1e293b]/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 
                 hover:border-[#38bdf8]/50 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] 
                 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Header: Folder Icon + Link */}
      <div className="flex justify-between items-center mb-6">
        <Folder size={40} className="text-[#38bdf8]" />
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
          aria-label={`View ${title} project`}
        >
          <ExternalLink size={22} />
        </a>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#f8fafc] mb-3 group-hover:text-[#38bdf8] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-grow">
        {desc}
      </p>

      {/* Tech Stack List */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs font-medium text-[#38bdf8]/80 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};