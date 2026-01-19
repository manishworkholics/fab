import ProjectIcon from "../../icons/ProjectIcon";
import ReactIcon from "../../icons/ReactIcon";

const ProjectDesign = () => {
  return (
    <div className="border border-[#344054] bg-[#000000] rounded-3xl p-2 md:p-[4rem]">
      <div className="bg-[#141718] border border-[#344054] p-7 rounded-tl-3xl rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="bg-[#606ACB] rounded-full w-[48px] h-[48px] flex justify-center items-center">
            <ReactIcon />
          </div>
          <h5 className="text-[#F3F5F7] text-[24px] font-semibold">
            Project PCB Design
          </h5>
        </div>
        <div className="flex gap-5 items-center mt-9  border-t border-[#344054] pt-9">
          <div className="hidden md:flex items-center">
            <img src="/images/user-2.png" className="w-[32px] h-[32px]" />
            <img
              src="/images/user-2.png"
              className="w-[32px] h-[32px] ml-[-19px]"
            />
            <img
              src="/images/user-2.png"
              className="w-[32px] h-[32px] ml-[-19px]"
            />
          </div>
          <p className="text-[#D0D5DD]">
            12 talents match your project requirements
          </p>
        </div>
      </div>
      <div className="bg-[#141718] border border-[#344054] p-7 rounded-tl-3xl rounded-3xl mt-9">
        <div className="flex items-center gap-3">
          <div className="bg-[#CBAD60] rounded-full w-[48px] h-[48px] flex justify-center items-center">
            <ProjectIcon />
          </div>
          <h5 className="text-[#F3F5F7] text-[24px] font-semibold">
          Project PCB Assembly
          </h5>
        </div>
        <div className="flex gap-5 items-center mt-9  border-t border-[#344054] pt-9">
          <div className="hidden md:flex items-center  ">
            <img src="/images/user-2.png" className="w-[32px] h-[32px]" />
            <img
              src="/images/user-2.png"
              className="w-[32px] h-[32px] ml-[-19px]"
            />
            <img
              src="/images/user-2.png"
              className="w-[32px] h-[32px] ml-[-19px]"
            />
          </div>
          <p className="text-[#D0D5DD]">
            12 talents match your project requirements
          </p>
        </div>
      </div>
      <div className="mt-9 p-3">
        <h3 className="text-[28px] text-[#FEFEFE]">
          Talent Acquisition Service
        </h3>
        <p className="text-[#6C7275] text-[16px] mt-2">
          Move your product ideas to production faster by connecting with
          certified and experienced talents with flexible schedules. 👍🏻
        </p>
      </div>
    </div>
  );
};

export default ProjectDesign;
