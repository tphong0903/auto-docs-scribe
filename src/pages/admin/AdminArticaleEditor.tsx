import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Save,
  Eye,
  Plus,
  Trash2,
  Image as ImageIcon,
  Link2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DiagnosticBuilder() {
  const [errorCode, setErrorCode] = useState("");
  const [status, setStatus] = useState("draft");

  const [sections, setSections] = useState([
    {
      id: crypto.randomUUID(),
      title: "",
      content: "",
      images: [],
      references: [],
    },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: crypto.randomUUID(),
        title: "",
        content: "",
        images: [],
        references: [],
      },
    ]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const updateSection = (id: string, field: string, value: any) => {
    setSections(
      sections.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    );
  };

  const addImageToSection = (sectionId: string) => {
    const url = window.prompt("Nhập URL hình ảnh (Ví dụ: https://...):");
    if (url) {
      setSections(
        sections.map((s) => {
          if (s.id === sectionId) {
            return { ...s, images: [...s.images, url] };
          }
          return s;
        }),
      );
    }
  };

  const removeImage = (sectionId: string, imageIndex: number) => {
    setSections(
      sections.map((s) => {
        if (s.id === sectionId) {
          const newImages = [...s.images];
          newImages.splice(imageIndex, 1);
          return { ...s, images: newImages };
        }
        return s;
      }),
    );
  };

  const addReference = (sectionId: string) => {
    setSections(
      sections.map((s) => {
        if (s.id === sectionId) {
          return {
            ...s,
            references: [...s.references, { label: "", code: "" }],
          };
        }
        return s;
      }),
    );
  };

  const updateReference = (
    sectionId: string,
    refIndex: number,
    field: string,
    value: string,
  ) => {
    setSections(
      sections.map((s) => {
        if (s.id === sectionId) {
          const newRefs = [...s.references];
          newRefs[refIndex] = { ...newRefs[refIndex], [field]: value };
          return { ...s, references: newRefs };
        }
        return s;
      }),
    );
  };

  const removeReference = (sectionId: string, refIndex: number) => {
    setSections(
      sections.map((s) => {
        if (s.id === sectionId) {
          const newRefs = [...s.references];
          newRefs.splice(refIndex, 1);
          return { ...s, references: newRefs };
        }
        return s;
      }),
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 font-manrope pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/admin/articles">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold font-sora text-blue-900">
            Tạo Quy trình Xử lý Lỗi
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Bản nháp</SelectItem>
              <SelectItem value="published">Xuất bản</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Xem trước
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="mr-2 h-4 w-4" />
            Lưu dữ liệu
          </Button>
        </div>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Thông tin chung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="errorCode" className="text-base font-semibold">
              Tên Lỗi / Mã Lỗi
            </Label>
            <Input
              id="errorCode"
              placeholder="Ví dụ: P0300 - Lỗi đánh lửa nhiều xy-lanh"
              value={errorCode}
              onChange={(e) => setErrorCode(e.target.value)}
              className="text-lg font-medium border-slate-300"
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-sora font-bold text-slate-800">
            Các bước xử lý (Headers)
          </h2>
        </div>

        {sections.map((section, index) => (
          <Card
            key={section.id}
            className="border-blue-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <CardHeader className="flex flex-row items-start justify-between bg-slate-50/50 pb-4">
              <div className="space-y-1 w-full max-w-2xl">
                <Label className="text-blue-600 font-bold uppercase text-xs tracking-wider">
                  Bước {index + 1}
                </Label>
                <Input
                  placeholder="Tiêu đề bước (Ví dụ: Kiểm tra Bugi và Mô-bin)"
                  value={section.title}
                  onChange={(e) =>
                    updateSection(section.id, "title", e.target.value)
                  }
                  className="font-semibold text-lg"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0"
                onClick={() => removeSection(section.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label>Nội dung hướng dẫn chi tiết</Label>
                <Textarea
                  placeholder="Mô tả các thao tác kỹ thuật viên cần thực hiện..."
                  value={section.content}
                  onChange={(e) =>
                    updateSection(section.id, "content", e.target.value)
                  }
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <Label className="font-semibold text-slate-700">
                    Hình ảnh minh họa
                  </Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addImageToSection(section.id)}
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Thêm ảnh
                  </Button>
                </div>
                {section.images.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    {section.images.map((imgUrl, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative group rounded-md overflow-hidden border"
                      >
                        <img
                          src={imgUrl}
                          alt={`minh họa ${imgIdx}`}
                          className="object-cover w-full h-24"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeImage(section.id, imgIdx)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400 italic">
                    Chưa có hình ảnh nào cho bước này.
                  </p>
                )}
              </div>

              <div className="space-y-3 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center justify-between">
                  <Label className="font-semibold text-blue-900">
                    Tài liệu tham khảo (Link nhảy trang)
                  </Label>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700"
                    onClick={() => addReference(section.id)}
                  >
                    <Link2 className="h-4 w-4 mr-2" />
                    Thêm Link
                  </Button>
                </div>
                {section.references.length > 0 ? (
                  <div className="space-y-2 mt-3">
                    {section.references.map((ref, refIdx) => (
                      <div key={refIdx} className="flex items-center gap-2">
                        <Input
                          placeholder="Nhãn hiển thị (VD: Cách tháo bugi)"
                          value={ref.label}
                          onChange={(e) =>
                            updateReference(
                              section.id,
                              refIdx,
                              "label",
                              e.target.value,
                            )
                          }
                          className="flex-1 bg-white"
                        />
                        <Input
                          placeholder="Mã nhảy trang (VD: 1A-C2)"
                          value={ref.code}
                          onChange={(e) =>
                            updateReference(
                              section.id,
                              refIdx,
                              "code",
                              e.target.value,
                            )
                          }
                          className="w-1/3 bg-white font-mono"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500"
                          onClick={() => removeReference(section.id, refIdx)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400 italic">
                    Nhấn "Thêm Link" để tạo nút nhảy sang tài liệu khác.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          variant="outline"
          className="w-full border-dashed border-2 py-8 text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50"
          onClick={addSection}
        >
          <Plus className="h-5 w-5 mr-2" />
          Thêm Bước Xử Lý Mới (Header Mới)
        </Button>
      </div>
    </div>
  );
}
