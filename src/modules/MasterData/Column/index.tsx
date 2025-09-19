import { ColumnDef } from "@tanstack/react-table";
import vector from "@/assets/Vector.svg";
import greenvector from "@/assets/Vector (1).svg";

import green from "@/assets/Frame 476.svg";
import grey from "@/assets/Frame 476 (1).svg";

import ActionsCell from "./Actioncolumn";
import TableHeaderCell from "@/common/TableHeaderCell";
import { t } from "i18next";

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
    id: "row-number",
    header: () => <TableHeaderCell className="py-2">{t("masterDataColumn.no")}</TableHeaderCell>,
    cell: ({ row }) => <div className="font-medium">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => <TableHeaderCell>{t("masterDataColumn.name")}</TableHeaderCell>,
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.getValue("name")}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: () => <TableHeaderCell>{t("masterDataColumn.category")}</TableHeaderCell>,
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.getValue("category")}
      </span>
    ),
  },
  {
    accessorKey: "group",
    header: () => <TableHeaderCell>{t("masterDataColumn.group")}</TableHeaderCell>,
    cell: ({ row }) => (
      <span className={row.original.disabled ? "opacity-50" : ""}>
        {row.getValue("group")}
      </span>
    ),
  },
  {
    accessorKey: "miniCAP",
    header: () => <TableHeaderCell>miniCAP</TableHeaderCell>,
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
    header: () => <TableHeaderCell>{t("masterDataColumn.state")}</TableHeaderCell>,
    cell: ({ row }) => {
      const value = row.original.status;
      if (typeof value === "string" && value.includes(".svg")) {
        return <img src={value} alt="status" className="w-23 h-9" />;
      }
      return <span>{value}</span>;
    },
  },
  {
    id: "actions",
    header: () => <TableHeaderCell>{t("masterDataColumn.action")}</TableHeaderCell>,
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];

