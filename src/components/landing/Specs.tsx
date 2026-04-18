import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Gauge, Zap, Flame, Wind, Activity, Cog } from "lucide-react";

const specs = [
  { icon: Zap, label: "Mã lực", value: 720, suffix: " HP", desc: "Công suất cực đại tại 7200 RPM" },
  { icon: Activity, label: "Mô-men xoắn", value: 850, suffix: " Nm", desc: "Đỉnh cao từ 3000-5500 RPM" },
  { icon: Gauge, label: "Tốc độ tối đa", value: 340, suffix: " km/h", desc: "Giới hạn điện tử có thể nâng cấp" },
  { icon: Flame, label: "Tăng tốc 0-100", value: 2.8, suffix: "s", decimals: 1, desc: "Launch control kích hoạt" },
  { icon: Wind, label: "Dung tích", value: 4.0, suffix: "L", decimals: 1, desc: "V8 Twin-Turbo DOHC" },
  { icon: Cog, label: "Tỷ số nén", value: 11.5, suffix: ":1", decimals: 1, desc: "Hợp kim nhôm cường lực" },
];

export const Specs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="specs"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top, hsl(var(--navy-mid) / 0.4), transparent 60%), radial-gradient(ellipse at bottom, hsl(var(--teal) / 0.15), transparent 60%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-light mb-4">
            // Thông số kỹ thuật
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground tracking-tight heading-shadow">
            Hiệu năng <span className="text-gradient">đỉnh cao</span>
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Mỗi con số là kết quả của hàng nghìn giờ thử nghiệm và tinh chỉnh trên đường đua.
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-glow group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-teal/10 blur-3xl group-hover:bg-teal/30 transition-all duration-500" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal-light/10 border border-teal/30 mb-6">
                    <Icon className="h-6 w-6 text-teal-light" />
                  </div>

                  <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-2">
                    {spec.label}
                  </p>

                  <div className="font-heading text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
                    {inView ? (
                      <CountUp end={spec.value} duration={2.5} decimals={spec.decimals ?? 0} />
                    ) : (
                      "0"
                    )}
                    <span className="text-2xl md:text-3xl text-teal-light ml-1">{spec.suffix}</span>
                  </div>

                  <p className="mt-3 text-sm text-foreground/60">{spec.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
