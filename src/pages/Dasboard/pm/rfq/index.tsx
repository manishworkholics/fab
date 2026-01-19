import { ChangeEvent, useEffect, useState } from "react";
import ClockIcon from "../../../../components/icons/ClockIcon";
import HealthPlusIcon from "../../../../components/icons/HealthPlusIcon";
import HomeIcon from "../../../../components/icons/HomeIcon";
import DasboardLayout from "../../layout";
import { useNavigate } from "react-router-dom";
import useQuote from "./get_quote-hooks";
import Pagination from "../../../../components/ui/Pagination";
import QuoteTable from "../../../../components/Rfq/QuoteTable";
import { Quote } from "@/__generated__/graphql";
import { FilterListItem } from "@/components/FilterListItems";
import Button from "@/components/ui/Buttons";

const RFQ = () => {
  const [active, setActive] = useState("PENDING");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const { quotes, isLoading, applyFilters, totalCount } = useQuote();
  const totalPages = Math.ceil(totalCount / 10);
  const [searchTerm, setSearchTerm] = useState("");
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    applyFilters({ page, filters: { status: active } });
  };

  const handleSortClick = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    // applyFilters({  page: currentPage, sortOrder: newSortOrder });
    applyFilters({
      page: currentPage,
      sortOrder: newSortOrder,
      filters: { status: active },
    });
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDeleteSuccess = () => {
    // Refetch quotes after successful deletion
    applyFilters({
      page: currentPage,
      sortOrder,
      search: searchTerm,
      filters: { status: active },
    });
  };

  useEffect(() => {
    applyFilters({
      page: currentPage,
      sortOrder,
      search: searchTerm,
      filters: { status: active },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, currentPage, sortOrder, searchTerm]);

  return (
    <div>
      <DasboardLayout header="RFQ Management">
        <div className="flex-1 flex flex-col w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-[24px] font-extrabold">Quotations</h2>
              <p className="text-[#667185] text-[14px]">
                Check and filter all your quotations here
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Button
                text={"View EMS"}
                handleClick={() => navigate("/view-ems")}
                variant="outline"
              />
              <Button
                text={"Create Quote"}
                handleClick={() => navigate("/pm/new-quote")}
                type="button"
              />
            </div>
          </div>

          <div className="mt-9">
            <ul className="flex items-center gap-9 flex-wrap md:flex-nowrap">
              <FilterListItem
                status="PENDING"
                icon={HealthPlusIcon}
                label="Pending"
                totalCount={totalCount}
                active={active}
                setActive={setActive}
              />
              <FilterListItem
                status="ASSIGNED"
                icon={HealthPlusIcon}
                label="Assigned"
                totalCount={totalCount}
                active={active}
                setActive={setActive}
              />
              <FilterListItem
                status="ACTIVE"
                icon={ClockIcon}
                label="Active"
                totalCount={totalCount}
                active={active}
                setActive={setActive}
              />
              <FilterListItem
                status="COMPLETED"
                icon={HomeIcon}
                label="Completed"
                totalCount={totalCount}
                active={active}
                setActive={setActive}
              />
            </ul>
          </div>

          <QuoteTable
            data={quotes as Quote[]}
            isLoading={isLoading}
            handleSortClick={handleSortClick}
            sortText={sortOrder === "asc" ? "Sort: ASC" : "Sort: DESC"}
            handleSearch={handleSearch}
            title={
              active === "PENDING"
                ? "Pending Quotes"
                : active === "COMPLETED"
                ? "Completed Quotes"
                : "Active Quotes"
            }
            onDeleteSuccess={handleDeleteSuccess}
          />

          {totalCount > 10 && (
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
            />
          )}
        </div>
      </DasboardLayout>
    </div>
  );
};

export default RFQ;
