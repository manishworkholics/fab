import WaitlistModal from "@/pages/Dasboard/WaitlistModal";

const SubFooter = () => {
  return (
    <div>
      <div className="text-center py-[4rem] md:w-4/6 m-auto">
        <p className="text-[40px] sm:text-[56px] text-[#3E3838] leading-none">
          Turn Your PCB Workflows into Autonomous Processes
        </p>
          <p className="mt-3">
            Deploy intelligent agents across sourcing, quoting, prototyping, and technician
            scheduling. FabSpace AI frees your team from repetitive tasks—so you can move faster and
            scale smarter.
          </p>
        <div className="mt-9">
          <WaitlistModal text="Get Early Access + Demo" width="w-[235px] px-5" />
        </div>{" "}
      </div>
    </div>
  );
};

export default SubFooter;
