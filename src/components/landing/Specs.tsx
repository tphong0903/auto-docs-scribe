import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Gauge, Zap, Flame, Wind, Activity, Cog } from "lucide-react";

const specs = [
  {
    icon: Zap,
    label: "Mã lực",
    value: 720,
    suffix: " HP",
    desc: "Công suất cực đại tại 7200 RPM",
  },
  {
    icon: Activity,
    label: "Mô-men xoắn",
    value: 850,
    suffix: " Nm",
    desc: "Đỉnh cao từ 3000-5500 RPM",
  },
  {
    icon: Gauge,
    label: "Tốc độ tối đa",
    value: 340,
    suffix: " km/h",
    desc: "Giới hạn điện tử có thể nâng cấp",
  },
  {
    icon: Flame,
    label: "Tăng tốc 0-100",
    value: 2.8,
    suffix: "s",
    decimals: 1,
    desc: "Launch control kích hoạt",
  },
  {
    icon: Wind,
    label: "Dung tích",
    value: 4.0,
    suffix: "L",
    decimals: 1,
    desc: "V8 Twin-Turbo DOHC",
  },
  {
    icon: Cog,
    label: "Tỷ số nén",
    value: 11.5,
    suffix: ":1",
    decimals: 1,
    desc: "Hợp kim nhôm cường lực",
  },
];

export const Specs = () => {
  // Gắn ref vào vùng chứa Card thay vì toàn bộ Section để animation cuộn mượt hơn
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="specs"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top, hsl(var(--navy-mid) / 0.6), transparent 70%), radial-gradient(ellipse at bottom, hsl(var(--teal) / 0.2), transparent 70%)",
      }}
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-teal-light mb-4 drop-shadow-md font-semibold">
            // Thông số kỹ thuật
          </p>
          <h2 className="font-[Be Vietnam Pro] text-4xl md:text-6xl font-black text-foreground tracking-tight drop-shadow-lg">
            Hiệu năng{" "}
            <span className="text-gradient drop-shadow-none">đỉnh cao</span>
          </h2>
          <p className="mt-5 text-foreground/90 font-medium text-lg drop-shadow-sm">
            Mỗi con số là kết quả của hàng nghìn giờ thử nghiệm và tinh chỉnh
            trên đường đua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }} // Bắt đầu hiện khi cuộn vào sâu 50px
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-glow group relative rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-8 overflow-hidden shadow-xl"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-teal/15 blur-3xl group-hover:bg-teal/30 transition-all duration-500" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal/30 to-teal-light/20 border border-teal/40 mb-6 shadow-inner">
                    <Icon className="h-6 w-6 text-teal-light" />
                  </div>

                  <p className="font-mono text-sm uppercase tracking-widest text-foreground/80 font-semibold mb-2">
                    {spec.label}
                  </p>

                  <div className="font-heading text-5xl md:text-6xl font-black text-foreground tracking-tight drop-shadow-md">
                    {/* Sử dụng ScrollSpy của CountUp để tự động canh lúc hiển thị */}
                    <CountUp
                      end={spec.value}
                      duration={2.5}
                      decimals={spec.decimals ?? 0}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                      scrollSpyDelay={100} // Đợi 0.1s sau khi hiện ra mới chạy số cho đẹp
                    />
                    <span className="text-2xl md:text-3xl text-teal-light ml-1 drop-shadow-sm">
                      {spec.suffix}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-foreground/80 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
