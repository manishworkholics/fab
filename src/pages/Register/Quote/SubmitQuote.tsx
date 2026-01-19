// import { useState } from "react";
// import AuthHeader from "../../../components/Layout/AuthHeader";
// import Step from "../Step";
// import PhoneNumber from "./PhoneNumber";
// import CreateQuote from "./CreateQuote";
// import Upload from "./Upload";
// import LongArrowDown from "../../../components/icons/LongArrowDown";
// import Button from "../../../components/ui/Buttons";
// import WelcomeBanner from "./WelcomeBanner";
// import {  useSearchParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { XIcon } from "lucide-react";
//  import CancelQuoteAction from "@/components/Layout/CancelQuoteAction";
// interface SubmitQuoteProps {
//   formData: {
//     turnTime: string;
//     title?: string;
//     [key: string]: any;
//   };
//   formik: any;
//   setIsQuoteMaterials?: React.Dispatch<React.SetStateAction<boolean>>;
//   setFormData: React.Dispatch<React.SetStateAction<any>>;
//   handleQuotePreview: () => void;
//   files: File[];
//   setFiles: React.Dispatch<React.SetStateAction<File[]>>;
//   selectedQuote: any;
//   setSelectedQuote: any;
//   handleQuoteMaterial: any;
//   handleShowUpload: any;
// }

// const SubmitQuote = ({
//   formData,
//   formik,
//   setIsQuoteMaterials,
//   setFormData,
//   handleQuotePreview,
//   files,
//   selectedQuote,
//   setSelectedQuote,
//   handleQuoteMaterial,
//   setFiles,
//   handleShowUpload,
// }: SubmitQuoteProps) => {
//   // const navigate = useNavigate();
//   const [queryParams] = useSearchParams();

//   const isNewUser = queryParams.get("add") === "new-user";
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [showPhone, setShowPhone] = useState(true);
//   const [showCreateQuote, setShowCreateQuote] = useState(true);
//   const [showUpload, setShowUpload] = useState(true);

//   const handleUploadChange = async (data: { files: File[] }) => {
//     const fileNames = data.files.map((file) => file.name);
//     formik.setFieldValue("quoteFiles", fileNames);
//   };

//   const handleCreateQuoteComplete = (e: any) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       setShowCreateQuote(false);
//       setShowUpload(true);
//     } else {
//       toast.error("All fields required");
//     }
//   };

//   const handleTitleClick = (e: string) => {
//     setShowPhone(false);
//     setShowCreateQuote(true);
//     setFormData((prev: any) => ({ ...prev, title: e }));
//     formik.setFieldValue("title", e);
//   };
//   const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     formik.setFieldValue("description", e.target.value);
//   };
//   const handleProductName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     formik.setFieldValue("quoteName", e.target.value);
//   };

//   const handleTurnTimeAction = (e: string) => {
//     if (e) {
//       setShowCreateQuote(false);
//       setShowUpload(true);
//     }
//     if (e === "3 day") {
//       formik.setFieldValue("turnTime", 3);
//     } else if (e === "5 days") {
//       formik.setFieldValue("turnTime", 5);
//     } else {
//       formik.setFieldValue("turnTime", 10);
//     }
//   };

//   const handlePreviousQuote = () => {
//     setShowCreateQuote(true);
//     setShowUpload(false);
//   };
//   const showProjectType = () => {
//     setShowPhone(true);
//   };
//   const handleQuoteCancel = () => {
//     setIsModalOpen((prev) => !prev);
//   };
//   return (
//     <>
//       <AuthHeader />
//       <div className=" container m-auto px-9">
//         {isNewUser && <WelcomeBanner />}
//         <div>
//           <div className="flex items-center gap-4 mx-auto bg-[#000000] mt-9 rounded-lg w-fit px-5 p-3 justify-center">
//             <p className="text-[#F0F2F5] font-semibold">
//               {isNewUser ? "Let’s complete your signup process" : "Let’s create your Quote"}
//             </p>
//             <LongArrowDown />
//           </div>
//           <div className="absolute top-9 right-[5rem]" onClick={handleQuoteCancel}>
//             <XIcon />
//           </div>
//           <div className="flex md:gap-[20rem] mt-4 md:mt-[9rem]">
//             <Step
//               bgColorOne={showPhone ? "bg-[#EB5017]" : "bg-[#D9D9D9]"}
//               bgColorTwo={showCreateQuote && !showPhone ? "bg-[#EB5017]" : "bg-[#D9D9D9]"}
//               bgColorThree={!showCreateQuote && !showPhone ? "bg-[#EB5017]" : "bg-[#D9D9D9]"}
//             />

