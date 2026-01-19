type QuoteStepsProps = {
  activeStepBgColor: string;
  inactiveStepBgColor: string;
  steps: number;
  activeStep: number;
};
const QuoteSteps = ({ activeStepBgColor, inactiveStepBgColor, steps, activeStep }: QuoteStepsProps) => {
  const stepsArray = Array.from({ length: steps }, (_, index) => index + 1);

  console.log("activeStep", activeStep);

  return (
    <div>
      {stepsArray.map((step) => (
        <div className="md:flex flex-col items-center hidden" key={step}>
          <div className="relative flex flex-col items-center">
            <div
              className={`w-2 h-[4.5rem] rounded-full ${
                step === activeStep ? activeStepBgColor : inactiveStepBgColor
              }`}
            />
            <div className="w-px h-8 bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuoteSteps;
