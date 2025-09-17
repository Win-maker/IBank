import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { columns, loans } from "./Colmn";
import search from "@/assets/mi_search.svg";
import { Button } from "@/components/ui/button";
import left from "@/assets/keyboard_arrow_right.svg";
import right from "@/assets/keyboard_arrow_right (1).svg";
import up from "@/assets/keyboard_arrow_up.svg";

const MasterDataView = () => {
  const [filter, setFilter] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [status, setStatus] = React.useState("all");
  // const [group, setGroup] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const pageSize = 10;

  const filteredData = loans
    .filter((loan) => loan.name.toLowerCase().includes(filter.toLowerCase()))
    .filter((loan) => (category === "all" ? true : loan.category === category))
    .filter((loan) => (status === "all" ? true : loan.status === status));
  // .filter((loan) =>
  //   group === "all" ? true : loan.group === group
  // );

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-5">สินเชื่อ</h1>
      <div className="bg-white p-6 rounded-lg">
        <div className="flex items-center justify-between mt-5 ">
          <h2 className="font-bold">
            รายการสินเชื่อทั้งหมด ({filteredData.length})
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <Input
                placeholder="ค้นหา"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-8"
              />
              <img
                src={search}
                alt="search"
                className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>

            {/* Category Select */}
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="กรองโดย: ทั้งหมด" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">กรองโดย: ทั้งหมด</SelectItem>
                <SelectItem value="secured">A</SelectItem>
                <SelectItem value="unsecured">B</SelectItem>
              </SelectContent>
            </Select>

            {/* Status Select */}
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="เรียงตาม: ใหม่ที่สุด" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">เรียงตาม: ใหม่ที่สุด</SelectItem>
                <SelectItem value="active">C</SelectItem>
                <SelectItem value="inactive">D</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-lg  bg-white">
          <table className="w-full border-collapse mt-10">
            <thead className=" text-gray-600 text-sm mb-5 ">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-4 py-2 text-left">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="text-sm">
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-t">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center py-4 text-gray-500"
                  >
                    ไม่มีข้อมูล
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center mt-4 text-sm">
          <div className="border rounded px-2 py-2 bg-white">
            แสดงต่อหน้า: 10
            <img src={up} alt="up" className="inline-block ml-2" />
          </div>
          <span className="ml-5">
            หน้า {page} จาก {totalPages || 1}
          </span>
          <div className="flex gap-2 ml-5">
            <Button
              className="border rounded  bg-white"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
            >
              <img src={left} alt="ก่อนหน้า" />
            </Button>

            <Button
              className="border rounded  bg-white"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages || totalPages === 0}
            >
              <img src={right} alt="ถัดไป" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDataView;
