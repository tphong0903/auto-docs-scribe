export const QuyTrinhChung = [
  {
    id: 1,
    group_name: "Thông số cơ khí",
    parameters:
      "Áp suất nén; độ kín buồng cháy; MAP/chân không đường nạp; khe hở xu-páp; tiếng gõ và rung động.",
    standards:
      "Áp suất nén: tiêu chuẩn 1.550 kPa; giới hạn 1.250 kPa; chênh lệch tối đa giữa hai xi-lanh bất kỳ 100 kPa. Áp suất tuyệt đối ống góp nạp (MAP) ở cầm chừng: 20-55 kPa; có thể quy đổi tương đương độ chân không xấp xỉ -80 đến -45 kPa tùy áp suất khí quyển. Khe hở xu-páp khi nguội, ECT 15-25°C: nạp 0,14-0,23 mm; xả 0,30-0,40 mm.",
    conditions:
      "Đo nén khi động cơ đã làm nóng rồi tắt máy; bình điện sạc đầy; tốc độ đề tối thiểu 200 vòng/phút; bướm ga mở hoàn toàn; rút giắc kim phun. Đọc MAP/chân không khi động cơ nóng, cầm chừng ổn định. Đo khe hở xu-páp khi động cơ nguội, ECT 15-25°C. Kiểm tra tiếng gõ/rung ở cầm chừng, tăng ga nhẹ và giữ tua cố định.",
    tools:
      "Đồng hồ đo áp suất nén và dụng cụ 09915-64512/09915-64530/09915-64550; scanner đọc MAP; đồng hồ chân không; leak-down tester; thước lá; ống nghe cơ khí; máy đo rung/NVH nếu có.",
  },
  {
    id: 2,
    group_name: "Thông số hiệu năng",
    parameters:
      "Công suất; mô-men; tốc độ không tải; khả năng tăng tốc; tải động cơ.",
    standards:
      "Công suất/mô-men là thông số danh định để tham khảo khi đánh giá mất công suất, không phải phép kiểm nhanh trên mô hình: khoảng 102-105 hp tại 6.000 vòng/phút; 130-138 N.m tại 4.000-4.400 vòng/phút. Tốc độ cầm chừng tiêu chuẩn: A/C OFF 650-750 vòng/phút; A/C ON 700-900 vòng/phút. Data nền ở cầm chừng: tải động cơ 20-40%; độ rộng xung kim phun 1,3-4,0 ms; góc đánh lửa sớm khoảng 0-20° BTDC.",
    conditions:
      "Kiểm tra cầm chừng khi động cơ đạt nhiệt độ vận hành; cần số N/P; kéo phanh tay; xe đứng yên; tắt hoặc bật A/C theo đúng trường hợp cần kiểm tra. Đánh giá tăng tốc khi không có DTC hiện hành, không rò rỉ nạp/xả và dữ liệu nền trở về vùng chuẩn. Công suất/mô-men chỉ xác định chính xác bằng băng thử.",
    tools:
      "Suzuki SDT-II hoặc scanner OBD-II đọc Data List; đồng hồ tua; thiết bị ghi dữ liệu; băng thử công suất/chassis dynamometer nếu cần đánh giá công suất thực.",
  },
  {
    id: 3,
    group_name: "Thông số nhiên liệu",
    parameters:
      "Áp suất nhiên liệu; thời gian phun; fuel trim; lưu lượng, rò rỉ và điện trở kim phun.",
    standards:
      "Áp suất nhiên liệu: 375-385 kPa. Điện trở kim phun: 11,8-12,6 Ω ở 25°C; cách điện kim phun với mass: vô cực. Dung tích phun tham khảo: 27-29 cm³/15 giây; rò rỉ nhiên liệu từ kim phun: ít hơn 1 giọt/phút. STFT: -20% đến +20%; LTFT: -20% đến +20%; tổng fuel trim: -30% đến +30%; độ rộng xung kim phun: 1,3-4,0 ms.",
    conditions:
      "Khi kiểm tra áp suất nhiên liệu, điện áp bình điện phải >= 11 V. Bật khóa ON để bơm hoạt động, lặp ON/OFF 3-4 lần theo tài liệu rồi đo áp suất và kiểm tra rò rỉ. Đo điện trở kim phun khi tắt khóa, rút giắc. Fuel trim và thời gian phun đọc khi động cơ nóng, làm việc ổn định/vòng kín. Khi kiểm tra dung tích phun, cấp điện trong 15 giây và đo bằng xi-lanh chia độ.",
    tools:
      "Đồng hồ đo áp suất nhiên liệu, bộ đầu nối chuyên dùng, Suzuki SDT-II/scanner, VOM/ohm kế, xi-lanh chia độ, dây cấp 12 V kiểm kim phun, tai nghe cơ khí.",
  },
  {
    id: 4,
    group_name: "Thông số nạp - xả",
    parameters:
      "MAP; TP/TPS; APP; IAT; HO2S; rò rỉ/nghẹt đường nạp - xả; khí thải.",
    standards:
      "MAP: khoảng 4,1 V ở áp suất khí quyển; khoảng 2,9 V tại -30 kPa; khoảng 1,7 V tại -60 kPa. MAP ở cầm chừng: 20-55 kPa. TP1: 0,8-1,0 V khi nhả ga; 4,3-4,5 V khi đạp hết ga. TP2: 4,0-4,2 V khi nhả ga; 0,5-0,7 V khi đạp hết ga. APP1: 0,70-0,80 V khi nhả ga; 4,35-4,45 V khi đạp hết ga. APP2: 0,325-0,425 V khi nhả ga; 2,15-2,25 V khi đạp hết ga. IAT: 2,21-2,69 kΩ ở 20°C; khoảng 0,322 kΩ ở 80°C. HO2S tín hiệu khoảng 0-1,0 V tùy điều kiện vận hành; cổ góp xả giới hạn biến dạng 0,3 mm.",
    conditions:
      "MAP đo với nguồn 5 V, 20°C, áp suất khí quyển khoảng 101,3 kPa và tạo áp suất âm theo mức kiểm tra. TP/APP kiểm khi công tắc ON, đạp/nhả ga từ từ, tín hiệu phải thay đổi mượt. IAT đo điện trở khi OFF/rút giắc hoặc so sánh Data List với nhiệt độ thực tế. HO2S/khí xả kiểm khi động cơ đã nóng; kiểm tra rò rỉ/nghẹt xả khi có khói đen, hôi xăng, hụt ga hoặc O2 bất thường.",
    tools:
      "Scanner/Data List, VOM, dây back-probe/dây bảo dưỡng, bơm hút chân không, đồng hồ chân không, máy tạo khói, máy phân tích khí xả nếu cần kiểm tra bổ sung, thước thẳng/thước lá, oscilloscope.",
  },
  {
    id: 5,
    group_name: "Thông số đánh lửa",
    parameters:
      "Góc đánh lửa; tín hiệu bô-bin; tình trạng bugi; misfire theo xi-lanh.",
    standards:
      "Bugi: NGK KR6A-10; khe hở bugi: 0,95-1,05 mm. Thời điểm đánh lửa ban đầu: -5 đến 15° BTDC ở tốc độ cầm chừng quy định. Góc đánh lửa sớm trên Data List ở cầm chừng thường nằm trong vùng 0-20° BTDC.",
    conditions:
      "Tháo kiểm bugi khi động cơ nguội; đánh giá mòn điện cực, muội than, ướt xăng, nứt sứ. Kiểm tra thời điểm đánh lửa khi động cơ nóng, cầm chừng đúng chuẩn, xe đứng yên. Khi có rung giật/bỏ máy: so sánh DTC, freeze frame, bugi, bô-bin, kim phun và áp suất nén từng xi-lanh.",
    tools:
      "Thước lá đo khe hở bugi, tuýp tháo bugi, Suzuki SDT-II/scanner, đèn cân lửa 09930-76311, spark tester, VOM, oscilloscope.",
  },
  {
    id: 6,
    group_name: "Thông số nhiệt - bôi trơn",
    parameters:
      "ECT; tình trạng làm mát; van hằng nhiệt; quạt làm mát; áp suất dầu và bơm nhớt.",
    standards:
      "ECT: khoảng 5,74 kΩ ở 0°C; 2,29-2,62 kΩ ở 20°C; 0,31-0,33 kΩ ở 80°C. Van hằng nhiệt bắt đầu mở ở 86,5-89,5°C; mở hoàn toàn ở 100°C; độ nâng lớn hơn 8 mm tại 100°C. Quạt làm mát điều khiển theo vùng 95-97°C và 100-102°C tùy chế độ; xe có A/C còn phụ thuộc áp suất A/C. Áp suất nhớt ở 4.000 vòng/phút: 280-500 kPa. Khe hở xuyên tâm bơm nhớt: tiêu chuẩn 0,135-0,205 mm; giới hạn 0,210 mm.",
    conditions:
      "ECT đo điện trở khi OFF/rút giắc hoặc đọc Data List khi động cơ nguội/nóng. Kiểm tra van hằng nhiệt bằng nước gia nhiệt. Kiểm tra quạt bằng Data List/Active Test theo nhiệt độ ECT, điều kiện A/C và áp suất A/C nếu có. Đo áp suất nhớt khi động cơ nóng đến nhiệt độ vận hành; trước đó kiểm tra mực nhớt, chất lượng nhớt và rò rỉ.",
    tools:
      "Scanner/Active Test, VOM/ohm kế, nhiệt kế, nồi gia nhiệt, đồng hồ áp suất hệ thống làm mát, đồng hồ áp suất nhớt và dụng cụ 09915-77311/09915-78211, thước lá.",
  },
  {
    id: 7,
    group_name: "Thông số điện tử/OBD",
    parameters:
      "DTC; MIL; freeze frame; live data; active test; tín hiệu cảm biến và cơ cấu chấp hành.",
    standards:
      "Hệ thống điều khiển K15B gồm các tín hiệu/cơ cấu chính: ECT, MAP/IAT, TP/APP, CKP, CMP, HO2S-1/HO2S-2, cảm biến kích nổ, kim phun, bô-bin, bướm ga điện tử, OCV/VVT, EVAP, rơ-le bơm nhiên liệu, rơ-le quạt và giao tiếp CAN. Điện áp bình điện khi kiểm tra ECM/IG ON: >= 12 V; nguồn tham chiếu cảm biến khoảng 5 V. CKP/CMP/VSS là tín hiệu xung; CMP khoảng 0 V hoặc 5 V tùy vị trí rô-to. HO2S heater: 5,0-6,4 Ω ở 20°C; OCV: 6,7-7,7 Ω ở 20°C; EVAP purge valve: 22-26 Ω ở 20°C; VVT difference: -1,0 đến +1,0° CA.",
    conditions:
      "Luôn đọc DTC, MIL, freeze frame và Data List trước khi xóa lỗi. Kiểm tra tín hiệu cảm biến bằng back-probe/dây bảo dưỡng, không chọc trực tiếp vào cực kín ECM. Với tín hiệu xung CKP/CMP/VSS hoặc tín hiệu điều khiển bô-bin/kim phun/OCV nên dùng oscilloscope hoặc máy đo xung. Active Test chỉ thực hiện khi đảm bảo điều kiện an toàn.",
    tools:
      "Suzuki SDT-II hoặc scanner OBD-II, VOM, dây back-probe/dây bảo dưỡng, oscilloscope/máy đo xung, battery tester, ampe kìm, bộ dây kiểm tra ECM, máy tạo khói/bơm chân không khi kiểm EVAP.",
  },
  {
    id: 8,
    group_name: "Thông số nguồn điện - khởi động - sạc",
    parameters:
      "Ắc quy; dây mass; nguồn ECM; điện áp hệ thống; dòng và tốc độ mô-tơ đề; điện áp/dòng sạc.",
    standards:
      "Điện áp bình điện khi kiểm tra ECM/IG ON: >= 12 V; khi kiểm tra áp suất nhiên liệu: >= 11 V. Mô-tơ khởi động: 12 V, 1,0 kW, định mức 30 giây. Đặc tính không tải: 11 V, dòng tối đa 95 A, tốc độ tối thiểu 2.500 vòng/phút. Đặc tính khi tải: 7,5 V, 300 A, mô-men tối thiểu 8,8 N.m, tốc độ tối thiểu 840 vòng/phút. Công tắc từ hoạt động trên 8 V. Hệ thống sạc: điện áp ổn định 10,6-16,0 V ở 25°C; kiểm tra tải ở khoảng 2.000 vòng/phút, dòng tối thiểu 15 A hoặc 30 A tùy xe có A/C/giàn sưởi.",
    conditions:
      "Kiểm tra trước khi kết luận lỗi cảm biến/ECM vì nguồn sai có thể làm sai live data, áp suất nhiên liệu và tín hiệu cảm biến. Áp dụng khi khó khởi động, không quay máy, quay yếu, lỗi điện áp hệ thống, MIL/DTC nguồn hoặc dữ liệu cảm biến bất thường. Khi kiểm tra sạc: dùng bình điện đã sạc, chạy động cơ khoảng 2.000 vòng/phút và bật tải điện theo tài liệu.",
    tools:
      "Battery tester, VOM, ampe kìm, máy kiểm tra mô-tơ đề, Suzuki SDT-II/scanner đọc DTC/Data List, oscilloscope khi cần kiểm tra nhiễu nguồn hoặc tín hiệu xung.",
  },
];