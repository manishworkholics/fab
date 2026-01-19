import Button from "./ui/Buttons";
import { useNavigate } from 'react-router-dom';
import { deleteFromLocalStorage } from "@/lib/utils";


type SuccessProps = {
  description: string;
};
const Success = ({ description }: SuccessProps) => {
  const navigate = useNavigate();
  
  const handleGoToDashboard = () => {
    // Clear localStorage before navigating
    deleteFromLocalStorage("quoteData");
    deleteFromLocalStorage("quoteEMSDetail");
    navigate('/dashboard');
  };
  
  return (
    <div className="m-auto  h-[80vh] flex items-center justify-center px-9 text-center">
      <div className=" shadow-md rounded-lg md:w-[50%] border py-[5rem]">
        <h1 className="flex justify-center gap-5 items-center text-[36px] font-extrabold">
          Congratulations!!
          <img
            src="/images/party-popper.png"
            alt="nvidia logo"
            className="w-[78px] h-[58.42px]"
          />
        </h1>
        <p className="pt-5">You have successfully submitted your RFQ.</p>
        <p className="px-[8rem]">{description}</p>
        <Button
          text={"Go to Dashboard"}
          position={"center"}
          styles="mt-9"
          width="w-[15rem]"
          handleClick={handleGoToDashboard}
        />
      </div>
    </div>
  );
};

export default Success;
