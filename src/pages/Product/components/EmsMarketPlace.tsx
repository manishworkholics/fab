import HomeIcon from "@/components/icons/HomeIcon";
import { useState } from "react";
import { DesignEngineers, EmsManufacturers, PurchaseManager } from "./EmsMarketInfo";

const EmsMarketPlace = () => {
  const [activeTab, setActiveTab] = useState("Purchasing Managers");
  const marketData = [
    {
      name: "Purchasing Managers",
      logo: <HomeIcon fill={activeTab === "Purchasing Managers" ? "#F56630" : "#344054"} />,
    },
    {
      name: "Design Engineers",
      logo: <HomeIcon fill={activeTab === "Design Engineers" ? "#F56630" : "#344054"} />,
    },
    {
      name: "EMS Providers/Contract Manufacturers",
      logo: <HomeIcon fill={activeTab === "EMS Marketplace" ? "#F56630" : "#344054"} />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Purchasing Managers":
        return <PurchaseManager />;
      case "Design Engineers":
        return <DesignEngineers />;
      case "EMS Providers/Contract Manufacturers":
        return <EmsManufacturers />;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:my-[9rem] px-2 md:px-0">
      <div>
        <header className="bg-white mb-9 max-w-full overflow-scroll">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center w-max">
            <div className="flex items-center">
              {marketData.map((data) => (
                <button
                  onClick={() => setActiveTab(data.name)}
                  className={`flex items-center gap-2 font-semibold px-9 py-2 ${
                    activeTab === data.name
                      ? "  border-t-[#D2E7FF] border-b-[#D2E7FF] border-r-[#FF6250] border-l-[#FF6250] bg-transparent text-[#F56630] text-[20px] border rounded-full border-orange-500"
                      : "text-gray-600 hover:text-orange-500 text-[14px] border-b-2"
                  }`}
                >
                  {data.logo}
                  <span>{data.name}</span>
                </button>
              ))}
            </div>
          </div>
        </header>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default EmsMarketPlace;
