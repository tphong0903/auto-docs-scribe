import React, { useMemo, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

export interface SensorItem {
  id: number;
  name: string;
}

interface SensorSidebarProps {
  items: SensorItem[];
  selected: SensorItem | null;
  onSelect: (item: SensorItem) => void;
}

const SensorSidebar: React.FC<SensorSidebarProps> = ({
  items,
  selected,
  onSelect,
}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 🔍 Filter search
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [items, search]);

  if (items.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 h-full">
        <p>Không có dữ liệu</p>
      </div>
    );
  }

  return (
    // FIX 1: Thêm overflow-hidden vào container ngoài cùng
    <div className="flex flex-col h-full overflow-hidden">
      {/* 🔍 Search */}
      {/* FIX 2: Thêm flex-shrink-0 để phần Header/Search luôn giữ nguyên kích thước */}
      <div className="p-3 border-b flex-shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Tìm cảm biến..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 📜 List */}
      {/* FIX 3: Bọc ScrollArea trong 1 div có flex-1 và overflow-hidden. ScrollArea set h-full */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="space-y-1 p-4">
            {filteredItems.length === 0 ? (
              <p className="text-gray-500 text-sm">Không tìm thấy</p>
            ) : (
              filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    selected?.id === item.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-semibold text-sm break-words whitespace-normal">
                    {item.name}
                  </div>
                </button>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SensorSidebar;
