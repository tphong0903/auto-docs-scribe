import React, { useState, useEffect } from "react";
import { Loader, AlertCircle, Search } from "lucide-react";
import { toast } from "sonner";
import DTCSidebar from "./DTCSidebar";
import DTCPDFViewer from "./DTCPDFViewer";
import DTCReferencePanel from "./DTCReferencePanel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [refs, setRefs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // Dùng cho ô search ở Sidebar
  const [error, setError] = useState<string | null>(null);

  // State quản lý Dialog chọn tài liệu tham khảo
  const [refDialogOpen, setRefDialogOpen] = useState(false);
  const [refDialogData, setRefDialogData] = useState<{
    code: string;
    foundDTCs: DTCItem[];
  } | null>(null);

  const API_URL = "";

  // ==========================================
  // Tải danh sách DTC khi component mount
  // ==========================================
  useEffect(() => {
    fetchDTCList();
  }, []);

  const fetchDTCList = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/api/dtc-list`);

      if (!response.ok) {
        throw new Error("Lỗi khi tải danh sách DTC");
      }

      const { data } = await response.json();
      setDtcList(data);

      // Chọn DTC đầu tiên
      if (data.length > 0) {
        selectDTC(data[0]);
      }
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Không thể kết nối tới server";
      setError(errorMsg);
      toast.error(errorMsg);
      console.error("Error loading DTC list:", err);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Chọn một DTC và thiết lập refs
  // ==========================================
  const selectDTC = async (dtc: DTCItem) => {
    setSelected(dtc);
    setRefs(dtc.refs || []);
  };

  // ==========================================
  // Xử lý click trên Reference tags
  // ==========================================
  const handleRefClick = async (code: string) => {
    try {
      // 1. Gọi API search từ backend với từ khóa là mã code
      const response = await fetch(
        `${API_URL}/api/search?q=${encodeURIComponent(code)}`,
      );

      if (!response.ok) {
        throw new Error("Lỗi khi kết nối tới API tìm kiếm");
      }

      const result = await response.json();
      const foundDTCs: DTCItem[] = result.data;

      // 2. Xử lý kết quả trả về
      if (foundDTCs.length === 1) {
        // Nếu chỉ tìm thấy đúng 1 kết quả -> Tự động chuyển trang luôn
        handleSelectFromDialog(foundDTCs[0]);
        toast.success(`Đã chuyển đến tài liệu: ${code}`);
      } else if (foundDTCs.length > 1) {
        // Nếu có nhiều kết quả -> Mở Dialog cho người dùng chọn
        setRefDialogData({ code, foundDTCs });
        setRefDialogOpen(true);
      } else {
        // Không tìm thấy kết quả nào
        toast.error(`Không tìm thấy tài liệu tham khảo cho mã: ${code}`);
      }
    } catch (err) {
      console.error("Search API Error:", err);
      toast.error("Đã xảy ra lỗi khi tìm kiếm tài liệu tham khảo.");
    }
  };

  // ==========================================
  // Xử lý chọn DTC từ dialog
  // ==========================================
  const handleSelectFromDialog = async (dtc: DTCItem) => {
    await selectDTC(dtc);
    setRefDialogOpen(false);
    setRefDialogData(null);

    // Xóa chữ trong ô tìm kiếm để hiện lại toàn bộ danh sách ở sidebar
    setSearchQuery("");

    // Cuộn sidebar đến vị trí item được chọn
    setTimeout(() => {
      const element = document.getElementById(`dtc-item-${dtc.code}`);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  // ==========================================
  // Filter DTC theo search query (Sidebar)
  // ==========================================
  const filteredDTC = dtcList.filter(
    (item) =>
      item.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // ==========================================
  // Render Loading & Error
  // ==========================================
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          <p className="text-lg text-gray-700">Đang tải danh sách DTC...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg max-w-md">
          <AlertCircle className="w-12 h-12 text-red-600" />
          <h2 className="text-xl font-semibold text-gray-800">Lỗi kết nối</h2>
          <p className="text-center text-gray-600">{error}</p>
          <p className="text-sm text-gray-500">
            Vui lòng đảm bảo rằng cả frontend và backend server đều đang chạy
          </p>
          <button
            onClick={fetchDTCList}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // Render UI Chính
  // ==========================================
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 mb-4">Tra cứu DTC</h1>
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm mã DTC..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* DTC List */}
        <DTCSidebar
          items={filteredDTC}
          selected={selected}
          onSelect={selectDTC}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selected ? (
          <div className="flex-1 flex overflow-hidden">
            {/* PDF Viewer */}
            <div className="flex-1 flex flex-col border-r border-gray-200">
              <div className="p-4 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-semibold text-gray-800">
                  {selected.displayName}
                </h2>
              </div>
              <DTCPDFViewer folder={selected.folder} />
            </div>

            {/* Reference Panel */}
            <div className="w-72 border-l border-gray-200 bg-white flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-800">
                  Tài liệu tham khảo
                </h3>
              </div>
              <DTCReferencePanel refs={refs} onRefClick={handleRefClick} />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Không có DTC nào được chọn</p>
          </div>
        )}
      </div>

      {/* Reference Selection Dialog */}
      <Dialog open={refDialogOpen} onOpenChange={setRefDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Chọn tài liệu tham khảo</DialogTitle>
            <DialogDescription>
              Tìm thấy {refDialogData?.foundDTCs.length} kết quả cho "
              {refDialogData?.code}"
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="max-h-96">
            <div className="space-y-2 mt-4">
              {refDialogData?.foundDTCs.map((dtc) => (
                <button
                  key={dtc.folder}
                  onClick={() => handleSelectFromDialog(dtc)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="font-semibold text-blue-700">{dtc.code}</div>
                  <div className="text-sm text-gray-600 mt-1">{dtc.name}</div>
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
