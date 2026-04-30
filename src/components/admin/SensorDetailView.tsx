import React, { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Info,
  Camera,
  Zap,
  Activity,
  Wrench,
  AlertTriangle,
  Stethoscope,
  CheckCircle,
  Settings2,
  Image as ImageIcon,
} from "lucide-react";
import { sensorDataMap } from "@/assets/CamBien_Json";

export interface SensorData {
  thong_tin_chung: {
    ten_cum: string;
    thuoc_he_thong: string;
    chuc_nang: string;
    vi_tri_lap: string;
    loai_cam_bien: string;
  };
  anh_thuc_te: { mo_ta: string; image_url: string | null }[];
  so_do_chan_giac: {
    mo_ta_chung: string;
    danh_sach_chan: { so_chan: string; ky_hieu: string; chuc_nang: string }[];
  };
  so_do_dien_rut_gon: {
    mach_dien_image_url: string | null;
    nguyen_ly_hoat_dong: string;
    do_thi_dac_tinh_image_url: string | null;
    thong_so_chuan: { loai_thong_so: string; gia_tri: string[] }[];
  };
  quy_trinh_kiem_tra_tai_giac: { ten_buoc: string; hanh_dong: string[] }[];
  dtc_lien_quan: { ma_dtc: string; ten_loi: string; mo_ta_loi: string }[];
  trieu_chung_thuc_te: string[];
  huong_xu_ly_xac_nhan: string[];
}

interface Props {
  id: number;
}

const SensorDetailView: React.FC<Props> = ({ id }) => {
  const data = useMemo(() => {
    const result = sensorDataMap[id];
    return result ? (result.sensor_data as SensorData) : null;
  }, [id]);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full text-lg text-gray-500">
        Không tìm thấy dữ liệu ID: {id}
      </div>
    );
  }

  return (
    <ScrollArea className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-8 space-y-10 text-[15px] md:text-[16px]">
        {/* HEADER */}
        <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 flex flex-col gap-5">
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
              {data.thong_tin_chung.thuoc_he_thong.split("/")[0]}
            </span>
            <span className="px-3 py-1 bg-slate-200 text-slate-700 text-sm font-bold rounded-full">
              {data.thong_tin_chung.loai_cam_bien}
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-800">
            {data.thong_tin_chung.ten_cum}
          </h1>

          <p className="text-lg text-slate-600 leading-7">
            {data.thong_tin_chung.chuc_nang}
          </p>

          <div className="flex items-center gap-2 bg-slate-50 p-4 rounded-xl border">
            <Settings2 className="w-5 h-5 text-blue-500" />
            <span className="text-base">
              <strong>Vị trí:</strong> {data.thong_tin_chung.vi_tri_lap}
            </span>
          </div>
        </div>

        {/* GRID */}
        {/* GRID: Sơ đồ chân & Hình ảnh sơ đồ mạch */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* PIN DIAGRAM */}
          {data.so_do_chan_giac.danh_sach_chan.length > 0 && (
            <div className="bg-white rounded-3xl p-6 shadow-md border overflow-hidden">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-amber-500" /> Sơ đồ chân
              </h3>
              <div className="overflow-hidden rounded-xl border border-slate-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b">
                      <th className="p-4 font-bold text-slate-600">Chân</th>
                      <th className="p-4 font-bold text-slate-600">Ký hiệu</th>
                      <th className="p-4 font-bold text-slate-600">
                        Chức năng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.so_do_chan_giac.danh_sach_chan.map((c, i) => (
                      <tr
                        key={i}
                        className="border-b last:border-0 hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="p-4 font-black text-blue-600">
                          {c.so_chan}
                        </td>
                        <td className="p-4">
                          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-mono text-sm border border-blue-100">
                            {c.ky_hieu}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600 text-sm">
                          {c.chuc_nang}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CIRCUIT DIAGRAM - Bổ sung phần hiển thị sơ đồ mạch điện */}
          {(data.so_do_dien_rut_gon.mach_dien_image_url ||
            data.so_do_dien_rut_gon.do_thi_dac_tinh_image_url) && (
            <div className="bg-white rounded-3xl p-6 shadow-md border">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Activity className="text-indigo-500" /> Sơ đồ hệ thống
              </h3>
              <div className="space-y-4">
                {data.so_do_dien_rut_gon.mach_dien_image_url && (
                  <div className="rounded-xl border p-2 bg-slate-50">
                    <img
                      src={data.so_do_dien_rut_gon.mach_dien_image_url}
                      alt="Sơ đồ mạch điện"
                      className="w-full rounded-lg"
                    />
                    <p className="text-xs text-center mt-2 text-slate-400 italic">
                      Sơ đồ mạch điện rút gọn
                    </p>
                  </div>
                )}
                {data.so_do_dien_rut_gon.do_thi_dac_tinh_image_url && (
                  <div className="rounded-xl border p-2 bg-slate-50">
                    <img
                      src={data.so_do_dien_rut_gon.do_thi_dac_tinh_image_url}
                      alt="Đồ thị đặc tính"
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* PROCESS */}
        {data.quy_trinh_kiem_tra_tai_giac.length > 0 && (
          <div className="bg-white rounded-3xl p-6 shadow-md border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Stethoscope className="text-teal-500" /> Quy trình kiểm tra
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {data.quy_trinh_kiem_tra_tai_giac.map((b, i) => (
                <div
                  key={i}
                  className="p-4 border rounded-xl hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-lg">{b.ten_buoc}</h4>
                  </div>

                  <ul className="pl-6 list-disc">
                    {b.hanh_dong.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DTC + SYMPTOMS */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* DTC */}
          {data.dtc_lien_quan.length > 0 && (
            <div className="bg-red-50 rounded-3xl p-6 border">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex gap-2">
                <AlertTriangle /> DTC
              </h3>

              {data.dtc_lien_quan.map((d, i) => (
                <div key={i} className="bg-white p-4 rounded-xl mb-3">
                  <div className="font-mono text-red-600 font-bold">
                    {d.ma_dtc}
                  </div>
                  <div className="font-semibold">{d.ten_loi}</div>
                  <div className="text-sm text-gray-500">{d.mo_ta_loi}</div>
                </div>
              ))}
            </div>
          )}

          {/* SYMPTOMS */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border">
              <h3 className="text-xl font-bold mb-4 flex gap-2">
                <Info /> Triệu chứng
              </h3>

              <ul className="list-disc pl-6 space-y-1">
                {data.trieu_chung_thuc_te.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border">
              <h3 className="text-xl font-bold mb-4 flex gap-2">
                <Wrench /> Xử lý
              </h3>

              <ul className="space-y-2">
                {data.huong_xu_ly_xac_nhan.map((x, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="text-blue-400 w-4 h-4 mt-1" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* IMAGES */}
        {data.anh_thuc_te?.length > 0 && (
          <div className="bg-white rounded-3xl p-6 border shadow-md">
            <h3 className="text-2xl font-bold mb-6 flex gap-2">
              <Camera className="text-blue-500" /> Hình ảnh
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.anh_thuc_te.map((img, i) => (
                <div key={i}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                    {img.image_url ? (
                      <img
                        src={img.image_url}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="text-gray-300" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-500">
                    {img.mo_ta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default SensorDetailView;
