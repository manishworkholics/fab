import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const visiblePages = 6;

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(visiblePages / 2), totalPages - visiblePages + 1)
  );
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="flex items-center justify-center space-x-2  rounded-lg px-4 py-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border rounded-lg disabled:opacity-50"
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 w-8 h-8 rounded-lg flex items-center justify-center ${
            currentPage === page
              ? "border border-[#F56630]"
              : "text-gray-500"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="py-2 px-4 border rounded-lg disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
