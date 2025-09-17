import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import fileUploadPhoto from "@/assets/mage_file-upload.svg";
import pana from "@/assets/pana.svg";
import group from "@/assets/Group 2.svg";
import { Checkbox } from "@/components/ui/checkbox";

export default function FormGridCard() {
  const [previews, setPreviews] = useState<{ [key: string]: string }>({});

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => ({ ...prev, [key]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  const [checked, setChecked] = useState(false);
  return (
    <div className=" bg-gray-100 py-5 px-5 overflow-y-hidden ">
      <h1 className="text-2xl mb-1 font-bold">สินเชื่อวงเงินทุนหมุนเวียน</h1>
      <p className="text-sm">
        <span className="text-gray-500">Master Data/สินเชื่อ/</span>
        <span className="font-bold">เพิ่มข้อมูล</span>
      </p>

      <Card className="mt-4">
        <CardContent className="p-4">
          <p className="font-bold pb-2">รายละเอียดสินเชื่อ</p>

          <div className="grid grid-cols-4 gap-4 auto-rows-max">
            {/* Row 1 */}
            <div className="col-span-1">
              <Label>ชื่อสินเชื่อ</Label>
              <Input
                placeholder="สินเชื่อวงเงินทุนหมุนเวียน"
                className="bg-gray-100"
              />
            </div>
            <div className="col-span-1">
              <Label>กลุ่มสินเชื่อ</Label>
              <Input placeholder="สินเชื่อธุรกิจ" className="bg-gray-100" />
            </div>
            <div className="col-span-1">
              <Label>ประเภทสินเชื่อ</Label>
              <Input
                placeholder="ธุรกิจ SMEs และขนาดใหญ่"
                className="bg-gray-100"
              />
            </div>
            <div className="col-span-1">
              <Label>หมวดสินเชื่อ</Label>
              <Input placeholder="สินเชื่อหมุนเวียน" className="bg-gray-100" />
            </div>

            {/* Row 2 */}
            <div className="col-span-1">
              <Label>หลักการ</Label>
              <Input
                placeholder="บัยอ์ อัลอีนะฮ์ (Bai al Inah)"
                className="bg-gray-100"
              />
            </div>
            <div className="col-span-1">
              <Label>วงเงินสินเชื่อ</Label>
              <Input
                placeholder="พิจารณาตามประเภทของธุรกิจ ขนาดของกิจการ และความจำเป็นของลูกค้า"
                className="bg-gray-100"
              />
            </div>
            <div className="col-span-1">
              <Label>ระยะเวลาการผ่อนชำระ</Label>
              <Input
                placeholder="ทบทวนวงเงินทุกปี ผ่อนชำระกำไรเป็นรายเดือน และชำระเงินต้นทั้งหมดเมื่อครบอายุสัญญา"
                className="bg-gray-100"
              />
            </div>
            <div className="col-span-1">{/* empty */}</div>

            {/* Row 3: TextAreas */}
            <div className="col-span-2">
              <Label>คุณสมบัติผู้ขอสินเชื่อ</Label>
              <textarea
                className="w-full h-32 text-[12px] bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Description"
                defaultValue={`- เป็นบุคคลธรรมดาสัญชาติไทย อายุไม่ต่ำกว่า 20 ปี บริบูรณ์ หรือเป็นนิติบุคคลที่จดทะเบียนตามกฎหมายไทย
- ผู้ประกอบการหรือผู้บริหาร มีประสบการณ์ในธุรกิจไม่น้อยกว่า 3-5ปี (ขึ้นอยู่กับประเภทธุรกิจ)
- มีประวัติทางการเงินที่ดีตามเกณฑ์ที่ธนาคารกำหนด`}
              />
            </div>
            <div className="col-span-2">
              <Label>เอกสาร</Label>
              <textarea
                className="w-full h-32 text-[12px] bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Description"
                defaultValue={`-เอกสารแสดงตัวตนตามที่ธนาคารกำหนด
-เอกสารแสดงรายได้ตามที่ธนาคารกำหนด
-เอกสารอื่นๆ ตามที่ธนาคารกำหนด`}
              />
            </div>

            <div className="col-span-4 mt-6">
              <h2 className="text-xl font-bold mb-4">วันที่ของนักบิน</h2>

              <div className="space-y-6">
                <Card className="border-2 border-dashed py-2 flex justify-center items-center relative">
                  <CardContent className="flex justify-center items-center gap-4 relative pt-4">
                    <div className="relative">
                      <img
                        src={pana}
                        alt="Preview"
                        className="w-25 h-20 object-cover rounded-lg border"
                      />

                      {previews["upload-1"] && (
                        <button
                          type="button"
                          onClick={() =>
                            setPreviews((prev) => ({
                              ...prev,
                              ["upload-1"]: "",
                            }))
                          }
                          className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      )}
                    </div>

                    <div className="text-center">
                      <p className="font-bold  text-center mr-3">
                        วางไฟล์ที่นี่
                      </p>
                      <span className="text-gray-500 ml-3">
                        .png, .jpg, .jpeg, .svg
                      </span>
                      <br />
                      <span className="text-gray-500 ml-3">
                        ขนาดรูปแนะนำ 900x600 px
                      </span>
                    </div>
                    <div>
                      <p className="ml-5 mr-5">หรือ</p>
                    </div>
                    <div className="flex items-center ">
                      <Label htmlFor="upload-1" className="cursor-pointer">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#FFB300] flex items-center py-5"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={fileUploadPhoto}
                              alt="Upload"
                              className="h-5 w-5"
                            />
                            <span>นักเกื้อมูล</span>
                          </div>
                        </Button>
                        <Input
                          id="upload-1"
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, "upload-1")}
                        />
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="font-bold">อัปโหลด Sales sheet</h3>

                <Card className="border-2 border-dashed py-2 flex justify-center items-center">
                  <CardContent className="flex items-center gap-4 relative pt-4">
                    <div className="relative">
                      <img
                        src={group}
                        alt="Preview"
                        className="w-25 h-20 object-cover rounded-lg"
                      />
                      {previews["upload-2"] && (
                        <button
                          type="button"
                          onClick={() =>
                            setPreviews((prev) => ({
                              ...prev,
                              ["upload-2"]: "",
                            }))
                          }
                          className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-xs hover:bg-red-600"
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <div  className="text-center">
                      <p className="font-bold text-center mr-3">
                        วางไฟล์ที่นี่
                      </p>
                      <span className="text-gray-500 ml-3">
                        .xlsm, .xlxs, .pdf, .doc, .docx
                      </span>
                      <br />
                      <span className="text-gray-500 ml-3">
                        ขนาดไฟล์ไม่เกิน 1 GB
                      </span>
                    </div>
                    <div>
                      <p className="ml-5 mr-5 font-bold">หรือ</p>
                    </div>

                    <div className="flex items-center mt-3">
                      <Label htmlFor="upload-2" className="cursor-pointer">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#FFB300] flex items-center py-5"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={fileUploadPhoto}
                              alt="Upload"
                              className="h-5 w-5"
                            />
                            <span>นักเกื้อมูล</span>
                          </div>
                        </Button>
                        <Input
                          id="upload-2"
                          type="file"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, "upload-2")}
                        />
                      </Label>
                    </div>
                  </CardContent>
                </Card>
                <div>
                  <h3 className="font-semibold mb-2">
                    การงาน <span className="text-red-500">*</span>
                  </h3>
                  <div className="flex gap-5">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile" />
                      <Label htmlFor="mobile">Mobile</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="non-mobile" />
                      <Label htmlFor="non-mobile">Non-mobile</Label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">เบิก - ปิดการใช้งาน</h3>

<label className="relative inline-block cursor-pointer">
  <input
    type="checkbox"
    checked={checked}
    onChange={() => setChecked(!checked)}
    className="sr-only"
  />

  <div className="relative h-[13px] w-8 bg-[#8cb18e] rounded-full">
    <div
      className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 bg-[#17471A] rounded-full transition-left duration-300
        ${checked ? "left-[calc(100%-15px)]" : "left-[-5px] bg-[#829683]"}
      `}
    ></div>
  </div>
</label>


                  <span className="ml-2 text-sm">
                    {checked ? "เปิด" : "ปิด"}
                  </span>
                  <div className="flex gap-3 ml-auto">
                    <Button
                      variant="outline"
                      className="border border-red-500 text-red-500 hover:bg-red-50"
                    >
                      ยกเลิก
                    </Button>

                    <Button
                      className="bg-gray-300 text-gray-500 cursor-not-allowed"
                      disabled
                    >
                      ยืนยันเพิ่มข้อมูล
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
