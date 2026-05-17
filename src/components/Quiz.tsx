import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Home,
  RotateCcw,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useBlocker, useNavigate, useParams } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

type QuestionType =
  | "true-false"
  | "multiple-choice"
  | "multiple-answer"
  | "fill-blank";

interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    type: "true-false",
    question: "AI chỉ có thể thực hiện các tác vụ đơn giản?",
    correctAnswer: "false",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Ngôn ngữ phổ biến nhất cho AI là gì?",
    options: ["Java", "Python", "C++", "PHP"],
    correctAnswer: "Python",
  },
  {
    id: 3,
    type: "multiple-answer",
    question: "Chọn các framework AI phổ biến:",
    options: ["TensorFlow", "React", "PyTorch", "Keras"],
    correctAnswer: ["TensorFlow", "PyTorch", "Keras"],
  },
  {
    id: 4,
    type: "fill-blank",
    question: "_______ là quá trình học từ dữ liệu có nhãn.",
    correctAnswer: "supervised learning",
  },
];

interface OptionCardProps {
  checked: boolean;
  label: string;
  onSelect: () => void;
  type: "single" | "multiple";
  id: string;
  controlValue?: string;
}

const typeLabels: Record<QuestionType, string> = {
  "true-false": "Đúng / Sai",
  "multiple-choice": "Một đáp án",
  "multiple-answer": "Nhiều đáp án",
  "fill-blank": "Điền đáp án",
};

