import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  ChevronRight,
  ChevronDown,
  FolderTree,
  GripVertical,
  Edit,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  children?: Category[];
}

const initialCategories: Category[] = [
  {
    id: "automakers",
    name: "Automakers",
    description: "Brand-specific diagnostics and procedures",
    count: 42,
    children: [
      {
        id: "toyota",
        name: "Toyota",
        description: "Toyota-specific procedures",
        count: 18,
        children: [
          {
            id: "toyota-engine",
            name: "Engine Systems",
            description: "",
            count: 8,
          },
          { id: "toyota-fuel", name: "Fuel System", description: "", count: 5 },
          {
            id: "toyota-electrical",
            name: "Electrical",
            description: "",
            count: 5,
          },
        ],
      },
      {
        id: "honda",
        name: "Honda",
        description: "Honda-specific procedures",
        count: 12,
      },
      {
        id: "ford",
        name: "Ford",
        description: "Ford-specific procedures",
        count: 8,
      },
      {
        id: "bmw",
        name: "BMW",
        description: "BMW-specific procedures",
        count: 4,
      },
    ],
  },
  {
    id: "engine",
    name: "Engine Systems",
    description: "Complete engine diagnostic workflows",
    count: 38,
  },
  {
    id: "trouble",
    name: "Trouble Codes",
    description: "OBD-II code lookup and resolution",
    count: 156,
  },
  {
    id: "fuel",
    name: "Fuel Systems",
    description: "Injection, pump, and delivery testing",
    count: 24,
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Wiring diagrams and sensor testing",
    count: 67,
  },
  {
    id: "performance",
    name: "Performance",
    description: "Testing and calibration procedures",
    count: 19,
  },
];

function CategoryNode({
  category,
  depth = 0,
}: {
  category: Category;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <div>
      <div
        className="flex items-center gap-2 py-2.5 px-3 rounded-md hover:bg-admin-surface-hover group transition-colors"
        style={{ paddingLeft: `${depth * 24 + 12}px` }}
      >
        <GripVertical className="h-4 w-4 text-muted-foreground/40 opacity-0 group-hover:opacity-100 cursor-grab shrink-0" />
        {hasChildren ? (
          <button onClick={() => setExpanded(!expanded)} className="shrink-0">
            {expanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        ) : (
          <span className="w-4 shrink-0" />
        )}
        <FolderTree className="h-4 w-4 text-accent shrink-0" />
        <span className="font-medium text-sm flex-1">{category.name}</span>
        <span className="text-xs text-muted-foreground">
          {category.count} articles
        </span>
        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Edit className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-destructive"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      {expanded && hasChildren && (
        <div>
          {category.children!.map((child) => (
            <CategoryNode key={child.id} category={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminCategories() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Organize your documentation hierarchy
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cat-name">Name</Label>
                <Input id="cat-name" placeholder="Category name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cat-desc">Description</Label>
                <Textarea id="cat-desc" placeholder="Brief description" />
              </div>
              <div className="space-y-2">
                <Label>Parent Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="None (top-level)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None (top-level)</SelectItem>
                    <SelectItem value="automakers">Automakers</SelectItem>
                    <SelectItem value="engine">Engine Systems</SelectItem>
                    <SelectItem value="trouble">Trouble Codes</SelectItem>
                    <SelectItem value="fuel">Fuel Systems</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setDialogOpen(false)}>Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">
            Drag and drop to reorder categories. Click arrows to
            expand/collapse.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {initialCategories.map((cat) => (
              <CategoryNode key={cat.id} category={cat} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
