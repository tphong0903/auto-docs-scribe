import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  FolderTree,
  Eye,
  TrendingUp,
  Plus,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Total Articles",
    value: "346",
    icon: FileText,
    trend: "+12 this month",
  },
  { label: "Categories", value: "24", icon: FolderTree, trend: "6 top-level" },
  {
    label: "Total Views",
    value: "48.2k",
    icon: Eye,
    trend: "+18% vs last month",
  },
  {
    label: "Popular Today",
    value: "P0300",
    icon: TrendingUp,
    trend: "1.2k views today",
  },
];

const recentArticles = [
  {
    title: "Diagnosing P0300 Random Misfire on Toyota 2GR-FE",
    status: "published",
    date: "Apr 12, 2026",
    author: "J. Morrison",
  },
  {
    title: "Ford EcoBoost 2.0L Turbo System Pressure Test",
    status: "published",
    date: "Apr 10, 2026",
    author: "M. Chen",
  },
  {
    title: "Honda VTEC Solenoid Valve Testing Procedure",
    status: "draft",
    date: "Apr 8, 2026",
    author: "K. Williams",
  },
  {
    title: "BMW N55 Wastegate Rattle Diagnostic",
    status: "in_review",
    date: "Apr 7, 2026",
    author: "S. Davis",
  },
  {
    title: "Subaru FA20 Oil Consumption Test Procedure",
    status: "draft",
    date: "Apr 5, 2026",
    author: "J. Morrison",
  },
];

const statusColors: Record<string, string> = {
  published: "bg-success/15 text-success",
  draft: "bg-muted text-muted-foreground",
  in_review: "bg-warning/15 text-warning",
};

const statusLabels: Record<string, string> = {
  published: "Published",
  draft: "Draft",
  in_review: "In Review",
};

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Overview of your documentation site
          </p>
        </div>
        <Button asChild>
          <Link to="/admin/articles/new">
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            Recent Articles
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/articles">View all</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {recentArticles.map((article) => (
              <div
                key={article.title}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">
                    {article.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {article.author} · {article.date}
                  </p>
                </div>
                <span
                  className={`ml-3 text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${statusColors[article.status]}`}
                >
                  {statusLabels[article.status]}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
