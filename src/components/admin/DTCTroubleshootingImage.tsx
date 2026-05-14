import React, { useEffect, useState } from "react";
import { AlertCircle, Loader2, Image as ImageIcon } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "";

interface TroubleshootingImage {
  page: number;
  table_index: number;
  image: string;
}

interface TroubleshootingApiResponse {
  success: boolean;
  data: TroubleshootingImage[];
}

interface DTCTroubleshootingImageProps {
  folder: string;
}

const DTCTroubleshootingImage: React.FC<DTCTroubleshootingImageProps> = ({
  folder,
}) => {
  const [imageData, setImageData] = useState<TroubleshootingImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);
        setImageData(null);

        const response = await fetch(`${API_URL}/api/dtc-tables/${folder}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Không thể tải hình ảnh khắc phục sự cố");
        }

        const result: TroubleshootingApiResponse = await response.json();
        const firstImage = result.data?.[0];

        if (!firstImage || !firstImage.image) {
          setError("Không có hình ảnh khắc phục sự cố cho mã lỗi này");
          return;
        }

        setImageData(firstImage);
      } catch (fetchError) {
        if (
          fetchError instanceof DOMException &&
          fetchError.name === "AbortError"
        ) {
          return;
        }

        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Đã xảy ra lỗi khi tải hình ảnh khắc phục sự cố",
        );
      } finally {
        setLoading(false);
      }
    };

    void fetchImage();

    return () => controller.abort();
  }, [folder]);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-3 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-sm font-medium text-slate-600">
            Đang tải hình ảnh khắc phục sự cố...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-red-200 bg-white p-8 shadow-sm">
        <div className="max-w-sm space-y-3 text-center">
          <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
          <h3 className="text-lg font-semibold text-slate-900">
            Không thể tải ảnh
          </h3>
          <p className="text-sm text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!imageData) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/90 p-8 shadow-sm">
        <div className="max-w-sm space-y-3 text-center">
          <ImageIcon className="mx-auto h-10 w-10 text-slate-400" />
          <h3 className="text-lg font-semibold text-slate-900">
            Chưa có ảnh khắc phục sự cố
          </h3>
          <p className="text-sm text-slate-600">
            Không có ảnh khắc phục sự cố cho mã lỗi này
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
      {/* Header */}
      <div className="shrink-0 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <ImageIcon className="h-5 w-5 text-blue-200" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
              Hình Ảnh Khắc Phục Sự Cố
            </p>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 overflow-auto p-5 flex items-center justify-center">
        <img
          src={imageData.image}
          alt={`Troubleshooting guide page ${imageData.page}`}
          className="max-w-full max-h-full object-contain rounded-2xl border border-slate-200 shadow-md"
        />
      </div>
    </div>
  );
};

export default DTCTroubleshootingImage;
