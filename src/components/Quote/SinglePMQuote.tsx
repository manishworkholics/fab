import { useState } from "react";
import DasboardLayout from "../../pages/Dasboard/layout";
import PlusCircleIcon from "../icons/PlusCircleIcon"; 
import { GetQuoteQuery } from "@/__generated__/graphql";
import QuoteView from "./QuoteView";
import QuoteSubmissionsReview from "./QuoteSubmissionsReview";
interface SingleEMSQuoteProps {
  data: GetQuoteQuery["quote"] | undefined;
  isLoading: boolean;
}

const SinglePMQuote = ({ isLoading, data }: SingleEMSQuoteProps) => {
  const [active, setActive] = useState("View");
  return (
    <DasboardLayout>
      <div className="flex-1 flex flex-col w-full">
        <div>
          <ul className="flex items-center gap-2 border-b border-t w-fit py-3 mb-7 text-[14px] font-medium text-[#667185]">
            <li className="text-[#EB5017]">Quotations</li>
            <li>/</li>
            <li>{data?.title}</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-[24px] font-bold">{data?.title}</h2>
          </div>
          <div>
            <button className="text-[14px] font-semibold bg-[#EB5017] rounded-xl flex justify-center  w-[172px] h-[36px] items-center   py-4 text-white gap-3">
              <PlusCircleIcon />
              Create Quote
            </button>
          </div>
        </div>
      </div>
      <div className="mt-9 flex gap-9 justify-around md:w-[80%] flex-col md:flex-row m-auto">
        <div
          className={`flex w-full items-center cursor-pointer gap-2 py-4 px-6 rounded-md border transition-colors duration-300 '
          ${
            active === "View"
              ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
              : "bg-[#F0F2F5] border-[#D0D5DD] "
          }   `}
          onClick={() => setActive("View")}
        >
          <div>
            <div className="font-semibold">View Submitted Quote</div>
            <div className="text-sm text-gray-500">Short step description</div>
          </div>
        </div>
        <div
          className={`flex w-full items-center cursor-pointer gap-2 py-4 px-6 rounded-md border transition-colors duration-300'
          ${
            active === "Review"
              ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
              : "bg-[#F0F2F5] border-[#D0D5DD] "
          }   `}
          onClick={() => setActive("Review")}
        >
          <div>
            <div className="font-semibold">Review Bidders’ Submissions</div>
            <div className="text-sm text-gray-500">Short step description</div>
          </div>
        </div>
        <div
          className={`flex w-full items-center cursor-pointer gap-2 py-4 px-6 rounded-md border transition-colors duration-300
          ${
            active === "Hire"
              ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
              : "bg-[#F0F2F5] border-[#D0D5DD] "
          }   `}
          onClick={() => setActive("Hire")}
        >
          <div>
            <div className="font-semibold">Hire Bidder</div>
            <div className="text-sm text-gray-500">Short step description</div>
          </div>
        </div>
      </div>

      {active === "View" && <QuoteView data={data || undefined} isLoading={isLoading} />}
      {active === "Review" && <QuoteSubmissionsReview />}
    </DasboardLayout>
  );
};

export default SinglePMQuote;
 