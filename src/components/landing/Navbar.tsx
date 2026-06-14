import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Wrench,
  Cpu,
  Activity,
  Bug,
  BookOpen,
  ClipboardCheck,
  Thermometer,
  Zap,
  Droplet,
  Volume2,
  Power,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SYMPTOMS } from "@/data/symptomsConfig";

const links = [
  { id: "hero", label: "Trang chủ" },
  { id: "specs", label: "Thông số" },
  { id: "tech", label: "Công nghệ" },
  { id: "gallery", label: "Thư viện" },
];

const quizSymptoms = SYMPTOMS.filter(
  (symptom) => symptom.id !== "general-process",
).map((symptom, index) => ({
  id: symptom.id,
  title: symptom.title,
  lessonPdf: `/output_sections_CamBien/${index + 1}.pdf`,
}));

const diagrams = SYMPTOMS.map((symptom) => ({
  name: symptom.title,
  folder: symptom.folder,
  imageCount: symptom.imageCount || 0,
}));

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goToDiagram = (diagram) => {
    navigate(
      `/diagram?folder=${encodeURIComponent(diagram.folder)}&title=${encodeURIComponent(diagram.name)}`,
    );
    setOpen(false);
  };

  const handleQuizSelect = (symptom) => {
    setShowQuizModal(false);
    navigate(`/quiz/${symptom.id}`);
  };

  function getIconForSymptom(id: string) {
    if (id.includes("overheat") || id.includes("engine"))
      return <Thermometer className="w-6 h-6 text-amber-500" />;
    if (id.includes("vibration"))
      return <Zap className="w-6 h-6 text-emerald-500" />;
    if (id.includes("fuel"))
      return <Droplet className="w-6 h-6 text-blue-500" />;
    if (id.includes("noise"))
      return <Volume2 className="w-6 h-6 text-violet-500" />;
    return <Power className="w-6 h-6 text-rose-500" />;
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b py-2"
          : "bg-background border-b border-transparent py-4",
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-teal to-teal-light">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            DIAGNOSIS
            <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
              X
            </span>
          </span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="group relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-teal-500 transition"
            >
              {l.label}
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
            </button>
          ))}

          <div className="relative group font-semibold">
            <button className="px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-teal-500 transition">
              Sơ đồ triệu chứng
            </button>

            <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-slate-900 shadow-xl border rounded-xl min-w-[240px] z-50 p-2">
              {diagrams.map((d, i) => (
                <button
                  key={i}
                  onClick={() => goToDiagram(d)}
                  className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center ml-3 gap-2 ">
            <Button
              onClick={() => navigate("/dtc-explorer")}
              className=" font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Bug className="w-4 h-4" />
              DTC
            </Button>

            <Button
              onClick={() => navigate("/sensor-explorer")}
              className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Cpu className="w-4 h-4" />
              Sensor
            </Button>

            <Button
              onClick={() => setShowQuizModal(true)}
              className="font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Activity className="w-4 h-4" />
              Quiz
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="container flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-4 py-3 text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {l.label}
            </button>
          ))}

          {/* Divider */}
          <div className="border-t my-2" />

          <p className="px-4 text-xs text-muted-foreground uppercase tracking-wide">
            Sơ đồ
          </p>

          {diagrams.map((d, i) => (
            <button
              key={i}
              onClick={() => goToDiagram(d)}
              className="px-4 py-2 text-left rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <div className="flex items-center justify-between">
                <span>{d.name}</span>
                <span className="text-xs text-slate-500">
                  ({d.imageCount} ảnh)
                </span>
              </div>
            </button>
          ))}

          {/* Actions */}
          <div className="mt-3 px-4 space-y-2">
            <Button
              onClick={() => {
                navigate("/dtc-explorer");
                setOpen(false);
              }}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
            >
              <Bug className="w-4 h-4 mr-2" />
              DTC
            </Button>

            <Button
              onClick={() => {
                navigate("/sensor-explorer");
                setOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Sensor
            </Button>

            <Button
              onClick={() => {
                setShowQuizModal(true);
                setOpen(false);
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white"
            >
              <Activity className="w-4 h-4 mr-2" />
              Quiz
            </Button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {showQuizModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowQuizModal(false)}
            />

            <motion.div
              initial={{ y: 20, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-950 p-6 shadow-2xl z-10 mx-4"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    Chọn triệu chứng để kiểm tra
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Làm quiz về triệu chứng bạn chọn
                  </p>
                </div>
                <button
                  onClick={() => setShowQuizModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 max-h-[60vh] overflow-y-auto">
                {quizSymptoms.map((symptom) => (
                  <motion.button
                    key={symptom.id}
                    whileHover={{ x: 4 }}
                    onClick={() => handleQuizSelect(symptom)}
                    className="group relative rounded-xl p-3 flex items-start gap-3 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-transform shadow-sm hover:shadow-md text-left"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 flex-shrink-0">
                      {getIconForSymptom(symptom.id)}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-800 dark:text-white">
                        {symptom.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Kiểm tra kiến thức về triệu chứng này
                      </div>
                    </div>

                    <div className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 flex-shrink-0">
                      →
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
