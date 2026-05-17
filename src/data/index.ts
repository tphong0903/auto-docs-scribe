import { MatCamChungQuiz } from "./CamChungKem";
import { DongCoQuaNhiet } from "./DongCoQuaNhiet";
import { KhoiDenDuXang } from "./KhoiDenDuXang";
import { KhoKhoiDongQuiz } from "./KhoKhoiDong";
import { RungGiatQuiz } from "./RungGiat";
import quizData from "./MatCongSuat";

// Normalize exports (MatCongSuat exports default as quizData)
const MatCongSuat = quizData || {};

export type QuizBundle = {
  title: string;
  questions: any[];
};

const registry: Record<string, QuizBundle> = {
  "engine-vibration": RungGiatQuiz as QuizBundle,
  "engine-overheat": DongCoQuaNhiet as QuizBundle,
  "fuel-consumption": KhoiDenDuXang as QuizBundle,
  "unusual-noise": MatCamChungQuiz as QuizBundle,
  "hard-start": KhoKhoiDongQuiz as QuizBundle,
  "power-loss": MatCongSuat as QuizBundle,
};

export function getQuizBySymptomId(id?: string): QuizBundle | null {
  if (!id) return null;
  return registry[id] ?? null;
}

export default registry;
