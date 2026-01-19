import Button from "../ui/Buttons";
import { useNavigate } from "react-router-dom";

const WorkFlow = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#C6DDF7] py-9"
      style={{
        background: `linear-gradient(
          to right,
          #C6DDF7 40%,  
          #FF6250 65%, 
          #D2E7FF 100%  
        )`,
      }}>
      <div className="container m-auto">
        <div className="bg-[#28324424] md:p-9 p-3  rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 bg-[#ffffff] rounded-lg">
            <div className="bg-[#000000] p-9 rounded-lg">
              <div className="border rounded-t-lg border-[#343839]">
                <div className="bg-[#141718] rounded-t-lg flex items-center gap-2 py-8 px-2">
                  <div className="bg-[#DA7164] w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-[#EBC063] w-[16px] h-[16px] rounded-full"></div>
                  <div className="bg-[#3FDD78] w-[16px] h-[16px] rounded-full"></div>
                </div>
                <div className="md:flex items-center gap-3  py-8 border-t border-[#343839] px-2 md:px-9">
                  <img src="/images/user-2.png" className="w-[48px] h-[48px]" />
                  <p className="text-[#FFFFFF]">
                    Can you setup the automation flow for the failure analysis
                    of a PCB?
                  </p>
                </div>
              </div>
              <div className="md:flex items-center gap-4 py-8   bg-[#141718] px-2 md:px-9">
                <img src="/images/teddy.png" className="w-[48px] h-[48px]" />
                <p className="text-[24px] text-[#FFFFFF]">Sure! Here you go!</p>
              </div>
              <img src="/images/screen.png" />
            </div>
            <div className=" p-9 rounded-tr-lg rounded-br-lg flex items-center justify-center flex-col">
              <div>
                <span className="border border-[#711E00] rounded-full py-2 px-9">
                  Fabspace Assistant
                </span>
                <div>
                  <h2 className="text-[48px] font-semibold py-9 text-[#3E3838] leading-none">
                    Automate Workflows Anytime
                  </h2>
                  <p
                    className="mb-9 text-[24px] text-[#3E3838]">
                   Whether you are a new Design Engineers, or industry expert post questions or share your experts with the community of electronics manufacturing.
                  </p>
                  <Button
                    text={"Get Started"}
                    // type={"button"}
                    position={"center"}
                    styles="w-[198px]"
                    handleClick={() => navigate("/login")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
