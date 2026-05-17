export const KhoiDenDuXang = {
  title: "Quiz: Chẩn đoán lỗi khói đen, dư xăng",

  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question:
        "Khói xả màu đen và mùi xăng sống là biểu hiện của tình trạng nào?",
      options: [
        "Dầu nhớt lọt buồng đốt",
        "Nước làm mát lọt buồng đốt",
        "Hòa khí quá giàu",
        "Hòa khí quá nghèo",
      ],
      correctAnswer: "Hòa khí quá giàu",
      explanation:
        "Khói đen xuất hiện khi nhiên liệu dư thừa không được đốt cháy hết do thiếu oxy trong buồng đốt.",
    },

    {
      id: 2,
      type: "multiple-choice",
      question:
        "Nếu kim phun bị đái nhưng cảm biến O2 vẫn hoạt động tốt, Fuel Trim sẽ như thế nào?",
      options: [
        "STFT âm sâu",
        "STFT dương cao",
        "Fuel Trim luôn 0%",
        "Dao động ±100%",
      ],
      correctAnswer: "STFT âm sâu",
      explanation:
        "Cảm biến O2 phát hiện dư xăng nên ECM sẽ giảm thời gian phun, làm Fuel Trim chuyển sang giá trị âm.",
    },

    {
      id: 3,
      type: "multiple-choice",
      question:
        "Thiết bị nào dùng để xác định nhanh tình trạng dư xăng qua đường xả?",
      options: [
        "Compression Tester",
        "Máy phân tích khí xả",
        "Súng đo nhiệt độ hồng ngoại",
        "Đồng hồ áp suất nhiên liệu",
      ],
      correctAnswer: "Máy phân tích khí xả",
      explanation:
        "Máy phân tích khí xả đo nồng độ CO. CO cao là dấu hiệu đặc trưng của hòa khí quá giàu.",
    },

    {
      id: 4,
      type: "multiple-choice",
      question: "Nếu ống chân không MAP bị hở, ECM sẽ phản ứng thế nào?",
      options: [
        "Giảm lượng phun",
        "Phun dư xăng do hiểu nhầm tải nặng",
        "Không thay đổi lượng phun",
        "Ngắt hoàn toàn kim phun",
      ],
      correctAnswer: "Phun dư xăng do hiểu nhầm tải nặng",
      explanation:
        "MAP đọc áp suất cao giống như bướm ga mở lớn nên ECM tính toán sai và phun nhiều nhiên liệu hơn thực tế cần.",
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "Xe báo P0172 nhưng cảm biến O2 luôn kẹt ở 0.1V dù khói đen dày đặc, nguyên nhân phù hợp nhất là gì?",
      options: [
        "O2 hoạt động tốt",
        "Mất lửa nên O2 đọc xăng sống",
        "O2 hỏng báo nghèo giả",
        "Áp suất nhiên liệu quá thấp",
      ],
      correctAnswer: "O2 hỏng báo nghèo giả",
      explanation:
        "ECM bị lừa rằng hòa khí đang nghèo nên liên tục bù thêm xăng, gây dư xăng thực tế và khói đen.",
    },

    {
      id: 6,
      type: "multiple-choice",
      question: "Cách kiểm tra chính xác hiện tượng kim phun bị đái là gì?",
      options: [
        "Đo Pulse Width bằng Oscilloscope",
        "Nghe tiếng kim phun",
        "Pressure Drop Test",
        "Đo điện trở kim phun",
      ],
      correctAnswer: "Pressure Drop Test",
      explanation:
        "Nếu áp suất nhiên liệu tụt nhanh sau khi tắt bơm, chứng tỏ nhiên liệu đang rò rỉ qua kim phun.",
    },

    {
      id: 7,
      type: "multiple-choice",
      question: "Van Purge EVAP bị kẹt mở sẽ gây hiện tượng gì?",
      options: [
        "Không ảnh hưởng hòa khí",
        "Hút quá nhiều hơi xăng vào cổ hút",
        "Làm nổ bình xăng",
        "Bơm oxy vào ống xả",
      ],
      correctAnswer: "Hút quá nhiều hơi xăng vào cổ hút",
      explanation:
        "Hơi xăng từ bình nhiên liệu bị hút liên tục vào động cơ làm hòa khí trở nên quá giàu.",
    },

    {
      id: 8,
      type: "multiple-choice",
      question: "Tại sao lỗi ECT báo -40°C lại gây khói đen và ướt bugi?",
      options: [
        "ECM kích hoạt làm giàu khởi động lạnh",
        "Quạt làm mát thổi bay tia lửa",
        "Làm cháy IC kim phun",
        "Đánh lửa quá sớm",
      ],
      correctAnswer: "ECM kích hoạt làm giàu khởi động lạnh",
      explanation:
        "ECM tưởng động cơ cực lạnh nên kéo dài thời gian phun nhiên liệu, gây sặc xăng và khói đen.",
    },

    {
      id: 9,
      type: "multiple-choice",
      question:
        "Rút giắc MAP làm xe hết khói đen và nổ đều trở lại, điều này cho thấy gì?",
      options: [
        "Kim phun kẹt mở",
        "MAP báo tải giả",
        "Bobin yếu",
        "O2 hỏng mạch sưởi",
      ],
      correctAnswer: "MAP báo tải giả",
      explanation:
        "Khi MAP bị ngắt, ECM chuyển sang chế độ Fail-safe với dữ liệu mặc định nên hiện tượng dư xăng biến mất.",
    },

    {
      id: 10,
      type: "multiple-choice",
      question:
        "Chỉ bugi máy số 3 bị đen và ướt xăng, nguyên nhân nào KHÔNG THỂ xảy ra?",
      options: [
        "Bobin máy 3 hỏng",
        "Kim phun máy 3 kẹt mở",
        "MAP báo sai tải",
        "Mất áp suất nén máy 3",
      ],
      correctAnswer: "MAP báo sai tải",
      explanation:
        "Nếu MAP sai, toàn bộ các xy-lanh đều bị ảnh hưởng. Không thể chỉ riêng bugi số 3 bị đen.",
    },
  ],
};
