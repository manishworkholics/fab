import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SearchIcon from "../icons/SearchIcon";

interface Part {
  name: string;
  reference: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  backOrder: number;
  leadTime: string;
  moq: number;
}

interface BomDataTableProps {
  data: Part[];
}

const BomDataTable: React.FC<BomDataTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const rowsPerPage = 10;

  const filteredData = data.filter((part) => {
    const query = searchQuery.toLowerCase();
    return (
      part.name?.toLowerCase().includes(query) || part.reference?.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="mb-4 flex items-center justify-between">
        <div className="relative w-full sm:w-72">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search by name or reference..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full p-2 pl-10 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto w-full mt-2">
        <table
          className="min-w-full bg-white rounded-lg overflow-hidden"
          style={{ tableLayout: "fixed" }}
        >
          <thead>
            <tr className="bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
              <th className="p-4 w-1/8 break-words">Name</th>
              <th className="p-4 w-1/8 break-words">Reference</th>
              <th className="p-4 w-1/8 break-words">Quantity</th>
              <th className="p-4 w-1/8 break-words">Unit Price</th>
              <th className="p-4 w-1/8 break-words">Total Price</th>
              <th className="p-4 w-1/8 break-words">Backorder</th>
              <th className="p-4 w-1/8 break-words">Lead Time</th>
              <th className="p-4 w-1/8 break-words">MOQ</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((part, idx) => (
                <tr
                  key={idx}
                  className="text-sm text-gray-800 hover:bg-gray-50 border-b border-gray-200 last:border-b-0"
                >
                  {/* Use whitespace-normal and break-words for wrapping */}
                  <td className="p-4 whitespace-normal break-words">{part.name}</td>
                  <td className="p-4 whitespace-normal break-words">{part.reference}</td>
                  <td className="p-4 whitespace-normal break-words">{part.quantity}</td>
                  <td className="p-4 whitespace-normal break-words">${part.unitPrice}</td>
                  <td className="p-4 whitespace-normal break-words">${part.totalPrice}</td>
                  <td className="p-4 whitespace-normal break-words">{part.backOrder}</td>
                  <td className="p-4 whitespace-normal break-words">{part.leadTime}</td>
                  <td className="p-4 whitespace-normal break-words">{part.moq}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={8}>
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded border ${
            currentPage === 1
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-orange-500 text-orange-500 hover:bg-orange-50"
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center space-x-2">
          <span>Page</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = Number(e.target.value);
              if (page >= 1 && page <= totalPages) setCurrentPage(page);
            }}
            className="w-16 px-2 py-1 border rounded text-center"
          />
          <span>/ {totalPages}</span>
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`p-2 rounded border ${
            currentPage === totalPages
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-orange-500 text-orange-500 hover:bg-orange-50"
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BomDataTable;
