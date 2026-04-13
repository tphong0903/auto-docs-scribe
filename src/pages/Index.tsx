import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Car,
  Search,
  Wrench,
  Cpu,
  AlertTriangle,
  Fuel,
  Gauge,
  Zap,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { title: "Automakers", description: "Brand-specific diagnostics and procedures", icon: Car, href: "/category/automakers", count: 42 },
  { title: "Engine Systems", description: "Complete engine diagnostic workflows", icon: Cpu, href: "/category/engine-systems", count: 38 },
  { title: "Trouble Codes", description: "OBD-II code lookup and resolution", icon: AlertTriangle, href: "/category/trouble-codes", count: 156 },
  { title: "Fuel Systems", description: "Injection, pump, and delivery testing", icon: Fuel, href: "/category/fuel-systems", count: 24 },
  { title: "Electrical", description: "Wiring diagrams and sensor testing", icon: Zap, href: "/category/electrical", count: 67 },
  { title: "Performance", description: "Testing and calibration procedures", icon: Gauge, href: "/category/performance", count: 19 },
];

const recentProcedures = [
  { title: "Diagnosing P0300 Random Misfire on Toyota 2GR-FE", date: "Apr 12, 2026", href: "/docs/toyota-misfires" },
  { title: "Ford EcoBoost 2.0L Turbo System Pressure Test", date: "Apr 10, 2026", href: "/docs/ford-turbo" },
  { title: "Honda VTEC Solenoid Valve Testing Procedure", date: "Apr 8, 2026", href: "/docs/honda-vtec" },
  { title: "P0171 System Too Lean - Diagnostic Flowchart", date: "Apr 6, 2026", href: "/docs/p0171" },
  { title: "Toyota VVT-i System Complete Diagnostic Guide", date: "Apr 5, 2026", href: "/docs/toyota-vvti" },
];

const popularTopics = [
  { title: "P0420 Catalyst Efficiency Below Threshold", views: "2.4k", href: "/docs/p0420" },
  { title: "Fuel Injector Resistance Testing Guide", views: "1.8k", href: "/docs/toyota-injectors" },
  { title: "Timing Chain Stretch Measurement", views: "1.5k", href: "/docs/toyota-timing" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-navy-deep py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-mid to-navy-deep opacity-90" />
        <div className="relative container text-center">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4 tracking-tight">
            Automotive Technical Documentation
          </h1>
          <p className="text-sidebar-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Step-by-step diagnostic procedures, repair guides, and trouble code references for automotive technicians.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by trouble code, system, or keyword..."
              className="pl-12 h-12 text-base bg-card/10 border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus:bg-card/20"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12 lg:py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-xl font-semibold">Browse Categories</h2>
          <Link to="/category/all" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group flex items-start gap-4 rounded-lg border bg-card p-5 transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cat.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-sm font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                <span className="text-xs text-muted-foreground mt-2 inline-block">{cat.count} articles</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent + Popular */}
      <section className="container pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Recent */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h2 className="font-heading text-lg font-semibold">Recently Updated</h2>
            </div>
            <div className="space-y-1">
              {recentProcedures.map((proc) => (
                <Link
                  key={proc.title}
                  to={proc.href}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 hover:bg-muted transition-colors group"
                >
                  <span className="text-sm group-hover:text-primary transition-colors truncate mr-4">{proc.title}</span>
                  <span className="text-xs text-muted-foreground shrink-0">{proc.date}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <h2 className="font-heading text-lg font-semibold">Popular Topics</h2>
            </div>
            <div className="space-y-1">
              {popularTopics.map((topic) => (
                <Link
                  key={topic.title}
                  to={topic.href}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 hover:bg-muted transition-colors group"
                >
                  <span className="text-sm group-hover:text-primary transition-colors truncate mr-4">{topic.title}</span>
                  <span className="text-xs text-muted-foreground shrink-0">{topic.views} views</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
