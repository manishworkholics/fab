import Modal from "@/components/Modal";
import Button from "@/components/ui/Buttons";

type EmsModalProps = {
  isModalEMSOpen: boolean;
  handleCloseModal: () => void;
};

export default function EmsModal({ isModalEMSOpen, handleCloseModal }: EmsModalProps) {
  return (
    <Modal isOpen={isModalEMSOpen} onClose={() => handleCloseModal()}>
      <div className="p-[3rem]">
        <h4 className="text-[#101928] font-bold text-[24px]">You're Signing Up as an EMS</h4>
        <p className="text-gray-600 text-[20px] mt-2">
          By selecting this option, you’ll be able to respond to quotes submitted by Purchasing
          Managers on the Fabspace platform. This allows you to connect, negotiate, and collaborate
          with them on projects based on their requirements.
        </p>

        <div className="md:flex-row flex-col flex gap-5 mt-[4rem]">
          <Button
            text={"View Open RFQ"}
            position={"center"}
            styles="w-[198px]"
            handleClick={() => {}}
          />
          <Button
            text={"Go to Dashboard"}
            position={"center"}
            background="bg-transparent "
            styles=" border border-[#EB5017] w-[198px]"
            color="text-[#EB5017]"
            handleClick={() => {}}
          />
        </div>
      </div>
    </Modal>
  );
}
