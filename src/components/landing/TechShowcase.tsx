import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import { Search, GitBranch, Crosshair, Wrench } from "lucide-react";
import pistonsImg from "@/assets/engine-pistons.jpg";

const diagnosticFlowAnimation = {
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
        r: {
          a: 1,
          k: [
            { t: 0, s: [0] },
            { t: 60, s: [360] },
          ],
        },
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
            {
              ty: "st",
              c: { a: 0, k: [0.2, 0.78, 0.78, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 4 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.05, 0.15, 0.25, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              o: { a: 0, k: 100 },
            },
          ],
        },
        ...Array.from({ length: 8 }).map((_, i) => ({
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { a: 0, k: [0, -100] },
              s: { a: 0, k: [20, 30] },
              r: { a: 0, k: 4 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.78, 0.78, 1] },
              o: { a: 0, k: 100 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: i * 45 },
              s: { a: 0, k: [100, 100] },
              o: { a: 0, k: 100 },
            },
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
    icon: Search,
    title: "1. Thu thập dữ liệu (Input)",
    desc: "Đọc mã lỗi (DTC), kiểm tra các thông số hiện hành (Live Data) từ các cảm biến để xác định triệu chứng ban đầu.",
  },
  {
    icon: GitBranch,
    title: "2. Cây quyết định (Decision Tree)",
    desc: "Hệ thống rẽ nhánh dựa trên các điều kiện (Yes/No), loại trừ dần các nguyên nhân không liên quan để thu hẹp phạm vi.",
  },
  {
    icon: Crosshair,
    title: "3. Khoanh vùng sự cố (Isolate)",
    desc: "Xác định chính xác vị trí và bộ phận gây ra lỗi thông qua các bước đo kiểm điện áp, điện trở hoặc cơ khí.",
  },
  {
    icon: Wrench,
    title: "4. Phương án khắc phục (Action)",
    desc: "Xuất ra hướng dẫn sửa chữa, thay thế linh kiện hoặc reset phần mềm để hệ thống hoạt động bình thường trở lại.",
  },
];

export const TechShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="tech"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src={pistonsImg}
          alt="Engine Pistons Background"
          className="w-full h-[120%] object-cover opacity-10 grayscale-[50%]"
          loading="lazy"
        />
        {/* Lớp phủ tối để nội dung nổi bật hơn */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phần Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-[Be Vietnam Pro] text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight flex flex-col gap-2">
              <span className="drop-shadow-md">Sơ đồ giải thuật</span>
              <span className="pb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-cyan-600 dark:from-teal-300 dark:to-cyan-200">
                chẩn đoán lỗi
              </span>
            </h2>

            <p className="mt-6 text-foreground/80 text-lg leading-relaxed font-medium drop-shadow-sm max-w-xl">
              Từng nhánh điều kiện và bước kiểm tra được thiết kế logic — giúp
              tự động khoanh vùng sự cố, truy vết nguyên nhân cốt lõi và đề xuất
              quy trình khắc phục chính xác.
            </p>

            <div className="mt-12 space-y-2">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-5 group p-4 -ml-4 rounded-2xl hover:bg-white/[0.03] hover:backdrop-blur-sm border border-transparent hover:border-white/10 transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal/10 to-teal/5 border border-teal/20 flex items-center justify-center group-hover:bg-teal/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <Icon className="h-6 w-6 text-teal-light drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-teal-light transition-colors">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-foreground/70 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Phần Lottie animation Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square rounded-[2rem] border border-teal/20 bg-card/40 backdrop-blur-md p-8 overflow-hidden shadow-2xl"
            >
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, hsl(var(--teal)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--teal)) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute inset-0 bg-teal/15 blur-[80px] rounded-full transform scale-75 animate-pulse-glow" />

              <div className="relative z-10 w-full h-[100%] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.15)] bg-black/20 pointer-events-none select-none">
                <iframe
                  src={
                    "https://www.canva.com/design/DAHHN5GL54Q/oJhB1mCwfihmW4VjCwA5qg/view?embed"
                  }
                  className="w-full h-full object-cover"
                  style={{ border: "none" }}
                  tabIndex={-1}
                />
              </div>
            </motion.div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-teal/10 border-dashed animate-[spin_20s_linear_infinite]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
