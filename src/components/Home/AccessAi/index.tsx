 
import AiAgent from "./AiAgent";
import ProjectDesign from "./ProjectDesign";

const AccessAi = () => {
  return (
    <div className="bg-[#0A090B] py-[9rem] relative">
      <div className="container m-auto text-center p-3 md:p-0">
        <h2 className="text-[48px] text-[#F0F2F5] lg:w-5/6 m-auto">
          Get Access to AI Features to Improve Collaboration and Talent
          Acquisition
        </h2>
        <p className="text-[18px] text-[#F0F2F5] mt-5">
          Powered with the most powerful LLM mode for electronic design and
          manufacturing.
        </p>
      </div>
      <div className="container m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-9 py-[5rem] relative z-50">
         <AiAgent/>
         <ProjectDesign/>
        </div>
      </div>
      <div className="absolute w-full bottom-0 ">
        <img src="/images/access-bg.svg" className="w-full" />
      </div>
    </div>
  );
};

export default AccessAi;
