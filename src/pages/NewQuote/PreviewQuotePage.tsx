import AuthHeader from "@/components/Layout/AuthHeader";
import { MoveDown } from "lucide-react";
import Button from "@/components/ui/Buttons";
import { PreviewQuoteAssignButton } from "./components/PreviewQuoteAssignButton";
import { PreviewQuote } from "./components/PreviewQuote";
import { useState } from "react";

export default function PreviewQuotePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AuthHeader />
      <div className=" container m-auto px-9">
        <div>
          <div className="absolute top-9 right-[5rem]" onClick={() => {}}>
            <img src="/images/user-lang.png" />
          </div>
          <div className="flex w-full max-w-4xl mx-auto p-6 gap-6">
            <div className="flex items-start gap-1 mt-2 rounded-lg w-fit px-5 p-3 justify-center">
              <p className="text-[#000000] font-semibold text-2xl">
                {"Preview"}
              </p>
              <span className="self-center">
                <MoveDown size={16} />
              </span>
            </div>
            <div className="flex gap-6 justify-start item-center">
              <div className="mt-4 flex justify-start item-end">
                <PreviewQuoteAssignButton
                  isOpen={isOpen} 
                  setIsOpen={setIsOpen}
                  trigger={
                    <Button 
                      text="Assign EMS"
                      onClick={() => setIsOpen(true)} 
                    />
                  } 
                />
              </div>
              <div className="mt-4 flex justify-start">
                <Button 
                  text="Save to draft" 
                  onClick={() => {
                    // Save current quote data as draft and navigate to dashboard
                    window.location.href = "/dashboard";
                  }}
                  className="bg-white border border-[#EB5017] text-[#EB5017] hover:bg-[#EB5017] hover:text-white transition-colors duration-200"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-full flex flex-col items-center mt-4">
              {<PreviewQuote />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
