import Modal from "@/components/Modal";
import Button from "@/components/ui/Buttons";
import { useNavigate } from "react-router-dom";

type PurchasingManagerModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
};

export default function PurchasingManagerModal({ isModalOpen, handleCloseModal }: PurchasingManagerModalProps) {
  const navigate = useNavigate();
  return (
    <Modal isOpen={isModalOpen} onClose={() => handleCloseModal()}>
      <div className="md:p-[3rem] flex flex-col items-center justify-center text-center">
        <h4 className="text-[#101928] font-bold text-2xl">
          You're Signing Up as a Purchasing Manager
        </h4>
        <p className="text-gray-600 text-xl mt-2">
          By selecting this option, you'll receive responses to quotes you create on the Fabspace
          platform from EMS providers. This enables you to hire and collaborate with your chosen EMS
          provider for all your submitted quotes and projects.
        </p>
        <div className="md:flex-row flex-col flex gap-5 mt-[4rem]">
          <Button
            text={"Create Quote"}
            type={"button"}
            position={"center"}
            styles="w-[198px]"
            handleClick={() => navigate("/pm/new-quote")}
            isLoading={false}
          />
          <Button
            text={"Go to Dashboard"}
            position={"center"}
            background="bg-transparent"
            styles=" border border-[#EB5017] w-[198px]"
            color="text-[#EB5017]"
            handleClick={() => navigate("/dashboard")}
          />
        </div>
      </div>
    </Modal>
  );
}
