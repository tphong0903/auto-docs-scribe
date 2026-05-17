export const KhoKhoiDongQuiz = {
  title: "Quiz: Chẩn đoán lỗi Khó khởi động động cơ",

  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question:
        "Thuật ngữ 'Hard Starting' (Khó khởi động) được phân biệt với 'No Crank / No Start' ở điểm cốt lõi nào?",
      options: [
        "Máy khởi động hoàn toàn không quay khi vặn chìa khóa",
        "Động cơ nổ được nhưng tắt ngay lập tức trong vòng 1 giây",
        "Máy khởi động kéo động cơ quay bình thường nhưng mất nhiều thời gian mới nổ được",
        "Động cơ bị bó kẹt khiến củ đề quay rất chậm và nặng nề",
      ],
      correctAnswer:
        "Máy khởi động kéo động cơ quay bình thường nhưng mất nhiều thời gian mới nổ được",
      explanation:
        "Hard Starting là tình trạng động cơ vẫn được củ đề quay bình thường nhưng phải đề lâu mới nổ, khác với No Crank hoặc No Start.",
    },

    {
      id: 2,
      type: "fill-blank",
      question:
        "Khi khởi động, tốc độ vòng tua máy tiêu chuẩn để tạo đủ áp suất nén đối với động cơ xăng 4 xy-lanh thường nằm trong khoảng 200 đến _______ vòng/phút.",
      correctAnswer: "300",
      explanation:
        "Tốc độ quay đề quá thấp sẽ không tạo đủ áp suất nén và lưu lượng khí nạp cần thiết cho quá trình cháy.",
    },

    {
      id: 3,
      type: "true-false",
      question:
        "ECM sẽ điều khiển góc đánh lửa sớm hơn bình thường trong lúc khởi động để giúp động cơ dễ nổ hơn.",
      correctAnswer: "false",
      explanation:
        "Trong giai đoạn khởi động, ECM thường giữ góc đánh lửa gần TDC hoặc hơi trễ để tránh hiện tượng đá ngược máy.",
    },

    {
      id: 4,
      type: "multiple-choice",
      question:
        "Xe để qua đêm đề rất dai nhưng khi máy nóng thì nổ ngay. Nguyên nhân cảm biến nào có khả năng cao nhất?",
      options: [
        "Cảm biến vị trí trục cam CMP bị bám mạt sắt",
        "Cảm biến nhiệt độ nước làm mát ECT bị sai lệch luôn báo máy nóng",
        "Cảm biến vị trí bướm ga TPS báo góc mở 100%",
        "Cảm biến tốc độ xe VSS bị chập chờn",
      ],
      correctAnswer:
        "Cảm biến nhiệt độ nước làm mát ECT bị sai lệch luôn báo máy nóng",
      explanation:
        "Nếu ECT luôn báo máy nóng, ECM sẽ giảm lượng phun làm giàu lúc đề nguội khiến động cơ khó nổ vào buổi sáng.",
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "Động cơ khó nổ, bu-gi khô, áp suất nhiên liệu đạt chuẩn và xung đánh lửa bình thường. Bước khoanh vùng tiếp theo là gì?",
      options: [
        "Thay thế cụm bơm nhiên liệu mới",
        "Tháo nắp máy kiểm tra xích cam",
        "Thay thế cảm biến TPS",
        "Dùng máy hiện sóng kiểm tra xung kích mở kim phun từ ECM",
      ],
      correctAnswer: "Dùng máy hiện sóng kiểm tra xung kích mở kim phun từ ECM",
      explanation:
        "Bu-gi khô cho thấy nhiên liệu chưa được phun vào buồng đốt nên cần kiểm tra tín hiệu điều khiển kim phun.",
    },

    {
      id: 6,
      type: "multiple-answer",
      question:
        "Phép đo Hold Pressure trên hệ thống nhiên liệu nhằm kiểm tra các nguyên nhân nào gây khó nổ?",
      options: [
        "Kim phun nhiên liệu bị rò rỉ",
        "Lọc xăng bị nghẹt",
        "Van một chiều trong cụm bơm xăng bị hở",
        "Cảm biến MAP bị hỏng",
      ],
      correctAnswer: [
        "Kim phun nhiên liệu bị rò rỉ",
        "Van một chiều trong cụm bơm xăng bị hở",
      ],
      explanation:
        "Nếu áp suất nhiên liệu tụt nhanh sau khi tắt máy, nguyên nhân thường do kim phun rò hoặc van một chiều bơm xăng không giữ áp.",
    },

    {
      id: 7,
      type: "true-false",
      question:
        "Nếu Immobilizer không nhận diện được mã chìa khóa, ECM sẽ ngắt kim phun và đánh lửa khiến động cơ không thể tự nổ.",
      correctAnswer: "true",
      explanation:
        "Khi chống trộm không xác thực chìa khóa, ECM sẽ khóa điều khiển phun và đánh lửa để ngăn động cơ hoạt động.",
    },

    {
      id: 8,
      type: "fill-blank",
      question:
        "Khi đo sụt áp ắc-quy lúc đề máy, điện áp bình 12V không được tụt xuống dưới _______ Volt.",
      correctAnswer: "9.6",
      explanation:
        "Nếu điện áp tụt dưới 9.6V, hệ thống đánh lửa và ECM có thể hoạt động không ổn định gây khó nổ.",
    },

    {
      id: 9,
      type: "multiple-answer",
      question:
        "Nguyên nhân cơ khí nào có thể làm giảm áp suất nén và gây khó khởi động?",
      options: [
        "Thổi ron quy-lát",
        "Xú-páp bị kênh hoặc cháy",
        "Tắc nghẽn bầu xúc tác khí xả",
        "Xéc-măng bị kẹt hoặc mòn nghiêm trọng",
      ],
      correctAnswer: [
        "Thổi ron quy-lát",
        "Xú-páp bị kênh hoặc cháy",
        "Xéc-măng bị kẹt hoặc mòn nghiêm trọng",
      ],
      explanation:
        "Các hư hỏng cơ khí trên đều làm giảm áp suất nén khiến động cơ quay nhẹ nhưng khó tạo điều kiện cháy.",
    },

    {
      id: 10,
      type: "multiple-choice",
      question:
        "Xe nổ bình thường lúc máy nguội nhưng sau khi chạy nóng rồi đề lại thì rất khó nổ và có mùi xăng sống. Nguyên nhân hợp lý nhất là gì?",
      options: [
        "Khe hở nhiệt xú-páp quá lớn",
        "Máy phát điện sạc quá dòng",
        "Kim phun nhiên liệu bị rò rỉ làm ngộp buồng đốt",
        "Bơm nhiên liệu quá yếu lúc máy nóng",
      ],
      correctAnswer: "Kim phun nhiên liệu bị rò rỉ làm ngộp buồng đốt",
      explanation:
        "Kim phun rò sẽ làm nhiên liệu chảy vào buồng đốt sau khi tắt máy gây ngộp xăng và khó khởi động lại khi máy còn nóng.",
    },
  ],
};
