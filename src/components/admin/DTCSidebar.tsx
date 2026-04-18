import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { DTCItem } from "./DTCViewer";

interface DTCSidebarProps {
  items: DTCItem[];
  selected: DTCItem | null;
  onSelect: (item: DTCItem) => void;
}

const DTCSidebar: React.FC<DTCSidebarProps> = ({
  items,
  selected,
  onSelect,
}) => {
  if (items.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        <p>Không tìm thấy DTC nào</p>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1">
      <div className="space-y-1 p-4">
        {items.map((item) => (
          <button
            key={item.folder}
            id={`dtc-item-${item.code}`}
            onClick={() => onSelect(item)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              selected?.folder === item.folder
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            <div className="font-semibold text-sm break-words whitespace-normal">
              {item.name}
            </div>
            <div className="text-xs mt-1 truncate opacity-80">{item.code}</div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default DTCSidebar;
