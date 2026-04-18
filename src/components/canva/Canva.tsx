import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Canva() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const src = query.get("src");
  const name = query.get("name");

  const [loading, setLoading] = useState(true);

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
            {name || "Sơ đồ hệ thống"}
          </h2>
        </div>

        {/* RIGHT */}
        {src && (
          <a
            href={src.replace("?embed", "")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 16px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "0 4px 12px rgba(14,165,233,0.4)",
            }}
          >
            Mở trong Canva ↗
          </a>
        )}
      </div>

      {/* CONTAINER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "85vh", // 🔥 to hơn
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          background: "#f1f5f9",
        }}
      >
        {/* LOADING */}
        {loading && src && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "15px",
              color: "#64748b",
            }}
          >
            Đang tải sơ đồ...
          </div>
        )}

        {/* IFRAME */}
        {src ? (
          <iframe
            src={src}
            onLoad={() => setLoading(false)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allowFullScreen
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#94a3b8",
              fontSize: "16px",
            }}
          >
            Không có sơ đồ để hiển thị
          </div>
        )}
      </div>
    </div>
  );
}
