// import { useEffect, useState } from "react";
// import DasboardLayout from "../../pages/Dasboard/layout";

// import { useNavigate } from "react-router-dom";
// import { GetQuoteQuery } from "@/__generated__/graphql";
// import QuoteView from "./QuoteView";
// import QuoteSubmissionsReview from "./QuoteSubmissionsReview";
// import HiredBidderView from "./HiredBidderView";
// import Button from "../ui/Buttons";

// interface SingleEMSQuoteProps {
//   data: GetQuoteQuery["quote"] | undefined;
//   isLoading: boolean;
// }

// const SinglePMQuote = ({ isLoading, data }: SingleEMSQuoteProps) => {
//   const [active, setActive] = useState("View");
//   const navigate = useNavigate();
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     if (params.get("tab") === "hire") {
//       setActive("Hire");
//     }
//   }, []);

//   return (
//     <DasboardLayout>
//       <div className="flex-1 flex flex-col w-full">
//         <div>
//           <ul className="flex items-center gap-2 border-b border-t w-fit py-3 mb-7 text-[14px] font-medium text-[#667185]">
//             <li className="text-[#EB5017]">Quotations</li>
//             <li>/</li>
//             <li>{data?.title}</li>
//           </ul>
//         </div>
//         <div className="flex flex-col md:flex-row justify-between">
//           <div>
//             <h2 className="text-[24px] font-bold">{data?.title}</h2>
//           </div>
//           <div>

//             <Button
//               text={"Create Quote"}
//               handleClick={() => navigate("/pm/new-quote")}
//               type="button"
//             />

//           </div>
//         </div>
//       </div>
//       <div className="mt-9 flex gap-9 justify-around md:w-[80%] flex-col md:flex-row m-auto">
//         <div
//           className={`flex w-full items-center cursor-pointer gap-2 py-4 px-6 rounded-md border transition-colors duration-300 '
//           ${active === "View"
//               ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
//               : "bg-[#F0F2F5] border-[#D0D5DD] "
//             }   `}
//           onClick={() => setActive("View")}
//         >
//           <div>
//             <div className="font-semibold">View Submitted Quote</div>
//             <div className="text-sm text-gray-500">Short step description</div>
//           </div>
//         </div>
//         <div
//           className={`flex w-full items-center cursor-pointer gap-2 py-4 px-6 rounded-md border transition-colors duration-300'
//           ${active === "Review"
//               ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
//               : "bg-[#F0F2F5] border-[#D0D5DD] "
//             }   `}
//           onClick={() => setActive("Review")}
//         >
//           <div>
//             <div className="font-semibold">Review Bidders’ Submissions</div>
//             <div className="text-sm text-gray-500">Short step description</div>
//           </div>
//         </div>
//         <div
//           className={`flex w-full items-center cursor-pointer gap-2 py-4 px-6 rounded-md border transition-colors duration-300
//           ${active === "Hire"
//               ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
//               : "bg-[#F0F2F5] border-[#D0D5DD] "
//             }   `}
//           onClick={() => setActive("Hire")}
//         >
//           <div>
//             <div className="font-semibold">Hire Bidder</div>
//             <div className="text-sm text-gray-500">Short step description</div>
//           </div>
//         </div>
//       </div>

//       {active === "View" && <QuoteView data={data || undefined} isLoading={isLoading} />}
//       {active === "Review" && <QuoteSubmissionsReview />}
//       {active === "Hire" && <HiredBidderView quote={data} />}

//     </DasboardLayout>
//   );
// };

// export default SinglePMQuote;



import { useEffect, useState } from "react";
import DasboardLayout from "../../pages/Dasboard/layout";
import { useNavigate, useLocation } from "react-router-dom";
import { GetQuoteQuery } from "@/__generated__/graphql";

import QuoteView from "./QuoteView";
import QuoteSubmissionsReview from "./QuoteSubmissionsReview";
import HiredBidderView from "./HiredBidderView";
import Button from "../ui/Buttons";

interface SingleEMSQuoteProps {
  data: GetQuoteQuery["quote"] | undefined;
  isLoading: boolean;
}

const SinglePMQuote = ({ isLoading, data }: SingleEMSQuoteProps) => {
  const [active, setActive] = useState<"View" | "Review" | "Hire">("View");

  const navigate = useNavigate();
  const location = useLocation();

  /* =====================================================
     🚀 KEY FIX
     project !== null  => hired
  ===================================================== */
  const isHired = !!data?.project;

  /* =====================================================
     If URL has ?tab=hire only allow if hired
  ===================================================== */
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("tab") === "hire" && isHired) {
      setActive("Hire");
    }
  }, [location.search, isHired]);

  return (
    <DasboardLayout>
      <div className="flex-1 flex flex-col w-full">

        {/* ================= BREADCRUMB ================= */}
        <ul className="flex items-center gap-2 border-b border-t w-fit py-3 mb-7 text-[14px] font-medium text-[#667185]">
          <li className="text-[#EB5017]">Quotations</li>
          <li>/</li>
          <li>{data?.title}</li>
        </ul>

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-bold">{data?.title}</h2>

          <Button
            text="Create Quote"
            handleClick={() => navigate("/pm/new-quote")}
            type="button"
          />
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="mt-9 flex gap-9 justify-around md:w-[80%] flex-col md:flex-row m-auto">

        {/* VIEW */}
        <TabCard
          active={active === "View"}
          title="View Submitted Quote"
          subtitle="Quote details overview"
          onClick={() => setActive("View")}
        />

        {/* REVIEW */}
        <TabCard
          active={active === "Review"}
          title="Review Bidders’ Submissions"
          subtitle="Compare all bids"
          onClick={() => setActive("Review")}
        />

        {/* ================= HIRE (SMART LOGIC) ================= */}
        <TabCard
          active={active === "Hire"}
          disabled={!isHired}
          title="Hire Bidder"
          subtitle={
            isHired
              ? "Project created"
              : "No bidder hired yet"
          }
          onClick={() => {
            if (isHired) setActive("Hire");
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      {active === "View" && (
        <QuoteView data={data || undefined} isLoading={isLoading} />
      )}

      {active === "Review" && <QuoteSubmissionsReview />}

      {active === "Hire" && isHired && (
        <HiredBidderView quote={data} />
      )}
    </DasboardLayout>
  );
};

export default SinglePMQuote;


/* =====================================================
   🔥 Reusable Tab Component (cleaner UI)
===================================================== */

interface TabCardProps {
  title: string;
  subtitle: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const TabCard = ({
  title,
  subtitle,
  active,
  disabled,
  onClick,
}: TabCardProps) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`flex w-full items-center gap-2 py-4 px-6 rounded-md border transition-colors duration-300
        ${disabled
          ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
          : active
            ? "bg-[#F5FBFF] border-[#7DABF8] text-[#1960A6]"
            : "bg-[#F0F2F5] border-[#D0D5DD] cursor-pointer"
        }`}
    >
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
};

