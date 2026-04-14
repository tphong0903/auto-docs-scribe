import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Loader } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Use the worker from cdn.jsdelivr.net (matches react-pdf's bundled pdfjs version)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
interface DTCPDFViewerProps {
  folder: string;
}

const DTCPDFViewer: React.FC<DTCPDFViewerProps> = ({ folder }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const pdfPath = `/output_sections/${folder}/${folder}.pdf`;

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
      {/* PDF Header */}
      <div className="flex items-center justify-between gap-4 p-4 bg-white border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">
          PDF Documentation
        </h3>
        <div className="flex items-center gap-2">
          {loading && <Loader className="w-4 h-4 animate-spin" />}
          <span className="text-sm text-gray-600">
            {numPages ? `${numPages} trang` : "Đang tải..."}
          </span>
        </div>
      </div>

      {/* PDF Document */}
      <div className="flex-1 overflow-auto">
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadStart={() => setLoading(true)}
          onLoadError={(error) => {
            console.error("Error loading PDF:", error);
            setLoading(false);
          }}
          onLoad={() => setLoading(false)}
          className="flex flex-col items-center gap-2 p-4"
        >
          {loading && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Loader className="w-5 h-5 animate-spin" />
              <span>Đang tải PDF...</span>
            </div>
          )}
          {/* Render all pages */}
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_${index + 1}`}
                className="mb-4 border border-gray-200 rounded shadow-sm"
              >
                <Page
                  pageNumber={index + 1}
                  scale={1.2}
                  onLoadStart={() => setLoading(true)}
                  onLoadSuccess={() => setLoading(false)}
                />
              </div>
            ))}
        </Document>
      </div>
    </div>
  );
};

export default DTCPDFViewer;
