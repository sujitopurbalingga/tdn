"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Loader2, Video, LogOut, Share2, Copy, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Jitsi is a client-side only library, it does not support SSR
const JitsiMeeting = dynamic(
  () => import("@jitsi/react-sdk").then((mod) => mod.JitsiMeeting),
  { ssr: false, loading: () => <MeetingLoadingState /> }
);

function MeetingLoadingState() {
  return (
    <div className="w-full h-full bg-[#050505] flex items-center justify-center text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
             <Video className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <p className="text-gray-400 font-medium tracking-wide animate-pulse">Menyiapkan Ruang Rapat Aman...</p>
      </div>
    </div>
  );
}

export default function MeetingRoom() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [isClient, setIsClient] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyInviteLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  if (!isClient) return null;

  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col font-sans overflow-hidden selection:bg-blue-500/30">
      {/* Top App Bar */}
      <header className="h-16 bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 sm:px-6 justify-between shrink-0 z-50">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/10 shrink-0">
             <Video className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex flex-col max-w-[150px] sm:max-w-xs">
            <span className="font-semibold text-white tracking-tight leading-tight truncate">Teknologi Digital Nasional</span>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">Meet</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-400 text-xs truncate">Room: {id}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={copyInviteLink}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-medium text-gray-300 transition-all active:scale-95"
          >
            {isCopied ? <CheckCircle2 size={16} className="text-green-400" /> : <Copy size={16} />}
            <span className="hidden sm:inline">{isCopied ? "Tersalin" : "Salin Link"}</span>
          </button>
          <div className="w-px h-6 bg-white/10 hidden sm:block mx-2"></div>
          <button 
            onClick={() => router.push("/")}
            title="Keluar Rapat"
            className="group flex items-center justify-center w-10 h-10 sm:w-auto sm:px-4 sm:py-2 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 sm:border-transparent text-red-500 rounded-lg text-sm font-semibold transition-all shadow-sm active:scale-95"
          >
            <LogOut size={18} className="sm:mr-2" />
            <span className="hidden sm:inline">Keluar</span>
          </button>
        </div>
      </header>

      {/* Main Jitsi Container */}
      <div className="flex-1 w-full bg-[#0a0f1c] relative">
        <JitsiMeeting
          domain="meet.jit.si"
          roomName={`TDNMeet_${id}`}
          configOverwrite={{
            startWithAudioMuted: true,
            startWithVideoMuted: false,
            disableModeratorIndicator: true,
            disableInviteFunctions: true,
            prejoinPageEnabled: false,
            defaultLanguage: 'id',
            enableWelcomePage: false,
            requireDisplayName: true,
            resolution: 720,
            constraints: {
               video: { height: { ideal: 720, max: 720, min: 240 } }
            },
            p2p: { enabled: true, preferH264: true },
            // Menambahkan config untuk mencegah menunggu moderator
            disableDeepLinking: true,
            testing: {
               noAutoPlayVideo: false
            }
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
            SHOW_CHROME_EXTENSION_BANNER: false,
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_BRAND_WATERMARK: false,
            DEFAULT_BACKGROUND: '#0a0f1c',
            MOBILE_APP_PROMO: false,
            TOOLBAR_BUTTONS: [
                'microphone', 'camera', 'closedcaptions', 'desktop', 'embedmeeting', 'fullscreen',
                'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
                'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
                'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
                'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone', 'security'
            ],
            LANG_DETECTION: true,
          }}
          userInfo={{
            displayName: '',
            email: ''
          }}
          onApiReady={(externalApi) => {
            externalApi.addListener('videoConferenceLeft', () => {
              router.push("/");
            });
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = '100%';
            iframeRef.style.width = '100%';
            iframeRef.style.border = 'none';
          }}
        />

        {/* Floating Notification */}
        <AnimatePresence>
          {isCopied && (
            <motion.div 
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 10, x: "-50%" }}
              className="absolute bottom-8 left-1/2 flex items-center gap-3 bg-green-500/10 border border-green-500/20 backdrop-blur-md text-green-400 px-6 py-3 rounded-full shadow-2xl pointer-events-none"
            >
              <CheckCircle2 size={18} />
              <span className="font-medium">Tautan undangan disalin ke clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
