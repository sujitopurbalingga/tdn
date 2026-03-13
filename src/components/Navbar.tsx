"use client";

import { useState } from "react";
import { Video } from "lucide-react";
import AuthModal from "@/components/auth/AuthModal";

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-white/5 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
              <Video className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-white">Teknologi Digital Nasional</span>
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">Meet</span>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-400 hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-white transition-colors">Beranda</a>
            <a href="#" className="hover:text-white transition-colors">Fitur Keamanan</a>
            <a href="#" className="hover:text-white transition-colors">Panduan</a>
            <a href="#" className="hover:text-white transition-colors">Kontak</a>
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg transition-all border border-white/5"
            >
              Masuk
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal Container */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}
