import Button from "@/components/ui/Buttons";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { deleteFromLocalStorage } from "@/lib/utils";

interface CongratulationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Congratulation({ isOpen, onClose }: CongratulationProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const clearQuoteData = () => {
    // Clear all quote-related data from localStorage
    deleteFromLocalStorage("quoteData");
    deleteFromLocalStorage("quoteEMSDetail");
  };

  const handleGoToDashboard = () => {
    clearQuoteData();
    onClose();
    navigate("/dashboard");
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300"
        onClick={() => {
          clearQuoteData();
          onClose();
        }}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Success Icon */}
          <div className="flex justify-center pt-8 pb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-green-100 rounded-full p-3">
                <CheckCircle2 className="w-16 h-16 text-green-600" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Congratulations! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              You have successfully submitted your RFQ.
            </p>
            <p className="text-base text-gray-600 mb-6">
              Expect several competitive quotes from Contract Manufacturing (CM) and Electronic Manufacturing Service (EMS).
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                text="Go to Dashboard"
                handleClick={handleGoToDashboard}
                background="bg-[#EB5017]"
                styles="hover:bg-[#d44915] transition-colors"
              />
              <Button
                text="View RFQs"
                handleClick={() => {
                  clearQuoteData();
                  onClose();
                  navigate("/pm/rfq");
                }}
                background="bg-transparent"
                color="text-[#EB5017]"
                styles="border-2 border-[#EB5017] hover:bg-[#EB5017] hover:text-white transition-colors"
                className="px-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
