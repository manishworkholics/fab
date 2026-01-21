import { useEffect, useState } from "react";
import { UserRole } from "@/__generated__/graphql";
import FormInput from "../../../components/ui/FormInput";
import MagicwandIcon from "../../../components/icons/MagicwandIcon";
import Button from "../../../components/ui/Buttons";
import Modal from "../../../components/Modal";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import DropdownMenu from "../../../components/Dropdown";
import { quotetypeData } from "../../../utils/constant";
import { useFormik } from "formik";
import useUserUpdate from "./hooks/update_user-hook";
import toast from "react-hot-toast";
import { validationSchema } from "../../../utils/validations";

type PhoneNumberProps = {
  handleDropdownAction: (value: string) => void;
};

const PhoneNumber = ({ handleDropdownAction }: PhoneNumberProps) => {

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userRole = storedUser?.role as UserRole;

  const [userPhone, setUserPhone] = useState(true);
  const [quote, setQuote] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const isNewUser = searchParams.get("add") === "new-user";

  const [formData, setFormData] = useState({
    phone: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEMSOpen, setIsModalEMSOpen] = useState(false);

  const { handleUserUpdate, loading } = useUserUpdate();

  const formik = useFormik({
    initialValues: {
      phone: formData.phone,
    },
    enableReinitialize: true,
    validationSchema: validationSchema.phone,
    onSubmit: async (values) => {
      try {
        await await handleUserUpdate({
          phone: values.phone,
          userRole,
        });



        toast.success("Phone updated");
      } catch (error: any) {
        toast.error(error.message || "Update failed");
      }
    },
  });

  const proceedAfterPhone = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length !== 0) {
      formik.setTouched({ phone: true });
      return;
    }

    await formik.handleSubmit();
    setUserPhone(false);

    if (isNewUser) {
      setQuote(true); // directly show project type step
    }
  };

  const handleQuote = () => {
    setIsModalOpen(false);
    navigate("/pm/new-quote");
  };

  const handleEMSQuote = () => {
    setIsModalEMSOpen(false);
    navigate("/ems/manage-quote");
  };

  const handlePMDashboard = () => {
    setIsModalOpen(false);
    navigate("/dashboard");
  };

  const handleEMSDashboard = () => {
    setIsModalEMSOpen(false);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (location.search === "?add=new-quote") {
      setQuote(true);
    }
  }, [location.search]);

  return (
    <>
      <div className="flex w-full">
        <div className="flex items-start space-x-3 mt-3">
          <img
            src="/images/user-illustration.png"
            className="w-8 h-8 rounded-full"
            alt="User"
          />
        </div>

        {/* PHONE STEP */}
        {userPhone && !quote && (
          <div className="lg:w-[50%] w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  proceedAfterPhone();
                }
              }}
            >
              <FormInput
                type="text"
                name="phone"
                label="Phone number"
                placeholder="+1 212 555 4568"
                value={formData.phone}
                handleChange={(e) =>
                  setFormData({ phone: e.target.value })
                }
                style="w-full shadow-sm"
                error={formik.touched.phone && formik.errors.phone}
              />

              <div className="mt-4">
                <Button
                  text="Continue"
                  type="button"
                  isLoading={loading}
                  handleClick={proceedAfterPhone}
                />
              </div>
            </form>
          </div>
        )}

        {/* OLD USER CHOICE */}
        {!userPhone && !quote && !isNewUser && (
          <div>
            <label>What brings you here?</label>
            <div className="flex md:flex-row flex-col gap-2 items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 px-4 py-2 border items-center gap-2 flex rounded-md"
              >
                <MagicwandIcon /> I want to create a quote
              </button>

              <button
                onClick={() => setIsModalEMSOpen(true)}
                className="mt-2 px-4 py-2 border items-center gap-2 flex rounded-md"
              >
                <MagicwandIcon /> I want to respond to quotes
              </button>
            </div>
          </div>
        )}

        {/* PROJECT TYPE */}
        {quote && (
          <div className="w-full">
            <label>What type of project are you trying to build?</label>
            <div className="border bg-[#f5f5f5] rounded-[6px] w-full md:w-[50%] py-2 mt-5">
              <DropdownMenu
                data={quotetypeData}
                selectedDate="Select Project"
                changeDropdownWidth
                dropdownAction={handleDropdownAction}
              />
            </div>
          </div>
        )}
      </div>

      {/* PM MODAL */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="md:p-[3rem]">
          <h4 className="text-[#101928] font-bold text-[24px]">
            You're Signing Up as a Purchasing Manager
          </h4>

          <div className="md:flex-row flex-col flex gap-5 mt-[4rem]">
            <Button
              text="Create Quote"
              styles="w-[198px]"
              handleClick={handleQuote}
            />
            <Button
              text="Go to Dashboard"
              background="bg-transparent"
              styles="border border-[#CC400C] w-[198px]"
              color="text-[#CC400C]"
              handleClick={handlePMDashboard}
            />
          </div>
        </div>
      </Modal>

      {/* EMS MODAL */}
      <Modal isOpen={isModalEMSOpen} onClose={() => setIsModalEMSOpen(false)}>
        <div className="p-[3rem]">
          <h4 className="text-[#101928] font-bold text-[24px]">
            You're Signing Up as an EMS
          </h4>

          <div className="md:flex-row flex-col flex gap-5 mt-[4rem]">
            <Button
              text="View Open RFQ"
              styles="w-[198px]"
              handleClick={handleEMSQuote}
            />
            <Button
              text="Go to Dashboard"
              background="bg-transparent"
              styles="border border-[#CC400C] w-[198px]"
              color="text-[#CC400C]"
              handleClick={handleEMSDashboard}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PhoneNumber;







// import { useEffect, useState } from "react";
// import { UserRole } from "@/__generated__/graphql";
// import MagicwandIcon from "../../../components/icons/MagicwandIcon";
// import Button from "../../../components/ui/Buttons";
// import Modal from "../../../components/Modal";
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import DropdownMenu from "../../../components/Dropdown";
// import { quotetypeData } from "../../../utils/constant";

// type PhoneNumberProps = {
//   handleDropdownAction: (value: string) => void;
// };

// const PhoneNumber = ({ handleDropdownAction }: PhoneNumberProps) => {
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const userRole = storedUser?.role as UserRole;

//   const [step, setStep] = useState<1 | 2 | 3>(1);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const [searchParams] = useSearchParams();

//   const isNewUser = searchParams.get("add") === "new-user";

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalEMSOpen, setIsModalEMSOpen] = useState(false);

