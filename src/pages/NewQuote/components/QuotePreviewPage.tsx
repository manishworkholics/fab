import { Ems } from "@/__generated__/graphql";
import EmailIcon from "@/components/icons/EmailIcon";
import { DotIcon, PhoneIcon, PlusIcon } from "lucide-react";
import { ReactNode } from "react";

interface PreviewCardProps {
  title: string;
  quoteMaterials: string;
  turnTime: number;
  description: string;
  quoteFiles: string[];
  isEMSId: Ems | null;
  isNdaRequired?: boolean;
  handleToggle?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

const QuotePreviewPage = ({
  title,
  quoteMaterials,
  turnTime,
  description,
  quoteFiles,
  isEMSId,
  isNdaRequired,
  handleToggle,
  disabled,
  children,
}: PreviewCardProps) => {
  return (
    <div>
      <div className="container m-auto">
        <div className="border rounded-md mb-9">
          <h2 className="p-9 text-center font-bold text-[#101928] text-[32px]">
            {title}
          </h2>
          <div>
            <div className="border p-4">
              <h4 className="text-[14px] text-[#101928] mb-1 font-semibold">
                Are you providing parts, boards or stencil?
              </h4>
              <p className="text-[14px] text-[#101928]">{quoteMaterials}</p>
            </div>
            <div className="border p-4 mt-2">
              <h4 className="text-[14px] text-[#101928] mb-1 font-semibold">
                Desired Turn Time
              </h4>
              <p className="text-[14px] text-[#101928]">{turnTime}</p>
            </div>
            <div className="border p-4 mt-2">
              <h4 className="text-[14px] text-[#101928] mb-1 font-semibold">
                More Details
              </h4>
              <p className="text-[14px] text-[#101928]">{description}</p>
            </div>
            <div className="border p-4 mt-2 mb-2">
              <h4 className="text-[14px] text-[#101928] mb-1 font-semibold">
                Attached Files
              </h4>

              <div className="flex flex-wrap gap-2 mt-4">
                {quoteFiles.map((file) => (
                  <div className="flex items-center bg-[#ffffff] border md:w-[20%] justify-between px-3 py-3 rounded-lg">
                    <span className="text-[#1671D9] text-[14px]">{file}</span>
                    {/* <button className="ml-2">
                  <X
                    size={14}
                    className="text-gray-600 hover:text-gray-800"
                  />
                </button> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {isEMSId?.id && (
            <div className="p-4 w-[70%]">
              <div className="flex justify-between items-center">
                <h4 className="text-[#101928] text-[14px] font-bold">
                  Assigned EMS
                </h4>
                <PlusIcon />
              </div>
              <div className=" border rounded-lg mt-3 border-[#F9FAFB] p-9">
                <div className="flex items-start gap-2">
                  <img
                    src="/images/user-img.png"
                    alt="User"
                    className="w-10 h-10 border border-[#F8B717] rounded-full"
                  />
                  <div className="relative w-full">
                    <h4 className="block text-[20px] text-[#3E3838] m-0 font-bold">
                      {isEMSId?.firstName}  {isEMSId?.lastName}
                    </h4>
                    <p className="text-[#3E3838] text-[16px] flex items-center gap-1 mb-6">
                      Montreal, Canada <DotIcon /> Protronics Inc.
                    </p>
                    <div className="border border-[#D0D5DD] flex gap-4 p-9 rounded-lg justify-center flex-col">
                      <p className="text-[#3E3838] text-[16px] flex items-center gap-3">
                        <EmailIcon />
                        {isEMSId?.email ?? "_"}
                      </p>
                      <p className="text-[#3E3838] text-[16px] flex items-center gap-3">
                        <PhoneIcon />
                        {isEMSId?.phone ?? "_"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container m-auto my-9">
          {/* NDA Toggle */}
          <div className="flex items-start gap-3 mb-4">
            <label
              htmlFor="nda"
              className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="nda"
                className="sr-only peer"
                checked={isNdaRequired}
                onChange={handleToggle}
                disabled={disabled}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-[#EB5017] transition-all duration-300"></div>
              <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-full"></div>
            </label>
            <div>
              <label htmlFor="nda" className="text-gray-900 font-medium block">
                Non-Disclosure Agreement Required
              </label>
              <a href="#" className="text-sm text-blue-600 underline">
                Learn more
              </a>
            </div>
          </div>

          {/* Quote Selection */}
          <div className="px-9 mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default QuotePreviewPage;
