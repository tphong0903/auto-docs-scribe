import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import turbo from "@/assets/engine-turbo.jpg";
import crank from "@/assets/engine-crank.jpg";
import exhaust from "@/assets/engine-exhaust.jpg";
import block from "@/assets/engine-block.jpg";
import injection from "@/assets/engine-injection.jpg";
import pistons from "@/assets/engine-pistons.jpg";

interface GalleryProps {
  onPlayVideo: () => void;
}

const items = [
  { img: turbo, title: "Twin Turbocharger", tag: "Hệ thống nạp", isVideo: false, span: "lg:col-span-2 lg:row-span-2" },
  { img: pistons, title: "Pít-tông Forged", tag: "Buồng đốt", isVideo: true, span: "" },
  { img: crank, title: "Trục khuỷu CNC", tag: "Truyền động", isVideo: false, span: "" },
  { img: exhaust, title: "Hệ xả Titanium", tag: "Khí thải", isVideo: false, span: "" },
  { img: block, title: "Thân máy hợp kim", tag: "Cấu trúc", isVideo: false, span: "" },
  { img: injection, title: "Phun nhiên liệu trực tiếp", tag: "Nhiên liệu", isVideo: true, span: "lg:col-span-2" },
];

export const Gallery = ({ onPlayVideo }: GalleryProps) => {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4">
            // Thư viện đa phương tiện
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            Khám phá <span className="text-gradient">từng góc cạnh</span>
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Hình ảnh chi tiết và video demo cận cảnh từng bộ phận trọng yếu của động cơ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 auto-rows-[280px]">
          {items.map((it, i) => (
            <motion.button
              key={it.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={it.isVideo ? onPlayVideo : undefined}
              className={`group relative overflow-hidden rounded-2xl border border-border card-glow text-left ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {it.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                    <Play className="h-6 w-6 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
              )}

              {!it.isVideo && (
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4 text-foreground" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-1 rounded-md bg-teal/20 border border-teal/40 text-teal-light text-[10px] font-mono uppercase tracking-widest mb-3">
                  {it.tag}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{it.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
