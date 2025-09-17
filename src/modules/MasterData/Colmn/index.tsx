import { ColumnDef } from "@tanstack/react-table";
import vector from "@/assets/Vector.svg";
import greenvector from "@/assets/Vector (1).svg";

import green from "@/assets/Frame 476.svg";
import grey from "@/assets/Frame 476 (1).svg";

import ActionsCell from "./Actioncolumn";
export type Loan = {
  id: number;
  name: string;
  category: string;
  group: string;
  miniCAP: string;
  status: string;
  disabled?: boolean;
};

export const loans: Loan[] = [
  {
    id: 1,
    name: "สินเชื่อวงเงินหมุนเวียน",
    category: "สินเชื่อที่มีหลักประกันชำระ",
    group: "สินเชือธุรกิจ",
    miniCAP: vector,
    status: green,
  },
  {
    id: 2,
    name: "สินเชื่อเพื่อสร้างรายได้เสริม",
    category: "สินเชื่อที่มีหลักประกันชำระ",
    group: "สินเชือธุรกิจ",
    miniCAP: greenvector,
    status: green,
  },
  {
    id: 3,
    name: "สินเชื่อเพื่อการศึกษา",
    category: "สินเชื่อที่มีหลักประกันชำระ",
    group: "สินเชือธุรกิจ",
    miniCAP: greenvector,
    status: grey,
    disabled: true,
  },
  {
    id: 4,
    name: "สินเชื่อเพื่อการศึกษา",
    category: "สินเชื่อที่มีหลักประกันชำระ",
    group: "สินเชือธุรกิจ",
    miniCAP: vector,
    status: grey,
    disabled: true,
  },
];
export const columns: ColumnDef<Loan>[] = [
  {
    header: "ลำดับ",
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.index + 1}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: "ชื่อผลิตภัณฑ์",
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.getValue("name")}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: "หมวด",
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.getValue("category")}
      </span>
    ),
  },
  {
    accessorKey: "group",
    header: "กลุ่ม",
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.getValue("group")}
      </span>
    ),
  },
  {
    accessorKey: "miniCAP",
    header: "miniCAP",
    cell: ({ row }) => {
      const value = row.original.miniCAP;
      const disabledClass = row.original.disabled ? "opacity-50" : "";

      return (
        <div className={disabledClass}>
          {typeof value === "string" ? (
            <img src={value} alt="miniCAP" className="w-5 h-5" />
          ) : value ? (
            <span className="text-green-600">✔</span>
          ) : (
            <span className="text-gray-400">✖</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "สถานะรายการ",
    cell: ({ row }) => {
      const value = row.original.status;

      // if it's an image path (like green svg)
      if (typeof value === "string" && value.includes(".svg")) {
        return <img src={value} alt="status" className="w-23 h-9" />;
      }

      // fallback to text
      return <span>{value}</span>;
    },
  },

  {
    id: "actions",
    header: "รายละเอียด",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];
