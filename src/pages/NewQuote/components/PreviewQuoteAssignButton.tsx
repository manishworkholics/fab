import { useEffect, Dispatch, SetStateAction, ReactNode } from "react";
import AssignEMSModal from "./AssignEMSModal";
import useEMSUsers from "../hooks/emsUsers";
import { Ems } from "@/__generated__/graphql";
import { addToLocalStorage } from "@/lib/utils";

export function PreviewQuoteAssignButton({ 
  isOpen, 
  setIsOpen, 
  trigger 
}: {
  isOpen: boolean, 
  setIsOpen: Dispatch<SetStateAction<boolean>>, 
  trigger: ReactNode;
}) {
  const { emsUsers } = useEMSUsers();

  const handleManufacture = (id: Ems) => {
    addToLocalStorage("quoteEMSDetail", id, "merge")
    addToLocalStorage(
      "quoteData", 
      { assignedEMSId: Number(id.id), budget: 0 },
      "merge"
    )
  };

  useEffect(() => {
    console.log("isOpen state changed to:", isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpen(false); 
  }

  return (
    <div>
      {trigger}
      <AssignEMSModal
        emsUsers={emsUsers as Ems[]}
        handleManufacture={handleManufacture}
        handleCloseModal={handleCloseModal}
        isModalAssignEMSOpen={isOpen}
      />
    </div>
  );
}
