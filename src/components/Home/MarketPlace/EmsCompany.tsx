import BagIcon from "../../icons/BagIcon";
import Button from "../../ui/Buttons";

const EmsCompany = () => {
  return (
    <div>
      <div className="border border-[#344054] bg-[#000000] rounded-3xl p-2 md:p-[2rem]">
        <div className="bg-[#141718] border border-[#344054] p-7 rounded-tl-3xl rounded-3xl">
          <div className="md:flex items-center gap-3">
            <div className="bg-[#CBAD60] hidden rounded-full w-[48px] h-[48px] md:flex justify-center items-center">
              <BagIcon height="24px" width="24px" fill="#ffffff" />
            </div>
            <h5 className="text-[#F3F5F7] text-[24px] font-semibold">
              Marketplace for EMS Companies
            </h5>
          </div>
          <div className="flex gap-5 items-center mt-9  border-t border-[#344054] pt-9">
            <div className="flex items-center">
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
              Over 50+ top electronic manufacturer trust FabSpaceAI
            </p>
          </div>
        </div>
        <div className="bg-[#141718] border border-[#344054] p-7 mt-9 rounded-tl-3xl rounded-3xl">
          <div className="flex items-start gap-3">
            <div className="hidden md:flex rounded-full">
              <img src="/images/user-2.png" className="w-[42px] h-[42px]" />
            </div>
            <div className="w-[90%]">
              <h5 className="text-[#F3F5F7] text-[18px] font-semibold">
                I’m a manufacturer looking to work with expert design engineers
                & purchasing managers
              </h5>
            </div>
          </div>
          <div className="flex-col md:flex-row flex gap-5 items-center mt-9  border-t border-[#344054] pt-9">
            <p className="text-[#D0D5DD]">
              Use Fabby, our robust AI tool and top talents to manage your
              project and workflows.{" "}
            </p>
            <div className="flex items-center opacity-[0.3]">
              <Button
                text={"Post a Project"}
                type={"button"}
                background="bg-[#EB5017B0]"
                position={"center"}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#141718] border border-[#344054] p-7 mt-9 rounded-tl-3xl rounded-3xl">
          <div className="flex items-start gap-3">
            <div className="hidden md:flex rounded-full">
              <img src="/images/user-2.png" className="w-[42px] h-[42px]" />
            </div>
            <div className="w-[90%]">
              <h5 className="text-[#F3F5F7] text-[18px] font-semibold">
                I’m a contract manufacturing company looking to respond to a
                project{" "}
              </h5>
            </div>
          </div>
          <div className="flex-col md:flex-row flex gap-5 items-center mt-9  border-t border-[#344054] pt-9">
            <p className="text-[#D0D5DD]">
              Respond to project and utilize AI workflow to collaborate and
              manage customers interaction{" "}
            </p>
            <div className="flex items-center opacity-[0.3]">
              <Button
                text={"Respond to Project"}
                type={"button"}
                background="bg-[#EB5017B0]"
                position={"center"}
                styles="w-[180px] px-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmsCompany;
