import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileText, ArrowUpDown, Filter, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categoryMeta: Record<string, { title: string; description: string }> = {
  "automakers": { title: "Automakers", description: "Brand-specific diagnostic procedures organized by manufacturer." },
  "engine-systems": { title: "Engine Systems", description: "Complete engine diagnostic and repair workflows." },
  "trouble-codes": { title: "Trouble Codes", description: "OBD-II diagnostic trouble code lookup and resolution guides." },
  "fuel-systems": { title: "Fuel Systems", description: "Fuel injection, pump diagnostics, and delivery system testing." },
  "electrical": { title: "Electrical Systems", description: "Wiring diagrams, sensor testing, and electrical diagnostics." },
  "performance": { title: "Performance Testing", description: "Calibration, testing, and performance measurement procedures." },
  "all": { title: "All Documentation", description: "Browse all available technical documentation." },
};

const articles = [
  { title: "Diagnosing P0300 Random Misfire on Toyota 2GR-FE", excerpt: "Complete diagnostic procedure for random/multiple cylinder misfires including ignition, fuel, and mechanical checks.", date: "Apr 12, 2026", category: "Engine Systems", href: "/docs/toyota-misfires" },
  { title: "Ford EcoBoost 2.0L Turbo System Pressure Test", excerpt: "Step-by-step turbocharger boost pressure testing procedure with specification tables.", date: "Apr 10, 2026", category: "Engine Systems", href: "/docs/ford-turbo" },
  { title: "Honda VTEC Solenoid Valve Testing Procedure", excerpt: "Resistance and operational testing of the VTEC solenoid valve assembly.", date: "Apr 8, 2026", category: "Engine Systems", href: "/docs/honda-vtec" },
  { title: "P0171 System Too Lean - Diagnostic Flowchart", excerpt: "Systematic approach to diagnosing lean fuel mixture conditions with flowchart.", date: "Apr 6, 2026", category: "Trouble Codes", href: "/docs/p0171" },
  { title: "Toyota VVT-i System Complete Diagnostic Guide", excerpt: "Variable valve timing system inspection, testing, and component replacement guide.", date: "Apr 5, 2026", category: "Engine Systems", href: "/docs/toyota-vvti" },
  { title: "P0420 Catalyst Efficiency Below Threshold", excerpt: "Catalytic converter efficiency testing and diagnostic decision tree.", date: "Apr 3, 2026", category: "Trouble Codes", href: "/docs/p0420" },
  { title: "Fuel Injector Resistance and Balance Testing", excerpt: "Multi-point injector resistance measurement and flow balance procedures.", date: "Apr 1, 2026", category: "Fuel Systems", href: "/docs/toyota-injectors" },
  { title: "Timing Chain Stretch Measurement Procedure", excerpt: "Camshaft-to-crankshaft correlation testing and chain elongation measurement.", date: "Mar 28, 2026", category: "Engine Systems", href: "/docs/toyota-timing" },
];

export default function CategoryPage() {
  const { slug } = useParams();
  const meta = categoryMeta[slug || "all"] || categoryMeta["all"];
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  const sorted = [...articles].sort((a, b) =>
    sortBy === "title" ? a.title.localeCompare(b.title) : 0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container py-8 flex-1">
        <Breadcrumbs items={[{ label: meta.title }]} />

        <div className="mb-8">
          <h1 className="font-heading text-2xl lg:text-3xl font-bold mb-2">{meta.title}</h1>
          <p className="text-muted-foreground">{meta.description}</p>
        </div>

        {/* Sort controls */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button
            variant={sortBy === "date" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setSortBy("date")}
            className="text-xs"
          >
            <Calendar className="h-3 w-3 mr-1" /> Date
          </Button>
          <Button
            variant={sortBy === "title" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setSortBy("title")}
            className="text-xs"
          >
            <ArrowUpDown className="h-3 w-3 mr-1" /> Title
          </Button>
        </div>

        {/* Article list */}
        <div className="space-y-2">
          {sorted.map((article) => (
            <Link
              key={article.title}
              to={article.href}
              className="block rounded-lg border bg-card p-4 lg:p-5 hover:shadow-sm hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-sm font-semibold group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {article.date}
                    </span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{article.category}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
