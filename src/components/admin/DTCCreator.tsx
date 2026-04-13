import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  PlusCircle,
  Trash2,
  Download,
  Eye,
  FileJson,
  Save,
  BookOpen,
  Info,
} from "lucide-react";

const DTCCreator = () => {
  const [dtcForm, setDtcForm] = useState({
    dtcCode: "",
    title: "",
    condition: "",
    faultArea: "",
    steps: [
      {
        id: 1,
        title: "",
        description: "",
        subNote: "",
        refs: [],
        imageLabel: "Hình minh họa bước 1",
        okAction: "",
        failAction: "",
      },
    ],
  });

  const addStep = () => {
    const newStep = {
      id: dtcForm.steps.length + 1,
      title: "",
      description: "",
      subNote: "",
      refs: [],
      imageLabel: `Hình minh họa bước ${dtcForm.steps.length + 1}`,
      okAction: "",
      failAction: "",
    };
    setDtcForm({ ...dtcForm, steps: [...dtcForm.steps, newStep] });
  };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...dtcForm.steps];

    // Xử lý riêng cho trường refs: Chuyển chuỗi nhập vào thành mảng
    if (field === "refs") {
      updatedSteps[index][field] = value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
    } else {
      updatedSteps[index][field] = value;
    }

    setDtcForm({ ...dtcForm, steps: updatedSteps });
  };

  const removeStep = (index) => {
    const updatedSteps = dtcForm.steps.filter((_, i) => i !== index);
    const reindexedSteps = updatedSteps.map((step, i) => ({
      ...step,
      id: i + 1,
    }));
    setDtcForm({ ...dtcForm, steps: reindexedSteps });
  };

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setDtcForm({ ...dtcForm, [name]: value });
  };

  const exportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(dtcForm, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `${dtcForm.dtcCode || "new-dtc"}.json`,
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
            <PlusCircle className="text-blue-600" /> Tạo Mã Lỗi DTC Mới
          </h1>
          <p className="text-slate-500">
            Nhập thông tin để tạo quy trình chẩn đoán chuẩn
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => console.log(dtcForm)}
          >
            <Eye size={18} /> Log Console
          </Button>
          <Button
            className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-md"
            onClick={exportJSON}
          >
            <Download size={18} /> Xuất File JSON
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Thông tin chung */}
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="bg-white border-b">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileJson className="text-slate-400" size={20} /> Thông tin đầu
                mục
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dtcCode">Mã lỗi (DTC Code)</Label>
                  <Input
                    id="dtcCode"
                    name="dtcCode"
                    placeholder="P0010"
                    value={dtcForm.dtcCode}
                    onChange={handleGeneralChange}
                    className="font-mono font-bold text-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Tiêu đề bảng</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="P0010 – Khắc phục sự cố"
                    value={dtcForm.title}
                    onChange={handleGeneralChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="condition">Điều kiện (Condition)</Label>
                <Textarea
                  id="condition"
                  name="condition"
                  placeholder="Mô tả lô-gic phát hiện..."
                  value={dtcForm.condition}
                  onChange={handleGeneralChange}
                />
              </div>
            </CardContent>
          </Card>

          {/* Danh sách các bước */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-lg px-2 flex items-center gap-2">
              Quy trình thực hiện{" "}
              <Badge variant="outline">{dtcForm.steps.length} bước</Badge>
            </h3>

            {dtcForm.steps.map((step, index) => (
              <Card
                key={index}
                className="border-slate-200 shadow-sm overflow-hidden"
              >
                <div className="bg-slate-100 px-4 py-2 flex justify-between items-center border-b">
                  <span className="font-bold text-slate-600 text-xs uppercase tracking-wider">
                    Bước {step.id}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-rose-500 hover:text-rose-700 hover:bg-rose-50"
                    onClick={() => removeStep(index)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cột trái: Nội dung */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Tiêu đề bước kiểm tra</Label>
                        <Input
                          placeholder="Kiểm tra mạch cấp nguồn..."
                          value={step.title}
                          onChange={(e) =>
                            handleStepChange(index, "title", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Câu hỏi hướng dẫn</Label>
                        <Input
                          placeholder="Kết quả có ỔN không?"
                          value={step.description}
                          onChange={(e) =>
                            handleStepChange(
                              index,
                              "description",
                              e.target.value,
                            )
                          }
                        />
                      </div>

                      {/* PHẦN THÊM MỚI: TÀI LIỆU THAM KHẢO */}
                      <div className="space-y-2 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                        <Label className="flex items-center gap-2 text-blue-700">
                          <BookOpen size={14} /> Tài liệu tham khảo (References)
                        </Label>
                        <Input
                          placeholder="1A-19, 1C-2, 2S-1"
                          value={step.refs.join(", ")}
                          onChange={(e) =>
                            handleStepChange(index, "refs", e.target.value)
                          }
                          className="bg-white"
                        />
                        <p className="text-[10px] text-slate-400 italic">
                          Nhập các mã trang, ngăn cách bằng dấu phẩy
                        </p>
                      </div>
                    </div>

                    {/* Cột phải: Hướng dẫn kỹ thuật */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Mô tả chi tiết (Sub Note)</Label>
                        <Textarea
                          placeholder="Rút giắc cắm, đo điện áp..."
                          className="min-h-[155px]"
                          value={step.subNote}
                          onChange={(e) =>
                            handleStepChange(index, "subNote", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hành động OK/FAIL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <Label className="text-emerald-700 text-xs font-bold uppercase">
                        Kết quả: OK
                      </Label>
                      <Textarea
                        placeholder="Chuyển sang bước tiếp theo..."
                        className="bg-white min-h-[80px]"
                        value={step.okAction}
                        onChange={(e) =>
                          handleStepChange(index, "okAction", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2 bg-rose-50 p-3 rounded-lg border border-rose-100">
                      <Label className="text-rose-700 text-xs font-bold uppercase">
                        Kết quả: FAIL
                      </Label>
                      <Textarea
                        placeholder="Sửa chữa bộ dây điện..."
                        className="bg-white min-h-[80px]"
                        value={step.failAction}
                        onChange={(e) =>
                          handleStepChange(index, "failAction", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="dashed"
              className="w-full py-10 border-2 border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-600 bg-white shadow-sm"
              onClick={addStep}
            >
              <PlusCircle className="mr-2" /> Thêm bước kiểm tra mới
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="sticky top-8 border-blue-100 bg-blue-50/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-blue-800 text-md flex items-center gap-2">
                <Save size={18} /> Hướng dẫn nhanh
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-700 space-y-4">
              <div className="flex gap-2">
                <Info size={16} className="shrink-0 mt-1" />
                <p>
                  <strong>Tài liệu tham khảo:</strong> Nhập mã như{" "}
                  <code>1A-19</code> để kỹ thuật viên biết cần tra cứu trang nào
                  trong cẩm nang PDF.
                </p>
              </div>
              <div className="flex gap-2 text-slate-600">
                <div className="shrink-0 mt-1">💡</div>
                <p>
                  Dữ liệu xuất ra sẽ tự động phân tách các tham khảo thành danh
                  sách (Array) để hiển thị đẹp mắt trên Viewer.
                </p>
              </div>
              <Separator className="bg-blue-200" />
              <div className="pt-2">
                <p className="font-bold mb-2 uppercase text-[10px] tracking-widest text-slate-500">
                  Xem trước JSON:
                </p>
                <div className="bg-white p-3 rounded border border-blue-200 overflow-x-auto shadow-inner">
                  <pre className="text-[10px] font-mono leading-tight">
                    {JSON.stringify(
                      dtcForm.steps[dtcForm.steps.length - 1]?.refs || [],
                      null,
                      2,
                    )}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DTCCreator;
