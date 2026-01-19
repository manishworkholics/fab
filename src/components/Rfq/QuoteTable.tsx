import { ChangeEvent, useState, useEffect, useRef } from "react";
import SortIcon from "../icons/SortIcon";
import EditIcon from "../icons/EditIcon";
import CopyIcon from "../icons/CopyIcon";
import DownloadIcon from "../icons/DownloadIcon";
import ArchivedIcon from "../icons/ArchivedIcon";
import OverviewHeader from "../OverviewHeader";
import { formatDateTime } from "../../helpers/misc";
import LoaderIcon from "../icons/LoaderIcon";
import { Quote, QuoteType } from "@/__generated__/graphql";
import { useNavigate } from "react-router-dom";
import { addToLocalStorage } from "@/lib/utils";
import ConfirmationModal from "../ui/ConfirmationModal";
import { useMutation } from "@apollo/client";
import { DELETE_QUOTE_MUTATION } from "@/grahpql/mutations/quote";
import { GetMyQuotesDocument } from "@/__generated__/graphql";
import apolloClient from "@/grahpql";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

interface PendingProps {
  isLoading: boolean;
  sortText?: string;
  data: Quote[];
  handleSortClick: () => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  onDeleteSuccess?: () => void;
}
const QuoteTable = ({
  data,
  isLoading,
  handleSortClick,
  sortText,
  handleSearch,
  title,
  onDeleteSuccess,
}: PendingProps) => {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [quoteToDelete, setQuoteToDelete] = useState<Quote | null>(null);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveRow(null);
      }
    };

    if (activeRow !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeRow]);

  const [deleteQuoteMutation, { loading: deleteLoading }] = useMutation(
    DELETE_QUOTE_MUTATION,
    {
      client: apolloClient,
      refetchQueries: [
        {
          query: GetMyQuotesDocument,
        },
        'GetMyQuotes', // Refetch by operation name as well
      ],
      awaitRefetchQueries: true,
      onCompleted: (data) => {
        if (data?.deleteQuote?.status) {
          toast.success(data.deleteQuote.message || "Quote deleted successfully!");
          setDeleteModalOpen(false);
          setQuoteToDelete(null);
          setActiveRow(null);
          // Trigger refetch in parent component if needed
          if (onDeleteSuccess) {
            onDeleteSuccess();
          }
        }
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete quote");
        console.error("Delete quote error:", error);
      },
      // Update cache manually to remove the deleted quote immediately
      update(cache, { data }) {
        if (data?.deleteQuote?.status && quoteToDelete) {
          // Remove the deleted quote from all cached queries
          cache.evict({ 
            id: cache.identify({ 
              __typename: 'Quote', 
              quoteId: quoteToDelete.quoteId 
            }) 
          });
          // Clean up any dangling references
          cache.gc();
        }
      },
    }
  );

  const handleDeleteClick = (quote: Quote, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuoteToDelete(quote);
    setDeleteModalOpen(true);
    setActiveRow(null);
  };

  const handleConfirmDelete = async () => {
    if (!quoteToDelete?.quoteId) return;
    
    try {
      await deleteQuoteMutation({
        variables: {
          quoteId: quoteToDelete.quoteId,
        },
      });
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  const status = (quote: Quote) => (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-full mt-1 bg-white border border-gray-200 min-w-[180px] shadow-lg rounded-lg z-50"
    >
      <ul className="text-left py-1">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm text-gray-700">
          <EditIcon /> Edit
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm text-gray-700">
          <CopyIcon />
          Duplicate Quote
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm text-gray-700">
          <DownloadIcon /> Download
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm text-gray-700">
          <ArchivedIcon />
          Archive
        </li>
        <li 
          className="px-4 py-2 hover:bg-red-50 cursor-pointer flex items-center gap-2 text-sm text-red-600 border-t border-gray-200"
          onClick={(e) => handleDeleteClick(quote, e)}
        >
          <Trash2 size={16} />
          Delete
        </li>
      </ul>
    </div>
  );

  const handleStatus = (index: number) => {
    setActiveRow((prev) => (prev === index ? null : index));
  };

  const handleQuoteClick = (item: Quote) => {
    // For quick quotes, navigate to creation flow with pre-filled data
    if (item?.quoteType === QuoteType.QuickQuote) {
      // Store the quote data in localStorage
      addToLocalStorage("quoteData", {
        title: item.title,
        description: item.description,
        quoteMaterials: item.quoteMaterials,
        turnTime: item.turnTime,
        quoteFiles: item.quoteFiles,
        quoteType: item.quoteType,
        budget: item.budget,
        hasNDA: item.hasNDA,
        quoteName: item.quoteName,
        assignedEMSId: item.assignedEMSId || 0,
        pcbBoards: 0,
      }, "replace");
      
      // Navigate to quote creation flow
      navigate(`/pm/new-quote?quoteId=${item.quoteId}`);
    } else {
      // For regular quotes, go to the quotation detail page
      navigate(`/pm/rfq/quotation/${item?.quoteId}`);
    }
  };

  return (
    <>
      <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setQuoteToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Quote"
        message={`Are you sure you want to delete "${quoteToDelete?.quoteName || 'this quote'}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        isLoading={deleteLoading}
        variant="danger"
      />
      
      <div>
        <OverviewHeader
          title={title}
          handleSortClick={handleSortClick}
          sortText={sortText ? sortText : "Sort"}
          handleSearch={handleSearch}
        />
        <div className="overflow-x-auto overflow-y-visible rounded-lg mt-3">
        <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr className="text-left border-b-2 ">
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold">ID Number</th>
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold">
                Project Name and Description
              </th>
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold flex justify-between">
                <span className="mr-4">Quote Type</span>
                <SortIcon />
              </th>
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold">Turnaround Time</th>
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold">Number of Bidders</th>
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold">Created At</th>
              <th className="px-4 py-4 text-[#344054] text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7} className="py-20 text-center">
                  <LoaderIcon />
                </td>
              </tr>
            ) : (
              <>
                {data?.map((item, index) => (
                  <tr
                    key={index}
                    className=" hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => handleQuoteClick(item)}
                  >
                    <td className="px-4 py-3 text-sm text-[#344054] border-b">{item?.quoteId}</td>
                    <td className="px-4 py-3 text-[14px] cursor-pointer max-w-12">
                      <span className="block font-semibold text-[#344054]">{item?.quoteName}</span>
                      <span className="text-gray-500 max-w-12 truncate">
                        {item?.description ? item?.description.slice(0, 30) + "..." : ""}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[14px] text-[#344054]">
                      <div className="flex items-center gap-2">
                        <span>{item?.quoteType.replace(/_/g, " ")}</span>
                        {item?.quoteType === QuoteType.QuickQuote && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                            ⚠ Complete quote
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[14px] text-[#344054]">{item?.turnTime} days</td>
                    <td className="px-4 py-3 text-[14px] text-[#344054]">
                      {item?.bids ? item?.bids?.length : 0}
                    </td>
                    <td className="px-4 py-3 text-[14px] text-[#344054] flex flex-col">
                      <span> {formatDateTime(item?.updatedAt).date}</span>
                      <span className="text-gray-500">{formatDateTime(item?.updatedAt).time}</span>
                    </td>
                    <td className="px-4 py-3 text-right relative">
                      <button
                        className="text-gray-500 hover:text-gray-700 border px-2 rounded"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatus(index);
                        }}
                      >
                        ⋮
                      </button>
                      {activeRow === index && status(item)}
                    </td>
                  </tr>
                ))}
              </>
            )}
            {!isLoading && data?.length == 0 && (
              <tr>
                <td colSpan={7} className="py-20 text-[30px] font-bold text-center">
                  Nothing to show
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default QuoteTable;
