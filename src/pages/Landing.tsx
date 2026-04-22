import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Specs } from "@/components/landing/Specs";
import { TechShowcase } from "@/components/landing/TechShowcase";
import { Gallery } from "@/components/landing/Gallery";
import { VideoModal } from "@/components/landing/VideoModal";
import { LandingFooter } from "@/components/landing/LandingFooter";

const Landing = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero onPlayVideo={() => setVideoOpen(true)} />
        <Specs />
        <TechShowcase />
        <Gallery
          onPlayVideo={(src) => {
            setVideoSrc(src);
            setVideoOpen(true);
          }}
        />
      </main>
      <LandingFooter />
      <VideoModal
        open={videoOpen}
        videoSrc={videoSrc}
        onClose={() => {
          setVideoOpen(false);
          setVideoSrc(null); 
        }}
      />
    </div>
  );
};

export default Landing;
