import React, { useState } from "react";
import SensorSidebar, { SensorItem } from "./SensorSidebar";
import SensorPDFViewer from "./SensorPDFViewer";
import { Cpu, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SensorDetailView from "./SensorDetailView";

const data: SensorItem[] = [
  { id: 1, name: "CẢM BIẾN NHIỆT ĐỘ NƯỚC LÀM MÁT ECT" },
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
    <div className="flex h-[700px] border rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Cột trái: Header + Sidebar */}
      {/* FIX: Thêm w-80, flex-col và border-r cho cả cột trái */}
      <div className="w-80 flex flex-col border-r border-slate-200">
        {/* Phần Header của Sidebar */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
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

        {/* Phần danh sách Component SensorSidebar */}
        {/* FIX: Thêm flex-1 overflow-hidden để nhường chỗ cho thanh cuộn bên trong */}
        <div className="flex-1 overflow-hidden">
          <SensorSidebar
            items={data}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>

      {/* Cột phải: Viewer */}
      {/* <div className="flex-1 bg-slate-50">
        {selected ? (
          <SensorPDFViewer id={selected.id} name={selected.name} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Chọn cảm biến để xem PDF</p>
          </div>
        )}
      </div>
      Để thay thế hoàn toàn bộ PDF Viewer cũ bằng giao diện JSON UI xịn sò mà chúng ta vừa thiết kế, bạn chỉ cần thay đoạn code đó thành như sau:

TypeScript
      {/* Cột phải: Viewer (Đã thay bằng SensorDetailView) */}
      <div className="flex-1 bg-slate-50 overflow-hidden relative">
        {selected ? (
          // Gọi component UI mới và truyền đúng cục data JSON vào dựa theo ID
          <SensorDetailView id={selected.id} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 flex-col gap-3">
            <Cpu className="w-12 h-12 text-slate-300" />
            <p className="text-lg font-medium text-slate-400">
              Chọn cảm biến để xem chi tiết kỹ thuật
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SensorViewer;
