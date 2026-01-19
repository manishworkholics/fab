import WaitlistModal from "../../../pages/Dasboard/WaitlistModal";
// import Button from "../../ui/Buttons";
import EmsCompany from "./EmsCompany";
// import { useNavigate } from "react-router-dom";

const MarketPlace = () => {
  // const navigate = useNavigate();

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-9 pb-[5rem] items-center relative z-50">
        <div className="bg-[#dedfe218] p-2 md:p-9 shadow py-[5rem] text-center md:text-left">
          <span className="border border-[#711E00] rounded-full py-2 px-9">
            EMS Marketplace
          </span>
          <h2 className="my-9 text-[26px] md:leading-none text-[#3E3838] md:text-[48px] font-bold">
            Find Trusted Buyers and Manufacturers for Your EMS Projects with
            FabSpaceAI
          </h2>
          <p className="mb-9 text-[18px] md:text-[24px] text-center md:text-left">
            Join 50+ top electronic manufacturers who trust FabSpaceAI to
            streamline workflows, respond faster to projects, and manage
            customer interactions seamlessly.
          </p>
          <WaitlistModal text="Get Early Access + Demo"  width="w-[235px] px-5"/> 
          {/* <Button 
            text={"Get Started"} 
            type={"button"} 
            position={"center"} 
            handleClick={() => navigate("/login")}
          /> */}
        </div>
        <EmsCompany/>
      </div>
    </div>
  );
};

export default MarketPlace;
