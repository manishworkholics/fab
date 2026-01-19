import BookOpenIcon from "../../icons/BookOpenIcon";
import GlobeIcon from "../../icons/GlobeIcon";
import HomeIcon from "../../icons/HomeIcon";
import UsersIcon from "../../icons/UsersIcon";
// import WorkFlowIcon from "../../icons/WorkFlowIcon";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <header className="bg-white mb-9 max-w-full overflow-scroll">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center w-max">
          <div className="flex items-center">
            <button
              onClick={() => setActiveTab("EMS Marketplace")}
              className={`flex items-center gap-2 font-semibold px-9 py-2 ${
                activeTab === "EMS Marketplace"
                  ? "  border-t-[#D2E7FF] border-b-[#D2E7FF] border-r-[#FF6250] border-l-[#FF6250] bg-transparent text-[#F56630] text-[20px] border rounded-full border-orange-500"
                  : "text-gray-600 hover:text-orange-500 text-[14px] border-b-2"
              }`}>
              <HomeIcon
                fill={activeTab === "EMS Marketplace" ? "#F56630" : "#344054"}
              />
              <span>EMS Marketplace</span>
            </button>

            <button
              onClick={() => setActiveTab("Talent Marketplace")}
              className={`flex items-center gap-2 font-semibold px-9 py-2 ${
                activeTab === "Talent Marketplace"
                  ? " border-t-[#D2E7FF] border-b-[#D2E7FF] border-r-[#FF6250] border-l-[#FF6250] bg-transparent text-[#F56630] text-[20px] border  rounded-full border-orange-500"
                  : "text-gray-600 hover:text-orange-500 text-[14px] border-b-2"
              }`}>
              <GlobeIcon
                fill={
                  activeTab === "Talent Marketplace" ? "#F56630" : "#344054"
                }
              />
              <span>Talent Marketplace</span>
            </button>
            <button
              onClick={() => setActiveTab("Training")}
              className={`flex items-center gap-2 font-semibold px-9 py-2  ${
                activeTab === "Training"
                  ? "  border-t-[#D2E7FF] border-b-[#D2E7FF] border-r-[#FF6250] border-l-[#FF6250] bg-transparent text-[#F56630] text-[20px] border  rounded-full border-orange-500"
                  : "text-gray-600 hover:text-orange-500 text-[14px] border-b-2"
              }`}>
              <BookOpenIcon
                fill={activeTab === "Training" ? "#F56630" : "#98A2B3"}
              />
              <span>Training</span>
            </button>
            <button
              onClick={() => setActiveTab("Community")}
              className={`flex items-center gap-2 font-semibold px-9 py-2  ${
                activeTab === "Community"
                  ? "  border-t-[#D2E7FF] border-b-[#D2E7FF] border-r-[#FF6250] border-l-[#FF6250] bg-transparent text-[#F56630] text-[20px] border  rounded-full border-orange-500"
                  : "text-gray-600 hover:text-orange-500 text-[14px] border-b-2"
              }`}>
              <UsersIcon
                fill={activeTab === "Community" ? "#F56630" : "#98A2B3"}
              />
              <span>Community</span>
            </button>
            {/* <button
              onClick={() => setActiveTab("Workflows")}
              className={`flex items-center gap-2 font-semibold py-2 ${
                activeTab === "Workflows"
                  ? "border-t-[#D2E7FF] border-b-[#D2E7FF] border-r-[#FF6250] border-l-[#FF6250] bg-transparent text-[#F56630] text-[20px]  px-3 border rounded-full border-orange-500"
                  : "text-gray-600 hover:text-orange-500 text-[14px] mr-0 border-b-2"
              }`}>
              <WorkFlowIcon
                fill={activeTab === "Workflows" ? "#F56630" : "#98A2B3"}
              />
              <span>Workflows</span>
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
