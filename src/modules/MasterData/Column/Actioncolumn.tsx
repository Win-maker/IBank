import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import eye from "@/assets/basil_eye-solid.svg";
import edit from "@/assets/mage_edit-fill.svg";

const ActionsCell = ({ row }: { row: any }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate("/masterData/detail")}
        disabled={row.original.disabled}
        className={row.original.disabled ? "opacity-50 cursor-not-allowed" : ""}
      >
        <img src={eye} width={18} height={18} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate("/masterData/edit")}
        disabled={row.original.disabled}
        className={row.original.disabled ? "opacity-50 cursor-not-allowed" : ""}
      >
        <img src={edit} width={18} height={18} />
      </Button>
    </div>
  );
};

export default ActionsCell;
