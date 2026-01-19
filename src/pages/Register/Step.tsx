type StepProps = {
  bgColorOne: string;
  bgColorTwo: string;
  bgColorThree: string;
};
const Step = ({ bgColorOne, bgColorTwo, bgColorThree }: StepProps) => {
  return (
    <div>
      <div className="md:flex flex-col items-center hidden">
        <div className="relative flex flex-col items-center">
          <div className={`w-2 h-[4.5rem] rounded-full ${bgColorOne}`} />
          <div className="w-px h-8 bg-gray-200" />
        </div>
      </div>
      <div className="md:flex flex-col items-center hidden">
        <div className="relative flex flex-col items-center">
          <div className={`w-2 h-[4.5rem] rounded-full ${bgColorTwo}`} />
          <div className="w-px h-8 bg-gray-200" />
        </div>
      </div>
      <div className="md:flex flex-col items-center hidden">
        <div className="relative flex flex-col items-center">
          <div className={`w-2 h-[4.5rem] rounded-full ${bgColorThree}`} />
        </div>
      </div>
    </div>
  );
};

export default Step;
