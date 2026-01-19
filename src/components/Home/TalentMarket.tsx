import Button from "../ui/Buttons";
import { useNavigate } from "react-router-dom";

const TalentMarket = () => {
  const navigate = useNavigate();

  return (
    <div className="container m-auto text-center md:mt-[5rem] relative">
      <div className="lg:w-[68%] w-[90%]  m-auto">
        <div>
          <span className="border border-[#711E00] rounded-full py-2 px-9">
            Talent Marketplace
          </span>
        </div>
        <h2 className="text-[28px] text-[#3E3838] font-bold leading-none lg:text-[48px] my-9">
          Connecting Technicians & Engineers to Manufacturers
        </h2>
        <p className="text-[#3E3838] md:text-[24px] mb-9">
          Leverage AI to enable better talent acquisition. You can post shift
          and save time in acquiring talents. Talents get the flexibility to
          choose their schedule.
        </p>
        <Button 
          text={"Get Started"} 
          type={"button"} 
          position={"center"} 
          styles="w-[198px]" 
          handleClick={() => navigate("/talent")}
        />
      </div>
      <div className="relative">
        <img src="/images/talent.png" className=" relative top-0" />
      </div>
    </div>
  );
};

export default TalentMarket;
