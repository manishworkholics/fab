import SearchBar from "./ui/SearchBar";
import FilterIcon from "./icons/FilterIcon";
import SortIcon from "./icons/SortIcon";
import { ChangeEvent } from "react";
 
interface OverviewHeader {
  title: string;
  handleSortClick?: () => void;
  sortText?: string;
  handleSearch?:(e: ChangeEvent<HTMLInputElement>) => void;
}
const OverviewHeader = ({
  title,
  handleSortClick,
  sortText,
  handleSearch
}: OverviewHeader) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <h3 className="text-[#101928] text-[18px] mt-9 mb-3 font-bold">
          {title}
        </h3>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1">
            <SearchBar placeHolderText={"Search"} textIcon onChange={handleSearch}/>
          </div>
          <div className="flex items-center gap-1 ">
            {" "}
            <FilterIcon />
            <span>Filter</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer" onClick={handleSortClick}>
            {" "}
            <SortIcon />
              <span>{sortText ? sortText : "Sort"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHeader;
