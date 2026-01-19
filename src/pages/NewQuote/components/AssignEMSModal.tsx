import Modal from "@/components/Modal";
import SelectManufacturer from '@/components/SelectManufacturer';
import { Ems } from '@/__generated__/graphql';
import { useState } from "react";

type EmsModalProps = {
  isModalAssignEMSOpen: boolean;
  handleCloseModal: () => void;
};

type SelectManufacturerProps = {
  handleManufacture: (user: Ems) => void;
  emsUsers: Ems[];
};

export default function AssignEMSModal({ 
  isModalAssignEMSOpen, 
  handleCloseModal,
  emsUsers,
  handleManufacture 
}: EmsModalProps & SelectManufacturerProps) {
  const [loading, setLoading] = useState<boolean>(false)
  
  return (
    <Modal isOpen={isModalAssignEMSOpen} onClose={() => handleCloseModal()}>
      <div className="space-y-4 max-h-96">
        <SelectManufacturer 
          emUsers={emsUsers} 
          handleManufacture={handleManufacture} 
          handleCloseModal={() => handleCloseModal()}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </Modal>
  );
}