//             {/* Right   Content */}
//             <div className="w-full">
//               {" "}
//               {showPhone && (
//                 <PhoneNumber handleDropdownAction={(value: string) => handleTitleClick(value)} />
//               )}
//               {showCreateQuote && (
//                 <div
//                   className={`mt-9 ${
//                     showPhone ? "pointer-events-none cursor-not-allowed opacity-25" : ""
//                   }`}
//                 >
//                   <CreateQuote
//                     setUserQuote={handleCreateQuoteComplete}
//                     setFormData={setFormData}
//                     setMaterials={setIsQuoteMaterials}
//                     formData={formData}
//                     formik={formik}
//                     handleTurnTimeAction={handleTurnTimeAction}
//                     setSelectedQuote={setSelectedQuote}
//                     selectedQuote={selectedQuote}
//                     handleQuoteMaterial={handleQuoteMaterial}
//                   />
//                 </div>
//               )}
//               {showUpload && (
//                 <>
//                   <div
//                     className={`mt-9 ${
//                       showPhone || showCreateQuote
//                         ? "pointer-events-none cursor-not-allowed opacity-25"
//                         : ""
//                     }`}
//                   >
//                     <Upload
//                       onChange={handleUploadChange}
//                       handleMessageChange={handleDescription}
//                       files={files}
//                       setFiles={setFiles}
//                       formik={formik}
//                       handleProductName={handleProductName}
//                     />
//                   </div>
//                   {!showCreateQuote && !showPhone && (
//                     <>
//                       <div className="absolute right-12 bottom-[5rem] flex gap-4">
//                         <Button
//                           type="button"
//                           text={"Previous"}
//                           background="bg-transparent"
//                           color="text-[#000]"
//                           handleClick={handlePreviousQuote}
//                         />
//                         <Button
//                           type="button"
//                           text={"Next"}
//                           background="bg-black"
//                           disabled={formik.values?.quoteFiles.length <= 0}
//                           handleClick={handleQuotePreview}
//                         />
//                       </div>
//                     </>
//                   )}
//                 </>
//               )}
//               {showCreateQuote && !showPhone && (
//                 <>
//                   <div className="absolute right-12 bottom-[5rem] flex gap-4">
//                     <Button
//                       type="button"
//                       text={"Previous"}
//                       background="bg-transparent"
//                       color="text-[#000]"
//                       handleClick={showProjectType}
//                     />
//                     <Button
//                       type="button"
//                       text={"Next"}
//                       background="bg-black"
//                       handleClick={handleShowUpload}
//                     />
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <CancelQuoteAction isModalOpen={isModalOpen} handleQuoteCancel={handleQuoteCancel} setIsModalOpen={setIsModalOpen}/>
//     </>
//   );
// };

// export default SubmitQuote;






import { useState } from "react";
import AuthHeader from "../../../components/Layout/AuthHeader";
import Step from "../Step";
import PhoneNumber from "./PhoneNumber";
import CreateQuote from "./CreateQuote";
import Upload from "./Upload";
import LongArrowDown from "../../../components/icons/LongArrowDown";
import Button from "../../../components/ui/Buttons";
import WelcomeBanner from "./WelcomeBanner";
import { useSearchParams } from "react-router-dom";

import { XIcon } from "lucide-react";
import CancelQuoteAction from "@/components/Layout/CancelQuoteAction";

interface SubmitQuoteProps {
  formData: {
    turnTime: number;
    title?: string;
    [key: string]: any;
  };
  formik: any;
  setIsQuoteMaterials?: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleQuotePreview: () => void;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  selectedQuote: any;
  setSelectedQuote: any;
  handleQuoteMaterial: any;
  handleShowUpload: any;
}

