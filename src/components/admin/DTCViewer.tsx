import React, { useState, useEffect, useRef } from "react";
import {
  Loader,
  AlertCircle,
  Search,
  Cpu,
  ListChecks,
  FileSearch,
  BookOpen,
  ChevronRight,
  Link as LinkIcon,
  FileText,
  Home,
  PanelLeft,
  Bug, // Import thêm icon PanelLeft
} from "lucide-react";
import { toast } from "sonner";
import DTCSidebar from "./DTCSidebar";
import DTCPDFViewer from "./DTCPDFViewer";
import DTCTroubleshootingWizard from "./DTCTroubleshootingWizard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Navbar } from "../landing/Navbar";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL || "";

export interface DTCItem {
  code: string;
  name: string;
  folder: string;
  displayName: string;
  metadata: {
    hasRefs: boolean;
    hasPdf: boolean;
    refsCount: number;
    totalFiles: number;
    pdfFile: string | null;
  };
  refs: string[];
}

const DTCViewer: React.FC = () => {
  const [dtcList, setDtcList] = useState<DTCItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<DTCItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // State quản lý ẩn/hiện sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [refDialogOpen, setRefDialogOpen] = useState(false);
  const [refDialogData, setRefDialogData] = useState<{
    code: string;
    foundDTCs: DTCItem[];
  } | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchDTCList();
  }, []);

  const fetchDTCList = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/api/dtc-list`);
      if (!response.ok) throw new Error("Lỗi khi tải danh sách DTC");

      const { data } = await response.json();
      setDtcList(data);

      const params = new URLSearchParams(window.location.search);
      const urlFolder = params.get("folder");

      if (urlFolder) {
        const found = data.find((d: DTCItem) => d.folder === urlFolder);
        if (found) selectDTC(found, "replace");
        else if (data.length > 0) selectDTC(data[0], "replace");
      } else if (data.length > 0) {
        selectDTC(data[0], "replace");
      }
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Không thể kết nối tới server";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const urlFolder = params.get("folder");

      if (urlFolder && dtcList.length > 0) {
        const found = dtcList.find((d) => d.folder === urlFolder);
        if (found) setSelected(found);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [dtcList]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [selected]);

  const selectDTC = (
    dtc: DTCItem,
    historyMode: "push" | "replace" | "none" = "push",
  ) => {
    setSelected(dtc);

    if (historyMode !== "none") {
      const url = new URL(window.location.href);
      url.searchParams.set("folder", dtc.folder);

      if (historyMode === "push") {
        window.history.pushState({}, "", url.toString());
      } else {
        window.history.replaceState({}, "", url.toString());
      }
    }
  };

  const handleRefClick = async (code: string) => {
    try {
      const response = await fetch(
        `${API_URL}/api/search?q=${encodeURIComponent(code)}`,
      );
      if (!response.ok) throw new Error("Lỗi API tìm kiếm");

      const result = await response.json();
      const foundDTCs: DTCItem[] = result.data;

      if (foundDTCs.length === 1) {
        handleSelectFromDialog(foundDTCs[0]);
        toast.success(`Đã chuyển đến tài liệu: ${code}`);
      } else if (foundDTCs.length > 1) {
        setRefDialogData({ code, foundDTCs });
        setRefDialogOpen(true);
      } else {
        toast.error(`Không tìm thấy tài liệu: ${code}`);
      }
    } catch {
      toast.error("Lỗi khi tìm kiếm tài liệu.");
    }
  };

  const handleSelectFromDialog = (dtc: DTCItem) => {
    selectDTC(dtc, "push");
    setRefDialogOpen(false);
    setRefDialogData(null);
    setSearchQuery("");

    setTimeout(() => {
      document
        .getElementById(`dtc-item-${dtc.code}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const filteredDTC = dtcList.filter(
    (item) =>
      item.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-10 h-10 text-blue-600 animate-spin" />
          <p className="text-lg text-slate-600 font-medium">
            Đang khởi tạo hệ thống chẩn đoán...
          </p>
        </div>
      </div>
    );
  }

  // ================= ERROR =================
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="p-8 bg-white rounded-2xl shadow-xl border border-red-100 text-center max-w-md">
          <AlertCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800">
            Mất kết nối dữ liệu
          </h2>
          <p className="text-slate-600 mt-2">{error}</p>
          <button
            onClick={fetchDTCList}
            className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  // ================= UI =================
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* Sidebar - Thêm hiệu ứng trượt ẩn/hiện */}
      <div
        className={`bg-white shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] flex flex-col z-20 shrink-0 h-full transition-all duration-300 ease-in-out overflow-hidden ${
          isSidebarOpen ? "w-80 border-r border-slate-200" : "w-0 border-none"
        }`}
      >
        {/* Wrapper w-80 để text bên trong không bị rớt dòng khi đang diễn ra animation */}
        <div className="w-80 h-full flex flex-col">
          <div className="p-5 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Bug className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800">
                    DTC Explorer
                  </h1>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                    Diagnostic System
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

            <div className="relative mt-5">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Nhập mã lỗi (VD: P0010)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <DTCSidebar
              items={filteredDTC}
              selected={selected}
              onSelect={(dtc) => selectDTC(dtc, "push")}
            />
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50/50 p-4 md:p-6 gap-4 relative">
        {selected ? (
          <>
            {/* Header Title */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 shrink-0 flex items-center gap-3">
              {/* Nút Toggle Sidebar */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center"
                title={
                  isSidebarOpen
                    ? "Ẩn danh sách mã lỗi"
                    : "Hiện danh sách mã lỗi"
                }
              >
                <PanelLeft className="w-5 h-5" />
              </button>

              <div className="w-px h-6 bg-slate-200 mx-1"></div>

              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-800 truncate">
                {selected.displayName}
              </h2>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 pb-10"
            >
              {/* CẬP NHẬT: Chiều cao PDF siêu lớn (h-[85vh]), Tài liệu liên quan thu hẹp (w-64) */}
              <div className="flex flex-col xl:flex-row gap-4 shrink-0 h-[85vh] min-h-[700px]">
                {/* PDF Viewer - Chiếm tối đa không gian còn lại bằng flex-1 */}
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-full">
                  <DTCPDFViewer folder={selected.folder} />
                </div>

                {/* References Sidebar - Nhỏ gọn lại với w-64 */}
                <div className="w-full xl:w-64 shrink-0 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-full max-h-[100%]">
                  <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-slate-800 text-sm">
                        Tham chiếu
                      </h3>
                    </div>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {selected.refs?.length || 0}
                    </span>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {selected.refs && selected.refs.length > 0 ? (
                      selected.refs.map((refCode, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleRefClick(refCode)}
                          className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm transition-all group flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="p-1.5 bg-slate-100 rounded-md group-hover:bg-blue-100 transition-colors shrink-0">
                              <FileText className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
                            </div>
                            <span className="font-semibold text-sm text-slate-700 group-hover:text-blue-700 truncate">
                              {refCode}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 shrink-0" />
                        </button>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center p-4">
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                          <FileSearch className="w-5 h-5 text-slate-300" />
                        </div>
                        <p className="text-sm font-medium text-slate-600">
                          Không có liên kết
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Khu vực dưới: Troubleshooting Wizard */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm shrink-0 flex flex-col mb-4 min-h-[400px]">
                <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-800">
                    Quy trình chẩn đoán & Khắc phục
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <DTCTroubleshootingWizard
                    folder={selected.folder}
                    onRefClick={handleRefClick}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center text-center relative">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="absolute top-0 left-0 p-3 bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl shadow-sm transition-colors"
                title="Hiện danh sách mã lỗi"
              >
                <PanelLeft className="w-5 h-5" />
              </button>
            )}
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <FileSearch className="w-12 h-12 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Chưa chọn mã lỗi
            </h3>
            <p className="text-slate-500 max-w-md">
              Vui lòng tìm kiếm và chọn một mã DTC từ danh sách bên trái để xem
              tài liệu hướng dẫn và quy trình khắc phục sự cố.
            </p>
          </div>
        )}
      </div>

      {/* Reference Dialog */}
      <Dialog open={refDialogOpen} onOpenChange={setRefDialogOpen}>
        <DialogContent className="rounded-2xl max-w-md p-0 overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-slate-100">
            <DialogTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Tài liệu tham khảo
            </DialogTitle>
            <DialogDescription className="mt-1">
              Tìm thấy {refDialogData?.foundDTCs.length} kết quả liên quan đến
              mã{" "}
              <span className="font-semibold text-slate-700">
                {refDialogData?.code}
              </span>
            </DialogDescription>
          </div>

          <ScrollArea className="max-h-[60vh] px-6 pb-6">
            <div className="space-y-3 mt-4">
              {refDialogData?.foundDTCs.map((dtc) => (
                <button
                  key={dtc.folder}
                  onClick={() => handleSelectFromDialog(dtc)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 hover:shadow-md transition-all group flex items-center justify-between"
                >
                  <div className="pr-4">
                    <div className="font-bold text-blue-700 group-hover:text-blue-800">
                      {dtc.code}
                    </div>
                    <div className="text-sm text-slate-600 mt-1 line-clamp-2">
                      {dtc.name}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 shrink-0" />
                </button>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DTCViewer;
