import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const articles = [
  {
    id: "1",
    title: "Diagnosing P0300 Random Misfire on Toyota 2GR-FE",
    category: "Engine Systems",
    status: "published",
    date: "Apr 12, 2026",
    views: 2400,
  },
  {
    id: "2",
    title: "Ford EcoBoost 2.0L Turbo System Pressure Test",
    category: "Engine Systems",
    status: "published",
    date: "Apr 10, 2026",
    views: 1200,
  },
  {
    id: "3",
    title: "Honda VTEC Solenoid Valve Testing Procedure",
    category: "Engine Systems",
    status: "draft",
    date: "Apr 8, 2026",
    views: 0,
  },
  {
    id: "4",
    title: "P0171 System Too Lean - Diagnostic Flowchart",
    category: "Trouble Codes",
    status: "published",
    date: "Apr 6, 2026",
    views: 980,
  },
  {
    id: "5",
    title: "P0420 Catalyst Efficiency Below Threshold",
    category: "Trouble Codes",
    status: "published",
    date: "Apr 4, 2026",
    views: 2400,
  },
  {
    id: "6",
    title: "Fuel Injector Resistance Testing Guide",
    category: "Fuel Systems",
    status: "in_review",
    date: "Apr 3, 2026",
    views: 1800,
  },
  {
    id: "7",
    title: "BMW N55 Wastegate Rattle Diagnostic",
    category: "Engine Systems",
    status: "in_review",
    date: "Apr 2, 2026",
    views: 340,
  },
  {
    id: "8",
    title: "Timing Chain Stretch Measurement",
    category: "Engine Systems",
    status: "published",
    date: "Apr 1, 2026",
    views: 1500,
  },
];

const statusVariant: Record<
  string,
  "default" | "secondary" | "outline" | "destructive"
> = {
  published: "default",
  draft: "secondary",
  in_review: "outline",
};

const statusLabels: Record<string, string> = {
  published: "Published",
  draft: "Draft",
  in_review: "In Review",
};

export default function AdminArticles() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || a.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Articles</h1>
        <Button asChild>
          <Link to="/admin/articles/new">
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="in_review">In Review</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {filtered.map((article) => (
              <div
                key={article.id}
                className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">
                    {article.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {article.category} · {article.date} ·{" "}
                    {article.views.toLocaleString()} views
                  </p>
                </div>
                <Badge variant={statusVariant[article.status]}>
                  {statusLabels[article.status]}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-8 text-sm">
                No articles found
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
