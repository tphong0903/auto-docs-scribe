/**
 * Cấu hình các triệu chứng và sơ đồ
 * Mỗi triệu chứng tương ứng với một thư mục trong public/so_do/
 */

export interface SymptomConfig {
  id: string;
  title: string;
  folder: string;
  description?: string;
  imageCount?: number;
}

export const SYMPTOMS: SymptomConfig[] = [
  {
    id: "general-process",
    title: "Quy trình chung",
    folder: "QuyTrinhChung",
    description: "",
    imageCount: 2,
  },
  {
    id: "engine-vibration",
    title: "Rung giật động cơ",
    folder: "RungGiat",
    description: "Kiểm tra các nguyên nhân gây rung giật động cơ",
    imageCount: 4,
  },
  {
    id: "engine-overheat",
    title: "Động cơ quá nhiệt",
    folder: "QuaNhiet",
    description: "Xác định nguyên nhân động cơ quá nhiệt",
    imageCount: 3,
  },
  {
    id: "fuel-consumption",
    title: "Khói đen, dư xăng",
    folder: "khoiDen",
    description: "Tìm hiểu các nguyên nhân gây khói đen",
    imageCount: 4,
  },
  {
    id: "hard-start",
    title: "Khó khởi động",
    folder: "KhoKhoiDong",
    description: "Chẩn đoán vấn đề khó khởi động",
    imageCount: 3,
  },
  {
    id: "unusual-noise",
    title: "Cầm chừng kém",
    folder: "CamChungKem",
    description: "Kiểm tra lý do cầm chừng kém",
    imageCount: 3,
  },
  {
    id: "power-loss",
    title: "Mất công suất",
    folder: "MatCongSuat",
    description: "Xác định nguyên nhân mất công suất",
    imageCount: 3,
  },
];

/**
 * Lấy thông tin triệu chứng theo ID
 */
export const getSymptomById = (id: string): SymptomConfig | undefined => {
  return SYMPTOMS.find((symptom) => symptom.id === id);
};

/**
 * Lấy thông tin triệu chứng theo folder
 */
export const getSymptomByFolder = (
  folder: string,
): SymptomConfig | undefined => {
  return SYMPTOMS.find((symptom) => symptom.folder === folder);
};

/**
 * Lấy danh sách các triệu chứng (để hiển thị trong menu)
 */
export const getSymptomsList = (): SymptomConfig[] => {
  return SYMPTOMS;
};
