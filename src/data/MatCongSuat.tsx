const quizData = {
  title: "Quiz: Chẩn đoán lỗi Mất công suất (Lack of Power)",

  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question:
        "Theo quy trình 6 bước của Tom Denton, thao tác nào KHÔNG ĐỦ để xác minh lỗi mất công suất?",
      options: [
        "Chạy thử xe trên đường dốc hoặc cao tốc",
        "Đạp thốc ga khi xe đang đỗ tại chỗ",
        "Thử ép tải (Stall test)",
        "Sử dụng Dyno",
      ],
      correctAnswer: "Đạp thốc ga khi xe đang đỗ tại chỗ",
      explanation:
        "Khi xe đứng yên, động cơ không chịu tải nên dù bơm xăng yếu hoặc pô hơi nghẹt thì tua máy vẫn có thể tăng nhanh, dễ đánh lừa kỹ thuật viên.",
    },

    {
      id: 2,
      type: "multiple-choice",
      question:
        "Xe bị ngộp khi vượt và không vượt quá 3000 RPM, nguyên nhân cơ khí khả dĩ nhất là gì?",
      options: [
        "Tắc nghẽn hệ thống xả",
        "Tắc kim phun hoàn toàn",
        "Hỏng cảm biến oxy số 2",
        "Hở ron quy-lát",
      ],
      correctAnswer: "Tắc nghẽn hệ thống xả",
      explanation:
        "Khi pô hoặc catalytic bị nghẹt, áp suất khí xả dội ngược vào buồng đốt làm động cơ bị ì và không thể lên tua cao.",
    },

    {
      id: 3,
      type: "multiple-choice",
      question:
        "Để xác định bơm xăng yếu, cần theo dõi áp suất nhiên liệu trong điều kiện nào?",
      options: [
        "Khi bật khóa ON",
        "Khi động cơ chạy cầm chừng",
        "Khi xe chạy dưới tải nặng",
        "Sau khi tắt máy 30 phút",
      ],
      correctAnswer: "Khi xe chạy dưới tải nặng",
      explanation:
        "Khi ép ga hoặc leo dốc, động cơ tiêu thụ nhiên liệu lớn nhất. Nếu bơm yếu, áp suất sẽ tụt mạnh ở thời điểm này.",
    },

    {
      id: 4,
      type: "multiple-choice",
      question:
        "STFT ở idle là +2% nhưng khi leo dốc tăng lên +25%, điều này hướng đến nguyên nhân nào?",
      options: [
        "Thiếu áp lực nhiên liệu",
        "Hở chân không cổ hút",
        "Kẹt bướm ga",
        "Hỏng bô-bin",
      ],
      correctAnswer: "Thiếu áp lực nhiên liệu",
      explanation:
        "Fuel Trim tăng mạnh khi có tải cho thấy ECM đang cố bù thêm xăng vì hệ thống cấp nhiên liệu không đủ lưu lượng.",
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "RPM tăng rất nhanh nhưng tốc độ xe tăng chậm, kết luận sơ bộ là gì?",
      options: [
        "Mất áp suất nén",
        "Hỏng cảm biến chân ga",
        "Trượt ly hợp hoặc hộp số",
        "Tắc bầu xúc tác",
      ],
      correctAnswer: "Trượt ly hợp hoặc hộp số",
      explanation:
        "Động cơ vẫn tạo công suất tốt nên tua máy tăng mạnh, nhưng phần truyền động bị trượt khiến lực không truyền hiệu quả tới bánh xe.",
    },

    {
      id: 6,
      type: "multiple-choice",
      question:
        "Khi dùng xăng Octane quá thấp, ECM phản ứng thế nào làm xe bị ì?",
      options: [
        "Ngắt kim phun",
        "Đánh lửa trễ lại",
        "Mở bướm ga lớn hơn",
        "Kích hoạt VVT",
      ],
      correctAnswer: "Đánh lửa trễ lại",
      explanation:
        "Knock Sensor phát hiện kích nổ và ECM sẽ retard góc đánh lửa để bảo vệ động cơ, làm xe giảm công suất rõ rệt.",
    },

    {
      id: 7,
      type: "multiple-choice",
      question:
        "Khi WOT trên động cơ K15B bình thường, MAP sẽ hiển thị thế nào?",
      options: [
        "20 - 30 kPa",
        "95 - 100 kPa",
        "50 kPa cố định",
        "Trên 150 kPa",
      ],
      correctAnswer: "95 - 100 kPa",
      explanation:
        "Khi bướm ga mở hoàn toàn, áp suất trong cổ hút gần bằng áp suất khí quyển nên MAP sẽ tiến gần 100 kPa.",
    },

    {
      id: 8,
      type: "multiple-choice",
      question:
        "APP báo 90% nhưng TPS chỉ mở 30%, nguyên nhân phù hợp nhất là gì?",
      options: [
        "Đứt dây ga cơ khí",
        "ECM kích hoạt Limp-home",
        "Cháy hoàn toàn mô-tơ bướm ga",
        "Lọc gió nghẹt",
      ],
      correctAnswer: "ECM kích hoạt Limp-home",
      explanation:
        "ECM giới hạn độ mở bướm ga để bảo vệ động cơ khi phát hiện lỗi nghiêm trọng khác trên xe.",
    },

    {
      id: 9,
      type: "multiple-choice",
      question:
        "Nếu van dầu OCV bị kẹt khiến cam nạp không Advance ở tua cao, triệu chứng là gì?",
      options: [
        "Mất công suất, tăng tốc kém",
        "Chết máy khi dừng đèn đỏ",
        "Rung giật mạnh như bỏ máy",
        "Hao nhớt nhanh",
      ],
      correctAnswer: "Mất công suất, tăng tốc kém",
      explanation:
        "VVT giúp tối ưu thời điểm đóng mở xu-páp ở tua cao. Nếu cam nạp không advance, động cơ sẽ thiếu hơi và tăng tốc yếu.",
    },

    {
      id: 10,
      type: "multiple-choice",
      question:
        "Trên hệ thống D-Jetronic, cảm biến nào quan trọng nhất để tính khối lượng khí nạp?",
      options: ["ECT", "O2 Sensor số 2", "MAP", "IAT"],
      correctAnswer: "MAP",
      explanation:
        "Hệ thống Speed-Density sử dụng MAP kết hợp RPM và IAT để tính tải động cơ và lượng không khí nạp.",
    },
  ],
};

export default quizData;
