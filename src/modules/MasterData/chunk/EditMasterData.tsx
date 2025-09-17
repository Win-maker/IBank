import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import fileUploadPhoto from "@/assets/mage_file-upload.svg";
import { Checkbox } from "@/components/ui/checkbox";
import fileSuccessPhoto from "@/assets/ep_success-filled.svg";

export default function FormGridCard() {
  const [previews, setPreviews] = useState<{ [key: string]: string }>({});
  const [checked, setChecked] = useState(false);

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

  return (
   <div className="bg-gray-50 py-5 px-5">
      <h1 className="text-2xl mb-1 font-bold">สินเชื่อวงเงินทุนหมุนเวียน</h1>
      <p className="text-sm">
        Master Data/สินเชื่อ/<span className="text-black">เพิ่มข้อมูล</span>
      </p>

      <Card className="mt-4">
        <CardContent className="p-4">
          <p className="font-bold pb-2">รายละเอียดสินเชื่อ</p>

          <div className="grid grid-cols-4 gap-6 auto-rows-max">
            <div className="col-span-1">
              <Label>ชื่อสินเชื่อ</Label>
              <Input
                placeholder="สินเชื่อวงเงินทุนหมุนเวียน"
                className="bg-gray-50"
              />
            </div>
            <div className="col-span-1">
              <Label>กลุ่มสินเชื่อ</Label>
              <Input placeholder="สินเชื่อธุรกิจ" className="bg-gray-50" />
            </div>
            <div className="col-span-1">
              <Label>ประเภทสินเชื่อ</Label>
              <Input
                placeholder="ธุรกิจ SMEs และขนาดใหญ่"
                className="bg-gray-50"
              />
            </div>
            <div className="col-span-1">
              <Label>หมวดสินเชื่อ</Label>
              <Input placeholder="สินเชื่อหมุนเวียน" className="bg-gray-50" />
            </div>

            <div className="col-span-1">
              <Label>หลักการ</Label>
              <Input
                placeholder="บัยอ์ อัลอีนะฮ์ (Bai al Inah)"
                className="bg-gray-50"
              />
            </div>
            <div className="col-span-1">
              <Label>วงเงินสินเชื่อ</Label>
              <Input
                placeholder="พิจารณาตามประเภทของธุรกิจ ขนาดของกิจการ และความจำเป็นของลูกค้า"
                className="bg-gray-50"
              />
            </div>
            <div className="col-span-1">
              <Label>ระยะเวลาการผ่อนชำระ</Label>
              <Input
                placeholder="ทบทวนวงเงินทุกปี ผ่อนชำระกำไรเป็นรายเดือน และชำระเงินต้นทั้งหมดเมื่อครบอายุสัญญา"
                className="bg-gray-50"
              />
            </div>
            <div className="col-span-1"></div>

            <div className="col-span-2">
              <Label>คุณสมบัติผู้ขอสินเชื่อ</Label>
              <textarea
                className="w-full h-32 text-[12px] bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Description"
                defaultValue={`- เป็นบุคคลธรรมดาสัญชาติไทย อายุไม่ต่ำกว่า 20 ปี บริบูรณ์ หรือเป็นนิติบุคคลที่จดทะเบียนตามกฎหมายไทย
- ผู้ประกอบการหรือผู้บริหาร มีประสบการณ์ในธุรกิจไม่น้อยกว่า 3-5ปี (ขึ้นอยู่กับประเภทธุรกิจ)
- มีประวัติทางการเงินที่ดีตามเกณฑ์ที่ธนาคารกำหนด`}
              />
            </div>
            <div className="col-span-2">
              <Label>เอกสาร</Label>
              <textarea
                className="w-full h-32 text-[12px] bg-gray-50 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Description"
                defaultValue={`-เอกสารแสดงตัวตนตามที่ธนาคารกำหนด
-เอกสารแสดงรายได้ตามที่ธนาคารกำหนด
-เอกสารอื่นๆ ตามที่ธนาคารกำหนด`}
              />
            </div>

            <div className="col-span-4">
              <h2 className="text-xl font-bold py-0 my-0">วันที่ของนักบิน</h2>

              <div className="space-y-6">
                <Card className="border-2 border-dashed py-2 flex justify-center items-center relative">
                  <CardContent className="flex justify-center items-center gap-4 relative pt-4">
                    <div className="relative">
                      <img
                        src={previews["upload-1"] || fileUploadPhoto}
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

                    <div className="text-sm text-gray-500 text-center">
                      <p className="text-[#17471A] font-bold">coverpicture.png</p>
                      <span>543 kb</span>
                    </div>

                    <div className="flex items-center ">
                      <Label htmlFor="upload-1" className="cursor-pointer">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#FFB300] flex items-center py-5 hover:bg-[#FFB300]"
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

                <h3 className="font-bold py-0 my-0">อัปโหลด Sales sheet</h3>

                <Card className="border-2 border-dashed py-2 flex justify-center items-center">
                  <CardContent className="flex items-center gap-4 relative pt-4">
                    <div className="relative">
                      <img
                        src={previews["upload-2"] || fileUploadPhoto}
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
                    <div className="text-sm text-gray-500 text-center">
                      <p className="text-black font-bold">วางไฟล์ที่นี่</p>
                      <span className="block">
                        .xlsm, .xlxs, .pdf, .doc, .docx
                      </span>
                      <span>ขนาดไฟล์ไม่เกิน 1 GB</span>
                    </div>
                    <div className="font-bold">หรือ</div>

                    <div className="flex items-center mt-3">
                      <Label htmlFor="upload-2" className="cursor-pointer">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-[#FFB300] flex items-center py-5 hover:bg-[#FFB300]"
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

                <div className="my-0 py-0 font-bold">รายการที่อัปโหลด</div>
        
                  <div className="flex justify-between items-center mt-2 border rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <img src={fileSuccessPhoto} className="w-6 h-6" />
                      <div className="text-[15px]">
                        <p className="text-primary font-semibold">salesaheet.docx</p>
                        <p className="text-gray-400 text-[13px]">2.49 MB</p>
                      </div>
                    </div>
                    <div className="cursor-pointer">x</div>
                  </div>
           

                <div>
                  <h3 className="font-semibold mb-2">การงาน <span className="text-red-500">*</span></h3>
                  <div className="flex gap-5">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile"/>
                      <Label htmlFor="mobile">Mobile</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="non-mobile" />
                      <Label htmlFor="non-mobile">Non-mobile</Label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">เบิก - ปิดการใช้งาน</span>

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



                  </div>

                  <div className="flex items-center gap-4">
                    <button className="w-auto h-[40px] flex items-center justify-center py-3 px-5 rounded-md border border-red-500 text-red-500">
                      ยกเลิก
                    </button>
                    <button className="w-auto h-[40px] flex items-center justify-cent py-3 px-5 rounded-md bg-[#17471A] text-white">
                      ยืนยันเพิ่มข้อมูล
                    </button>
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
