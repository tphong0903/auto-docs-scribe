import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink } from "lucide-react";

interface DTCReferencePanelProps {
  refs: string[];
  onRefClick: (code: string) => void;
}

const DTCReferencePanel: React.FC<DTCReferencePanelProps> = ({
  refs,
  onRefClick,
}) => {
  if (refs.length === 0) {
    return (
      <ScrollArea className="flex-1">
        <div className="p-4 text-center text-gray-500">
          <p className="text-sm">Không có tài liệu tham khảo nào</p>
        </div>
      </ScrollArea>
    );
  }

  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-2">
        {refs.map((ref) => (
          <button
            key={ref}
            onClick={() => onRefClick(ref)}
            className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 transition-all duration-200 group"
          >
            <span className="font-semibold text-sm">{ref}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default DTCReferencePanel;
