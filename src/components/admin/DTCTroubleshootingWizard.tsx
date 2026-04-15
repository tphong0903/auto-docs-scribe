import React, { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  RotateCcw,
  Wrench,
} from "lucide-react";
const API_URL = import.meta.env.VITE_API_URL || "";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DTCTroubleshootingWizardProps {
  folder: string;
  onRefClick: (code: string) => void;
}

interface TroubleshootingTable {
  page: number;
  table_index: number;
  data: string[][];
}

interface TroubleshootingApiResponse {
  success: boolean;
  data: TroubleshootingTable[];
}

interface StepRow {
  step: number;
  action: string;
  yesText: string;
  noText: string;
}

interface ParsedOutcome {
  label: string;
  nextStep: number | null;
  conclusion: string | null;
}

const TRANSITION_REGEX = /Chuyển sang Bước\s+(\d+)\.?/i;
const PAGE_REF_TOKEN_REGEX = /(\(?Trang\s+[A-Z0-9]+-\d+\)?)/gi;
const PAGE_REF_CODE_REGEX = /([A-Z0-9]+-\d+)/i;

const parseStepNumber = (value?: string) => {
  const matched = value?.match(/\d+/);
  return matched ? Number(matched[0]) : null;
};

const parseOutcome = (text?: string): ParsedOutcome => {
  const label = text?.trim() || "";
  const matched = label.match(TRANSITION_REGEX);

  if (matched) {
    return {
      label,
      nextStep: Number(matched[1]),
      conclusion: null,
    };
  }

  return {
    label,
    nextStep: null,
    conclusion: label || null,
  };
};

const buildSteps = (rows: string[][]): StepRow[] =>
  rows
    .slice(1)
    .map((row) => {
      const step = parseStepNumber(row[0]);

      if (step === null) {
        return null;
      }

      return {
        step,
        action: row[1]?.trim() || "",
        yesText: row[2]?.trim() || "",
        noText: row[3]?.trim() || "",
      };
    })
    .filter((row): row is StepRow => row !== null);

const RichText: React.FC<{
  text: string;
  onRefClick: (code: string) => void;
  className?: string;
}> = ({ text, onRefClick, className }) => {
  const tokens = text.split(PAGE_REF_TOKEN_REGEX);

  return (
    <div className={cn("whitespace-pre-wrap", className)}>
      {tokens.map((token, index) => {
        const code = token.match(PAGE_REF_CODE_REGEX)?.[1];

        if (!code) {
          return <React.Fragment key={`${token}-${index}`}>{token}</React.Fragment>;
        }

        return (
          <button
            key={`${code}-${index}`}
            type="button"
            onClick={() => onRefClick(code)}
            className="inline font-semibold text-blue-600 underline-offset-4 hover:underline"
          >
            {token}
          </button>
        );
      })}
    </div>
  );
};

const ActionOption: React.FC<{
  label: string;
  tone: "yes" | "no";
  description: string;
  onClick: () => void;
  onRefClick: (code: string) => void;
}> = ({ label, tone, description, onClick, onRefClick }) => {
  const toneClasses =
    tone === "yes"
      ? "border-emerald-300 bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-emerald-400"
      : "border-slate-300 bg-slate-700 text-white hover:bg-slate-800 focus-visible:ring-slate-400";

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex min-h-16 w-full items-center justify-center rounded-2xl border px-4 py-4 text-lg font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          toneClasses,
        )}
      >
        {label}
      </button>
      <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <RichText text={description} onRefClick={onRefClick} />
      </div>
    </div>
  );
};

