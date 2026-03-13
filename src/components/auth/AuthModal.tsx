"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6"
          >
            <div className="relative bg-[#0a0f1c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-lg"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {isLogin ? "Selamat Datang" : "Buat Akun"}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {isLogin 
                      ? "Masuk ke Teknologi Digital Nasional Meet" 
                      : "Daftar untuk mulai terhubung dengan cerdas"}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Fitur Autentikasi sedang dalam pengembangan untuk versi selanjutnya.");
                  onClose();
                }}>
                  {!isLogin && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        placeholder="Nama Lengkap"
                        className="w-full bg-[#111827] border border-gray-800 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                        required
                      />
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      placeholder="Alamat Email"
                      className="w-full bg-[#111827] border border-gray-800 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                      <Lock size={18} />
                    </div>
                    <input
                      type="password"
                      placeholder="Kata Sandi"
                      className="w-full bg-[#111827] border border-gray-800 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>

                  {isLogin && (
                    <div className="flex justify-end">
                      <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        Lupa kata sandi?
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 mt-6 group"
                  >
                    {isLogin ? "Masuk ke Akun" : "Daftar Sekarang"}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-gray-400 text-sm">
                    {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
                    <button 
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      {isLogin ? "Daftar gratis" : "Masuk di sini"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
