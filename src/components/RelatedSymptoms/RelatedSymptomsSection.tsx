import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Thermometer,
  Zap,
  Droplet,
  Volume2,
  Power,
  BookOpen,
  ClipboardCheck,
  X,
} from "lucide-react";

export interface Symptom {
  id: string;
  title: string;
  lessonPdf?: string;
  lessonUrl?: string;
  diagramId?: string;
}

const mockSymptoms: Symptom[] = [
  {
    id: "engine-vibration",
    title: "Rung giật động cơ",
    lessonPdf: "/output_sections_CamBien/1.pdf",
    diagramId:
      "https://www.canva.com/design/DAHHNrdJRs0/L0Zucq5O3Nwzy8tlUmVNWA/view?embed",
  },
  {
    id: "engine-overheat",
    title: "Động cơ quá nhiệt",
    lessonPdf: "/output_sections_CamBien/2.pdf",
    diagramId:
      "https://www.canva.com/design/DAHHN5GL54Q/oJhB1mCwfihmW4VjCwA5qg/view?embed",
  },
  {
    id: "fuel-consumption",
    title: "Hao nhiên liệu",
    lessonPdf: "/output_sections_CamBien/3.pdf",
    diagramId:
      "https://www.canva.com/design/DAHHNypNvnk/7H6SfcboER8wUQPMYUxbLA/view?embed",
  },
  {
    id: "unusual-noise",
    title: "Tiếng ồn bất thường",
    lessonPdf: "/output_sections_CamBien/4.pdf",
    diagramId:
      "https://www.canva.com/design/DAHHN6JVuXI/u3CjgSYdHISXNNMQeegvTg/view?embed",
  },
  {
    id: "hard-start",
    title: "Khó khởi động",
    lessonPdf: "/output_sections_CamBien/5.pdf",
    diagramId:
      "https://www.canva.com/design/DAHHN6JVuXI/u3CjgSYdHISXNNMQeegvTg/view?embed",
  },
  {
    id: "power-loss",
    title: "Mất công suất",
    lessonPdf: "/output_sections_CamBien/6.pdf",
    diagramId:
      "https://www.canva.com/design/DAHHN3DBZZI/ShHQ0Gvosb3I9HJsLEDvag/view?embed",
  },
];

function IconForSymptom(id: string) {
  if (id.includes("overheat") || id.includes("engine"))
    return <Thermometer className="w-6 h-6 text-amber-500" />;
  if (id.includes("vibration"))
    return <Zap className="w-6 h-6 text-emerald-500" />;
  if (id.includes("fuel")) return <Droplet className="w-6 h-6 text-blue-500" />;
  if (id.includes("noise"))
    return <Volume2 className="w-6 h-6 text-violet-500" />;
  return <Power className="w-6 h-6 text-rose-500" />;
}

export default function RelatedSymptomsSection({
  items = mockSymptoms,
}: {
  items?: Symptom[];
}) {
  const [selected, setSelected] = useState<Symptom | null>(null);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">
        Triệu chứng liên quan
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {items.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s)}
            className="group relative rounded-xl p-3 flex items-start gap-3 bg-gradient-to-br from-white via-slate-50 to-white border border-slate-200 hover:scale-[1.02] transition-transform shadow-sm hover:shadow-lg"
            aria-label={`Xem ${s.title}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-white">
              {IconForSymptom(s.id)}
            </div>

            <div className="flex-1 text-left">
              <div className="text-sm font-medium text-slate-800">
                {s.title}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Xem sơ đồ, tài liệu hoặc kiểm tra nhanh
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <SymptomModal
            symptom={selected}
            onClose={() => setSelected(null)}
            navigate={navigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ActionCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.01 }}
      className="w-full text-left rounded-2xl border border-slate-200 p-4 bg-white shadow-sm hover:shadow-md flex items-start gap-3"
      onClick={onClick}
    >
      <div className="rounded-lg p-3 bg-gradient-to-br from-slate-50 to-white">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-medium text-slate-800">{title}</div>
        <div className="text-sm text-slate-500 mt-1">{description}</div>
      </div>
    </motion.button>
  );
}

function SymptomModal({
  symptom,
  onClose,
  navigate,
}: {
  symptom: Symptom;
  onClose: () => void;
  navigate: ReturnType<typeof useNavigate>;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <motion.div
        initial={{ y: 20, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.98, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl z-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              {symptom.title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Chọn thao tác để tiếp tục
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <ActionCard
            title="Sơ đồ triệu chứng"
            description="Xem sơ đồ chẩn đoán liên quan"
            icon={<ClipboardCheck className="w-6 h-6 text-emerald-600" />}
            onClick={() => {
              onClose();
              navigate(
                `/diagram?src=${encodeURIComponent(symptom.diagramId)}&name=${encodeURIComponent(symptom.title)}`,
              );
            }}
          />

          <ActionCard
            title="Bài học"
            description="Tài liệu hoặc PDF tham khảo"
            icon={<BookOpen className="w-6 h-6 text-blue-600" />}
            onClick={() => {
              onClose();
              const pdfUrl =
                symptom.lessonPdf ||
                `/output_sections_CamBien/${symptom.id}.pdf`;
              window.open(pdfUrl, "_blank");
            }}
          />

          <ActionCard
            title="Bài Quiz Test"
            description="Kiểm tra kiến thức nhanh"
            icon={<ClipboardCheck className="w-6 h-6 text-rose-600" />}
            onClick={() => {
              onClose();
              navigate(`/quiz/${symptom.id}`);
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
