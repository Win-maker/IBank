import { cn } from "@/lib/utils";

import { useTranslation } from "react-i18next";

const TableHeaderCell = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
    const {t} = useTranslation()
  return (
    <div className={cn("flex items-center", className)}>
      <div className="w-fit text-sm font-normal bg-[#949AA8]/11 px-3 py-1 rounded-2xl">
       {t(children)}
      </div>
    </div>
  );
};


export default TableHeaderCell;
