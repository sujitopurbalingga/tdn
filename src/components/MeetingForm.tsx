"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Video, Keyboard, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MeetingForm() {
  const router = useRouter();
  const [meetingCode, setMeetingCode] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (meetingCode.trim()) {
      router.push(`/meeting/${meetingCode.trim()}`);
    }
  };

  const handleCreate = () => {
    // Generate a secure random 10-character alphanumeric string 
    const randomId = Math.random().toString(36).substring(2, 12);
    router.push(`/meeting/${randomId}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full max-w-2xl"
    >
      <button 
        onClick={handleCreate}
        className="group relative flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] w-full sm:w-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        <Video size={22} className="relative z-10" />
        <span className="relative z-10">Rapat Baru</span>
      </button>

      <form onSubmit={handleJoin} className="relative w-full sm:flex-1 h-14">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <Keyboard size={22} />
        </div>
        <input 
          type="text" 
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
          placeholder="Masukkan kode rapat" 
          className="w-full h-full pl-12 pr-28 py-3 outline-none border border-gray-700/50 bg-gray-800/40 backdrop-blur-md text-white rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder-gray-500 shadow-inner"
        />
        <button 
          type="submit" 
          disabled={!meetingCode.trim()}
          className="absolute inset-y-1.5 right-1.5 px-5 bg-white/5 hover:bg-blue-600 focus:bg-blue-600 text-white font-medium rounded-lg disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 flex items-center gap-2"
        >
          Gabung
          <ArrowRight size={16} />
        </button>
      </form>
    </motion.div>
  );
}
