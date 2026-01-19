import { useState } from "react";
import Header from "./Header";
import EmsMarket from "./EmsMarket";
import TMarket from "./TMarket";
import Training from "./Training";
import Community from "./Community";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("EMS Marketplace");

  const renderTabContent = () => {
    switch (activeTab) {
      case "EMS Marketplace":
        return <EmsMarket />;
      case "Talent Marketplace":
        return <TMarket />;
      case "Training":
        return <Training />;
      case "Community":
        return <Community/>
      // case "Workflows":
      //   return <div>Manage Workflows with Ease</div>;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:my-[9rem] px-2 md:px-0">
      {/* Header with Tabs */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}
    </div>
  );
};

export default Dashboard;
