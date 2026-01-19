
import AuthHeader from "../../../components/Layout/AuthHeader";
import Button from "../../../components/ui/Buttons";
import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import SubmitQuote from "./SubmitQuote";
import useCreateQuote from "./hooks/create_quote-hooks";
import useUsers from "./hooks/user-hooks";
import Modal from "../../../components/Modal";
import SelectManufacturer from "../../../components/SelectManufacturer";
import PreviewCard from "../../../components/Quote/Preview";
import FormInput from "../../../components/ui/FormInput";
import { UserRole, Ems } from "@/__generated__/graphql";
import CancelQuoteAction from "@/components/Layout/CancelQuoteAction";
import { deleteFromLocalStorage } from "@/lib/utils";

const Preview = () => {
  const [queryParams] = useSearchParams();
  const isNewUser = queryParams.get("add") === "new-user";

  useEffect(() => {
    deleteFromLocalStorage("quoteData");
    deleteFromLocalStorage("quoteEMSDetail");
  }, []);

  const [selectedQuote, setSelectedQuote] = useState<"OPEN_QUOTE" | "FIXED_QUOTE">("OPEN_QUOTE");
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);

  const [isPreview, setIsPreview] = useState(false);
  const [isNdaRequired, setIsNdaRequired] = useState(false);
  const [isEMSId, setIsEMSId] = useState<Ems | null>(null);
  const [selectedQuoteMaterial, setSelectedQuoteMaterial] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActionOpen, setIsActionOpen] = useState(false);

  const { user } = useUsers();
  const allUsers = user?.users;

  const emUsers = (allUsers || [])
    .filter((u) => u?.role === UserRole.Ems) as Ems[];

  const [formData] = useState({
    title: "",
    description: "",
    quoteMaterials: [],
    turnTime: 0,
    quoteType: selectedQuote,
    quoteFiles: [],
    budget: 0,
    assignedEMSId: undefined,
    hasNDA: false,
    quoteName: "",
  });

  const { handleCreateQuote, loading } = useCreateQuote();

  const formik = useFormik({
    initialValues: formData,
    onSubmit: async (values) => {
      try {
        const response = await handleCreateQuote({
          title: values.title,
          description: values.description,
          quoteMaterials: selectedQuoteMaterial,
          turnTime: Number(values.turnTime),

          quoteType: selectedQuote,
          quoteFiles: values.quoteFiles,
          budget: Number(values.budget),
          assignedEMSId: isEMSId?.id ? Number(isEMSId.id) : undefined,


          hasNDA: isNdaRequired,
          quoteName: values.quoteName,
          isDraft: false,
        });

        if (response) {
          deleteFromLocalStorage("quoteData");
          deleteFromLocalStorage("quoteEMSDetail");
          toast.success("Quote created successfully");
          navigate(isNewUser ? "/dashboard" : "/pm/rfq");
        } else {
          toast.error("Something went wrong while creating the quote.");
        }
      } catch (error: any) {
        toast.error(error.message || "Quote creation failed");
      }
    },
  });

  const handleQuoteSubmit = () => formik.handleSubmit();

  const handleQuotePreview = () => {
    if (!formik.values.quoteFiles.length) {
      toast.error("Please upload at least one file");
    } else {
      setIsPreview(true);
    }
  };

  const handleQuotePrevious = () => setIsPreview(false);

  const handleToggle = () => {
    setIsNdaRequired((prev) => {
      formik.setFieldValue("hasNDA", !prev);
      return !prev;
    });
  };

  const handleManufacture = (ems: Ems) => {
    setIsEMSId(ems);
    setIsModalOpen(false);
  };

  useEffect(() => {
    formik.setFieldValue("assignedEMSId", isEMSId?.id);
  }, [isEMSId]);

  const handleQuoteMaterial = (option: string) => {
    setSelectedQuoteMaterial((prev) => {
      const updated = prev.includes(option)
        ? prev.filter((i) => i !== option)
        : [...prev, option];
      formik.setFieldValue("quoteMaterials", updated);
      return updated;
    });
  };

  const handleShowUpload = () => {
    const { turnTime } = formik.values;
    if (!turnTime || selectedQuoteMaterial.length === 0) {
      toast.error("Please fill Turn Time and Quote Materials first");
      return;
    }
  };

  const handleQuoteCancel = () => setIsActionOpen((prev) => !prev);

  return (
    <>
      {!isPreview && (
        <SubmitQuote
          formData={formData}
          setFormData={() => { }}
          handleQuotePreview={handleQuotePreview}
          formik={formik}
          files={files}
          setFiles={setFiles}
          selectedQuote={selectedQuoteMaterial}
          setSelectedQuote={() => { }}
          handleQuoteMaterial={handleQuoteMaterial}
          handleShowUpload={handleShowUpload}
        />
      )}

      {isPreview && (
        <div>
          <AuthHeader />

          {true  && (
            <>
              <PreviewCard
                title={formik.values.title}
                quoteMaterials={formik.values.quoteMaterials.length ? "Yes" : "No"}
                turnTime={Number(formik.values.turnTime)}
                description={formik.values.description}
                quoteFiles={formik.values.quoteFiles}
                isEMSId={isEMSId}
                isNdaRequired={isNdaRequired}
                handleToggle={handleToggle}
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  {["OPEN_QUOTE", "FIXED_QUOTE"].map((type) => (
                    <div
                      key={type}
                      className={`md:w-1/2 p-4 border rounded-lg cursor-pointer ${selectedQuote === type ? "border-[#F56630] shadow-lg" : "border-gray-300"
                        }`}
                      onClick={() => setSelectedQuote(type as any)}
                    >
                      <h3 className="text-lg font-semibold">{type.replace("_", " ")}</h3>
                    </div>
                  ))}

                  {selectedQuote === "FIXED_QUOTE" && (
                    <FormInput
                      type="text"
                      name="budget"
                      value={String(formik.values.budget)}
                      handleChange={(e) => formik.setFieldValue("budget", e.target.value)}
                    />
                  )}
                </div>
              </PreviewCard>

              <div className="absolute flex gap-5 right-12 bottom-12">
                <Button text="Previous" handleClick={handleQuotePrevious} />
                <Button text="Cancel" handleClick={handleQuoteCancel} />
                <Button text="Submit" isLoading={loading} handleClick={handleQuoteSubmit} />
              </div>
            </>
          )}
        </div>
      )}

      <CancelQuoteAction
        isModalOpen={isActionOpen}
        handleQuoteCancel={handleQuoteCancel}
        setIsModalOpen={setIsActionOpen}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {emUsers.length ? (
          <SelectManufacturer handleManufacture={handleManufacture} emUsers={emUsers} />
        ) : (
          <div className="h-[40vh] flex justify-center items-center font-bold">
            <h2>No EMS users found</h2>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Preview;
