export const MatCamChungQuiz = {
  title: "Quiz: Chẩn đoán lỗi Cầm chừng kém, Mất cầm chừng",

  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question:
        "Động cơ Suzuki K15B sử dụng bướm ga điện tử (ETB). Khi ở chế độ không tải (chân ga buông hoàn toàn), tốc độ cầm chừng được điều khiển bằng cách nào?",
      options: [
        "Thông qua một van điều khiển không tải (IACV - Idle Air Control Valve) nằm song song với bướm ga chính.",
        "ECM trực tiếp gửi xung PWM điều khiển mô-tơ bước/mô-tơ DC bên trong cụm bướm ga để hé mở cánh bướm ga một góc rất nhỏ.",
        "Bằng cách ngắt phun nhiên liệu ở 1 hoặc 2 xy-lanh.",
        "Bằng cách thay đổi áp suất bơm nhiên liệu liên tục.",
      ],
      correctAnswer:
        "ECM trực tiếp gửi xung PWM điều khiển mô-tơ bước/mô-tơ DC bên trong cụm bướm ga để hé mở cánh bướm ga một góc rất nhỏ.",
      explanation:
        "Trên hệ thống ETB, bản thân cánh bướm ga chính sẽ đảm nhận luôn vai trò cấp gió cho chế độ không tải thông qua lệnh của ECM.",
    },

    {
      id: 2,
      type: "multiple-choice",
      question:
        "Khách hàng phàn nàn xe hay bị chết máy khi đạp côn/phanh dừng đèn đỏ. Tuy nhiên khi xe đang chạy thì động cơ vẫn hoạt động bình thường. Nguyên nhân phổ biến nhất là gì?",
      options: [
        "Bơm nhiên liệu yếu dần theo thời gian.",
        "Họng bướm ga bị đóng cặn carbon dày đặc ở mép cánh bướm.",
        "Lọc gió động cơ bị rách.",
        "Bô-bin đánh lửa bị rò điện.",
      ],
      correctAnswer: "Họng bướm ga bị đóng cặn carbon dày đặc ở mép cánh bướm.",
      explanation:
        "Khi nhả ga dừng đèn đỏ, cánh bướm ga gần như đóng kín. Nếu muội than bít khe hở cầm chừng, lượng gió vào không đủ làm động cơ dễ chết máy.",
    },

    {
      id: 3,
      type: "multiple-choice",
      question:
        "Động cơ nổ cầm chừng vòng tua cao bất thường 1500 - 2000 RPM và không chịu hạ xuống. Fuel Trim dương cao, góc bướm ga báo 0%. Nguyên nhân logic nhất là gì?",
      options: [
        "Cảm biến TPS bị hỏng kẹt ở 100%.",
        "Có hiện tượng lọt khí chân không lớn sau bướm ga.",
        "ECM bị hỏng phần mềm điều khiển.",
        "Cảm biến oxy số 1 bị chập mạch báo giàu.",
      ],
      correctAnswer: "Có hiện tượng lọt khí chân không lớn sau bướm ga.",
      explanation:
        "Bướm ga đóng kín nhưng tua máy vẫn cao chứng tỏ có không khí đi tắt vào cổ hút qua đường rò chân không như gioăng cổ hút hoặc ống trợ lực phanh.",
    },

    {
      id: 4,
      type: "multiple-choice",
      question:
        "Khi bật điều hòa A/C, vòng tua máy tụt mạnh khiến động cơ rung hoặc chết máy. Bạn nên kiểm tra tín hiệu nào đầu tiên trên Data List?",
      options: [
        "Tín hiệu cảm biến nhiệt độ nước làm mát ECT.",
        "Tín hiệu công tắc áp suất A/C hoặc trạng thái yêu cầu A/C gửi về ECM.",
        "Góc đánh lửa sớm.",
        "Áp suất nhiên liệu trên giàn sáo.",
      ],
      correctAnswer:
        "Tín hiệu công tắc áp suất A/C hoặc trạng thái yêu cầu A/C gửi về ECM.",
      explanation:
        "ECM cần biết lốc lạnh chuẩn bị hoạt động để mở bướm ga bù tải trước. Nếu mất tín hiệu A/C Request, động cơ sẽ dễ tụt tua hoặc chết máy.",
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "Nếu van PCV bị kẹt mở hoàn toàn thì ảnh hưởng đến chế độ cầm chừng như thế nào?",
      options: [
        "Không ảnh hưởng gì.",
        "Động cơ nổ êm hơn do được bổ sung oxy.",
        "Gây hiện tượng giống lọt khí chân không: vòng tua cao, rung giật và hỗn hợp nghèo.",
        "Làm chết máy ngay do dầu ngập buồng đốt.",
      ],
      correctAnswer:
        "Gây hiện tượng giống lọt khí chân không: vòng tua cao, rung giật và hỗn hợp nghèo.",
      explanation:
        "Van PCV kẹt mở sẽ hút lượng lớn không khí ngoài vào cổ hút mà không qua kiểm soát của bướm ga, tương đương một lỗi vacuum leak.",
    },

    {
      id: 6,
      type: "multiple-choice",
      question:
        "Nếu van OCV của hệ thống VVT bị kẹt mở ở chế độ không tải thì triệu chứng sẽ giống hệt hệ thống nào trên động cơ đời cũ?",
      options: [
        "Van EGR bị kẹt mở.",
        "Hỏng cảm biến MAP.",
        "Tắc lọc xăng.",
        "Đứt dây đai cam.",
      ],
      correctAnswer: "Van EGR bị kẹt mở.",
      explanation:
        "VVT kẹt mở làm tăng góc trùng điệp van khiến khí xả lọt ngược về buồng đốt giống hiện tượng EGR kẹt mở, gây rung giật hoặc chết máy ở chế độ không tải.",
    },
  ],
};
