import Button from "@/components/ui/Buttons";

const Training = () => {
  return (
    <div className="container mx-auto px-5 rounded-md">
      <div className="flex md:flex-row flex-col items-center gap-9">
        <div>
          <h2 className="text-[48px] font-semibold mb-2">FabSpace Training</h2>
          <p className="mb-9 text-[18px] md:text-[24px] text-justify">
            Get trained and certified on IPC and other electronics coursing while utilizing an Coach
            Agent that provides real time practice and feedback on your journey to certification
          </p>
          <Button text={"Get a Coach Agent"} width="w-[186px] px-5"/>
        </div>
        <div>
          <img src="/images/training.png" />
        </div>
      </div>
    </div>
  );
};

export default Training;
