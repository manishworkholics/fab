import { useFormik } from "formik";
import PhoneNumberInput from "./PhoneNumberInput";
import * as Yup from "yup";
import MagicwandIcon from "@/components/icons/MagicwandIcon";
import EmsModal from "./EmsModal";
import PurchasingManagerModal from "./PurchasingManagerModal";
import { useState } from "react";
import StepWrapper from "./StepWrapper";
import { useNavigate } from "react-router-dom";

export default function OnboardingForm() {
  const [modals, setModals] = useState({
    isEmsModalOpen: false,
    isPurchasingManagerModalOpen: false,
  });
  const navigate = useNavigate();

  console.log("modals", modals);

  const [activeSection, setActiveSection] = useState<"phoneNumber" | "quoteType">("phoneNumber");

  const handleEmsModalOpen = () => {
    setModals({ isEmsModalOpen: true, isPurchasingManagerModalOpen: false });
  };

  const handlePurchasingManagerModalOpen = () => {
    setModals({ isEmsModalOpen: false, isPurchasingManagerModalOpen: true });
  };

  const handleCloseModals = () => {
    // console.log("handleCloseModals");
    setModals({ isEmsModalOpen: false, isPurchasingManagerModalOpen: false });
    navigate("/new-quote?add=new-quote");
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setActiveSection("quoteType");
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
  });

  return (
    <div className="max-w-[50%]">
      <div className="flex flex-col gap-10">
        {activeSection === "phoneNumber" && (
          <StepWrapper active={activeSection === "phoneNumber"}>
            <form onSubmit={formik.handleSubmit}>
              <PhoneNumberInput
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={(value) => formik.setFieldValue("phoneNumber", value)}
                onBlur={() => formik.handleBlur({ target: { name: "phoneNumber" } })}
                error={formik.errors.phoneNumber}
              />
            </form>
          </StepWrapper>
        )}
        <StepWrapper active={activeSection === "quoteType"}>
          <div>
            <label>What brings you here?</label>
            <div className="flex md:flex-row flex-col gap-4 items-center">
              <button
                onClick={handlePurchasingManagerModalOpen}
                className={`mt-2 px-4 py-2 border items-center gap-2 flex rounded-md  `}
              >
                <MagicwandIcon /> I want to create a quote
              </button>
              <button
                onClick={handleEmsModalOpen}
                className={`mt-2 px-4 py-2 border items-center gap-2 flex rounded-md  `}
              >
                <MagicwandIcon /> I want to respond to quotes
              </button>
            </div>
            <div className="flex justify-start mt-8">
              <button
                className="text-sm underline cursor-pointer hover:no-underline text-blue-400"
                onClick={() => setActiveSection("phoneNumber")}
              >
                Edit Phone Number
              </button>
            </div>
          </div>
        </StepWrapper>
      </div>
      <EmsModal isModalEMSOpen={modals.isEmsModalOpen} handleCloseModal={handleCloseModals} />
      <PurchasingManagerModal
        isModalOpen={modals.isPurchasingManagerModalOpen}
        handleCloseModal={handleCloseModals}
      />
    </div>
  );
}
