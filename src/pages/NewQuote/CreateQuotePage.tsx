import AuthHeader from "@/components/Layout/AuthHeader";
import WelcomeBanner from "../Register/Quote/WelcomeBanner";
import { useSearchParams } from "react-router-dom";
import LongArrowDown from "@/components/icons/LongArrowDown";
import { useState, useEffect } from "react";
import QuoteSteps from "./components/QuoteSteps";
import QuoteForm from "./components/QuoteForm";
import OnboardingForm from "./components/OnboardingForm";
import { deleteFromLocalStorage } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Buttons";


export default function CreateQuotePage() {

  const navigate = useNavigate();

  const clearQuoteData = () => {
    deleteFromLocalStorage("quoteData");
    deleteFromLocalStorage("quoteEMSDetail");
  };

  const handleGoToDashboard = () => {
    clearQuoteData();

    navigate("/dashboard");

    // Force one reload after navigation
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };


  const [queryParams] = useSearchParams();

  const isNewUser = queryParams.get("add") === "new-user";
  const quoteId = queryParams.get("quoteId"); // Check if it's a quick quote
  const isQuickQuote = !!quoteId;

  const [activeStep, setActiveStep] = useState(1);

  const isOnboarding = isNewUser && activeStep === 1;

  const creatingQuote = !isNewUser;

  // Clear localStorage when opening the quote creation flow (unless it's a quick quote)
  useEffect(() => {
    if (!isQuickQuote) {
      deleteFromLocalStorage("quoteData");
      deleteFromLocalStorage("quoteEMSDetail");
    }
    // For quick quotes, the data is already stored in localStorage by QuoteTable
  }, [isQuickQuote]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <AuthHeader />
      <div className=" container m-auto px-9">
        {isNewUser && <WelcomeBanner />}
        <div>
          <div className="flex items-center gap-4 mx-auto bg-black mt-9 rounded-lg w-fit px-5 p-3 justify-center">
            <p className="text-[#F0F2F5] font-semibold">
              {isNewUser
                ? "Let's complete your signup process"
                : isQuickQuote
                  ? "Complete your Quick Quote - Review and Submit"
                  : "Let's create your Quote"}
            </p>
            <LongArrowDown />
          </div>
          {/* <div className="absolute top-9 right-[5rem]" onClick={() => { }}>
            <img src="/images/user-lang.png" />
          </div> */}

          <div className="absolute top-9 right-[5rem] flex items-center gap-4">
            <Button
              text="Skip for now"
              handleClick={handleGoToDashboard}
              background="bg-transparent"
              color="text-[#EB5017]"
              styles="border border-[#EB5017] hover:bg-[#EB5017] hover:text-white transition-colors"
            />

            <img src="/images/user-lang.png" />
          </div>


          <div className="flex mt-4">
            <QuoteSteps
              activeStepBgColor={"bg-[#EB5017]"}
              inactiveStepBgColor={"bg-[#D9D9D9]"}
              steps={3}
              activeStep={activeStep}
            />
            <div className="w-full flex flex-col items-center mt-10">
              {isOnboarding && <OnboardingForm />}
              {creatingQuote && (
                <QuoteForm handleStepChange={handleStepChange} activeStep={activeStep} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