function OptionCard({
  checked,
  label,
  onSelect,
  type,
  id,
  controlValue,
}: OptionCardProps) {
  return (
    <div
      role={type === "single" ? "radio" : "checkbox"}
      aria-checked={checked}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "flex w-full items-start gap-4 rounded-2xl border border-border/80 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/[0.06] hover:to-accent/[0.08] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        checked &&
          "border-primary bg-gradient-to-r from-primary/12 to-accent/12 ring-2 ring-primary/20 shadow-lg shadow-primary/10",
      )}
    >
      <div className="mt-0.5 shrink-0">
        {type === "single" ? (
          <RadioGroupItem
            value={controlValue ?? label}
            id={id}
            className="pointer-events-none"
          />
        ) : (
          <Checkbox id={id} checked={checked} className="pointer-events-none" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
        <span className="text-base font-medium leading-6 text-foreground sm:text-lg">
          {label}
        </span>

        {checked ? (
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        ) : (
          <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/60" />
        )}
      </div>
    </div>
  );
}

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const params = useParams();

  const [questions, setQuestions] = useState<Question[]>(sampleQuestions);
  const [quizTitle, setQuizTitle] = useState<string>("Bài Quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const hasUnsavedAnswers = answeredCount > 0 && !isSubmitted;
  const progressValue = ((currentIndex + 1) / questions.length) * 100;

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      hasUnsavedAnswers && currentLocation.pathname !== nextLocation.pathname,
  );

  useEffect(() => {
    if (blocker.state === "blocked") {
      setShowLeaveDialog(true);
    }
  }, [blocker.state]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedAnswers) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedAnswers]);

  const currentAnswer = answers[currentQuestion.id];

  const isSubmitDisabled = useMemo(
    () =>
      questions.some((question) => {
        const answer = answers[question.id];

        if (Array.isArray(answer)) {
          return answer.length === 0;
        }

        return !answer || answer.trim() === "";
      }),
    [answers, questions],
  );

  const handleAnswer = (answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleMultipleAnswerToggle = (option: string) => {
    const existingAnswers = (answers[currentQuestion.id] as string[]) || [];

    const nextAnswers = existingAnswers.includes(option)
      ? existingAnswers.filter((answer) => answer !== option)
      : [...existingAnswers, option];

    handleAnswer(nextAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;

    questions.forEach((question) => {
      const userAnswer = answers[question.id];

      if (userAnswer === undefined) return;

      if (
        question.type === "multiple-answer" &&
        Array.isArray(question.correctAnswer) &&
        Array.isArray(userAnswer)
      ) {
        const sortedUser = [...userAnswer].sort();
        const sortedCorrect = [...question.correctAnswer].sort();

        if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
          correctCount++;
        }
      } else if (
        typeof question.correctAnswer === "string" &&
        typeof userAnswer === "string"
      ) {
        const normalizeUser = userAnswer.toLowerCase().trim();
        const normalizeCorrect = question.correctAnswer.toLowerCase().trim();

        if (normalizeUser === normalizeCorrect) {
          correctCount++;
        }
      }
    });

    setScore(correctCount);
    setIsSubmitted(true);

    toast({
      title: "Đã nộp bài",
      description: `Bạn đạt ${correctCount}/${questions.length} câu đúng.`,
    });
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setScore(0);
    setIsSubmitted(false);
  };

  // Load quiz data by symptomId (if provided)
  useEffect(() => {
    const load = async () => {
      try {
        const { getQuizBySymptomId } = await import("@/data");
        const id = params.symptomId;
        const bundle = getQuizBySymptomId(id ?? undefined);
        if (bundle) {
          setQuizTitle(bundle.title || "Bài Quiz");
          setQuestions(bundle.questions as Question[]);
          setCurrentIndex(0);
        } else {
          setQuizTitle("Bài Quiz");
          setQuestions(sampleQuestions);
        }
      } catch (err) {
        // fallback to sample
        setQuizTitle("Bài Quiz");
        setQuestions(sampleQuestions);
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.symptomId]);

  const handleStayOnQuiz = () => {
    setShowLeaveDialog(false);

    if (blocker.state === "blocked") {
      blocker.reset();
    }
  };

  const handleLeaveQuiz = () => {
    setShowLeaveDialog(false);

    if (blocker.state === "blocked") {
      blocker.proceed();
    }
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "true-false":
        return (
          <RadioGroup
            value={currentAnswer as string}
            onValueChange={handleAnswer}
            className="space-y-4"
          >
            {[
              { label: "Đúng", value: "true" },
              { label: "Sai", value: "false" },
            ].map((option) => (
              <OptionCard
                key={option.value}
                id={`${option.value}-${currentQuestion.id}`}
                checked={currentAnswer === option.value}
                label={option.label}
                onSelect={() => handleAnswer(option.value)}
                type="single"
                controlValue={option.value}
              />
            ))}
          </RadioGroup>
        );

      case "multiple-choice":
        return (
          <RadioGroup
            value={currentAnswer as string}
            onValueChange={handleAnswer}
            className="space-y-4"
          >
            {currentQuestion.options?.map((option, index) => (
              <OptionCard
                key={option}
                id={`option-${currentQuestion.id}-${index}`}
                checked={currentAnswer === option}
                label={option}
                onSelect={() => handleAnswer(option)}
                type="single"
                controlValue={option}
              />
            ))}
          </RadioGroup>
        );

      case "multiple-answer":
        return (
          <div className="space-y-4">
            <div className="rounded-2xl border border-dashed border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
              Chọn tất cả đáp án đúng.
            </div>

            <div className="space-y-4">
              {currentQuestion.options?.map((option, index) => {
                const selectedAnswers = (currentAnswer as string[]) || [];
                const isSelected = selectedAnswers.includes(option);

                return (
                  <OptionCard
                    key={option}
                    id={`multi-${currentQuestion.id}-${index}`}
                    checked={isSelected}
                    label={option}
                    onSelect={() => handleMultipleAnswerToggle(option)}
                    type="multiple"
                  />
                );
              })}
            </div>
          </div>
        );

      case "fill-blank":
        return (
          <div className="space-y-3">
            <div className="rounded-2xl border border-dashed border-border/80 bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
              Nhập đáp án ngắn gọn và chính xác nhất.
            </div>

            <Input
              type="text"
              placeholder="Nhập câu trả lời..."
              value={(currentAnswer as string) || ""}
              onChange={(event) => handleAnswer(event.target.value)}
              className="h-14 rounded-2xl border-border bg-white px-4 text-base shadow-sm transition-all duration-200 focus-visible:ring-primary/30 sm:text-lg"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_28%),radial-gradient(circle_at_top_right,hsl(var(--accent)/0.14),transparent_32%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_54%,hsl(var(--muted)/0.55)_100%)]">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <Card className="overflow-hidden rounded-3xl border-white/80 bg-[linear-gradient(135deg,hsl(var(--card))_0%,hsl(var(--primary)/0.05)_52%,hsl(var(--accent)/0.08)_100%)] shadow-lg">
            <CardHeader className="gap-6 p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {quizTitle}
                    </CardTitle>

                    <CardDescription className="max-w-2xl text-sm leading-6 text-muted-foreground/90 sm:text-base">
                      Kiểm tra kiến thức với giao diện tập trung, dễ theo dõi
                      tiến độ và tối ưu trải nghiệm trả lời trên cả desktop lẫn
                      mobile.
                    </CardDescription>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="h-11 rounded-xl px-4 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <Home className="h-4 w-4" />
                  Trang chủ
                </Button>
              </div>
            </CardHeader>
          </Card>

          {!isSubmitted ? (
            <Card className="rounded-3xl border-white/80 bg-white/95 shadow-xl">
              <CardContent className="p-0">
                <div className="border-b bg-gradient-to-r from-primary/[0.035] via-transparent to-accent/[0.05] px-6 py-6 sm:px-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge
                          variant="secondary"
                          className="rounded-full border-0 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {typeLabels[currentQuestion.type]}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Câu {currentIndex + 1} / {questions.length}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {answeredCount} / {questions.length} câu đã trả lời
                      </p>
                    </div>

                    <div className="w-full max-w-sm space-y-2">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Tiến độ</span>
                        <span>{Math.round(progressValue)}%</span>
                      </div>

                      <Progress
                        value={progressValue}
                        className="h-3 rounded-full bg-secondary/80 shadow-inner [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:via-teal-light [&>div]:to-accent [&>div]:shadow-md [&>div]:shadow-primary/20 [&>div]:transition-all [&>div]:duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
                  <section className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20">
                        {currentIndex + 1}
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          Question
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                          {currentQuestion.question}
                        </h2>
                      </div>
                    </div>

                    <div className="pl-0 sm:pl-16">{renderQuestion()}</div>
                  </section>

                  <section className="flex flex-col gap-3 border-t px-0 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      variant="outline"
                      disabled={currentIndex === 0}
                      onClick={handlePrevious}
                      className="h-11 rounded-xl px-4 shadow-sm transition-all duration-200 hover:shadow-md"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Câu trước
                    </Button>

                    {currentIndex === questions.length - 1 ? (
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitDisabled}
                        className="h-11 rounded-xl px-5 shadow-lg transition-all duration-200 hover:shadow-xl"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Nộp bài
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNext}
                        className="h-11 rounded-xl px-5 shadow-lg transition-all duration-200 hover:shadow-xl"
                      >
                        Câu tiếp
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </section>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
              <Card className="rounded-3xl border-white/80 bg-[linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--primary)/0.04)_100%)] shadow-xl">
                <CardContent className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center sm:p-10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-light shadow-lg shadow-emerald-500/25">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Hoàn thành
                    </h2>
                    <p className="text-sm leading-6 text-muted-foreground">
                      Bạn đã hoàn thành toàn bộ bài quiz. Xem nhanh điểm số và
                      đối chiếu từng câu trả lời bên dưới.
                    </p>
                  </div>

                  <div className="w-full rounded-3xl border bg-[linear-gradient(135deg,hsl(var(--primary)/0.08)_0%,hsl(var(--accent)/0.12)_100%)] p-6 shadow-sm">
                    <p className="text-sm font-medium text-muted-foreground">
                      Tổng điểm
                    </p>
                    <div className="mt-2 text-5xl font-bold tracking-tight text-primary">
                      {score}/{questions.length}
                    </div>
                    <p className="mt-2 text-base font-medium text-foreground">
                      {Math.round((score / questions.length) * 100)}%
                    </p>
                  </div>

                  <Button
                    onClick={handleRestart}
                    size="lg"
                    className="h-12 w-full rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Làm lại
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-white/80 bg-white shadow-xl">
                <CardHeader className="space-y-2 p-6 sm:p-8">
                  <CardTitle className="text-2xl font-bold tracking-tight">
                    Result Summary
                  </CardTitle>
                  <CardDescription>
                    Xem lại từng câu trả lời với trạng thái đúng hoặc sai rõ
                    ràng.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 p-6 pt-0 sm:p-8 sm:pt-0">
                  {questions.map((question, index) => {
                    const userAnswer = answers[question.id];
                    const isCorrect =
                      JSON.stringify(userAnswer) ===
                      JSON.stringify(question.correctAnswer);

                    return (
                      <div
                        key={question.id}
                        className={cn(
                          "rounded-3xl border p-5 shadow-sm transition-all duration-200",
                          isCorrect
                            ? "border-emerald-200 bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(45,212,191,0.12))]"
                            : "border-rose-200 bg-[linear-gradient(135deg,rgba(244,63,94,0.08),rgba(251,146,60,0.12))]",
                        )}
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3">
                              <Badge
                                variant={isCorrect ? "secondary" : "outline"}
                                className={cn(
                                  "rounded-full px-3 py-1",
                                  isCorrect
                                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                                    : "border-rose-200 bg-rose-100 text-rose-700 hover:bg-rose-100",
                                )}
                              >
                                {isCorrect ? "Đúng" : "Sai"}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                Câu {index + 1}
                              </span>
                            </div>

                            <h3 className="text-lg font-semibold leading-7 text-foreground">
                              {question.question}
                            </h3>

                            <div className="space-y-2 text-sm leading-6">
                              <p>
                                <span className="font-semibold text-foreground">
                                  Câu trả lời của bạn:
                                </span>{" "}
                                <span className="text-muted-foreground">
                                  {Array.isArray(userAnswer)
                                    ? userAnswer.join(", ")
                                    : userAnswer || "Chưa trả lời"}
                                </span>
                              </p>

                              <p>
                                <span className="font-semibold text-foreground">
                                  Đáp án đúng:
                                </span>{" "}
                                <span className="text-muted-foreground">
                                  {Array.isArray(question.correctAnswer)
                                    ? question.correctAnswer.join(", ")
                                    : question.correctAnswer}
                                </span>
                              </p>
                            </div>
                          </div>

                          <div
                            className={cn(
                              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-sm",
                              isCorrect
                                ? "bg-emerald-500 text-white"
                                : "bg-rose-500 text-white",
                            )}
                          >
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <AlertDialog open={showLeaveDialog}>
        <AlertDialogContent className="rounded-3xl border-white/80 bg-white shadow-2xl">
          <AlertDialogHeader className="text-left">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <AlertDialogTitle className="text-2xl font-bold tracking-tight">
              Rời khỏi bài quiz?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm leading-6">
              Các câu trả lời chưa nộp sẽ bị mất nếu bạn chuyển sang trang khác.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleStayOnQuiz}
              className="rounded-xl"
            >
              Ở lại
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleLeaveQuiz} className="rounded-xl">
              Rời trang
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Quiz;
