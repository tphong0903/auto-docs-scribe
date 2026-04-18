import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/engine-hero.jpg";

interface HeroProps {
  onPlayVideo: () => void;
}

export const Hero = ({ onPlayVideo }: HeroProps) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Video / image background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/03/04/33194-396290271_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep/80" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--teal-light) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal-light) / 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 text-teal-light text-xs font-mono uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" />
          Next-Gen Performance Engine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] drop-shadow-2xl"
        >
          <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">SỨC MẠNH</span> <br />
          <span className="bg-gradient-to-r from-teal-light via-cyan-300 to-teal-light bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">VƯỢT GIỚI HẠN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed"
        >
          Động cơ V8 Twin-Turbo thế hệ mới — sự kết hợp hoàn hảo giữa kỹ thuật chính xác,
          công suất bùng nổ và độ bền bỉ tuyệt đối.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("specs")}
            className="bg-gradient-to-r from-teal to-teal-light hover:opacity-90 text-primary-foreground px-8 h-12 text-base font-semibold animate-pulse-glow"
          >
            Khám phá thông số
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onPlayVideo}
            className="border-teal/50 text-foreground hover:bg-teal/10 hover:text-teal-light px-8 h-12 text-base font-semibold gap-2"
          >
            <Play className="h-4 w-4 fill-current" />
            Xem demo
          </Button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("specs")}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/60 hover:text-teal-light transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};