const DTCTroubleshootingWizard: React.FC<DTCTroubleshootingWizardProps> = ({
  folder,
  onRefClick,
}) => {
  const [rows, setRows] = useState<StepRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [history, setHistory] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [conclusion, setConclusion] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchTable = async () => {
      try {
        setLoading(true);
        setError(null);
        setRows([]);
        setCurrentStep(1);
        setHistory([]);
        setIsFinished(false);
        setConclusion("");

        const response = await fetch(`${API_URL}/api/dtc-tables/${folder}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Không thể tải bảng khắc phục sự cố");
        }

        const result: TroubleshootingApiResponse = await response.json();
        const firstTable = result.data?.[0]?.data ?? [];
        const nextRows = buildSteps(firstTable);
        const firstStep = nextRows[0]?.step ?? 1;

        setRows(nextRows);
        setCurrentStep(firstStep);
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }

        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Đã xảy ra lỗi khi tải bảng khắc phục sự cố",
        );
      } finally {
        setLoading(false);
      }
    };

    void fetchTable();

    return () => controller.abort();
  }, [folder]);

  const stepsByNumber = useMemo(
    () => new Map(rows.map((row) => [row.step, row])),
    [rows],
  );

  const currentRow = stepsByNumber.get(currentStep) ?? null;
  const yesOutcome = currentRow ? parseOutcome(currentRow.yesText) : null;
  const noOutcome = currentRow ? parseOutcome(currentRow.noText) : null;

  const moveToOutcome = (outcome: ParsedOutcome | null) => {
    if (!outcome || !currentRow) {
      return;
    }

    setHistory((prev) => [...prev, currentRow.step]);

    if (outcome.nextStep !== null && stepsByNumber.has(outcome.nextStep)) {
      setCurrentStep(outcome.nextStep);
      setIsFinished(false);
      setConclusion("");
      return;
    }

    setIsFinished(true);
    setConclusion(outcome.conclusion || outcome.label || "Hoàn tất kiểm tra.");
  };

  const handleBack = () => {
    if (history.length === 0) {
      return;
    }

    const previousStep = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentStep(previousStep);
    setIsFinished(false);
    setConclusion("");
  };

  const handleRestart = () => {
    const firstStep = rows[0]?.step ?? 1;
    setCurrentStep(firstStep);
    setHistory([]);
    setIsFinished(false);
    setConclusion("");
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-3 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-sm font-medium text-slate-600">Đang tải quy trình khắc phục sự cố...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-red-200 bg-white p-8 shadow-sm">
        <div className="max-w-sm space-y-3 text-center">
          <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
          <h3 className="text-lg font-semibold text-slate-900">Không thể tải wizard</h3>
          <p className="text-sm text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/90 p-8 shadow-sm">
        <div className="max-w-sm space-y-3 text-center">
          <Wrench className="mx-auto h-10 w-10 text-slate-400" />
          <h3 className="text-lg font-semibold text-slate-900">Chưa có bảng khắc phục sự cố</h3>
          <p className="text-sm text-slate-600">
            Không có bảng khắc phục sự cố cho mã lỗi này
          </p>
        </div>
      </div>
    );
  }

  if (!currentRow && !isFinished) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
        <div className="max-w-sm space-y-3 text-center">
          <AlertCircle className="mx-auto h-10 w-10 text-amber-500" />
          <h3 className="text-lg font-semibold text-slate-900">Thiếu dữ liệu bước</h3>
          <p className="text-sm text-slate-600">
            Không tìm thấy nội dung cho bước hiện tại trong bảng khắc phục sự cố.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-[28px] border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <CardHeader className="shrink-0 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 px-5 py-4 text-white">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleBack}
            disabled={history.length === 0}
            className="h-10 w-10 rounded-full text-white hover:bg-white/10 hover:text-white disabled:text-white/40 disabled:hover:bg-transparent"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
              Troubleshooting Wizard
            </p>
            <h3 className="mt-1 text-2xl font-semibold">
              {isFinished ? "Kết luận" : `Bước ${currentStep}`}
            </h3>
          </div>
          <div className="flex justify-end">
            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-blue-100">
              {history.length} lượt điều hướng
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-auto px-5 py-6">
        {isFinished ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-11 w-11 text-emerald-600" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Hoàn tất
            </p>
            <h4 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Kết luận xử lý
            </h4>
            <RichText
              text={conclusion}
              onRefClick={onRefClick}
              className="mt-5 max-w-xl text-lg leading-8 text-slate-700"
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Hành động cần thực hiện
              </p>
              <RichText
                text={currentRow?.action ?? ""}
                onRefClick={onRefClick}
                className="text-lg font-medium leading-8 text-slate-800"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ActionOption
                label="Có"
                tone="yes"
                description={yesOutcome?.label || "Tiếp tục theo hướng xử lý này."}
                onClick={() => moveToOutcome(yesOutcome)}
                onRefClick={onRefClick}
              />
              <ActionOption
                label="Không"
                tone="no"
                description={noOutcome?.label || "Tiếp tục theo hướng xử lý này."}
                onClick={() => moveToOutcome(noOutcome)}
                onRefClick={onRefClick}
              />
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="shrink-0 border-t border-slate-200 bg-slate-50 px-5 py-4">
        <div className="flex w-full items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            {isFinished ? "Có thể quay lại hoặc bắt đầu lại quy trình." : "Chọn đáp án phù hợp để sang bước tiếp theo."}
          </p>
          <Button
            type="button"
            variant={isFinished ? "default" : "outline"}
            onClick={handleRestart}
            className="shrink-0 rounded-full"
          >
            <RotateCcw className="h-4 w-4" />
            Làm lại từ đầu
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DTCTroubleshootingWizard;
