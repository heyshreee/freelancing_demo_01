import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen  text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="pt-20"> 
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
