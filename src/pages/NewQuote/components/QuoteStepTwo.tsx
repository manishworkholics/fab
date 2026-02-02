import CheckboxDropdown from "@/components/CheckboxDropdown";
import DropdownMenu from "@/components/Dropdown";
import Button from "@/components/ui/Buttons";
import FormInput from "@/components/ui/FormInput";
import { quoteMaterialsData, turnTimeData } from "@/utils/constant";
import { useFormikContext } from "formik";
import { addToLocalStorage, getFromLocalStorage } from "@/lib/utils";

type QuoteStepTwoProps = {
  handleStepChange: (step: number) => void;
};

export default function QuoteStepTwo({ handleStepChange }: QuoteStepTwoProps) {
  const formik = useFormikContext<{
    quoteMaterials: string[];
    turnTime: number;
    boards: number;
  }>();

  const handleTurnTimeAction = (e: string) => {
    const selectedValue = e.toLowerCase().trim();
    if (selectedValue.includes("3 days")) {
      formik.setFieldValue("turnTime", 3);
    } else if (selectedValue.includes("5 days")) {
      formik.setFieldValue("turnTime", 5);
    } else {
      formik.setFieldValue("turnTime", 10);
    }
  };

  const handleQuoteMaterial = (option: string) => {
    if (formik.values.quoteMaterials.includes(option)) {
      formik.setFieldValue("quoteMaterials", formik.values.quoteMaterials.filter((item) => item !== option));
    } else {
      formik.setFieldValue("quoteMaterials", [...formik.values.quoteMaterials, option]);
    }
  };

  const getTurnTimeDisplay = () => {
    const turnTime = formik.values.turnTime;
    if (turnTime === 3) return "3 Days";
    if (turnTime === 5) return "5 Days";
    if (turnTime === 10) return "10 Days";
    return "Select";
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <label className="text-[14px]">Are you providing parts, boards or stencil?</label>
        <div className=" relative z-9 rounded-[6px] py-2 mt-5">
          <CheckboxDropdown
            eventStatusData={quoteMaterialsData}
            selectedItems={formik.values.quoteMaterials}
            updateHandler={handleQuoteMaterial}
          />
        </div>
      </div>
      <div className="w-full mt-5">
        <label className="text-[14px]">What is your desired turn time?</label>
        <div className="border bg-[#f5f5f5] rounded-[6px] py-2 mt-5">
          <DropdownMenu
            data={turnTimeData}
            selectedDate={getTurnTimeDisplay()}
            changeDropdownWidth
            dropdownAction={handleTurnTimeAction}
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <FormInput
          label="Board quantity"
          placeholder="Enter number of PCB Boards"
          name="boards"
          value={formik.values?.boards?.toString() || ""}
          handleChange={(e) => formik.setFieldValue("boards", e.target.value)}
          error={""}
          divWidth="min-w-[500px]"
        />
      </div>
      <div className="my-4 w-full flex justify-end gap-4">
        <Button text="Previous" handleClick={() => handleStepChange(1)} />
        <Button
          text="Next"
          handleClick={() => {
            addToLocalStorage(
              "quoteData",
              {
                quoteMaterials: formik.values.quoteMaterials,
                turnTime: formik.values.turnTime,
                pcbBoards: Number(formik.values.boards),
                numberOfBoards: Number(formik.values.boards)


              },
              "merge"
            )

            const quoteData = getFromLocalStorage("quoteData");
            if (quoteData && quoteData.quoteMaterials && quoteData.turnTime) {
              handleStepChange(3);
            }
          }}
        />
      </div>
    </div>
  );
}
