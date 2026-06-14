import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { QuyTrinhChung } from "@/data/PhuLucQuyTrinhChung";
import { X } from "lucide-react";

interface ImageViewerProps {
  folder: string;
  title: string;
}

export default function DiagramViewer({ folder, title }: ImageViewerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract folder and title from query params if not provided
  const query = new URLSearchParams(location.search);
  const queryFolder = query.get("folder") || folder;
  const queryTitle = query.get("title") || title;

  // State
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load images từ thư mục
  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        // Giả sử các ảnh được đặt tên theo quy tắc 1.png, 2.png, ... n.png
        const imageList: string[] = [];

        // Thử load ảnh cho đến khi gặp ảnh không tồn tại
        for (let i = 1; i <= 50; i++) {
          const imgPath = `/so_do/${queryFolder}/${i}.png`;
          // Kiểm tra xem ảnh có tồn tại không bằng cách try load
          try {
            const img = new Image();
            const loadPromise = new Promise<boolean>((resolve) => {
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              img.src = imgPath;
            });
            const exists = await loadPromise;
            if (exists) {
              imageList.push(imgPath);
            } else {
              // Nếu ảnh không tồn tại, dừng lại
              break;
            }
          } catch {
            // Nếu có lỗi, dừng lại
            break;
          }
        }

        setImages(imageList);
        setCurrentIndex(0);
        setScale(1);
        setPan({ x: 0, y: 0 });
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [queryFolder]);

  // Xử lý mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.max(1, Math.min(prev + delta, 3)));
  };

  // Xử lý zoom
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 1));
  };

  const handleReset = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  // Xử lý pan (kéo thả)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      const container = containerRef.current;
      if (!container) return;

      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      const maxX = (container.clientWidth * (scale - 1)) / 2;
      const maxY = (container.clientHeight * (scale - 1)) / 2;

      setPan({
        x: Math.max(-maxX, Math.min(newX, maxX)),
        y: Math.max(-maxY, Math.min(newY, maxY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Xử lý slider
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetView();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetView();
  };

  const resetView = () => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  };

  const currentImage = images[currentIndex];

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-gradient-to-r from-teal to-teal-light 
             text-white shadow-md
             hover:opacity-90 hover:scale-[1.02]
             transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Trang chủ</span>
          </button>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#0f172a",
            }}
          >
            {queryTitle}
          </h2>
        </div>

        {/* RIGHT - Image Counter & Buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            onClick={() => setShowTable(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-gradient-to-r from-blue-500 to-indigo-600 
             text-white shadow-md
             hover:opacity-90 hover:scale-[1.02]
             transition-all duration-200"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Quy trình chung</span>
          </button>

          {images.length > 0 && (
            <div
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                background: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          height: "85vh",
        }}
      >
        {/* IMAGE VIEWER */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          style={{
            flex: 1,
            position: "relative",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            background: "#f1f5f9",
            cursor: scale > 1 ? "grab" : "default",
          }}
        >
          {/* LOADING */}
          {loading && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                color: "#64748b",
                zIndex: 10,
              }}
            >
              Đang tải hình ảnh...
            </div>
          )}

          {/* IMAGE */}
          {currentImage && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                ref={imgRef}
                src={currentImage}
                alt={`Diagram ${currentIndex + 1}`}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  transform: `scale(${scale}) translate(${pan.x}px, ${pan.y}px)`,
                  transition: isDragging ? "none" : "transform 0.2s ease",
                  cursor:
                    scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                }}
                draggable={false}
              />
            </div>
          )}

          {/* NO IMAGE MESSAGE */}
          {!loading && images.length === 0 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                fontSize: "16px",
              }}
            >
              Không có hình ảnh để hiển thị
            </div>
          )}

          {/* ZOOM CONTROLS */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              display: "flex",
              gap: "8px",
              zIndex: 20,
            }}
          >
            <button
              onClick={handleZoomOut}
              disabled={scale === 1}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-md hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomOut className="w-5 h-5 text-slate-600" />
            </button>

            <button
              onClick={handleReset}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-md hover:bg-slate-50 transition"
            >
              <RotateCcw className="w-5 h-5 text-slate-600" />
            </button>

            <button
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-md hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomIn className="w-5 h-5 text-slate-600" />
            </button>

            <div
              style={{
                padding: "6px 12px",
                borderRadius: "8px",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                fontSize: "13px",
                fontWeight: 500,
                color: "#64748b",
              }}
            >
              {(scale * 100).toFixed(0)}%
            </div>
          </div>
        </div>

        {/* SIDEBAR - SLIDER & CONTROLS */}
        <div
          style={{
            width: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* SLIDER CONTROLS */}
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <button
              onClick={goToPrevious}
              disabled={images.length <= 1}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-teal to-teal-light text-white shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              disabled={images.length <= 1}
              className="flex-1 rounded-lg bg-gradient-to-r from-teal to-teal-light text-white shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
            >
              Tiếp theo
            </button>

            <button
              onClick={goToNext}
              disabled={images.length <= 1}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-teal to-teal-light text-white shadow-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* IMAGE THUMBNAILS */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              overflow: "auto",
              borderRadius: "12px",
              background: "#fff",
              padding: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Các hình ảnh
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    resetView();
                  }}
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    background: idx === currentIndex ? "#e0f2fe" : "#f8fafc",
                    border:
                      idx === currentIndex
                        ? "2px solid #0ea5e9"
                        : "1px solid #e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (idx !== currentIndex) {
                      e.currentTarget.style.background = "#f1f5f9";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (idx !== currentIndex) {
                      e.currentTarget.style.background = "#f8fafc";
                    }
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#64748b",
                      marginTop: "4px",
                      textAlign: "center",
                    }}
                  >
                    {idx + 1}/{images.length}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* INFO PANEL */}
          <div
            style={{
              padding: "12px",
              borderRadius: "12px",
              background: "#fef3c7",
              border: "1px solid #fcd34d",
              fontSize: "12px",
              color: "#78350f",
              lineHeight: "1.6",
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: "4px" }}>💡 Gợi ý:</p>
            <ul style={{ marginLeft: "16px" }}>
              <li>Lăn chuột để zoom</li>
              <li>Kéo thả khi đã phóng to</li>
              <li>Nhấp vào thumbnail để chuyển</li>
            </ul>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showTable && (
          <QuyTrinhChungTable onClose={() => setShowTable(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function QuyTrinhChungTable({ onClose }: { onClose: () => void }) {
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
        className="relative w-full max-w-6xl rounded-2xl bg-white p-8 shadow-2xl z-10 mx-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              Quy trình chung kiểm tra
            </h3>
            <p className="text-base text-slate-600 mt-2">
              Danh sách các thông số và tiêu chuẩn cơ bản
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-300">
                <th className="px-6 py-4 text-left text-base font-bold text-slate-800 w-1/5">
                  Nhóm thông số
                </th>
                <th className="px-6 py-4 text-left text-base font-bold text-slate-800 w-1/5">
                  Tham số
                </th>
                <th className="px-6 py-4 text-left text-base font-bold text-slate-800 w-1/5">
                  Tiêu chuẩn
                </th>
                <th className="px-6 py-4 text-left text-base font-bold text-slate-800 w-1/5">
                  Điều kiện kiểm tra
                </th>
                <th className="px-6 py-4 text-left text-base font-bold text-slate-800 w-1/5">
                  Dụng cụ
                </th>
              </tr>
            </thead>
            <tbody>
              {QuyTrinhChung.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b border-slate-200 hover:bg-slate-50 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-base text-slate-700 font-semibold">
                    {item.group_name}
                  </td>
                  <td className="px-6 py-4 text-base text-slate-600">
                    {item.parameters}
                  </td>
                  <td className="px-6 py-4 text-base text-slate-600">
                    <div className="max-h-32 overflow-y-auto text-sm leading-relaxed">
                      {item.standards}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-base text-slate-600">
                    <div className="max-h-32 overflow-y-auto text-sm leading-relaxed">
                      {item.conditions}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-base text-slate-600">
                    <div className="max-h-32 overflow-y-auto text-sm leading-relaxed">
                      {item.tools}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-slate-600 text-center font-medium">
          Bảng này cung cấp hướng dẫn chung cho việc kiểm tra xe
        </div>
      </motion.div>
    </motion.div>
  );
}
