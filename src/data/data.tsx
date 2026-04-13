export const dataDTC = [
  {
    dtcCode: "P0010/P2088/P2089",
    title: "P0010/P2088/P2089 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction:
          "Chuyển sang Bước 2.\nNếu phát hiện DTC P0010 và P2088, hãy chuyển sang Bước 2.\nNếu phát hiện DTC P2089, hãy chuyển sang Bước 4.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm khỏi OCV.\nKiểm tra xem kết nối cực tới giắc cắm OCV có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch điều khiển OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem các kết nối cực tới giắc cắm “C01” và “E01” có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B1”: dưới 1 Ω\nĐiện trở giữa mạch “B1” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực mạch “B1” tại giắc cắm OCV: vô cực",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch điều khiển OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM và giắc cắm OCV.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” và giắc cắm OCV đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp của mạch “B1”: xấp xỉ 0 V (Khi công tắc máy\nở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra OCV. (Trang 1C-13)",
        refs: ["1C-13"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Thay thế OCV. (Trang 1C-13)",
      },
      {
        id: 6,
        title: "Đồng thời khắc phục sự cố của (những) DTC khác",
        description: "Có phát hiện (các) DTC nào đồng thời không?",
        subNote: "",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 6",
        okAction: "Chuyển sang khắc phục sự cố DTC liên quan.",
        failAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
      },
    ],
  },
  {
    dtcCode: "P0011",
    title: "P0011 – Khắc phục sự cố",
    condition:
      'P0011: Vị trí trục cam "A" ở thời điểm đánh lửa quá sớm hoặc lỗi hoạt động hệ thống (Bank 1)\nCMP đo được không đạt CMP mục tiêu trong thời gian quy\nđịnh.\n(lô-gic phát hiện 3 D/C)',
    faultArea:
      "OCV và/hoặc mạch của nó\nCảm biến CKP và vòng răng tạo xung\nRô-to tín hiệu và cảm biến CMP\nĐường đi của nhớt OCV\nBộ chấp hành VVT\nThời điểm đóng mở xu-páp\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra DTC",
        description: "Có (các) DTC nào ngoài P0011 không?",
        subNote: "1) Kiểm tra DTC.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang khắc phục sự cố DTC thích hợp.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch cấp nguồn và mạch điều khiển OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra các mạch “A1” và “B1” theo Bước 2 - 3 trong “DTC P0010/P2088/P2089” (Trang 1A-51).",
        refs: ["1A-51"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra áp suất nhớt",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "Kiểm tra áp suất nhớt. (Trang 1E-3)",
        refs: ["1E-3"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế các bộ phận bị lỗi.",
      },
      {
        id: 5,
        title: "Kiểm tra bằng mắt mạch nhớt OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Tháo nắp giàn cò. (Trang 1D-16)\nKiểm ra rò rỉ áp suất nhớt từ mạch nhớt OCV.",
        refs: ["1D-16"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Sửa chữa hoặc thay thế các bộ phận bị lỗi.",
      },
      {
        id: 6,
        title: "Kiểm tra cảm biến CKP và vòng răng tạo xung",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra cảm biến CKP và vòng răng tạo xung.\nCảm biến CKP: (Trang 1C-10)\nVòng răng tạo xung: (Trang 1D-78)",
        refs: ["1C-10", "1D-78"],
        imageLabel: "Hình minh họa bước 6",
        okAction: "Chuyển sang Bước 7.",
        failAction: "Sửa chữa hoặc thay thế các bộ phận bị lỗi.",
      },
      {
        id: 7,
        title: "Kiểm tra rô-to tín hiệu và cảm biến CMP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra rô-to tín hiệu và cảm biến CMP.\nCảm biến CMP: (Trang 1C-9)\nRô-to tín hiệu: (Trang 1D-23)",
        refs: ["1C-9", "1D-23"],
        imageLabel: "Hình minh họa bước 7",
        okAction: "Chuyển sang Bước 8.",
        failAction: "Sửa chữa hoặc thay thế các bộ phận bị lỗi.",
      },
      {
        id: 8,
        title: "Kiểm tra OCV",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra OCV. (Trang 1C-13)",
        refs: ["1C-13", "1D-37"],
        imageLabel: "Hình minh họa bước 8",
        okAction: "Chuyển sang Bước 9.",
        failAction: "Thay thế OCV. (Trang 1D-37)",
      },
      {
        id: 9,
        title: "Kiểm tra bộ chấp hành VVT",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra bộ chấp hành VVT. (Trang 1D-23)",
        refs: ["1D-18", "1D-23"],
        imageLabel: "Hình minh họa bước 9",
        okAction: "Chuyển sang Bước 10.",
        failAction: "Thay thế bộ chấp hành VVT. (Trang 1D-18)",
      },
      {
        id: 10,
        title: "Kiểm tra thời điểm đóng mở xu-páp",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra những bộ phận liên quan tới xích cam và tình trạng lắp đặt của chúng. (Trang 1D-41)",
        refs: ["1C-2", "1D-41"],
        imageLabel: "Hình minh họa bước 10",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction:
          "Lắp lại một cách chính xác những bộ phận liên quan tới xích cam, hoặc thay thế những bộ phận\nbị hỏng hóc.",
      },
    ],
  },
  {
    dtcCode: "P0016",
    title: "P0016 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-4"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Mô tả hệ thống điều khiển động cơ và kiểm soát khí thải”\n(Trang 1A-4).",
      },
      {
        id: 2,
        title: "Kiểm tra cảm biến CMP và mạch của nó",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra cảm biến CMP, rô-to tín hiệu và mạch liên quan đến DTC theo Bước 2 – 5 trong “DTC P0340” (Trang 1A- 81).",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
      {
        id: 3,
        title: "Kiểm tra cảm biến CKP và mạch của nó",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra cảm biến CKP, vòng răng tạo xung và mạch liên quan đến DTC theo Bước 2 – 5 trong “DTC P0335/ P0336” (Trang 1A-79).",
        refs: ["1A-79"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
      {
        id: 4,
        title: "Kiểm tra hệ thống cơ cấu phân phối khí của động cơ",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Tháo nắp xích cam. (Trang 1D-35)\nKiểm tra các mục sau.\nXích cam, bộ căng xích cam và bộ điều chỉnh căng xích cam: (Trang 1D-44)\nBộ chấp hành VVT: (Trang 1D-23)",
        refs: ["1D-23", "1D-35", "1D-44"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
      {
        id: 5,
        title: "Đồng thời khắc phục sự cố của (những) DTC khác",
        description: "Có phát hiện (các) DTC khác không?",
        subNote: "",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang khắc phục sự cố DTC liên quan.",
        failAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
      },
    ],
  },
  {
    dtcCode: "P0030/P0031/P0032",
    title: "P0030/P0031/P0032 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction:
          "Nếu phát hiện DTC P0030 và P0031, hãy chuyển sang Bước 2.\nNếu phát hiện DTC\nP0032, hãy chuyển sang Bước 4.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cảm biến số 1 - HO2S-1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm HO2S-1.\nKiểm tra xem kết nối cực tới giắc cắm HO2S-1 có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa mạch “A1” và dây nối\nđất bằng điện áp bình điện.",
        refs: ["2S-1"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch điều khiển sấy cảm biến số 1 - HO2S-1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “A4”: dưới 1 Ω\nĐiện trở giữa mạch “A4” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A4” và cực khác tại giắc cắm HO2S-1: vô cực",
        refs: ["2S-1"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch điều khiển sấy cảm biến số 1 - HO2S-1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM và giắc cắm HO2S-1.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm HO2S-1 có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp mạch “A4”: khoảng 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: ["2S-1"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 5,
        title: "Kiểm tra cảm biến HO2S-1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra cảm biến HO2S-1. (Trang 1C-9)",
        refs: ["1C-2", "1C-9", "2S-1"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế HO2S-1.\n(Trang 1C-9)",
      },
    ],
  },
  {
    dtcCode: "P0036/P0037/P0038",
    title: "P0036/P0037/P0038 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction:
          "Nếu phát hiện DTC P0036 và P0037, hãy chuyển sang Bước 2.\nNếu phát hiện DTC P0038, hãy chuyển sang Bước 4.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cảm biến số 2 - HO2S-2",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm HO2S-2.\nKiểm tra xem kết nối cực tới giắc cắm HO2S-2 có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa mạch “B1” và dây nối\nđất bằng điện áp bình điện.",
        refs: ["2S-2"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch điều khiển sấy cảm biến số 2 - HO2S-2",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B4”: dưới 1 Ω\nĐiện trở giữa mạch “B4” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “B4” và cực khác tại giắc cắm HO2S-2: vô cực",
        refs: ["2S-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch điều khiển sấy cảm biến số 2 - HO2S-2",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM và giắc cắm HO2S-2.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm HO2S-2 có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp của mạch “B4”: xấp xỉ 0 V (Khi công tắc máy\nở vị trí “ON”)",
        refs: ["2S-2"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 5,
        title: "Kiểm tra HO2S-2",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra cảm biến HO2S-2. (Trang 1C-9)",
        refs: ["1C-2", "1C-9", "2S-2"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế HO2S-2.\n(Trang 1C-9)",
      },
    ],
  },
  {
    dtcCode: "P0107",
    title: "P0107 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch tín hiệu cảm biến IAT và mạch nối đất",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” của giắc cắm ECM và cảm biến IAT.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm cảm biến IAT có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở của mạch “A1” và “A2”: dưới 1 Ω\nĐiện trở giữa từng mạch “A1” và “A2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực khác tại giắc cắm cảm biến IAT: vô cực\nĐiện áp các mạch “A1” và “A2”: xấp xỉ 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra cảm biến IAT",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra cảm biến IAT. (Trang 1C-12)",
        refs: ["1C-12", "1C-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế cảm biến IAT.\n(Trang 1C-12)",
      },
    ],
  },
  {
    dtcCode: "P0112/P0113",
    title: "P0112/P0113 – Khắc phục sự cố",
    condition:
      "P0112: Mạch cảm biến nhiệt độ khí nạp 1 thấp (Bank 1)\nĐiện áp đầu ra mạch tín hiệu cảm biến IAT thấp hơn 0,04 V trong 10 giây. (lô-gic phát hiện 3 D/C)",
    faultArea: "Cảm biến IAT và/hoặc mạch của nó\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch tín hiệu cảm biến ECT và mạch nối đất",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” của giắc cắm ECM và cảm biến ECT.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm cảm biến ECT có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở của mạch “A1” và “A2”: dưới 1 Ω\nĐiện trở giữa từng mạch “A1” và “A2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực mạch “A2” tại giắc cắm cảm biến ECT: vô cực\nĐiện áp các mạch “A1” và “A2”: xấp xỉ 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra cảm biến ECT",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra cảm biến ECT. (Trang 1C-8)",
        refs: ["1C-2", "1C-8"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế cảm biến ECT.\n(Trang 1C-8)",
      },
    ],
  },
  {
    dtcCode: "P0117/P0118",
    title: "P0117/P0118 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra DTC",
        description: "Có (những) DTC nào ngoài P0134 không?",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang khắc phục sự cố DTC liên quan.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra hệ thống xả và hệ thống nạp khí",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra xem hệ thống xả và hệ thống nạp khí có bị tắc hay rò rỉ không.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch tín hiệu HO2S-1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra các mạch “A2” và “A3” theo Bước 3 trong “DTC P0131/P0132” (Trang 1A-66).",
        refs: ["1A-66", "2S-1"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra lại cảm biến HO2S-1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra cảm biến HO2S-1. (Trang 1C-9)\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.",
        refs: ["1C-9", "2S-1"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Thay thế HO2S-1.\n(Trang 1C-9)",
      },
      {
        id: 6,
        title: "Kiểm tra lại DTC",
        description: "Vẫn phát hiện DTC P0134?",
        subNote:
          "Thay thế HO2S-1. (Trang 1C-9)\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.",
        refs: ["1C-2", "1C-9", "2S-1"],
        imageLabel: "Hình minh họa bước 6",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Kết thúc.",
      },
    ],
  },
  {
    dtcCode: "P0122/P0123",
    title: "P0122/P0123 – Khắc phục sự cố",
    condition:
      "P0122: Mạch công tắc / cảm biến vị trí bàn đạp / bướm ga “A” thấp\nĐiện áp đầu ra mạch tín hiệu (chính) cảm biến TP thấp hơn 0,2 V. (lô-gic phát hiện 1 D/C)",
    faultArea: "Cảm biến TP (chính) và/hoặc mạch của nó\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra DTC",
        description: "Có (những) DTC nào ngoài P0137, P0138 và P0140 không?",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang khắc phục sự cố DTC liên quan.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch tín hiệu và mạch nối đất HO2S-2",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          'Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” của giắc cắm ECM và giắc cắm HO2S-2.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm HO2S-2 có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở các mạch “B2” và “B3”: dưới 1 Ω\nĐiện trở giữa từng mạch “B2” và “B3” và dây nối đất: vô cực\nĐiện trở giữa cực mạch "B2" và cực khác tại giắc cắm HO2S-2: vô cực\nĐiện trở giữa cực mạch "B3" và cực khác tại giắc cắm HO2S-2: vô cực\nĐiện áp các mạch “B2” và “B3”: xấp xỉ 0 V (khi công tắc máy ở vị trí “ON”)',
        refs: ["2S-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị lỗi.",
      },
      {
        id: 4,
        title: "Kiểm tra hệ thống xả và hệ thống nạp khí",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra xem hệ thống xả và hệ thống nạp khí có bị tắc hay rò rỉ không.",
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
      {
        id: 5,
        title: "Kiểm tra mạch cảm biến HO2S-2",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra mạch cảm biến HO2S-2 theo Bước 2 và 3 trong “DTC P0036/P0037/P0038” (Trang 1A-58).",
        refs: ["1A-58", "2S-2"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
      {
        id: 6,
        title: "Kiểm tra kim phun nhiên liệu và/hoặc mạch của nó",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra mạch kim phun nhiên liệu. (Trang 1G-6)\nKiểm tra các kim phun nhiên liệu. (Trang 1G-21)",
        refs: ["1G-21", "1G-6"],
        imageLabel: "Hình minh họa bước 6",
        okAction: "Chuyển sang Bước 7.",
        failAction: "(Các) kim phun nhiên liệu hoặc mạch của nó bị lỗi.",
      },
      {
        id: 7,
        title: "Kiểm tra lại DTC",
        description: "Có vẫn phát hiện DTC P0137, P0138 hay P0140 không?",
        subNote:
          "Thay thế HO2S-2. (Trang 1C-9)\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.",
        refs: ["1C-2", "1C-9", "2S-2"],
        imageLabel: "Hình minh họa bước 7",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Kết thúc.",
      },
    ],
  },
  {
    dtcCode: "P0131/P0132",
    title: "P0131/P0132 – Khắc phục sự cố",
    condition:
      "P0131: Điện áp mạch cảm biến O2 thấp (Bank 1 Cảm biến 1) Điện áp đầu ra mạch HO2S-1 thấp hơn 0,06 V trong vòng 25 giây, ngay cả khi điện áp đầu ra mạch HO2S-2 cao hơn 0,6 V.\n(lô-gic phát hiện 3 D/C)",
    faultArea: "HO2S-1 và/hoặc mạch của nó\nECM",
    steps: [
      {
        id: 1,
        title: "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Nếu phát hiện DTC",
        failAction: "Chuyển sang “Kiểm tra",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn kim phun nhiên liệu",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Khi công tắc máy ở vị trí “OFF”, rút giắc cắm khỏi kim phun nhiên liệu có liên quan tới DTC.\nKiểm tra xem kết nối cực tới giắc cắm kim phun nhiên liệu có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1”, “B1”, “C1” hay “D1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch điều khiển kim phun nhiên liệu",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem các kết nối cực tới giắc cắm “C01” và “E01” có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở các mạch “A2”, “B2”, “C2” hoặc “D2”: dưới 1 Ω\nĐiện trở giữa từng mạch “A2”, “B2”, “C2” và “D2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực mạch “A2” tại giắc cắm kim phun nhiên liệu: vô cực\nĐiện trở giữa cực mạch “B1” và cực mạch “B2” tại giắc cắm kim phun nhiên liệu: vô cực\nĐiện trở giữa cực mạch “C1” và cực mạch “C2” tại giắc cắm kim phun nhiên liệu: vô cực\nĐiện trở giữa cực mạch “D1” và cực mạch “D2” tại giắc cắm kim phun nhiên liệu: vô cực\nĐiện áp các mạch “A2”, “B2”, “C2” hoặc “D2”: khoảng 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra kim phun nhiên liệu",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra kim phun nhiên liệu liên quan tới DTC. (Trang 1G-21)",
        refs: ["1C-2", "1G-19", "1G-21"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction:
          "Thay thế kim phun nhiên liệu liên quan tới DTC. (Trang 1G-19)",
      },
    ],
  },
  {
    dtcCode: "P0134",
    title: "P0134 – Khắc phục sự cố",
    condition:
      "P0134: Phát hiện mạch cảm biến O2 không hoạt động (Bank 1 Cảm biến 1) Điện áp đầu ra mạch HO2S-1 vẫn nằm trong khoảng 0,42 và 0,5 V trong 25 giây.\n(lô-gic phát hiện 3 D/C)",
    faultArea:
      "HO2S-1 và/hoặc mạch của nó\nCảm biến HO2S-1\nHệ thống nạp khí\nHệ thống xả\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cảm biến TP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm bộ thân bướm ga điện.\nKiểm tra xem kết nối cực tới giắc cắm bộ thân bướm ga\nđiện có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “B1” và “B4” xấp xỉ 5 V.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất cảm biến TP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa “B1” và dây nối đất xấp xỉ 5 V.",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction:
          "Sửa mạch “B4”.\nNếu vẫn phát hiện DTC này, hãy thay thế ECM và kiểm tra lại DTC.\n(Trang 1C-2)",
        failAction:
          "Sửa mạch “B1”.\nNếu vẫn phát hiện DTC này, hãy thay thế ECM và kiểm tra lại DTC.\n(Trang 1C-2)",
      },
      {
        id: 4,
        title: "Kiểm tra mạch tín hiệu (phụ) cảm biến TP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B3”: dưới 1 Ω\nĐiện trở giữa mạch “B3” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “B3” và cực khác tại giắc cắm bộ thân bướm ga điện: vô cực\nĐiện áp mạch “B3”: xấp xỉ 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra cảm biến TP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra cảm biến TP tham khảo “Kiểm tra hoạt động cảm biến TP” trong “Kiểm tra bộ thân bướm ga điện trên xe” trong Phần 1C (Trang 1C-3).",
        refs: ["1C-2", "1C-3"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế bộ thân bướm ga điện. (Trang 1D- 12)",
      },
    ],
  },
  {
    dtcCode: "P0137/P0138/P0140",
    title: "P0137/P0138/P0140 – Khắc phục sự cố",
    condition:
      "P0137: Điện áp mạch cảm biến O2 thấp (Bank 1 Cảm biến 2)\nĐiện áp đầu ra mạch HO2S-2 cao hơn 0,06 V trong 25 giây sau khi làm nóng. (lô-gic phát hiện 3 D/C)",
    faultArea:
      "HO2S-2 và/hoặc mạch của nó\nCảm biến HO2S-2 và/hoặc mạch của nó\nHệ thống xả\nHệ thống nạp khí\nHệ thống nhiên liệu\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch tín hiệu cảm biến kích nổ",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” của giắc cắm ECM và giắc cắm cảm biến kích nổ.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm cảm biến kích nổ có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở của mạch “A1” và “B1”: dưới 1 Ω\nĐiện trở giữa từng mạch “A1” và “B1” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực mạch “B1” tại giắc cắm cảm biến kích nổ: vô cực\nĐiện áp các mạch “A1” và “B1”: xấp xỉ 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra cảm biến kích nổ",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra cảm biến kích nổ. (Trang 1C-11)",
        refs: ["1C-11"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Hãy thay thế cảm biến kích nổ. (Trang 1C- 11)",
      },
      {
        id: 4,
        title: "Đồng thời khắc phục sự cố của (những) DTC khác",
        description: "Có phát hiện (các) DTC khác không?",
        subNote: "",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang khắc phục sự cố DTC liên quan.",
        failAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
      },
    ],
  },
  {
    dtcCode:
      "P0201/P0202/P0203/P0204/P0261/P0262/P0264/P0265/P0267/P0268/P0270/P0271",
    title:
      "P0201/P0202/P0203/P0204/P0261/P0262/P0264/P0265/P0267/P0268/P0270/P0271 – Khắc phục sự cố",
    condition:
      "P0201: Mạch kim phun nhiên liệu/Hở mạch - Xi-lanh 1\nKim phun nhiên liệu số 1 và/hoặc mạch của kim phun bị hở khi động cơ hoạt\nđộng.\n(lô-gic phát hiện 3 D/C)",
    faultArea: "Kim phun nhiên liệu và/hoặc mạch của nó\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cảm biến CKP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm cảm biến CKP.\nKiểm tra xem kết nối cực tới giắc cắm cảm biến CKP có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “B1” và “B3” bằng\nđiện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất cảm biến CKP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa “B1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Sửa mạch “B3”.",
        failAction: "Sửa mạch “B1”.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch tín hiệu cảm biến CKP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          'Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B2”: dưới 1 Ω\nĐiện trở giữa mạch “B2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch "B2" và cực khác tại giắc cắm cảm biến CKP: vô cực\nĐiện áp mạch “B2”: xấp xỉ 0 V (khi công tắc máy ở vị trí “ON”)',
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra cảm biến CKP và vòng răng tạo xung",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra cảm biến CKP và vòng răng tạo xung.\nCảm biến CKP: (Trang 1C-10)\nVòng răng tạo xung: (Trang 1D-78)",
        refs: ["1C-10", "1C-2", "1D-78"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế các bộ phận bị lỗi.",
      },
    ],
  },
  {
    dtcCode: "P0222/P0223",
    title: "P0222/P0223 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cảm biến CMP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm cảm biến CMP.\nKiểm tra xem kết nối cực tới giắc cắm cảm biến CMP có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và “A3” bằng\nđiện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất cảm biến CMP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Sửa mạch “A3”.",
        failAction: "Sửa mạch “A1”.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch tín hiệu cảm biến CMP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          'Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “A2”: dưới 1 Ω\nĐiện trở giữa mạch “A2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch "A2" và cực khác tại giắc cắm cảm biến CMP: vô cực\nĐiện áp mạch “A2”: xấp xỉ 0 V (Khi công tắc máy ở vị trí “ON”)',
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra rô-to tín hiệu và cảm biến CMP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra rô-to tín hiệu và cảm biến CMP.\nCảm biến CMP: (Trang 1C-9)\nRô-to tín hiệu: (Trang 1D-23)",
        refs: ["1C-2", "1C-9", "1D-23"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế các bộ phận bị lỗi.",
      },
    ],
  },
  {
    dtcCode: "P0327/P0328",
    title: "P0327/P0328 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title: "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Nếu phát hiện DTC",
        failAction: "Chuyển sang “Kiểm tra",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cụm bô-bin",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Khi công tắc máy ở vị trí “OFF”, rút giắc cắm khỏi cụm bô-bin liên quan tới DTC.\nKiểm tra xem kết nối cực tới giắc cắm cụm bô-bin có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và “A3”, “B1” và “B3”, “C1” và “C3” hoặc “D1” và “D3” bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất cụm bô-bin",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa “A1”, “B1”, “C1” hay “D1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Sửa chữa hoặc thay thế mạch “A3”, “B3”, “C3”\nhoặc “D3”.",
        failAction: "Sửa chữa hoặc thay thế mạch “A1”, “B1”, “C1”\nhoặc “D1”.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch điều khiển cụm bô-bin",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem các kết nối cực tới giắc cắm “C01” và “E01” có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở các mạch “A2”, “B2”, “C2” hoặc “D2”: dưới 1 Ω\nĐiện trở giữa từng mạch “A2”, “B2”, “C2” hoặc “D2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A2” và cực khác tại giắc cắm bô-bin: vô cực\nĐiện trở giữa cực mạch “B2” và cực khác tại giắc cắm bô-bin: vô cực\nĐiện trở giữa cực mạch “C2” và cực khác tại giắc cắm bô-bin: vô cực\nĐiện trở giữa cực mạch “D2” và cực khác tại giắc cắm bô-bin: vô cực",
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra mạch điều khiển cụm bô-bin",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM và giắc cắm cụm bô-bin liên quan tới DTC.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm cụm bô-bin liên quan tới DTC có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp các mạch “A2”, “B2”, “C2” hoặc “D2”: khoảng 0 V (khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 6,
        title: "Kiểm tra lại DTC",
        description: "Vẫn phát hiện DTC tương tự?",
        subNote:
          "Thay thế cụm bô-bin liên quan tới DTC bằng cụm bô-bin chuẩn. (Trang 1H-6)\nXóa DTC. (Trang 1A-23)\nXoay công tắc máy về vị trí “OFF”.\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.\n(Trang 1A-22)",
        refs: ["1A-22", "1A-23", "1C-2", "1H-6"],
        imageLabel: "Hình minh họa bước 6",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Kết thúc.",
      },
    ],
  },
  {
    dtcCode: "P0335/P0336",
    title: "P0335/P0336 – Khắc phục sự cố",
    condition:
      "P0335: Mạch cảm biến vị trí trục khuỷu “A”\nTín hiệu cảm biến CKP không được nhập vào trong khi tín hiệu cảm biến CMP\nđang được nhập vào. (lô-gic phát hiện 3 D/C)",
    faultArea: "Cảm biến CKP và/hoặc mạch của nó\nVòng răng tạo xung\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction:
          "Nếu phát hiện DTC P0443 và P0458, hãy chuyển sang Bước 2.\nNếu phát hiện DTC P0459, hãy chuyển sang Bước 4.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn bộ van xả bộ hấp thụ hơi xăng EVAP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm bộ van xả bộ hấp thụ hơi xăng EVAP.\nKiểm tra xem kết nối cực tới giắc cắm bộ van xả bộ hấp thụ hơi xăng EVAP có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch điều khiển bộ van xả bộ hấp thụ hơi xăng EVAP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” của ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B1”: dưới 1 Ω\nĐiện trở giữa mạch “B1” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực mạch “B1” tại giắc cắm bộ van xả bộ hấp thụ hơi xăng EVAP: vô cực",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch điều khiển bộ van xả bộ hấp thụ hơi xăng EVAP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” của ECM và giắc cắm bộ van xả bộ hấp thụ hơi xăng EVAP.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm bộ van xả bộ hấp thụ hơi xăng EVAP có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp của mạch “B1”: xấp xỉ 0 V (Khi công tắc máy\nở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra bộ van xả bộ hấp thụ hơi xăng EVAP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra điện trở bộ van xả bộ hấp thụ hơi xăng EVAP.\n(Trang 1B-4)",
        refs: ["1B-3", "1B-4", "1C-2"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay bộ van xả bộ hấp thụ hơi xăng EVAP.\n(Trang 1B-3)",
      },
    ],
  },
  {
    dtcCode: "P0340",
    title: "P0340 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra rơ-le quạt làm mát két nước số 1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra rơ-le quạt làm mát két nước số 1. (Trang 1F- 15)",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction:
          "Nếu phát hiện DTC P0480, hãy chuyển sang Bước 3.\nNếu phát hiện DTC P0692, hãy chuyển sang Bước 5.",
        failAction: "Thay rơ-le quạt làm mát két nước số 1.",
      },
      {
        id: 3,
        title:
          "Kiểm tra mạch cấp nguồn rơ-le quạt làm mát két nước số 1 (phía cuộn dây)",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, tháo rơ-le quạt làm mát két nước số 1.\nKiểm tra xem kết nối cực tới giắc cắm rơ-le quạt làm mát két nước số 1 có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch điều khiển rơ-le quạt làm mát két nước số 1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B1”: dưới 1 Ω\nĐiện trở giữa mạch “B1” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “B1” và cực khác tại giắc cắm rơ-le quạt làm mát két nước số 1: vô cực",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra mạch điều khiển rơ-le quạt làm mát két nước số 1",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM và tháo rơ-le quạt làm mát két nước số 1.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm rơ-le quạt làm mát két nước số 1 có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp của mạch “B1”: xấp xỉ 0 V (Khi công tắc máy\nở vị trí “ON”)",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
    ],
  },
  {
    dtcCode:
      "P0351/P0352/P0353/P0354/P2300/P2301/P2303/P2304/P2306/P2307/P2309/P2310",
    title:
      "P0351/P0352/P0353/P0354/P2300/P2301/P2303/P2304/P2306/P2307/P2309/P2310 – Khắc phục sự cố",
    condition:
      "P0351: Mạch sơ cấp/thứ cấp bô-bin “A”\nCụm bô-bin số 1 và/hoặc mạch bô-bin hở khi động cơ đang hoạt động. (lô-gic phát hiện 3 D/C)",
    faultArea: "Cụm bô-bin và/hoặc mạch của nó\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra rơ-le quạt làm mát két nước số 2 và số 3",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra rơ-le quạt làm mát két nước số 2 và số 3.\n(Trang 1F-15)",
        refs: ["1F-15"],
        imageLabel: "Hình minh họa bước 2",
        okAction:
          "Nếu phát hiện DTC P0481, hãy chuyển sang Bước 3.\nNếu phát hiện DTC P0694, hãy chuyển sang Bước 5.",
        failAction: "Thay rơ-le quạt làm mát két nước số 2 và/hoặc số 3.",
      },
      {
        id: 3,
        title:
          "Kiểm tra mạch cấp nguồn rơ-le quạt làm mát két nước số 2 và 3 (phía cuộn dây)",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, tháo rơ-le quạt làm mát két nước số 2 và số 3.\nKiểm tra xem kết nối cực tới giắc cắm rơ-le quạt làm mát két nước số 2 và số 3 có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title:
          "Kiểm tra mạch điều khiển rơ-le quạt làm mát két nước số 2 và số 3",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “B1”: dưới 1 Ω\nĐiện trở giữa mạch “B1” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “B1” và cực khác tại giắc cắm rơ-le quạt làm mát két nước số 2 và số 3: vô cực",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title:
          "Kiểm tra mạch điều khiển rơ-le quạt làm mát két nước số 2 và số 3",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM và tháo rơ-le quạt làm mát két nước số 1.\nKiểm tra xem kết nối cực tới giắc cắm “C01” và “E01” và giắc cắm rơ-le quạt làm mát két nước số 2 và số 3 có chính xác không.\nNếu các kết nối đều ỔN, hãy kiểm tra điểm sau.\nĐiện áp của mạch “B1”: xấp xỉ 0 V (Khi công tắc máy\nở vị trí “ON”)",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
    ],
  },
  {
    dtcCode: "P0443/P0458/P0459",
    title: "P0443/P0458/P0459 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra điện áp bộ cấp nguồn VSS",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm VSS.\nKiểm tra xem kết nối cực tới giắc cắm VSS có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và “A3” xấp xỉ 5 V.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất VSS",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất xấp xỉ 5 V.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Sửa chữa hoặc thay thế mạch “A3”.",
        failAction: "Chuyển sang Bước 4.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch cấp nguồn VSS",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “A1”: dưới 1 Ω\nĐiện trở giữa mạch “A1” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A1” và cực khác ở giắc cắm VSS: vô cực\nĐiện áp của mạch “A1”: 0 - 1 V (Khi công tắc máy ở vị trí “ON”)",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế mạch “A1”.",
      },
      {
        id: 5,
        title: "Kiểm tra mạch tín hiệu VSS",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “A2”: dưới 1 Ω\nĐiện trở giữa mạch “A2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch “A2” và cực khác tại giắc cắm VSS: vô cực\nĐiện áp của mạch “A2”: 0 - 1 V (Khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Chuyển sang Bước 6.",
        failAction: "Sửa hoặc thay thế mạch “A2”.",
      },
      {
        id: 6,
        title: "Kiểm tra VSS và vòng cảm biến tốc độ",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra các mục sau:\nVSS: (Trang 1C-13)\nVòng cảm biến tốc độ: (Trang 5B-9)",
        refs: ["1C-13", "1C-2", "5B-9"],
        imageLabel: "Hình minh họa bước 6",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay các bộ phận bị lỗi.",
      },
    ],
  },
  {
    dtcCode: "P0480/P0692",
    title: "P0480/P0692 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn công tắc đèn phanh",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm công tắc\nđèn phanh.\nKiểm tra kết nối cực đến giắc cắm công tắc đèn phanh\nđã chính xác chưa.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa từng mạch “A1” và “B1” bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất công tắc đèn phanh",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa từng mạch “A1” và dây nối đất bằng điện áp bình điện.",
        refs: [],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Sửa chữa hoặc thay thế mạch “B1”.",
        failAction:
          "Kiểm tra để đảm bảo cầu chì đèn phanh “STOP” không bị nổ. Nếu kết quả kiểm tra đã ỔN, hãy sửa hoặc thay\nthế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra mạch tín hiệu công tắc đèn phanh",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “A2”: dưới 1 Ω\nĐiện trở giữa từng mạch “A2” và dây nối đất: vô cực\nĐiện trở giữa một đầu của mạch “A2” và đầu kia ở\ngiắc cắm công tắc đèn phanh: vô cực\nĐiện áp mạch “A2”: xấp xỉ 0 V (Khi công tắc máy ở vị trí “ON”)",
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra công tắc đèn phanh",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "1) Kiểm tra công tắc đèn phanh. (Trang 4A-13)",
        refs: ["1C-2", "4A-13"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay công tắc đèn phanh. (Trang 4A-13)",
      },
    ],
  },
  {
    dtcCode: "P0481/P0694",
    title: "P0481/P0694 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn cảm biến áp suất môi chất làm lạnh A/C",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Với công tắc máy ở vị trí “OFF”, rút giắc cắm cảm biến áp suất môi chất làm lạnh A/C.\nKiểm tra xem kết nối cực tới giắc cắm cảm biến áp suất môi chất làm lạnh A/C có chính xác không.\nNếu kết nối ỔN, hãy xoay công tắc máy về vị trí “ON”.\nKiểm tra để đảm bảo điện áp giữa “A1” và “A3” xấp xỉ 5 V.",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nối đất cảm biến áp suất môi chất làm lạnh A/C",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra để đảm bảo điện áp giữa “A1” và dây nối đất xấp xỉ 5 V.",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction:
          "Sửa mạch “A3”.\nNếu vẫn phát hiện DTC này, hãy thay thế ECM và kiểm tra lại DTC.\n(Trang 1C-2)",
        failAction:
          "Sửa mạch “A1”.\nNếu vẫn phát hiện DTC này, hãy thay thế ECM và kiểm tra lại DTC.\n(Trang 1C-2)",
      },
      {
        id: 4,
        title: "Kiểm tra mạch tín hiệu cảm biến áp suất môi chất làm lạnh A/C",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          'Với công tắc máy ở vị trí “OFF”, rút giắc cắm “C01” và “E01” khỏi ECM.\nKiểm tra xem kết nối cực tới các giắc cắm “C01” và “E01” đã đúng chưa.\nNếu các kết nối đều ỔN, hãy kiểm tra những điểm sau.\nĐiện trở mạch “A2”: dưới 1 Ω\nĐiện trở giữa mạch “A2” và dây nối đất: vô cực\nĐiện trở giữa cực mạch "A2" và cực khác tại giắc cắm cảm biến áp suất môi chất làm lạnh A/C: vô cực\nĐiện áp mạch “A2”: xấp xỉ 0 V (Khi công tắc máy ở vị trí “ON”)',
        refs: [],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Chuyển sang Bước 5.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 5,
        title: "Kiểm tra cảm biến áp suất môi chất làm lạnh A/C",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra cảm biến áp suất môi chất làm lạnh A/C.\n(Trang 7B-47)",
        refs: ["1C-2", "7B-47"],
        imageLabel: "Hình minh họa bước 5",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction:
          "Thay cảm biến áp suất môi chất làm lạnh A/C.\n(Trang 7B-47)",
      },
    ],
  },
  {
    dtcCode: "P0500",
    title: "P0500 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title: "Kiểm tra lại DTC",
        description: "Vẫn phát hiện DTC P0602?",
        subNote:
          "Xóa DTC. (Trang 1A-23)\nXoay công tắc máy về vị trí “OFF”.\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.",
        refs: ["1A-23"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Hỏng hóc gián đoạn.\nKiểm tra hỏng hóc gián\nđoạn. (Trang 00-11)",
      },
      {
        id: 2,
        title: "Kiểm tra lập trình lại ECM",
        description: "Lập trình lại ECM có được tiến hành không?",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Tiến hành lập trình chính xác lại ECM một\nlần nữa.",
        failAction: "Chuyển sang Bước 3.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch nguồn và mạch nối đất ECM",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "Hãy kiểm tra mạch nguồn và mạch nối đất ECM.\n(Trang 1A-130)",
        refs: ["1A-130", "1C-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
    ],
  },
  {
    dtcCode: "P0504",
    title: "P0504 – Khắc phục sự cố",
    condition:
      "P0504: Tương quan công tắc phanh “A”/“B”\nTín hiệu công tắc đèn phanh sẽ không BẬT hoặc TẮT trong thời gian lâu hơn quy định.\n(lô-gic phát hiện 1 D/C)",
    faultArea: "Công tắc đèn phanh và/hoặc mạch điện của nó\nECM",
    steps: [
      {
        id: 1,
        title: "Kiểm tra lại DTC",
        description: "Vẫn phát hiện DTC P0606?",
        subNote:
          "Xóa DTC. (Trang 1A-23)\nXoay công tắc máy về vị trí “OFF”.\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.",
        refs: ["1A-23"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction: "Kiểm tra hỏng hóc gián\nđoạn. (Trang 00-11)",
      },
      {
        id: 2,
        title: "Kiểm tra mạch nguồn và mạch nối đất ECM",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "Kiểm tra mạch cấp nguồn và mạch nối đất ECM.\n(Trang 1A-130)",
        refs: ["1A-130"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra lại DTC",
        description: "Vẫn phát hiện DTC P0606?",
        subNote:
          "Thay thế HO2S-2. (Trang 1C-9)\nThực hiện “Quy trình xác nhận DTC”, và kiểm tra DTC.",
        refs: ["1C-2", "1C-9", "2S-2"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Kết thúc.",
      },
    ],
  },
  {
    dtcCode: "P0530",
    title: "P0530 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra rơ-le máy nén A/C",
        description: "Kiểm tra rơ-le máy nén A/C",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Nếu phát hiện DTC",
        failAction: "Hãy thay thế rơ-le máy",
      },
    ],
  },
  {
    dtcCode: "P0560/P0562/P0563",
    title: "P0560/P0562/P0563 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra lại DTC",
        description: "Vẫn phát hiện DTC P2101/P2119?",
        subNote:
          "Xóa DTC.\nThực hiện hiệu chuẩn hệ thống điều khiển bướm ga\nđiện. (Trang 1C-5)\nKiểm tra lại DTC.",
        refs: ["1C-5"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Kết thúc.",
      },
      {
        id: 3,
        title: "Kiểm tra mạch điều khiển bộ chấp hành bướm ga",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Hãy kiểm tra mạch điều khiển bộ chấp hành bướm ga theo Bước 2 trong “DTC P2100” (Trang 1A-103).",
        refs: ["1A-103"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra bộ thân bướm ga điện",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "Kiểm tra hoạt động bộ thân bướm ga điện. (Trang 1C- 3)",
        refs: ["1C-2"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế bộ thân bướm ga điện. (Trang 1D- 12)",
      },
    ],
  },
  {
    dtcCode: "P0602",
    title: "P0602 – Khắc phục sự cố",
    condition:
      "P0602: Lỗi lập trình cụm điều khiển\nHỏng hóc bên trong ECM (lỗi lập trình dữ liệu). (lô-gic phát hiện 1 D/C)",
    faultArea:
      "Lỗi lập trình của ECM\nMạch cấp nguồn và/hoặc mạch nối đất ECM\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra bộ dây điện",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra những điểm sau.\nMạch “B1”, “B2” và “B4”: Tham khảo Bước 2 - 4 trong “DTC P0122/P0123” (Trang 1A-64).\nMạch “B3”: Tham khảo Bước 4 trong “DTC P0222/ P0223” (Trang 1A-76).",
        refs: ["1A-64", "1A-76"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 3,
        title: "Kiểm tra cảm biến TP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra hoạt động của cảm biến TP tham khảo “Kiểm tra hoạt động cảm biến TP” trong “Kiểm tra bộ thân bướm ga điện trên xe” trong Phần 1C (Trang 1C-3).",
        refs: ["1C-2", "1C-3"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế bộ thân bướm ga điện. (Trang 1D- 12)",
      },
    ],
  },
  {
    dtcCode: "P0606",
    title: "P0606 – Khắc phục sự cố",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Hiệu chuẩn hệ thống điều khiển bướm ga điện",
        description: "Vẫn phát hiện DTC P2176?",
        subNote:
          "Thực hiện hiệu chuẩn hệ thống điều khiển bướm ga\nđiện. (Trang 1C-5)\nKiểm tra lại DTC.",
        refs: ["1C-5"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Chuyển sang Bước 3.",
        failAction: "Kết thúc.",
      },
      {
        id: 3,
        title: "Kiểm tra bộ dây điện",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "Kiểm tra những điểm sau.\nMạch “B1”, “B2” và “B4”: Tham khảo Bước 2 - 4 trong “DTC P0122/P0123” (Trang 1A-64).\nMạch “B3”: Tham khảo Bước 4 trong “DTC P0222/ P0223” (Trang 1A-76).",
        refs: ["1A-64", "1A-76"],
        imageLabel: "Hình minh họa bước 3",
        okAction: "Chuyển sang Bước 4.",
        failAction: "Sửa chữa hoặc thay thế bộ dây điện bị hỏng.",
      },
      {
        id: 4,
        title: "Kiểm tra cảm biến TP",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote:
          "1) Kiểm tra cảm biến TP tham khảo “Kiểm tra hoạt động cảm biến TP” trong “Kiểm tra bộ thân bướm ga điện trên xe” trong Phần 1C (Trang 1C-3).",
        refs: ["1C-2", "1C-3"],
        imageLabel: "Hình minh họa bước 4",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Thay thế bộ thân bướm ga điện. (Trang 1D- 12)",
      },
    ],
  },
  {
    dtcCode: "P0607",
    title: "P0607 – Khắc phục sự cố",
    condition:
      "P0607: Hoạt động cụm điều khiển\nPhát hiện hỏng hóc bên trong ECM.\n(lô-gic phát hiện 1 D/C hoặc lô-gic phát hiện 3 D/C nhưng MIL không sáng đèn)",
    faultArea: "Mạch cấp nguồn và/hoặc mạch nối đất ECM\nECM",
    steps: [
      {
        id: 1,
        title:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        description:
          "Đã tiến hành “Kiểm tra hệ thống điều khiển động cơ và kiểm soát khí thải” chưa?",
        subNote: "",
        refs: ["1A-19"],
        imageLabel: "Hình minh họa bước 1",
        okAction: "Chuyển sang Bước 2.",
        failAction:
          "Chuyển sang “Kiểm tra hệ thống điều khiển động cơ và kiểm soát\nkhí thải” (Trang 1A-19).",
      },
      {
        id: 2,
        title: "Kiểm tra mạch cấp nguồn và mạch nối đất ECM",
        description: "Kết quả kiểm tra có ỔN không?",
        subNote: "Kiểm tra mạch cấp nguồn và mạch nối đất ECM.\n(Trang 1A-130)",
        refs: ["1A-130", "1C-2"],
        imageLabel: "Hình minh họa bước 2",
        okAction: "Thay ECM và kiểm tra lại DTC. (Trang 1C-2)",
        failAction: "Sửa chữa mạch cấp nguồn và mạch nối đất ECM.",
      },
    ],
  },
];
