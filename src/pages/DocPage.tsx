import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocSidebar } from "@/components/layout/DocSidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowLeft, ArrowRight, Calendar, User, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const docsContent: Record<string, {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  author: string;
  date: string;
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}> = {
  "toyota-misfires": {
    title: "Diagnosing P0300 Random Misfire on Toyota 2GR-FE",
    breadcrumbs: [
      { label: "Automakers", href: "/category/automakers" },
      { label: "Toyota", href: "/category/automakers" },
      { label: "Engine Systems", href: "/category/engine-systems" },
      { label: "Diagnosing Misfires" },
    ],
    author: "J. Morrison",
    date: "April 12, 2026",
    prev: undefined,
    next: { title: "Timing Chain Inspection", href: "/docs/toyota-timing" },
  },
};

const defaultDoc = {
  title: "Documentation Page",
  breadcrumbs: [{ label: "Documentation" }],
  author: "Technical Team",
  date: "April 2026",
  prev: undefined,
  next: undefined,
};

export default function DocPage() {
  const { slug } = useParams();
  const doc = docsContent[slug || ""] || { ...defaultDoc, title: slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Documentation" };
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Desktop */}
        <DocSidebar />

        {/* Mobile sidebar trigger */}
        <MobileSidebar />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
            <Breadcrumbs items={doc.breadcrumbs} />

            {/* Mobile TOC toggle */}
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="lg:hidden flex items-center gap-2 w-full rounded-md border bg-muted/50 px-3 py-2 mb-4 text-sm text-muted-foreground"
            >
              <span>On this page</span>
              {tocOpen ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
            </button>
            {tocOpen && (
              <div className="lg:hidden mb-6 rounded-md border bg-card p-4">
                <TableOfContents mobile />
              </div>
            )}

            <h1 className="font-heading text-2xl lg:text-3xl font-bold mb-3 leading-tight">{doc.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> {doc.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {doc.date}
              </span>
            </div>

            {/* Rich content */}
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h2 id="overview">Overview</h2>
              <p>
                The P0300 diagnostic trouble code indicates a random or multiple cylinder misfire has been detected. This procedure covers the complete diagnostic workflow for the Toyota 2GR-FE 3.5L V6 engine, including ignition system testing, fuel delivery verification, and mechanical integrity checks.
              </p>

              <div className="not-prose my-6 rounded-lg border-l-4 border-warning bg-warning/10 p-4">
                <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                  ⚠️ Safety Warning
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Disconnect the battery negative terminal before performing any ignition system tests. Ensure the engine has cooled sufficiently before accessing engine components.
                </p>
              </div>

              <h2 id="required-tools">Required Tools & Equipment</h2>
              <ul>
                <li>OBD-II scanner with live data capability</li>
                <li>Digital multimeter (DMM)</li>
                <li>Spark tester / inline spark checker</li>
                <li>Fuel pressure gauge (0-100 PSI)</li>
                <li>Compression tester</li>
                <li>Leak-down tester</li>
                <li>Noid light set</li>
              </ul>

              <h2 id="diagnostic-procedure">Diagnostic Procedure</h2>

              <h3 id="step-1-code-analysis">Step 1: Code Analysis</h3>
              <p>
                Connect the OBD-II scanner and retrieve all stored and pending DTCs. Record freeze frame data for P0300. Check for cylinder-specific misfire codes (P0301–P0306) which may accompany the P0300.
              </p>
              <div className="not-prose my-4 rounded-md bg-muted p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-1">// Common associated codes:</div>
                <div><span className="text-primary font-semibold">P0300</span> — Random/Multiple Cylinder Misfire Detected</div>
                <div><span className="text-primary font-semibold">P0301</span> — Cylinder 1 Misfire Detected</div>
                <div><span className="text-primary font-semibold">P0302</span> — Cylinder 2 Misfire Detected</div>
                <div><span className="text-primary font-semibold">P0171</span> — System Too Lean (Bank 1)</div>
              </div>

              <h3 id="step-2-ignition-testing">Step 2: Ignition System Testing</h3>
              <p>
                Inspect ignition coils for physical damage, cracks, or carbon tracking. Using the spark tester, verify spark output on each cylinder. Measure ignition coil primary and secondary resistance:
              </p>

              <div className="not-prose my-4 overflow-x-auto">
                <table className="w-full text-sm border rounded-md">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 font-heading text-xs font-semibold uppercase tracking-wider">Measurement</th>
                      <th className="text-left p-3 font-heading text-xs font-semibold uppercase tracking-wider">Specification</th>
                      <th className="text-left p-3 font-heading text-xs font-semibold uppercase tracking-wider">Actual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Primary Resistance</td>
                      <td className="p-3 font-mono text-primary">0.6 – 0.9 Ω</td>
                      <td className="p-3 text-muted-foreground">________</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Secondary Resistance</td>
                      <td className="p-3 font-mono text-primary">6.0 – 15.2 kΩ</td>
                      <td className="p-3 text-muted-foreground">________</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Supply Voltage</td>
                      <td className="p-3 font-mono text-primary">11.5 – 14.5 V</td>
                      <td className="p-3 text-muted-foreground">________</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 id="step-3-fuel-system">Step 3: Fuel System Verification</h3>
              <p>
                Connect the fuel pressure gauge to the Schrader valve on the fuel rail. Key-on engine-off (KOEO) fuel pressure should read within specification. Start the engine and monitor running pressure and pressure drop after shutdown.
              </p>
              <div className="not-prose my-4 rounded-md bg-muted p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-1">// Fuel pressure specifications (2GR-FE):</div>
                <div>KOEO pressure:    <span className="text-primary font-semibold">44 – 50 PSI</span></div>
                <div>Running pressure:  <span className="text-primary font-semibold">40 – 47 PSI</span></div>
                <div>Residual (5 min):  <span className="text-primary font-semibold">≥ 21 PSI</span></div>
              </div>

              <h3 id="step-4-mechanical-checks">Step 4: Mechanical Integrity Checks</h3>
              <p>
                If ignition and fuel systems pass, perform a cylinder compression test followed by a leak-down test. Compare readings across all six cylinders. Variation exceeding 10% between cylinders indicates a mechanical fault.
              </p>

              <div className="not-prose my-6 rounded-lg border-l-4 border-accent bg-accent/10 p-4">
                <p className="text-sm font-semibold text-foreground">📋 Note</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Perform the compression test with the engine at normal operating temperature, throttle wide open, and all ignition coils disconnected to prevent starting.
                </p>
              </div>

              <h2 id="resolution-matrix">Resolution Matrix</h2>
              <p>
                Based on test results, use the following decision matrix to identify the root cause and recommended repair:
              </p>
              <ul>
                <li><strong>Weak or no spark:</strong> Replace ignition coil(s) and spark plug(s)</li>
                <li><strong>Low fuel pressure:</strong> Test fuel pump relay, inspect fuel filter, test pump output</li>
                <li><strong>Low compression:</strong> Perform leak-down test to isolate to valves, rings, or head gasket</li>
                <li><strong>All systems pass:</strong> Check for intake manifold vacuum leaks, MAF sensor contamination, or PCM software updates</li>
              </ul>

              <h2 id="references">References</h2>
              <ul>
                <li>Toyota TIS — 2GR-FE Engine Mechanical (RM0592U)</li>
                <li>SAE J1979 — OBD-II Diagnostic Test Modes</li>
                <li>Toyota TSB-0116-16 — Misfire Under Cold Start Conditions</li>
              </ul>
            </article>

            {/* Copyright watermark */}
            <div className="mt-8 pt-4 border-t text-xs text-muted-foreground/50 text-center select-none">
              © AutoDocs — Internal Use Only. Unauthorized reproduction prohibited.
            </div>

            {/* Prev/Next */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              {doc.prev ? (
                <Link to={doc.prev.href} className="group flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  <div>
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{doc.prev.title}</div>
                  </div>
                </Link>
              ) : <div />}
              {doc.next ? (
                <Link to={doc.next.href} className="group flex items-center gap-2 text-sm hover:text-primary transition-colors text-right">
                  <div>
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium">{doc.next.title}</div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </main>

        {/* Right TOC - Desktop */}
        <aside className="hidden xl:flex w-56 shrink-0 border-l overflow-y-auto scrollbar-thin">
          <div className="p-4 sticky top-0">
            <TableOfContents />
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
