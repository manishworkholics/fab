// import { useState } from "react";
// import QuoteCard from "../../../components/Quote/QuoteCard";
// import LoaderIcon from "../../../components/icons/LoaderIcon";
// import DasboardLayout from "../layout";
// import Pagination from "../../../components/ui/Pagination";
// import usePmQuotes from "./quote/hooks/get-pm-quotes";

// const QuoteManagement = () => {
//   const { quotes, isLoading, totalCount, applyFilters } = usePmQuotes();
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(totalCount / 10);


//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     applyFilters({ page });
//   };

//   return (
//     <DasboardLayout>
//       <div className=" flex justify-between items-center">
//         <h3 className="text-[#101928] text-[24px] font-bold">Quotes</h3>
//         <p className="text-[#101928] text-[16px]">
//           Showing 100+ results sorted by newest
//         </p>
//       </div>
//       <div className=" py-8">
//         <div className="flex items-center space-x-8 mb-6 pb-3">
//           <div className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2 cursor-pointer">
//             Browse All{" "}
//             <span className="ml-1 text-gray-500 bg-gray-100 rounded-full px-2 text-sm">
//               {totalCount}
//             </span>
//           </div>
//           <div className="text-gray-500 border-b-2 border-[#E4E7EC] cursor-pointer pb-2 ">
//             Saved Quotes{" "}
//             <span className="ml-1 text-gray-500 bg-gray-100 rounded-full px-2 text-sm">
//               0
//             </span>
//           </div>
//           <div className="text-gray-500 border-b-2 border-[#E4E7EC] cursor-pointer pb-2">
//             Submitted Quotes{" "}
//             <span className="ml-1 text-gray-500 bg-gray-100 rounded-full px-2 text-sm">
//               2
//             </span>
//           </div>
//         </div>

//         {isLoading ? (
//           <p className="py-20 text-center">
//             <LoaderIcon />
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {quotes.map((item: any) => (
//               <QuoteCard key={item.quoteId} {...item} />
//             ))}
//           </div>
//         )}

//         {!isLoading && quotes.length == 0 && (
//           <div>
//             <p className="py-20 text-[30px] font-bold text-center">
//               Nothing to show
//             </p>
//           </div>
//         )}
//       </div>
//       {totalCount > 10 && (
//         <Pagination
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           totalPages={totalPages}
//         />
//       )}
//     </DasboardLayout>
//   );
// };

// export default QuoteManagement;




import { useState } from "react";
import QuoteCard from "../../../components/Quote/QuoteCard";
import LoaderIcon from "../../../components/icons/LoaderIcon";
import DasboardLayout from "../layout";
import Pagination from "../../../components/ui/Pagination";
import usePmQuotes from "./quote/hooks/get-pm-quotes";
import { useMyBids } from "@/grahpql/hooks/useMyBids";
import { useMyFavoriteQuotes } from "@/grahpql/hooks/useMyFavoriteQuotes";


type TabType = "BROWSE" | "SAVED" | "SUBMITTED";

const QuoteManagement = () => {
  const { quotes, isLoading, totalCount, applyFilters } = usePmQuotes();
  const { bids, loading: bidsLoading } = useMyBids();
  const { favorites, loading: favoritesLoading } = useMyFavoriteQuotes();


  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>("BROWSE");

  const totalPages = Math.ceil(totalCount / 10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    applyFilters({ page });
  };

  return (
    <DasboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-[#101928] text-[24px] font-bold">Quotes</h3>
        <p className="text-[#101928] text-[16px]">
          Showing {totalCount}+ results sorted by newest
        </p>
      </div>

      <div className="py-8">
        {/* Tabs */}
        <div className="flex items-center space-x-8 mb-6 pb-3">
          {/* Browse */}
          <div
            onClick={() => setActiveTab("BROWSE")}
            className={`cursor-pointer pb-2 ${activeTab === "BROWSE"
              ? "text-blue-600 font-medium border-b-2 border-blue-600"
              : "text-gray-500 border-b-2 border-[#E4E7EC]"
              }`}
          >
            Browse All
            <span className="ml-1 bg-gray-100 rounded-full px-2 text-sm">
              {totalCount}
            </span>
          </div>

          {/* Saved */}
          <div
            onClick={() => setActiveTab("SAVED")}
            className={`cursor-pointer pb-2 ${activeTab === "SAVED"
              ? "text-blue-600 font-medium border-b-2 border-blue-600"
              : "text-gray-500 border-b-2 border-[#E4E7EC]"
              }`}
          >
            Saved Quotes
            <span className="ml-1 bg-gray-100 rounded-full px-2 text-sm">{favorites.length}</span>
          </div>

          {/* Submitted */}
          <div
            onClick={() => setActiveTab("SUBMITTED")}
            className={`cursor-pointer pb-2 ${activeTab === "SUBMITTED"
              ? "text-blue-600 font-medium border-b-2 border-blue-600"
              : "text-gray-500 border-b-2 border-[#E4E7EC]"
              }`}
          >
            Submitted Quotes
            <span className="ml-1 bg-gray-100 rounded-full px-2 text-sm">
              {bids.length}
            </span>
          </div>
        </div>

        {/* Browse All Tab */}
        {activeTab === "BROWSE" && (
          <>
            {isLoading ? (
              <p className="py-20 text-center">
                <LoaderIcon />
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quotes.map((item: any) => (
                  <QuoteCard key={item.quoteId} {...item} />
                ))}
              </div>
            )}

            {!isLoading && quotes.length === 0 && (
              <p className="py-20 text-[30px] font-bold text-center">
                Nothing to show
              </p>
            )}
          </>
        )}

        {/* Saved Quotes Tab */}
        {activeTab === "SAVED" && (
          <>
            {favoritesLoading ? (
              <p className="py-20 text-center">
                <LoaderIcon />
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {favorites.map((fav: any) => (
                  <QuoteCard
                    key={fav.quoteId}
                    quoteId={fav.quoteId}
                    title={fav.title}
                    status={fav.status}
                    budget={fav.budget}
                    createdAt={fav.createdAt}
                    isSaved
                  />
                ))}
              </div>
            )}

            {!favoritesLoading && favorites.length === 0 && (
              <p className="py-20 text-[30px] font-bold text-center">
                No saved quotes yet
              </p>
            )}
          </>
        )}

        {/* Submitted Quotes Tab */}
        {activeTab === "SUBMITTED" && (
          <>
            {bidsLoading ? (
              <p className="py-20 text-center">
                <LoaderIcon />
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bids.map((bid: any) => (
                  <QuoteCard
                    key={bid.id}
                    quoteId={bid.quote.quoteId}
                    title={bid.quote.title}
                    status={bid.status}
                    price={bid.amount}
                    submittedAt={bid.createdAt}
                    isSubmitted
                  />
                ))}
              </div>
            )}

            {!bidsLoading && bids.length === 0 && (
              <p className="py-20 text-[30px] font-bold text-center">
                No submitted quotes yet
              </p>
            )}
          </>
        )}
      </div>

      {/* Pagination only for Browse */}
      {activeTab === "BROWSE" && totalCount > 10 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      )}
    </DasboardLayout>
  );
};

export default QuoteManagement;
