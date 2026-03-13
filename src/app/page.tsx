import MeetingForm from "@/components/MeetingForm";
import Navbar from "@/components/Navbar";
import { Shield, Zap, Globe, Users, Lock, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-transparent blur-[100px] rounded-full"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent blur-[120px] rounded-full"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sistem Rapat Video Generasi Baru
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Konektivitas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                Tanpa Batas
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
              Rasakan pengalaman kolaborasi virtual premium yang super aman, 
              kualitas video HD, dan akses instan langsung dari browser Anda tanpa biaya.
            </p>

            <MeetingForm />
            
            <div className="pt-8 flex items-center gap-6 mt-8">
              <div className="flex -space-x-4">
                 {[
                   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                   "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                 ].map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover ring-2 ring-transparent hover:ring-blue-500 transition-all z-10 hover:z-20 relative" 
                      alt="User" 
                    />
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-xs font-bold z-0">
                   10k+
                 </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-gray-400 font-medium">Dipercaya profesional se-Indonesia.</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none perspective-1000">
            <div className="relative transform-gpu lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-transform duration-700 hover:rotate-0">
              {/* Glassmorphism Card */}
              <div className="relative border border-white/10 bg-white/5 backdrop-blur-2xl rounded-3xl p-2 shadow-2xl overflow-hidden ring-1 ring-white/5">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Video Conference Workspace" 
                  className="w-full h-auto rounded-2xl object-cover opacity-90 sepia-[.2] hue-rotate-180"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                   <button className="w-12 h-12 rounded-xl bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors"><Shield fill="currentColor" size={20} /></button>
                   <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><Zap fill="currentColor" size={20} /></button>
                   <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><Users fill="currentColor" size={20} /></button>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 -left-6 bg-blue-600 text-white py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-blue-500/20">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span className="font-semibold text-sm">Meeting Aktif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Showcase */}
      <section className="relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Arsitektur Kolaborasi Modern</h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">Infrastruktur rapat video mandiri yang dirancang mengutamakan kedaulatan data tingkat nasional, performa optimal, dan privasi penuh.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Akses Seketika</h3>
              <p className="text-gray-400 leading-relaxed">Tanpa proses instalasi yang berbelit. Klik tautan undangan untuk langsung terhubung dari browser perangkat apapun dengan performa native.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-600/20 text-green-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">Keamanan Enkripsi E2E</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">Lalu lintas data konferensi dienkripsi secara end-to-end, memastikan diskusi internal Anda 100% rahasia dari pantauan pihak ketiga.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Infrastruktur Global</h3>
              <p className="text-gray-400 leading-relaxed">Arsitektur server terdistribusi secara cerdas yang menangani koneksi peer-to-peer dan menjamin latensi super stabil di seluruh wilayah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center shrink-0">
               <Video className="text-white w-3 h-3" />
             </div>
             <span className="text-white font-semibold tracking-tight">TDN Meet</span>
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Aplikasi Teknologi Digital Nasional Meet. Kedaulatan Berkomunikasi.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Shield size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Globe size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
