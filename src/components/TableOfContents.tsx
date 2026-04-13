import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "required-tools", title: "Required Tools & Equipment", level: 2 },
  { id: "diagnostic-procedure", title: "Diagnostic Procedure", level: 2 },
  { id: "step-1-code-analysis", title: "Step 1: Code Analysis", level: 3 },
  { id: "step-2-ignition-testing", title: "Step 2: Ignition System Testing", level: 3 },
  { id: "step-3-fuel-system", title: "Step 3: Fuel System Verification", level: 3 },
  { id: "step-4-mechanical-checks", title: "Step 4: Mechanical Integrity Checks", level: 3 },
  { id: "resolution-matrix", title: "Resolution Matrix", level: 2 },
  { id: "references", title: "References", level: 2 },
];

export function TableOfContents({ mobile = false }: { mobile?: boolean }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      {!mobile && (
        <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          On this page
        </h3>
      )}
      <ul className="space-y-1">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "block text-sm py-1 transition-colors hover:text-foreground",
                item.level === 3 && "pl-3",
                activeId === item.id
                  ? "text-primary font-medium border-l-2 border-primary pl-3"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
