import { AnimatePresence, motion } from "framer-motion";
import { X, MonitorPlay } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

export const VideoModal = ({ open, onClose }: VideoModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/90"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-teal/30 bg-card shadow-[0_0_50px_rgba(56,189,248,0.15)] group"
          >
            {/* Header / HUD trang trí (Tạo cảm giác màn hình giám sát) */}
            <div className="absolute top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-20 pointer-events-none bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-2">
                <MonitorPlay className="w-5 h-5 text-teal-light" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-light font-semibold drop-shadow-md">
                  TORQUEX // LIVE FEED
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                <span className="font-mono text-xs text-white/70">REC</span>
              </div>
            </div>

            {/* Nút Đóng (Close Button) - Cải tiến hiệu ứng hover */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-destructive hover:text-white hover:border-destructive hover:scale-110 hover:rotate-90 transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Lưới giả lập (Scanline Effect) mờ mờ đè lên video */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(56,189,248,0.1) 1px, transparent 1px)`,
                backgroundSize: "100% 4px",
              }}
            />

            {/* Video Player */}
            <video
              autoPlay
              controls
              className="relative z-0 w-full h-full object-cover bg-black"
            >
              <source
                src="https://cdn.pixabay.com/video/2020/03/04/33194-396290271_large.mp4"
                type="video/mp4"
              />
            </video>

            {/* Khung ngắm (Crosshairs) ở 4 góc để trông giống camera */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-teal-light/50 z-20 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-light/50 z-20 pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-teal-light/50 z-20 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
