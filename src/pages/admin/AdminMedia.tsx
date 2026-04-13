import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Upload,
  Trash2,
  Grid,
  List,
  Image,
  FileText,
  Film,
  CheckSquare,
  Square,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface MediaFile {
  id: string;
  name: string;
  type: "image" | "pdf" | "video";
  size: string;
  date: string;
  dimensions?: string;
  url: string;
}

const mockFiles: MediaFile[] = [
  {
    id: "1",
    name: "toyota-2gr-fe-engine-bay.jpg",
    type: "image",
    size: "2.4 MB",
    date: "Apr 12, 2026",
    dimensions: "1920x1080",
    url: "",
  },
  {
    id: "2",
    name: "p0300-diagnostic-flowchart.png",
    type: "image",
    size: "845 KB",
    date: "Apr 12, 2026",
    dimensions: "1200x800",
    url: "",
  },
  {
    id: "3",
    name: "ignition-coil-testing.jpg",
    type: "image",
    size: "1.8 MB",
    date: "Apr 10, 2026",
    dimensions: "1600x1200",
    url: "",
  },
  {
    id: "4",
    name: "fuel-pressure-spec-sheet.pdf",
    type: "pdf",
    size: "320 KB",
    date: "Apr 8, 2026",
    url: "",
  },
  {
    id: "5",
    name: "vtec-solenoid-location.jpg",
    type: "image",
    size: "980 KB",
    date: "Apr 8, 2026",
    dimensions: "1400x900",
    url: "",
  },
  {
    id: "6",
    name: "ecoboost-turbo-diagram.png",
    type: "image",
    size: "1.2 MB",
    date: "Apr 6, 2026",
    dimensions: "1800x1200",
    url: "",
  },
  {
    id: "7",
    name: "compression-test-video.mp4",
    type: "video",
    size: "24 MB",
    date: "Apr 5, 2026",
    url: "",
  },
  {
    id: "8",
    name: "wiring-diagram-abs.png",
    type: "image",
    size: "2.1 MB",
    date: "Apr 4, 2026",
    dimensions: "2400x1600",
    url: "",
  },
];

const typeIcons = { image: Image, pdf: FileText, video: Film };

export default function AdminMedia() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [detailFile, setDetailFile] = useState<MediaFile | null>(null);

  const filtered = mockFiles.filter((f) => {
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || f.type === typeFilter;
    return matchSearch && matchType;
  });

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Media Library</h1>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search files..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="pdf">PDFs</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          {selected.size > 0 && (
            <div className="flex items-center gap-3 pt-3 border-t mt-3">
              <span className="text-sm text-muted-foreground">
                {selected.size} selected
              </span>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 h-3.5 w-3.5" />
                Delete Selected
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelected(new Set())}
              >
                Clear
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filtered.map((file) => {
                const Icon = typeIcons[file.type];
                const isSelected = selected.has(file.id);
                return (
                  <div
                    key={file.id}
                    className={`group relative border rounded-lg overflow-hidden cursor-pointer transition-all hover:ring-2 hover:ring-accent ${isSelected ? "ring-2 ring-accent" : ""}`}
                    onClick={() => setDetailFile(file)}
                  >
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <Icon className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                    <div className="p-2">
                      <p className="text-xs font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {file.size}
                      </p>
                    </div>
                    <button
                      className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelect(file.id);
                      }}
                    >
                      {isSelected ? (
                        <CheckSquare className="h-5 w-5 text-accent" />
                      ) : (
                        <Square className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="divide-y">
              {filtered.map((file) => {
                const Icon = typeIcons[file.type];
                return (
                  <div
                    key={file.id}
                    className="flex items-center gap-3 py-2.5 hover:bg-admin-surface-hover px-2 rounded cursor-pointer"
                    onClick={() => setDetailFile(file)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelect(file.id);
                      }}
                    >
                      {selected.has(file.id) ? (
                        <CheckSquare className="h-4 w-4 text-accent" />
                      ) : (
                        <Square className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                    <Icon className="h-5 w-5 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium flex-1 truncate">
                      {file.name}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {file.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground w-20 text-right">
                      {file.size}
                    </span>
                    <span className="text-xs text-muted-foreground w-28 text-right">
                      {file.date}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={!!detailFile} onOpenChange={() => setDetailFile(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-sm">File Details</DialogTitle>
          </DialogHeader>
          {detailFile && (
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                {(() => {
                  const Icon = typeIcons[detailFile.type];
                  return (
                    <Icon className="h-16 w-16 text-muted-foreground/30" />
                  );
                })()}
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <Label className="text-muted-foreground text-xs">
                    Filename
                  </Label>
                  <p className="font-medium">{detailFile.name}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Type</Label>
                  <p className="font-medium capitalize">{detailFile.type}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Size</Label>
                  <p className="font-medium">{detailFile.size}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">
                    Uploaded
                  </Label>
                  <p className="font-medium">{detailFile.date}</p>
                </div>
                {detailFile.dimensions && (
                  <div>
                    <Label className="text-muted-foreground text-xs">
                      Dimensions
                    </Label>
                    <p className="font-medium">{detailFile.dimensions}</p>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt-text" className="text-xs">
                  Alt Text
                </Label>
                <Input
                  id="alt-text"
                  placeholder="Describe this image for accessibility"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="caption" className="text-xs">
                  Caption
                </Label>
                <Input id="caption" placeholder="Image caption" />
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-3.5 w-3.5" />
                  Delete
                </Button>
                <Button size="sm">Save Changes</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
