import QuoteStepOne from "./QuoteStepOne";
import QuoteStepTwo from "./QuoteStepTwo";
import QuoteStepThree from "./QuoteStepThree";
import { Form, FormikProvider, useFormik } from "formik";
import toast from 'react-hot-toast';
import useQuote from "../hooks";
import { QuoteStateProps, initialState } from "../hooks";
import { useNavigate } from "react-router-dom";
import { addToLocalStorage, getFromLocalStorage } from "@/lib/utils";

type QuoteFormProps = {
  handleStepChange: (step: number) => void;
  activeStep: number;
};

export default function QuoteForm({ handleStepChange, activeStep }: QuoteFormProps) {
  const { handleQuote } = useQuote()
  const navigate = useNavigate();
  const quoteData = getFromLocalStorage("quoteData");
  const formik = useFormik({
    initialValues: { ...initialState, ...quoteData },
    onSubmit: async (values: QuoteStateProps) => {
      try {
        addToLocalStorage("quoteData", values, "merge")
        navigate('/ems/manage-quote')
        await handleQuote({ ...values });
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error?.message : 'Quote creation failed';
        toast.error(errorMessage);
      }
    },
  });

  return (
    <div className="max-w-[50%]">
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          {activeStep === 1 && <QuoteStepOne handleStepChange={handleStepChange} />}
          {activeStep === 2 && <QuoteStepTwo handleStepChange={handleStepChange} />}
          {activeStep === 3 && <QuoteStepThree handleStepChange={handleStepChange} />}
        </Form>
      </FormikProvider>
    </div>
  );
}
