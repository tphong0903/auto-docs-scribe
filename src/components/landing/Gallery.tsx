import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";

import injection from "@/assets/engine-injection.jpg";

interface GalleryProps {
  onPlayVideo: () => void;
}

const items = [
  {
    img: injection,
    title: "Twin Turbocharger",
    tag: "Hệ thống nạp",
    isVideo: true,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: injection,
    title: "Pít-tông Forged",
    tag: "Buồng đốt",
    isVideo: true,
    span: "",
  },
  {
    img: injection,
    title: "Trục khuỷu CNC",
    tag: "Truyền động",
    isVideo: true,
    span: "",
  },
  {
    img: injection,
    title: "Hệ xả Titanium",
    tag: "Khí thải",
    isVideo: true,
    span: "",
  },
  {
    img: injection,
    title: "Thân máy hợp kim",
    tag: "Cấu trúc",
    isVideo: true,
    span: "",
  },
  {
    img: injection,
    title: "Phun nhiên liệu trực tiếp",
    tag: "Nhiên liệu",
    isVideo: true,
    span: "lg:col-span-2",
  },
];

export const Gallery = ({ onPlayVideo }: GalleryProps) => {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal/5 via-background to-background opacity-50" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-teal-light mb-4 drop-shadow-sm">
            // Thư viện đa phương tiện
          </p>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <span className="drop-shadow-md">Khám phá</span>
            <span className="pb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-cyan-600 dark:from-teal-300 dark:to-cyan-200">
              từng góc cạnh
            </span>
          </h2>

          <p className="mt-5 text-foreground/80 font-medium text-lg drop-shadow-sm">
            Hình ảnh chi tiết và video demo cận cảnh từng bộ phận trọng yếu của
            động cơ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px] lg:auto-rows-[320px]">
          {items.map((it, i) => (
            <motion.button
              key={it.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              onClick={it.isVideo ? onPlayVideo : undefined}
              // ĐÃ FIX QUAN TRỌNG: Thêm `min-h-[280px] lg:min-h-[320px] w-full h-full` để thẻ không bao giờ bị xẹp
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 hover:border-teal/30 shadow-lg hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] bg-card/20 text-left transition-all duration-500 min-h-[280px] lg:min-h-[320px] w-full h-full ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                // Đã Fix: Đảm bảo object-cover hoạt động tốt trên mọi kích thước
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {it.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-teal/20 backdrop-blur-md border border-teal-light/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal/40 transition-all duration-500 shadow-[0_0_30px_rgba(56,189,248,0.4)] relative">
                    <div className="absolute inset-0 rounded-full border border-teal/50 animate-ping opacity-50" />
                    <Play className="h-7 w-7 text-white fill-white ml-1 drop-shadow-md" />
                  </div>
                </div>
              )}

              {!it.isVideo && (
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <Maximize2 className="h-5 w-5 text-white/90" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-teal/20 backdrop-blur-md border border-teal-light/30 text-teal-light text-xs font-mono font-semibold uppercase tracking-widest mb-3 shadow-sm">
                  {it.tag}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-teal-50 transition-colors">
                  {it.title}
                </h3>
              </div>

              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)`,
                  backgroundSize: "100% 4px",
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