//   // Auto skip to project type for new users or direct quote
//   useEffect(() => {
//     if (isNewUser || location.search === "?add=new-quote") {
//       setStep(2);
//     }
//   }, [isNewUser, location.search]);

//   const handleQuote = () => {
//     setIsModalOpen(false);
//     navigate("/pm/new-quote");
//   };

//   const handleEMSQuote = () => {
//     setIsModalEMSOpen(false);
//     navigate("/ems/manage-quote");
//   };

//   const handlePMDashboard = () => {
//     setIsModalOpen(false);
//     navigate("/dashboard");
//   };

//   const handleEMSDashboard = () => {
//     setIsModalEMSOpen(false);
//     navigate("/dashboard");
//   };

//   return (
//     <>
//       <div className="flex w-full">
//         <div className="flex items-start space-x-3 mt-3">
//           <img
//             src="/images/user-illustration.png"
//             className="w-8 h-8 rounded-full"
//             alt="User"
//           />
//         </div>

//         {/* STEP 1 – OLD USER CHOICE */}
//         {step === 1 && !isNewUser && (
//           <div>
//             <label>What brings you here?</label>

//             <div className="flex md:flex-row flex-col gap-2 items-center">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="mt-2 px-4 py-2 border items-center gap-2 flex rounded-md"
//               >
//                 <MagicwandIcon /> I want to create a quote
//               </button>

//               <button
//                 onClick={() => setIsModalEMSOpen(true)}
//                 className="mt-2 px-4 py-2 border items-center gap-2 flex rounded-md"
//               >
//                 <MagicwandIcon /> I want to respond to quotes
//               </button>
//             </div>
//           </div>
//         )}

//         {/* STEP 2 – PROJECT TYPE */}
//         {step === 2 && (
//           <div className="w-full">
//             <label>What type of project are you trying to build?</label>

//             <div className="border bg-[#f5f5f5] rounded-[6px] w-full md:w-[50%] py-2 mt-5">
//               <DropdownMenu
//                 data={quotetypeData}
//                 selectedDate="Select Project"
//                 changeDropdownWidth
//                 dropdownAction={handleDropdownAction}
//               />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* PM MODAL */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div className="md:p-[3rem]">
//           <h4 className="text-[#101928] font-bold text-[24px]">
//             You're Signing Up as a Purchasing Manager
//           </h4>

//           <div className="md:flex-row flex-col flex gap-5 mt-[4rem]">
//             <Button text="Create Quote" styles="w-[198px]" handleClick={handleQuote} />
//             <Button
//               text="Go to Dashboard"
//               background="bg-transparent"
//               styles="border border-[#CC400C] w-[198px]"
//               color="text-[#CC400C]"
//               handleClick={handlePMDashboard}
//             />
//           </div>
//         </div>
//       </Modal>

//       {/* EMS MODAL */}
//       <Modal isOpen={isModalEMSOpen} onClose={() => setIsModalEMSOpen(false)}>
//         <div className="p-[3rem]">
//           <h4 className="text-[#101928] font-bold text-[24px]">
//             You're Signing Up as an EMS
//           </h4>

//           <div className="md:flex-row flex-col flex gap-5 mt-[4rem]">
//             <Button
//               text="View Open RFQ"
//               styles="w-[198px]"
//               handleClick={handleEMSQuote}
//             />
//             <Button
//               text="Go to Dashboard"
//               background="bg-transparent"
//               styles="border border-[#CC400C] w-[198px]"
//               color="text-[#CC400C]"
//               handleClick={handleEMSDashboard}
//             />
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default PhoneNumber;
