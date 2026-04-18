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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero onPlayVideo={() => setVideoOpen(true)} />
        <Specs />
        <TechShowcase />
        <Gallery onPlayVideo={() => setVideoOpen(true)} />
      </main>
      <LandingFooter />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
};

export default Landing;
