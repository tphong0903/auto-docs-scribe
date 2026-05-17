export const RungGiatQuiz = {
  title: "Quiz: Chẩn đoán lỗi Rung giật động cơ",

  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question:
        "Theo quy trình chẩn đoán, thao tác nào sau đây tại xưởng KHÔNG ĐỦ để xác minh triệu chứng mất công suất?",
      options: [
        "Chạy thử xe thực tế trên đường",
        "Sử dụng bệ thử công suất (Dyno)",
        "Đạp thốc ga tại chỗ (Snap throttle) không tải",
        "Thử ép tải (Stall test) trên xe số tự động",
      ],
      correctAnswer: "Đạp thốc ga tại chỗ (Snap throttle) không tải",
      explanation:
        "Đạp ga tại chỗ khi không tải không tạo đủ tải thực tế lên động cơ nên không thể xác minh chính xác lỗi mất công suất.",
    },

    {
      id: 2,
      type: "true-false",
      question:
        "Tắc nghẽn hệ thống xả (Catalytic Converter) sẽ tạo ra áp suất ngược (Backpressure) khiến động cơ bị ỳ và không thể vượt qua tua máy cao.",
      correctAnswer: "true",
      explanation:
        "Khi áp suất xả tăng quá cao, khí cháy không thoát được làm giảm hiệu suất nạp và khiến động cơ hụt công suất ở tua cao.",
    },

    {
      id: 3,
      type: "multiple-answer",
      question:
        "Chọn các nguyên nhân có thể dẫn đến việc xe bị ỳ, rống máy nhưng không tăng tốc:",
      options: [
        "Tắc nghẽn bầu xúc tác khí xả",
        "Trượt ly hợp (côn) hoặc hộp số",
        "Bơm nhiên liệu yếu (thiếu lưu lượng)",
        "Đứt cáp chân ga cơ khí trên hệ thống ETB",
      ],
      correctAnswer: [
        "Tắc nghẽn bầu xúc tác khí xả",
        "Trượt ly hợp (côn) hoặc hộp số",
        "Bơm nhiên liệu yếu (thiếu lưu lượng)",
      ],
      explanation:
        "Các lỗi trên đều có thể khiến động cơ hoặc hệ truyền động không tạo đủ lực kéo thực tế dù vòng tua động cơ vẫn tăng.",
    },

    {
      id: 4,
      type: "fill-blank",
      question:
        "Khi đạp thốc ga hết cỡ (WOT) để tăng tốc, áp suất tuyệt đối đường ống nạp (MAP) sẽ tăng lên tiệm cận với áp suất _______.",
      correctAnswer: "khí quyển",
      explanation:
        "Khi bướm ga mở hoàn toàn, áp suất trong cổ hút gần bằng áp suất khí quyển do độ chân không giảm mạnh.",
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "Dữ liệu Live Data báo STFT ở mức +2% lúc cầm chừng nhưng tăng lên +25% khi leo dốc. Nguyên nhân có khả năng nhất là gì?",
      options: [
        "Hở chân không cổ nạp (Vacuum Leak)",
        "Bơm nhiên liệu yếu hoặc tắc lọc",
        "Hỏng bô-bin đánh lửa",
        "Cảm biến nhiệt độ nước ECT báo sai",
      ],
      correctAnswer: "Bơm nhiên liệu yếu hoặc tắc lọc",
      explanation:
        "Khi tải lớn, động cơ cần lưu lượng nhiên liệu cao hơn. Nếu bơm yếu hoặc lọc tắc, hỗn hợp sẽ nghèo và Fuel Trim tăng mạnh.",
    },

    {
      id: 6,
      type: "true-false",
      question:
        "ECM sẽ ngắt phun nhiên liệu để bảo vệ động cơ nếu phát hiện xăng có chỉ số Octane quá thấp gây kích nổ.",
      correctAnswer: "false",
      explanation:
        "Thông thường ECM sẽ đánh lửa trễ lại để giảm kích nổ chứ không ngắt hoàn toàn nhiên liệu.",
    },

    {
      id: 7,
      type: "multiple-answer",
      question:
        "Hệ thống phun xăng D-Jetronic dùng các tín hiệu cảm biến nào làm cơ sở cốt lõi để tính toán tải động cơ?",
      options: [
        "Áp suất tuyệt đối đường ống nạp (MAP)",
        "Nhiệt độ khí nạp (IAT)",
        "Tốc độ động cơ (RPM)",
        "Cảm biến oxy số 2 (Rear O2)",
      ],
      correctAnswer: [
        "Áp suất tuyệt đối đường ống nạp (MAP)",
        "Nhiệt độ khí nạp (IAT)",
        "Tốc độ động cơ (RPM)",
      ],
      explanation:
        "D-Jetronic chủ yếu tính toán tải dựa trên MAP, nhiệt độ khí nạp và tốc độ động cơ để xác định lượng phun cơ bản.",
    },

    {
      id: 8,
      type: "fill-blank",
      question:
        "Trong hệ thống VVT, để tăng công suất ở tua máy cao, ECM sẽ điều khiển van dầu OCV xoay trục cam nạp sang vị trí mở _______.",
      correctAnswer: "sớm",
      explanation:
        "Mở cam nạp sớm giúp cải thiện hiệu quả nạp khí ở tua cao và tăng công suất động cơ.",
    },

    {
      id: 9,
      type: "true-false",
      question:
        "Trên hệ thống ETB, ECM có thể kích hoạt chế độ Limp-home và từ chối mở bướm ga dù người lái đạp ga 100%.",
      correctAnswer: "true",
      explanation:
        "Khi phát hiện lỗi nghiêm trọng ở ETB hoặc APP/TPS, ECM sẽ giới hạn góc mở bướm ga để bảo vệ an toàn.",
    },

    {
      id: 10,
      type: "multiple-choice",
      question:
        "Khi cảm biến tiếng gõ (Knock Sensor) phát hiện kích nổ sớm, ECM sẽ thực hiện thao tác nào khiến công suất tạm thời giảm?",
      options: [
        "Mở rộng van EGR",
        "Đánh lửa trễ lại (Retard Ignition Timing)",
        "Tăng áp suất kim phun",
        "Đóng hoàn toàn bướm ga",
      ],
      correctAnswer: "Đánh lửa trễ lại (Retard Ignition Timing)",
      explanation:
        "Đánh lửa trễ giúp giảm hiện tượng kích nổ nhưng đồng thời cũng làm giảm mô-men và công suất động cơ.",
    },
  ],
};
