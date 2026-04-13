import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowRight,
  Badge,
  CheckCircle2,
  FileJson,
  ImageIcon,
  Info,
  ChevronLeft,
  ChevronRight,
  XCircle,
  BookOpen,
  ExternalLink,
  Search,
  Wrench,
  Zap,
  Shield,
  X,
} from "lucide-react";
import { dataDTC } from "@/data/data";

const dtcData = dataDTC;

// Enhanced Image Carousel with better styling
const ImageCarousel = ({
  title,
  icon: Icon,
  colorClass,
  images = ["IMG_01"],
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="space-y-4 group">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
        <div className={`p-3 rounded-xl ${colorClass} shadow-lg`}>
          <Icon size={24} />
        </div>
        <h4 className="font-bold text-slate-800 uppercase tracking-wider text-sm">
          {title}
        </h4>
      </div>
      <div
        className="relative h-80 md:h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border-2 border-slate-300 flex items-center justify-center overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 group/image"
        onClick={() => onImageClick && onImageClick(images[currentIndex])}
      >
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-2xl"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement!.innerHTML = `
              <div class="flex flex-col items-center justify-center text-slate-500 h-full">
                <div class="p-6 bg-white/80 rounded-full mb-4 shadow-lg">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <span class="font-mono text-lg font-bold uppercase tracking-widest bg-white/90 px-6 py-3 rounded-full shadow-md">
                  Image ${currentIndex + 1}
                </span>
              </div>
            `;
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 rounded-2xl" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
          <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium text-center">
            Click để phóng to
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/95 hover:bg-white rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-slate-200"
            >
              <ChevronLeft size={24} className="text-slate-700" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/95 hover:bg-white rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-slate-200"
            >
              <ChevronRight size={24} className="text-slate-700" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-xs text-white font-bold tracking-widest shadow-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const DTCDisplay = () => {
  const [selectedCode, setSelectedCode] = useState("");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const currentDTC = useMemo(
    () => dtcData.find((item) => item.dtcCode === selectedCode),
    [selectedCode],
  );

  const allUniqueRefs = useMemo(() => {
    if (!currentDTC) return [];
    const refs = currentDTC.steps.flatMap((step) => step.refs || []);
    return [...new Set(refs)];
  }, [currentDTC]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 font-manrope">
      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
        {/* Enhanced Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Wrench size={32} />
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30 text-sm px-3 py-1">
                    Automotive Diagnostics
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-sora tracking-tight mb-2">
                  Hệ Thống Chẩn Đoán DTC
                </h1>
                <p className="text-blue-100 text-lg max-w-2xl">
                  Tra cứu dữ liệu kỹ thuật và quy trình kiểm tra chuyên nghiệp
                  cho kỹ thuật viên ô tô
                </p>
              </div>
              <div className="w-full lg:w-96">
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                  <Select value={selectedCode} onValueChange={setSelectedCode}>
                    <SelectTrigger className="h-14 pl-12 bg-white/95 backdrop-blur-sm border-white/30 text-slate-800 shadow-xl focus:ring-4 focus:ring-white/50 hover:bg-white transition-all duration-300">
                      <SelectValue placeholder="🔍 Chọn mã lỗi DTC..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md border-slate-200 shadow-2xl">
                      {dtcData.map((item) => (
                        <SelectItem
                          key={item.dtcCode}
                          value={item.dtcCode}
                          className="hover:bg-blue-50 focus:bg-blue-50"
                        >
                          <div className="flex items-center gap-3">
                            <Zap className="text-blue-600" size={16} />
                            <span className="font-mono font-bold text-blue-700">
                              {item.dtcCode}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {currentDTC ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
            {/* DTC Info Card */}
            <Card className="shadow-2xl border-none ring-1 ring-slate-200/50 overflow-hidden bg-gradient-to-r from-white to-slate-50/50">
              <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Shield size={32} className="text-white" />
                  </div>
                  <div>
                    <Badge className="bg-blue-500/80 text-white border-blue-400/50 text-lg font-mono px-4 py-2 mb-2 shadow-lg">
                      {currentDTC.dtcCode}
                    </Badge>
                    <CardTitle className="text-2xl md:text-3xl font-bold font-sora leading-tight">
                      {currentDTC.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-12 bg-white/80 backdrop-blur-sm">
                {/* Enhanced Image Carousels */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <ImageCarousel
                    title="1. Hình ảnh Điều kiện & Khu vực sự cố"
                    icon={Info}
                    colorClass="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 shadow-blue-200"
                    images={[
                      "https://res.cloudinary.com/dllwsmukj/image/upload/v1774852009/posts/4068631b-358f-456c-988f-3aee8f61d4cc_Untitled%20Diagram.drawio%20%289%29.png.png",
                      "https://res.cloudinary.com/dllwsmukj/image/upload/v1767717916/nest_uploads/mv2z0m0eatkufs7o5cko.jpg",
                    ]}
                    onImageClick={setZoomedImage}
                  />
                  <ImageCarousel
                    title="2. Sơ đồ mạch điện hệ thống"
                    icon={FileJson}
                    colorClass="bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700 shadow-indigo-200"
                    images={[
                      "https://res.cloudinary.com/dllwsmukj/image/upload/v1767716538/chat-images/fodx6jiizl7pzjrtsqxo.jpg",
                      "https://res.cloudinary.com/dllwsmukj/image/upload/v1774852009/posts/4068631b-358f-456c-988f-3aee8f61d4cc_Untitled%20Diagram.drawio%20%289%29.png.png",
                    ]}
                    onImageClick={setZoomedImage}
                  />
                  <ImageCarousel
                    title="3. Quy trình xác nhận trực quan"
                    icon={CheckCircle2}
                    colorClass="bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 shadow-amber-200"
                    images={[
                      "https://res.cloudinary.com/dllwsmukj/image/upload/v1767710105/nest_uploads/eihzfqqnf4p4ufwgfj5k.png",
                    ]}
                    onImageClick={setZoomedImage}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Steps Timeline */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 px-4 py-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-xl">
                <div className="p-3 bg-white/10 rounded-xl">
                  <ArrowRight className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white font-sora">
                  Quy trình kiểm tra chi tiết từng bước
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300"></div>

                {currentDTC.steps.map((step, index) => (
                  <Card
                    key={step.id}
                    className="relative ml-20 mb-8 overflow-hidden border-none shadow-xl ring-1 ring-slate-200/50 hover:ring-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-white to-slate-50/30"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-16 top-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-white font-bold text-sm">
                        {step.id}
                      </span>
                    </div>

                    <div className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight font-sora">
                            {step.title}
                          </h4>

                          <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 p-6 rounded-2xl border-l-4 border-blue-400 mb-6 shadow-inner">
                            <p className="text-slate-700 italic text-base leading-relaxed">
                              "{step.description}"
                            </p>
                          </div>

                          {step.subNote && (
                            <div className="mb-8 text-sm text-slate-700 bg-gradient-to-r from-amber-50 to-yellow-50/50 p-6 rounded-2xl border border-amber-200 shadow-lg">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                <span className="font-bold text-amber-800 uppercase text-xs tracking-widest">
                                  Chỉ dẫn kỹ thuật:
                                </span>
                              </div>
                              <div className="whitespace-pre-line leading-relaxed text-slate-600">
                                {step.subNote}
                              </div>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                              <div className="flex items-center gap-2 mb-3">
                                <CheckCircle2
                                  className="text-emerald-600"
                                  size={20}
                                />
                                <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">
                                  Nếu kết quả ĐẠT (OK):
                                </span>
                              </div>
                              <p className="text-sm text-emerald-900 font-medium leading-relaxed">
                                {step.okAction}
                              </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300">
                              <div className="flex items-center gap-2 mb-3">
                                <XCircle className="text-rose-600" size={20} />
                                <span className="text-xs font-black text-rose-700 uppercase tracking-widest">
                                  Nếu kết quả LỖI (FAIL):
                                </span>
                              </div>
                              <p className="text-sm text-rose-900 font-medium leading-relaxed">
                                {step.failAction}
                              </p>
                            </div>
                          </div>

                          {/* References */}
                          {step.refs && step.refs.length > 0 && (
                            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-lg">
                              <div className="flex items-center gap-2 mb-4">
                                <BookOpen className="text-blue-600" size={20} />
                                <span className="text-sm font-bold text-blue-800 uppercase tracking-widest">
                                  Tài liệu tham khảo:
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                {step.refs.map((ref, refIndex) => (
                                  <Button
                                    key={refIndex}
                                    variant="outline"
                                    size="sm"
                                    className="bg-white/80 hover:bg-white border-blue-300 text-blue-700 hover:text-blue-800 gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-md"
                                    onClick={() => {
                                      // Map reference codes to appropriate images
                                      const refImages = {
                                        "1A-19":
                                          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",
                                        "1C-13":
                                          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
                                        "1C-2":
                                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
                                        "1A-51":
                                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
                                        "1E-3":
                                          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
                                        "1D-16":
                                          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",
                                        "1C-10":
                                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
                                        "1D-78":
                                          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
                                        "1C-9":
                                          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",
                                        "1D-23":
                                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
                                        "1D-37":
                                          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
                                        "1D-18":
                                          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",
                                        "1D-41":
                                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
                                        "1A-4":
                                          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
                                        "1A-79":
                                          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center",
                                        "1D-35":
                                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
                                        "1D-44":
                                          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
                                      };
                                      const imageUrl =
                                        refImages[ref] ||
                                        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&crop=center";
                                      setZoomedImage(imageUrl);
                                    }}
                                  >
                                    <ExternalLink size={16} />
                                    {ref}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-dashed border-slate-300 shadow-xl mx-4">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 opacity-50"></div>
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-full shadow-2xl">
                <AlertCircle
                  size={80}
                  strokeWidth={1}
                  className="text-slate-400"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 font-sora mb-4">
              Sẵn sàng tra cứu
            </h2>
            <p className="text-slate-500 max-w-md text-center leading-relaxed text-lg">
              Chọn một mã lỗi DTC phía trên để bắt đầu quy trình chẩn đoán hệ
              thống chuyên nghiệp.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800 font-sora">
                  Hình ảnh phóng to
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedImage(null);
                  }}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center border-2 border-slate-300 overflow-hidden">
                <img
                  src={zoomedImage}
                  alt="Zoomed image"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <div class="p-8 bg-white/80 rounded-full mb-6 shadow-lg mx-auto w-fit">
                          <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-slate-500">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                          </svg>
                        </div>
                        <div class="font-mono text-2xl font-bold uppercase tracking-widest bg-white px-8 py-4 rounded-full shadow-lg text-slate-700">
                          Image Error
                        </div>
                        <p class="mt-4 text-slate-500 text-lg">
                          Không thể tải hình ảnh
                        </p>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DTCDisplay;
