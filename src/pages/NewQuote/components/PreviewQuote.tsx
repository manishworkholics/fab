import useQuote from "../hooks";
import useUpdateQuote from "../../Register/Quote/hooks/update_quote-hooks";
import { useFormik, Form, FormikProvider } from "formik";
import { 
  addToLocalStorage, 
  getFromLocalStorage, 
  // hasAllRequiredPropertiesStrict 
} from "@/lib/utils";
import toast from "react-hot-toast";
import { useState } from "react";
import { X, Mail, Phone, Plus, DollarSign } from "lucide-react";
import Button from "@/components/ui/Buttons";
import Congratulation from "./Congratulation";
import { PreviewQuoteAssignButton } from "./PreviewQuoteAssignButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormInput from "@/components/ui/FormInput";
import { QuoteType } from "@/__generated__/graphql";

export function PreviewQuote() {
  const { handleQuote, loading: createLoading  } = useQuote()
  const { handleCreateQuote: handleUpdateQuote, loading: updateLoading } = useUpdateQuote()
  const navigate = useNavigate()
  const [queryParams] = useSearchParams();
  const quoteId = queryParams.get("quoteId");
  const isQuickQuote = !!quoteId;

  console.log("PreviewQuote - isQuickQuote:", isQuickQuote, "quoteId:", quoteId);

  const getQuoteData = () =>  {
    try {
      const quoteData = getFromLocalStorage("quoteData")

      return quoteData
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return;
    }
  }

  const getQuoteEMSDetail = () => {
    try {
      const quoteEMSDetail = getFromLocalStorage("quoteEMSDetail")
      return quoteEMSDetail
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return;
    }
  }

  const getQuote = getQuoteData();
  const getEMS = getQuoteEMSDetail();

  const loading = isQuickQuote ? updateLoading : createLoading;

  const [selectedQuoteType, setSelectedQuoteType] = useState<string>(
    getQuote?.quoteType || "OPEN_QUOTE"
  );

  const [isAssignEMSModalOpen, setIsAssignEMSModalOpen] = useState(false);
  const [isCongratulationModalOpen, setIsCongratulationModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      hasNDA: getQuote?.hasNDA || false,
      quoteType: getQuote?.quoteType || "OPEN_QUOTE",
      budget: getQuote?.budget || 0,
    },
    onSubmit: async (values) => {
      try {
        addToLocalStorage("quoteData", 
          {
            hasNDA: values.hasNDA,
            quoteType: values.quoteType,
            budget: values.budget,
          },
          "merge"
        )

        const quoteData = getFromLocalStorage("quoteData");
        // const requiredProperties = hasAllRequiredPropertiesStrict(quoteData);

				// if (!requiredProperties) {
        //   toast.error("Please fill in all required fields before submitting. Assign EMS is required.");
        //   return;
        // }

        console.log("Submitting quote - isQuickQuote:", isQuickQuote, "quoteId:", quoteId);
        
        if (isQuickQuote && quoteId) {
          // Update existing quick quote - convert from QUICK_QUOTE to OPEN_QUOTE or FIXED_QUOTE
          console.log("Updating quick quote with ID:", quoteId);
          const result = await handleUpdateQuote({ 
            title: quoteData.title,
            description: quoteData.description,
            quoteMaterials: quoteData.quoteMaterials,
            turnTime: quoteData.turnTime,
            quoteFiles: quoteData.quoteFiles,
            quoteType: values.quoteType as QuoteType,
            budget: values.budget,
            assignedEMSId: quoteData.assignedEMSId || 0,
            quoteId: quoteId,
            hasNDA: values.hasNDA,
            quoteName: quoteData.quoteName,
            pcbBoards: quoteData.pcbBoards || 0,
          });
          
          console.log("Update result:", result);
          
          if (result) {
            toast.success("Quick quote updated successfully!");
            setIsCongratulationModalOpen(true);
          }
        } else {
          // Create new quote
          console.log("Creating new quote");
          await handleQuote({ ...quoteData });
          setIsCongratulationModalOpen(true);
        }
			} catch (error: unknown) {
				const errorMessage =
					error instanceof Error ? error?.message : 'Quote submission failed';
				toast.error(errorMessage);
			}
    },
  });

  const handleRemoveFile = (fileName: string) => {
    const updatedFiles = getQuote?.quoteFiles?.filter((file: string) => file !== fileName);
    if (updatedFiles) {
      addToLocalStorage("quoteData", { quoteFiles: updatedFiles }, "merge");
    }
  };

  return (
    <>
      <Congratulation 
        isOpen={isCongratulationModalOpen} 
        onClose={() => setIsCongratulationModalOpen(false)} 
      />
      
      <div className="flex flex-col w-full max-w-4xl mx-auto p-0 bg-white border border-solid border-[#D0D5DD]">
        <div className="text-center border border-solid border-[#D0D5DD] px-4 py-6">
          <h1 className="text-3xl font-semibold text-[#101928] mb-2">{getQuote?.quoteName ?? "PCB Assembly Project"}</h1>
        </div>

        <div className="space-y-2">
          <div className="border border-solid border-[#D0D5DD] px-4 py-2">
            <label className="block text-sm font-semibold text-[#101928] mb-2">
              Are you providing parts, boards or stencil?
            </label>
            <p className="flex gap-4 text-[#101928] text-sm font-medium">
              {getQuote?.quoteMaterials?.length > 0 ? "Yes" : "No"}
            </p>
          </div>

          <div className="border border-solid border-[#D0D5DD] px-4 py-2">
            <label className="block text-sm font-semibold mb-2 text-[#101928]">
              Desired Turn Time
            </label>
            <div className="flex gap-4 text-[#101928] text-sm font-medium">
              {getQuote?.turnTime?  "Yes" : "No"}
            </div>
          </div>

          <div className="border border-solid border-[#D0D5DD] px-4 py-2">
            <label className="block text-sm font-semibold mb-3 text-[#101928]">
              Board Quantity
            </label>
            <div className="flex gap-4 flex-wrap text-[#101928] text-sm font-medium">
              Yes
            </div>
          </div>

          <div className="border border-solid border-[#D0D5DD] px-4 py-2">
            <label className="block text-sm font-semibold text-[#101928]-700 mb-3">
              More Details
            </label>
            <div className="flex gap-4 flex-wrap text-[#101928] text-sm font-medium">
              {getQuote?.description}
            </div>
          </div>

          <div className="border border-solid border-[#D0D5DD] px-4 py-2">
            <label className="block text-sm font-semibold text-[#101928] mb-3">
              Attached Files
            </label>
            <div className="flex gap-2 flex-wrap text-[#101928] text-sm">
              {getQuote?.quoteFiles?.length > 0
                && getQuote?.quoteFiles?.map((file: string) => (
                  <div key={file} className="text-[#1671D9] px-2 py-3 rounded-lg text-sm flex items-center gap-2 border border-solid border-[#D0D5DD]">
                    {file}
                    <button
                      onClick={() => handleRemoveFile(file)}
                      className="hover:text-blue-800 text-md"
                    >
                      <X size={14} color="#101928" />
                    </button>
                  </div>
                ))
              }
              {getQuote?.quoteFiles?.length === 0 && "Nil"}
            </div>
          </div>

          <div className="border border-solid border-[#D0D5DD] px-4 py-2">
            <div className="flex justify-between">
              <label className="block text-sm font-semibold text-[#101928] mb-3">
                Assigned EMS
              </label>
              <PreviewQuoteAssignButton 
                isOpen={isAssignEMSModalOpen} 
                setIsOpen={setIsAssignEMSModalOpen}
                trigger={
                  <button 
                    onClick={() => setIsAssignEMSModalOpen(true)}
                    className="flex flex-col items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                }
              />
            </div>
            <div className="flex flex-col gap-4 flex-wrap text-[#101928] text-sm p-6">
              {getQuote?.assignedEMSId || getEMS ? (
                <div className="flex">
                  <div className="pr-2">
                    <img
                      src={getEMS?.profilePicture ?? "/images/user-img.png"}
                      alt="EMS Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="px-3 pt-2 rounded-lg">
                      <div className="text-[#3E3838] font-semibold text-xl">{`${getEMS?.firstName} ${getEMS?.lastName}`}</div>
                      <div className="text-lg font-medium text-[#3E3838]">{"Montreal, Canada - Protronics Inc."}</div>
                    </div>
                    <div className="flex flex-col p-4 rounded-lg border border-solid border-[#D0D5DD] gap-2">
                      <div className="flex gap-2">
                        <Mail size={16} color="#101928" />
                        <p className="text-base font-normal text-[#3E3838]">{`${getEMS?.email}`}</p>
                      </div>
                      <div className="flex gap-2">
                        <Phone size={16} color="#101928" />
                        <p className="text-base font-normal text-[#3E3838]">{`${getEMS?.phone}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <span className="text-[#101928]">No EMS assigned yet</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-4xl mx-auto py-10 px-0">
        <div className="space-y-2">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>

              <div className="p-4 rounded-lg flex gap-4">
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="hasNDA"
                      checked={formik.values.hasNDA}
                      onChange={(e) => {
                        formik.setFieldValue("hasNDA", e.target.checked);
                        addToLocalStorage("quoteData", { hasNDA: e.target.checked }, "merge")
                      }}
                      className="sr-only"
                    />
                    <div className={`w-11 h-6 rounded-full shadow-inner transition-colors duration-200 ease-in-out ${
                      formik.values.hasNDA ? 'bg-[#EB5017]' : 'bg-[#E4E7EC]'
                    }`}>
                      <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                        formik.values.hasNDA ? 'translate-x-6' : 'translate-x-1'
                      } mt-1`}></div>
                    </div>
                  </label>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col text-sm">
                    <h3 className="font-medium text-[#101928] mb-2">Non-Disclosure Agreement Required</h3>
                    <button className="text-[#101928] text-sm underline w-fit">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 w-full">
                <div className="space-y-3 flex">
                  {quoteTypeList.map((quoteType) => {
                    return (
                      <div key={quoteType.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start space-x-3">
                          <div className="flex items-center h-5">
                            <input
                              type="radio"
                              id={quoteType.id}
                              name="quoteType"
                              value={quoteType.type}
                              checked={selectedQuoteType === quoteType.type}
                              onChange={(e) => {
                                setSelectedQuoteType(e.target.value);
                                formik.setFieldValue("quoteType", e.target.value);
                                addToLocalStorage("quoteData", { quoteType: e.target.value }, "merge")
                              }}
                              className="w-4 h-4 text-[#EB5017] border-white focus:ring-[#EB5017] focus:ring-2"
                              style={{
                                accentColor: '#EB5017'
                              }}
                            />
                          </div>
                          <div className="flex-1">
                            <label htmlFor="standard-quote" className="text-base font-medium text-gray-900 cursor-pointer">
                              {quoteType.displayName}
                            </label>
                            <ul className="mt-2 text-sm text-gray-600 space-y-1">
                              {quoteType.list.map((list) => (
                                <li key={list}>• {list}</li>
                              ))}
                            </ul>
                            
                            {/* Budget input for FIXED_QUOTE */}
                            {quoteType.type === "FIXED_QUOTE" && selectedQuoteType === "FIXED_QUOTE" && (
                              <div className="mt-4">
                                <p className="text-[#101928] text-[12px] mb-2 font-semibold">NAME YOUR PRICE</p>
                                <div className="flex items-center border border-gray-300 rounded-md p-2">
                                  <DollarSign size={20} className="text-gray-500" />
                                  <FormInput
                                    type="number"
                                    name="budget"
                                    value={String(formik.values.budget)}
                                    handleChange={(e) => {
                                      formik.setFieldValue("budget", Number(e.target.value));
                                      addToLocalStorage("quoteData", { budget: Number(e.target.value) }, "merge");
                                    }}
                                    style="border-0 focus:ring-0"
                                    placeholder="Enter budget"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="mt-4 w-full flex justify-end gap-4">
                <Button 
                  text="Previous" 
                  type="button"
                  background="bg-transparent"
                  color="text-[#000]"
                  handleClick={() => navigate(-1)}
                />
                <Button 
                  text="Submit" 
                  type="submit" 
                  isLoading={loading} 
                />
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
}

const quoteTypeList = [
  {
    id: "1",
    type: "OPEN_QUOTE",
    displayName: "Open Quote",
    list: [
      "Allow service providers to bid for this project.",
      "Request quotes within hours or even minutes.",
      "Compare rates, timeframes and reviews.",
      "Pick your winning service provider at any time."
    ],
  },
  {
    id: "2",
    type: "FIXED_QUOTE",
    displayName: "Fixed Quote",
    list: [
      "Service providers won't be able to bid for projects.",
      "Request quotes within hours or even minutes.",
      "Pick your winning service provider at any time.",
    ],
  },
]
