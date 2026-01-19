import { useState } from "react";
import BomResult from "./BomResult";
import FilterTabs from "../Shared/FilterTabs";
import { PartProps } from "./types";

interface BomResultsTabsProps {
  parts: PartProps[];
}

const BomResultsTabs = ({ parts }: BomResultsTabsProps) => {
  const [activeTab, setActiveTab] = useState("All");

  const inStockParts = parts.filter((p) => p.status.toLowerCase() === "in stock");
  const outOfStockParts = parts.filter((p) => p.status.toLowerCase() === "out of stock");

  const tabParts =
    activeTab === "All"
      ? parts
      : activeTab === "In Stock"
      ? inStockParts
      : activeTab === "Out of Stock"
      ? outOfStockParts
      : [];

  return (
    <div className="w-full space-y-4">
      <FilterTabs
        active={activeTab}
        setActive={setActiveTab}
        tabs={["All", "In Stock", "Out of Stock"]}
        counts={{
          All: parts.length,
          "In Stock": inStockParts.length,
          "Out of Stock": outOfStockParts.length,
        }}
      />

      <div className="flex flex-wrap gap-4">
        {tabParts.length === 0 ? (
          <p className="text-gray-400">No {activeTab.toLowerCase()} parts found.</p>
        ) : (
          tabParts.map((part, index) => (
            <div key={index} className="w-80">
              <BomResult part={part} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BomResultsTabs;
