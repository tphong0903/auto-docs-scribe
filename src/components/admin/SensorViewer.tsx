import React, { useState } from "react";
import SensorSidebar, { SensorItem } from "./SensorSidebar";
import SensorPDFViewer from "./SensorPDFViewer";
import { Bug, Cpu, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const data: SensorItem[] = [
  { id: 1, name: "CẢM BIẾN NHIỆT ĐỘ NUÓC LÀM MÁT ECT" },
  { id: 2, name: "CẢM BIẾN VỊ TRÍ TRỤC KHUỶU CKP" },
  { id: 3, name: "CẢM BIẾN VỊ TRÍ TRỤC CAM CMP" },
  { id: 4, name: "CẢM BIẾN VAN ĐIỀU KHIỂN NHỚT OCV (OIL CONTROL VALVE)" },
  { id: 5, name: "CẢM BIẾN OXY HO2S-1 (O2F)" },
  { id: 6, name: "CẢM BIẾN OXY HO2S-2 (O2R)" },
  { id: 7, name: "CẢM BIẾN NHIỆT ĐỘ KHÔNG KHÍ NẠP IAT" },
  { id: 8, name: "CẢM BIẾN ÁP SUẤT ĐƯỜNG NẠP MAP" },
  { id: 9, name: "GIẮC KIM PHUN (INJECTOR CONNECTOR)" },
  { id: 10, name: "BÔ BIN (IGNITION COIL) VÀ GIẮC BÔ BIN" },
];

const SensorViewer = () => {
  const [selected, setSelected] = useState<SensorItem | null>(data[0]);
  const navigate = useNavigate();
  return (
    <div className="flex h-[700px] border rounded-xl overflow-hidden">
      {/* Sidebar */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Sensor Explorer
              </h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                Sensor System
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center"
            title="Về trang chủ"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>

        <div className="w-80 border-r">
          <SensorSidebar
            items={data}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>

      {/* Viewer */}
      <div className="flex-1">
        {selected ? (
          <SensorPDFViewer id={selected.id} name={selected.name} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Chọn cảm biến để xem PDF</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SensorViewer;
