import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Eye,
  CheckCircle2,
  XCircle,
  MoreVertical,
  Clock,
  FileText,
  User,
  Calendar,
  MessageSquare,
  Filter,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ReviewArticle {
  id: string;
  title: string;
  author: string;
  category: string;
  submittedAt: string;
  priority: "high" | "medium" | "low";
  wordCount: number;
  excerpt: string;
}

const mockArticles: ReviewArticle[] = [
  {
    id: "1",
    title: "Diagnosing P0300 Random Misfire on Toyota 2GR-FE",
    author: "John Mitchell",
    category: "Toyota > Engine > Trouble Codes",
    submittedAt: "2025-04-10",
    priority: "high",
    wordCount: 2450,
    excerpt:
      "Comprehensive guide to diagnosing random/multiple cylinder misfire codes on the Toyota 2GR-FE 3.5L V6 engine...",
  },
  {
    id: "2",
    title: "Honda K20C1 Turbo Boost Leak Testing Procedure",
    author: "Sarah Chen",
    category: "Honda > Engine > Turbo Systems",
    submittedAt: "2025-04-11",
    priority: "medium",
    wordCount: 1820,
    excerpt:
      "Step-by-step procedure for identifying and resolving boost leaks on the Honda Civic Type R K20C1 turbocharged engine...",
  },
  {
    id: "3",
    title: "Ford EcoBoost 2.3L Coolant Intrusion Diagnostics",
    author: "Mike Torres",
    category: "Ford > Engine > Cooling",
    submittedAt: "2025-04-12",
    priority: "high",
    wordCount: 3100,
    excerpt:
      "Diagnostic workflow for coolant intrusion issues commonly found in the Ford EcoBoost 2.3L engine...",
  },
  {
    id: "4",
    title: "BMW N55 VANOS Solenoid Replacement Guide",
    author: "Anna Weber",
    category: "BMW > Engine > Valve Train",
    submittedAt: "2025-04-12",
    priority: "low",
    wordCount: 1560,
    excerpt:
      "Detailed replacement procedure for the VANOS solenoid valves on BMW N55 inline-6 engines...",
  },
  {
    id: "5",
    title: "Subaru FA20 Oil Consumption Test Protocol",
    author: "David Park",
    category: "Subaru > Engine > Lubrication",
    submittedAt: "2025-04-13",
    priority: "medium",
    wordCount: 2080,
    excerpt:
      "Standardized oil consumption testing protocol for the Subaru FA20 DIT boxer engine...",
  },
];

const priorityConfig = {
  high: {
    label: "High",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
  medium: {
    label: "Medium",
    className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground border-border",
  },
};

export default function AdminReviewArticles() {
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ReviewArticle | null>(
    null,
  );
  const [rejectReason, setRejectReason] = useState("");

  const filtered = mockArticles.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase());
    const matchesPriority =
      filterPriority === "all" || a.priority === filterPriority;
    return matchesSearch && matchesPriority;
  });

  const handleReject = (article: ReviewArticle) => {
    setSelectedArticle(article);
    setRejectReason("");
    setRejectDialogOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Review Queue</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mockArticles.length} articles pending review
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Priority:{" "}
              {filterPriority === "all"
                ? "All"
                : priorityConfig[filterPriority as keyof typeof priorityConfig]
                    ?.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFilterPriority("all")}>
              All
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterPriority("high")}>
              High
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterPriority("medium")}>
              Medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterPriority("low")}>
              Low
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Article List */}
      <div className="space-y-3">
        {filtered.map((article) => (
          <Card
            key={article.id}
            className="hover:border-primary/30 transition-colors"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-base truncate">
                      {article.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={priorityConfig[article.priority].className}
                    >
                      {priorityConfig[article.priority].label}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      {article.wordCount.toLocaleString()} words
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.submittedAt}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground/70">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/admin/articles/${article.id}/edit`}>
                      <Eye className="mr-1.5 h-3.5 w-3.5" />
                      Review
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                    Approve
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleReject(article)}>
                        <XCircle className="mr-2 h-4 w-4 text-destructive" />
                        Reject with Feedback
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Add Comment
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Clock className="mr-2 h-4 w-4" />
                        Return to Draft
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <CheckCircle2 className="h-10 w-10 mx-auto text-muted-foreground/50 mb-3" />
              <p className="text-muted-foreground">
                No articles pending review
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Reject Dialog */}
      <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Article</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Provide feedback for{" "}
              <span className="font-medium text-foreground">
                {selectedArticle?.title}
              </span>
            </p>
            <Textarea
              placeholder="Explain what needs to be revised..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setRejectDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => setRejectDialogOpen(false)}
              disabled={!rejectReason.trim()}
            >
              Reject & Send Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
