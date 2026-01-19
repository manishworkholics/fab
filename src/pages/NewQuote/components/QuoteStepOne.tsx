import DropdownMenu from "@/components/Dropdown";
import Button from "@/components/ui/Buttons";
import FormInput from "@/components/ui/FormInput";
import { addToLocalStorage, getFromLocalStorage } from "@/lib/utils";
import { quotetypeData } from "@/utils/constant";
import { useFormikContext } from "formik";
type QuoteStepOneProps = {
  handleStepChange: (step: number) => void;
};

export default function QuoteStepOne({ handleStepChange }: QuoteStepOneProps) {
  const formik = useFormikContext<{
    title: string;
    quoteName: string;
    description: string;
  }>();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <label>What type of project are you trying to build?</label>
        <div className="border bg-[#f5f5f5] rounded-[6px] w-full py-2 mt-5  ">
          <DropdownMenu
            data={quotetypeData}
            selectedDate={formik.values.title || "Select Project"}
            handleClick={() => {
              console.log("handleClick");
            }}
            changeDropdownWidth
            dropdownAction={(e) => {
              formik.setFieldValue("title", e);
            }}
            width="min-w-[500px]"
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <FormInput
          label="Project Name"
          placeholder="Enter project name"
          name="quoteName"
          value={formik.values.quoteName}
          handleChange={(e) => {
            formik.setFieldValue("quoteName", e.target.value);
          }}
          error={formik?.errors?.quoteName}
          divWidth="min-w-[500px]"
        />
      </div>
      <div className="mt-4 w-full">
        <FormInput
          label="Project Description"
          textarea
          placeholder="Enter project description"
          name="description"
          value={formik.values.description}
          handleChange={(e) => {
            formik.setFieldValue("description", e.target.value);
          }}
          error={formik?.errors?.description}
          divWidth="min-w-[500px]"
        />
      </div>
      <div className="my-4 w-full flex justify-end">
        <Button 
          text="Next" 
          handleClick={() => {
            addToLocalStorage(
              "quoteData", 
              {
                title: formik.values.title,
                quoteName: formik.values.quoteName,
                description: formik.values.description
              },
              "merge"
            )

            const quoteData = getFromLocalStorage("quoteData");
            if (quoteData && quoteData.title && quoteData.quoteName && quoteData.description) {
              handleStepChange(2);
            }
          }} 
        />
      </div>
    </div>
  );
}