const SubmitQuote = ({
  formData,
  formik,
  setIsQuoteMaterials,
  setFormData,
  handleQuotePreview,
  files,
  selectedQuote,
  setSelectedQuote,
  handleQuoteMaterial,
  setFiles,
  
}: SubmitQuoteProps) => {
  const [queryParams] = useSearchParams();
  const isNewUser = queryParams.get("add") === "new-user";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showPhone, setShowPhone] = useState(true);
  const [showCreateQuote, setShowCreateQuote] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const handleUploadChange = async (data: { files: File[] }) => {
    const fileNames = data.files.map((file) => file.name);
    formik.setFieldValue("quoteFiles", fileNames);
  };

  const handleCreateQuoteComplete = () => {
    setShowCreateQuote(false);
    setShowUpload(true);
  };

  const handleTitleClick = (e: string) => {
    setShowPhone(false);
    setShowCreateQuote(true);
    setFormData((prev: any) => ({ ...prev, title: e }));
    formik.setFieldValue("title", e);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik.setFieldValue("description", e.target.value);
  };

  const handleProductName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik.setFieldValue("quoteName", e.target.value);
  };

  const handleTurnTimeAction = (e: string) => {
    if (e === "3 day") formik.setFieldValue("turnTime", 3);
    else if (e === "5 days") formik.setFieldValue("turnTime", 5);
    else formik.setFieldValue("turnTime", 10);

    setShowCreateQuote(false);
    setShowUpload(true);
  };

  const handlePreviousQuote = () => {
    setShowUpload(false);
    setShowCreateQuote(true);
  };

  const showProjectType = () => {
    setShowCreateQuote(false);
    setShowPhone(true);
  };

  const handleQuoteCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <AuthHeader />
      <div className="container m-auto px-9">
        {isNewUser && <WelcomeBanner />}

        <div>
          <div className="flex items-center gap-4 mx-auto bg-black mt-9 rounded-lg w-fit px-5 p-3 justify-center">
            <p className="text-[#F0F2F5] font-semibold">
              {isNewUser ? "Let’s complete your signup process" : "Let’s create your Quote"}
            </p>
            <LongArrowDown />
          </div>

          <div className="absolute top-9 right-[5rem]" onClick={handleQuoteCancel}>
            <XIcon />
          </div>

          <div className="flex md:gap-[20rem] mt-4 md:mt-[9rem]">
            <Step
              bgColorOne={showPhone ? "bg-[#EB5017]" : "bg-[#D9D9D9]"}
              bgColorTwo={showCreateQuote ? "bg-[#EB5017]" : "bg-[#D9D9D9]"}
              bgColorThree={showUpload ? "bg-[#EB5017]" : "bg-[#D9D9D9]"}
            />

            <div className="w-full">

              {showPhone && (
                <PhoneNumber handleDropdownAction={handleTitleClick} />
              )}

              {showCreateQuote && (
                <div className="mt-9">
                  <CreateQuote
                    setUserQuote={handleCreateQuoteComplete}
                    setFormData={setFormData}
                    setMaterials={setIsQuoteMaterials}
                    formData={formData}
                    formik={formik}
                    handleTurnTimeAction={handleTurnTimeAction}
                    setSelectedQuote={setSelectedQuote}
                    selectedQuote={selectedQuote}
                    handleQuoteMaterial={handleQuoteMaterial}
                  />

                  <div className="absolute right-12 bottom-[5rem] flex gap-4">
                    <Button
                      type="button"
                      text="Previous"
                      background="bg-transparent"
                      color="text-black"
                      handleClick={showProjectType}
                    />
                  </div>
                </div>
              )}

              {showUpload && (
                <>
                  <div className="mt-9">
                    <Upload
                      onChange={handleUploadChange}
                      handleMessageChange={handleDescription}
                      files={files}
                      setFiles={setFiles}
                      formik={formik}
                      handleProductName={handleProductName}
                    />
                  </div>

                  <div className="absolute right-12 bottom-[5rem] flex gap-4">
                    <Button
                      type="button"
                      text="Previous"
                      background="bg-transparent"
                      color="text-black"
                      handleClick={handlePreviousQuote}
                    />
                    <Button
                      type="button"
                      text="Next"
                      background="bg-black"
                      disabled={formik.values?.quoteFiles?.length <= 0}
                      handleClick={handleQuotePreview}
                    />
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </div>

      <CancelQuoteAction
        isModalOpen={isModalOpen}
        handleQuoteCancel={handleQuoteCancel}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default SubmitQuote;

