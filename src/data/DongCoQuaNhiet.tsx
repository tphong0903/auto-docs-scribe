export const DongCoQuaNhiet = {
  title: "Quiz: Chẩn đoán lỗi động cơ quá nhiệt K15B",

  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question:
        "Khi động cơ nóng lên đến nhiệt độ vận hành, điện áp tín hiệu ECT gửi về ECM sẽ thay đổi thế nào?",
      options: [
        "Tăng dần lên gần 5V",
        "Giảm xuống mức thấp dưới 1V",
        "Giữ ổn định ở 2.5V",
        "Tăng điện trở làm điện áp bằng 0V",
      ],
      correctAnswer: "Giảm xuống mức thấp dưới 1V",
      explanation:
        "Cảm biến ECT là loại NTC nên khi nhiệt độ tăng thì điện trở giảm, làm điện áp tín hiệu trả về ECM giảm xuống thấp.",
    },

    {
      id: 2,
      type: "multiple-choice",
      question: "Nguyên nhân trực tiếp gây ra mã lỗi P0117 là gì?",
      options: [
        "Hở mạch cảm biến ECT",
        "Dây tín hiệu ECT chập mass",
        "Thiếu nước làm mát",
        "Van hằng nhiệt kẹt đóng",
      ],
      correctAnswer: "Dây tín hiệu ECT chập mass",
      explanation:
        "Khi dây tín hiệu chạm mass, điện áp tụt gần 0V khiến ECM hiểu động cơ đang quá nóng và sinh mã lỗi P0117.",
    },

    {
      id: 3,
      type: "multiple-choice",
      question:
        "Khi nhiệt độ nước vượt ngưỡng, ECM điều khiển quạt làm mát bằng cách nào?",
      options: [
        "Cấp trực tiếp 12V vào mô-tơ quạt",
        "Điều khiển PWM điện trở quạt",
        "Cấp mass cho cuộn dây rơ-le quạt",
        "Ngắt nguồn 5V cảm biến ECT",
      ],
      correctAnswer: "Cấp mass cho cuộn dây rơ-le quạt",
      explanation:
        "ECM chỉ điều khiển dòng nhỏ để kích rơ-le, còn dòng lớn cấp cho quạt sẽ đi qua tiếp điểm rơ-le.",
    },

    {
      id: 4,
      type: "multiple-choice",
      question:
        "Xe chỉ bị sôi nước khi tắc đường nhưng chạy cao tốc bình thường, cần kiểm tra gì đầu tiên?",
      options: [
        "Bơm nước",
        "Hệ thống quạt làm mát",
        "Van hằng nhiệt",
        "Ron quy-lát",
      ],
      correctAnswer: "Hệ thống quạt làm mát",
      explanation:
        "Khi chạy nhanh có gió tự nhiên làm mát két nước. Khi đứng yên nếu quạt không chạy, nhiệt độ sẽ tăng rất nhanh.",
    },

    {
      id: 5,
      type: "multiple-choice",
      question:
        "Đo chân cấp nguồn cuộn dây rơ-le quạt chỉ được 0V khi khóa ON, kết luận đúng là gì?",
      options: [
        "ECM bị hỏng",
        "Đứt nguồn hoặc cháy cầu chì",
        "Đứt dây điều khiển mass",
        "Mô-tơ quạt cháy",
      ],
      correctAnswer: "Đứt nguồn hoặc cháy cầu chì",
      explanation:
        "Chân cấp nguồn phải luôn có khoảng 12V khi bật khóa ON. Nếu bằng 0V thì nguồn nuôi hoặc cầu chì đã bị lỗi.",
    },

    {
      id: 6,
      type: "multiple-choice",
      question:
        "Quạt chạy liên tục và tắt khi rút rơ-le ra, bước kiểm tra hợp lý tiếp theo là gì?",
      options: [
        "Thay ECM",
        "Kiểm tra tiếp điểm rơ-le bị dính",
        "Đo điện trở mô-tơ quạt",
        "Kiểm tra két nước",
      ],
      correctAnswer: "Kiểm tra tiếp điểm rơ-le bị dính",
      explanation:
        "Rơ-le bị dính tiếp điểm sẽ làm dòng điện luôn cấp cho quạt dù ECM không ra lệnh.",
    },

    {
      id: 7,
      type: "multiple-choice",
      question:
        "Khi cảm biến ECT bị hở mạch, Live Data thường hiển thị nhiệt độ bao nhiêu?",
      options: ["+120°C", "0°C", "-40°C", "Bằng nhiệt độ khí nạp"],
      correctAnswer: "-40°C",
      explanation:
        "Hở mạch tạo điện áp gần 5V, ECM sẽ hiểu nhiệt độ cực thấp và hiển thị khoảng -40°C.",
    },

    {
      id: 8,
      type: "multiple-choice",
      question: "Tại sao lỗi ECT báo -40°C có thể gây sặc xăng và khói đen?",
      options: [
        "ECM ngừng phun nhiên liệu",
        "Quạt thổi bay tia lửa bugi",
        "ECM hiểu động cơ rất lạnh nên phun dư xăng",
        "Làm hỏng cảm biến oxy",
      ],
      correctAnswer: "ECM hiểu động cơ rất lạnh nên phun dư xăng",
      explanation:
        "ECM nghĩ động cơ đang lạnh nên kéo dài thời gian phun nhiên liệu, gây dư xăng, khói đen và ướt bugi.",
    },

    {
      id: 9,
      type: "multiple-choice",
      question:
        "Để xác nhận dây điều khiển quạt không chạm mass, điện trở đo tới mass phải là bao nhiêu?",
      options: ["Dưới 1 Ohm", "12 Volts", "500 - 1000 Ohms", "Vô cực (O.L)"],
      correctAnswer: "Vô cực (O.L)",
      explanation:
        "Điện trở vô cực chứng tỏ dây không bị rò hoặc chạm mass trên thân xe.",
    },

    {
      id: 10,
      type: "multiple-choice",
      question:
        "Ống nước trên rất nóng nhưng ống dưới lạnh ngắt dù quạt vẫn quay, chẩn đoán đúng là gì?",
      options: [
        "Két nước bị thủng",
        "ECT báo sai",
        "Van hằng nhiệt kẹt đóng",
        "Quạt quay ngược chiều",
      ],
      correctAnswer: "Van hằng nhiệt kẹt đóng",
      explanation:
        "Van hằng nhiệt bị kẹt đóng làm nước nóng không thể lưu thông qua két nước nên ống trên rất nóng còn ống dưới vẫn lạnh.",
    },
  ],
};
