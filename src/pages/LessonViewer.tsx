import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookOpen, Download, ExternalLink } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface LessonItem {
  id: number;
  name: string;
}

export default function LessonViewer() {
  const [items, setItems] = useState<LessonItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    fetch("/output_sections_CamBien/data.json")
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const selectedId = id ? Number(id) : items[0]?.id;
  const pdfUrl = selectedId
    ? `/output_sections_CamBien/${selectedId}.pdf`
    : null;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bài học triệu chứng (Mock)</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <div className="bg-white border rounded-lg p-3 shadow-sm">
            <h2 className="font-medium mb-2">Danh sách bài học</h2>
            {loading && (
              <div className="text-sm text-slate-500">Đang tải...</div>
            )}
            {!loading && items.length === 0 && (
              <div className="text-sm text-slate-500">
                Không có dữ liệu mock.
              </div>
            )}

            <ul className="space-y-2 mt-2">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    className={`w-full text-left p-2 rounded hover:bg-slate-50 flex items-center gap-3 ${
                      String(it.id) === String(selectedId) ? "bg-slate-100" : ""
                    }`}
                    onClick={() => navigate(`/lesson/${it.id}`)}
                  >
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{it.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="md:col-span-3">
          <div className="bg-white border rounded-lg p-3 shadow-sm">
            {!pdfUrl && (
              <div className="text-sm text-slate-500">Chưa chọn bài học.</div>
            )}

            {pdfUrl && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">
                    {items.find((x) => x.id === selectedId)?.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-600 hover:text-slate-800 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Mở trong tab
                    </a>
                    <a
                      href={pdfUrl}
                      download
                      className="text-sm text-slate-600 hover:text-slate-800 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" /> Tải xuống
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <button
                    className="px-2 py-1 bg-slate-100 rounded"
                    onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                    disabled={pageNumber <= 1}
                  >
                    Prev
                  </button>
                  <div className="text-sm text-slate-600">
                    Trang {pageNumber} / {numPages ?? "?"}
                  </div>
                  <button
                    className="px-2 py-1 bg-slate-100 rounded"
                    onClick={() =>
                      setPageNumber((p) =>
                        numPages ? Math.min(numPages, p + 1) : p + 1,
                      )
                    }
                    disabled={numPages !== null && pageNumber >= numPages}
                  >
                    Next
                  </button>

                  <div className="ml-4 flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-slate-100 rounded"
                      onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
                    >
                      -
                    </button>
                    <div className="text-sm">
                      Zoom {Math.round(scale * 100)}%
                    </div>
                    <button
                      className="px-2 py-1 bg-slate-100 rounded"
                      onClick={() => setScale((s) => Math.min(3, s + 0.1))}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-full h-[75vh] border rounded overflow-hidden">
                  {error && (
                    <div className="p-4 text-sm text-red-600 bg-red-50 border-b">
                      <strong>Lỗi tải PDF:</strong> {error}
                    </div>
                  )}
                  <Document
                    file={pdfUrl}
                    onLoadSuccess={({ numPages: np }: { numPages: number }) => {
                      setNumPages(np);
                      setPageNumber(1);
                      setError(null);
                    }}
                    onError={(err: any) => {
                      setError(
                        err?.message ||
                          "Không thể tải PDF. Kiểm tra đường dẫn file.",
                      );
                    }}
                    loading={
                      <div className="p-4 text-sm text-slate-500">
                        Đang tải PDF...
                      </div>
                    }
                  >
                    <div className="w-full flex justify-center p-4 overflow-auto max-h-[70vh]">
                      <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        className="border"
                      />
                    </div>
                  </Document>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
