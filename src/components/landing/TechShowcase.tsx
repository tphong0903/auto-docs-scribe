import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import { Cpu, Shield, Zap } from "lucide-react";
import pistonsImg from "@/assets/engine-pistons.jpg";

// Inline Lottie animation: animated piston/gear loop (simple geometric)
const pistonAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 400,
  h: 400,
  nm: "piston",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "gear",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
        p: { a: 0, k: [200, 200] },
        a: { a: 0, k: [0, 0] },
        s: { a: 0, k: [100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [180, 180] } },
            { ty: "st", c: { a: 0, k: [0.2, 0.78, 0.78, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 4 } },
            { ty: "fl", c: { a: 0, k: [0.05, 0.15, 0.25, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        },
        ...Array.from({ length: 8 }).map((_, i) => ({
          ty: "gr",
          it: [
            { ty: "rc", p: { a: 0, k: [0, -100] }, s: { a: 0, k: [20, 30] }, r: { a: 0, k: 4 } },
            { ty: "fl", c: { a: 0, k: [0.2, 0.78, 0.78, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: i * 45 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } },
          ],
        })),
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

const features = [
  {
    icon: Cpu,
    title: "Hệ thống ECU thông minh",
    desc: "Bộ điều khiển động cơ thế hệ mới với AI tự học, tối ưu hỗn hợp khí-nhiên liệu theo thời gian thực.",
  },
  {
    icon: Shield,
    title: "Vật liệu siêu bền",
    desc: "Thân máy hợp kim titan-nhôm forged, piston gốm carbon chịu nhiệt lên đến 1200°C.",
  },
  {
    icon: Zap,
    title: "Twin-Turbo phản ứng tức thì",
    desc: "Cặp turbo đối xứng loại bỏ độ trễ, mô-men xoắn cực đại đạt được chỉ sau 1.2 giây.",
  },
];

export const TechShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="tech" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src={pistonsImg}
          alt=""
          className="w-full h-[120%] object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lottie + text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4">
              // Công nghệ cốt lõi
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Kỹ thuật chính xác <br />
              <span className="text-gradient">trong từng chi tiết</span>
            </h2>
            <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
              Mỗi pít-tông, mỗi xu-páp được gia công với độ chính xác micron — tạo nên một cỗ máy
              vận hành mượt mà như một nhịp tim.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal/10 border border-teal/30 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon className="h-5 w-5 text-teal-light" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{f.title}</h3>
                      <p className="mt-1 text-foreground/60 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Lottie animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl border border-teal/30 bg-gradient-to-br from-card/80 to-background p-8 overflow-hidden">
              <div className="absolute inset-0 bg-teal/10 blur-3xl" />
              <div className="relative">
                <Lottie animationData={pistonAnimation} loop autoplay className="w-full h-full" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center font-mono text-xs text-foreground/60">
                <span>RPM: 7200</span>
                <span className="text-teal-light">● LIVE</span>
                <span>TEMP: 92°C</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
