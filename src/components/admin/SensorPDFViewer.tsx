import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Loader, ChevronLeft, ChevronRight, Cpu } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface SensorPDFViewerProps {
  id: number;
  name?: string;
}

const SensorPDFViewer: React.FC<SensorPDFViewerProps> = ({ id, name }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const scale = 1.5;

  const pdfPath = `/output_sections_CamBien/${id}.pdf`;

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
  };

  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, numPages || 1));

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden h-full w-full min-h-0 min-w-0 relative">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 p-6 bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white font-bold text-lg" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              Sensor Documentation
            </h3>
            <p className="text-sm text-slate-500">
              {name || `Sensor ID: ${id}`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {loading && (
            <div className="flex items-center gap-2 text-slate-600">
              <Loader className="w-5 h-5 animate-spin text-blue-500" />
              <span className="text-sm">Loading...</span>
            </div>
          )}
          <span className="text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
            {numPages ? `${currentPage} / ${numPages}` : "Loading..."}
          </span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-center gap-2 p-4 bg-white/50 backdrop-blur-sm border-b border-slate-200 shrink-0">
        <button
          onClick={goToPrevPage}
          disabled={currentPage <= 1}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 text-slate-600" />
        </button>

        <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 min-w-[4rem] text-center">
          Page {currentPage} of {numPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage >= (numPages || 1)}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      {/* PDF */}
      <div className="flex-1 overflow-auto p-6 bg-slate-100/50 text-center">
        <div className="inline-block text-left pb-8">
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadStart={() => setLoading(true)}
            onLoadError={(error) => {
              console.error("Error loading PDF:", error);
              setLoading(false);
            }}
            onLoad={() => setLoading(false)}
          >
            {loading && (
              <div className="flex flex-col items-center gap-4 py-12 min-w-[300px]">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-slate-600 animate-pulse">Loading PDF...</p>
              </div>
            )}

            {!loading && numPages && (
              <div className="bg-white shadow-xl border border-slate-200">
                <Page
                  pageNumber={currentPage}
                  scale={scale}
                  onLoadStart={() => setLoading(true)}
                  onLoadSuccess={() => setLoading(false)}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            )}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default SensorPDFViewer;
