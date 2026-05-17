import { MatCamChungQuiz } from "./CamChungKem";
import { DongCoQuaNhiet } from "./DongCoQuaNhiet";
import { KhoiDenDuXang } from "./KhoiDenDuXang";
import quizData from "./MatCongSuat";

// Normalize exports (MatCongSuat exports default as quizData)
const MatCongSuat = quizData || {};

export type QuizBundle = {
  title: string;
  questions: any[];
};

const registry: Record<string, QuizBundle> = {
  "engine-vibration": MatCamChungQuiz as QuizBundle,
  "engine-overheat": DongCoQuaNhiet as QuizBundle,
  "fuel-consumption": KhoiDenDuXang as QuizBundle,
  "unusual-noise": MatCongSuat as QuizBundle,
  "hard-start": MatCamChungQuiz as QuizBundle,
};

export function getQuizBySymptomId(id?: string): QuizBundle | null {
  if (!id) return null;
  return registry[id] ?? null;
}

export default registry;
