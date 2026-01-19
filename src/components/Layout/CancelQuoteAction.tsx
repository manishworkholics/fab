import Modal from "../Modal";
import Button from "../ui/Buttons";
import { useNavigate } from "react-router-dom";
interface CancelQuoteActionProps {
  isModalOpen: boolean;
  handleQuoteCancel: () => void;
  setIsModalOpen: (value: boolean) => void;
}
const CancelQuoteAction = ({
  isModalOpen,
  handleQuoteCancel,
  setIsModalOpen,
}: CancelQuoteActionProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h4 className="text-[#101928] text-center font-semibold text-[20px] pt-9 pb-9">
          Select an Action
        </h4>
        <div className="md:flex-row flex-col justify-center flex gap-5 mb-[4rem]">
          <Button
            text={"Continue"}
            type={"submit"}
            position={"center"}
            styles="w-[198px]"
            handleClick={handleQuoteCancel}
          />
          <Button
            text={"Go to Dashboard"}
            position={"center"}
            background="bg-transparent"
            styles=" border border-[#CC400C] w-[198px]"
            color="text-[#CC400C]"
            handleClick={() => {
              navigate("/dashboard");
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CancelQuoteAction;
