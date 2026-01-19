import { FormikProps } from "formik/dist/types";
import DropdownMenu from "../../../components/Dropdown";
import { quoteMaterialsData, turnTimeData } from "../../../utils/constant";
import CheckboxDropdown from "@/components/CheckboxDropdown";
 
type CreateQuoteProps = {
  setUserQuote: any;
  setFormData: any;
  setMaterials: any;
  formData: any;
  setSelectedQuote:any
  selectedQuote:any
  formik: FormikProps<FormData>;
  handleQuoteMaterial:any;
   handleTurnTimeAction: (event: string) => void;
};

const CreateQuote = ({
  setUserQuote, 
  handleTurnTimeAction,
   selectedQuote,
   handleQuoteMaterial
}: CreateQuoteProps) => {

  return (
    <div>
      {/* Right Step Content */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-start space-x-3 mt-3">
          <img
            src="/images/user-illustration.png"
            className="w-8 h-8 rounded-full"
            alt="User"
          />
        </div>
        <div className="w-full">
          <form onSubmit={(e) => e.preventDefault()} onKeyDown={setUserQuote}>
            <div className="w-full">
              <label className="text-[14px]">
                Are you providing parts, boards or stencil?
              </label>
              {/* <div className="border bg-[#f5f5f5] rounded-[6px] w-full md:w-[50%] py-2 mt-5">
                <DropdownMenu
                  data={respondData}
                  selectedDate={"Select"}
                  changeDropdownWidth
                  dropdownAction={handleDropdownAction}
                /> </div> */}

              <div className=" relative z-9 rounded-[6px]  md:w-[50%]  py-2 mt-5">
                <CheckboxDropdown
                  eventStatusData={quoteMaterialsData}
                  selectedItems={selectedQuote}
                  updateHandler={handleQuoteMaterial}
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <label className="text-[14px]">
                What is your desired turn time?
              </label>
              <div className="border bg-[#f5f5f5] rounded-[6px] w-full md:w-[50%] py-2 mt-5">
                <DropdownMenu
                  data={turnTimeData}
                  selectedDate={"Select"}
                  changeDropdownWidth
                  dropdownAction={handleTurnTimeAction}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuote;
