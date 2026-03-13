"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Video, Keyboard, ArrowRight, User, Type } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MeetingForm() {
  const router = useRouter();
  const [meetingCode, setMeetingCode] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [hostName, setHostName] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (meetingCode.trim()) {
      router.push(`/meeting/${meetingCode.trim()}`);
    }
  };

  const startNewMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName.trim() || !meetingTitle.trim()) return;

    // Generate a secure random 10-character alphanumeric string 
    const randomId = Math.random().toString(36).substring(2, 12);
    
    // Store meeting info in localStorage to be retrieved by the meeting room page
    localStorage.setItem(`tdn_meet_${randomId}`, JSON.stringify({
      hostName: hostName.trim(),
      title: meetingTitle.trim()
    }));

    router.push(`/meeting/${randomId}`);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full max-w-2xl relative z-10"
      >
        <button 
          onClick={() => setIsCreating(true)}
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

      {/* Create Meeting Modal */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0f1c] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Video className="text-blue-500" size={24} />
                    Buat Ruang Rapat
                  </h3>
                  <button 
                    onClick={() => setIsCreating(false)}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    ✕
                  </button>
                </div>
                
                <form onSubmit={startNewMeeting} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block">Nama Anda (Host)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={hostName}
                        onChange={(e) => setHostName(e.target.value)}
                        placeholder="Cth: Sujito" 
                        className="w-full bg-[#111827] border border-gray-800 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 block">Judul Rapat</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Type size={18} />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={meetingTitle}
                        onChange={(e) => setMeetingTitle(e.target.value)}
                        placeholder="Cth: Rapat Evaluasi Mingguan TDN" 
                        className="w-full bg-[#111827] border border-gray-800 text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-blue-500/50"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setIsCreating(false)}
                      className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-white hover:bg-white/5 font-medium transition-colors"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      disabled={!hostName.trim() || !meetingTitle.trim()}
                      className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
                    >
                      Mulai Rapat
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
