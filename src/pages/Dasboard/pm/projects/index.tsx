import { useState } from "react";
import DownloadIcon from "../../../../components/icons/DownloadIcon";
import FunnelIcon from "../../../../components/icons/FunnelIcon";
import { deals } from "../../../../utils/constant";
import DasboardLayout from "../../layout";
import FormInput from "../../../../components/ui/FormInput";
import SortIcon from "../../../../components/icons/SortIcon";
import Pagination from "../../../../components/ui/Pagination";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 6;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <DasboardLayout header="Projects">
      <div className="flex flex-col md:flex-row gap-5 justify-end items-center">
        <div className="flex items-center justify-between gap-4">
          <div className="border border-[#F56630] text-[#F56630] rounded-lg w-[87px] h-[36px] flex justify-center items-center gap-2 hover:bg-[#F56630] hover:text-[#ffffff] cursor-pointer">
            <FunnelIcon />
            Filter
          </div>
          <div className="border border-[#F56630] bg-[#F56630] text-[#ffffff]   rounded-lg w-[131px] h-[36px] flex justify-center items-center gap-2 hover:border-[#F56630] hover:bg-[#ffffff] hover:text-[#F56630] cursor-pointer">
            <DownloadIcon />
            Export CSV
          </div>
        </div>
      </div>

      <div className="mt-9">
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="bg-[#EDF0F5] px-4 pb-6 pt-12 rounded-lg flex justify-end flex-col">
            <h4 className="text-[32px] font-bold">0</h4>
            <p className="text-[#667185] text-[14px]">New Bids</p>
          </div>
          <div className="bg-[#EDF0F5] px-4 pb-6 pt-12 rounded-lg flex justify-end flex-col">
            <h4 className="text-[32px] font-bold">0</h4>
            <p className="text-[#667185] text-[14px]"> Ongoing Projects</p>
          </div>
          <div className="bg-[#EDF0F5] px-4 pb-6 pt-12 rounded-lg flex justify-end flex-col">
            <h4 className="text-[32px] font-bold">0</h4>
            <p className="text-[#667185] text-[14px]">Favourites</p>
          </div>
          <div className="bg-[#EDF0F5] px-4 pb-6 pt-12 rounded-lg flex justify-end flex-col">
            <h4 className="text-[32px] font-bold">0</h4>
            <p className="text-[#667185] text-[14px]">Completed Deals</p>
          </div>
        </div>
      </div>

      <div className="py-6 bg-gray-50 mt-9">
        <div className="flex justify-between items-center bg-[#fff] py-4 rounded px-3 pb-2">
          <h2 className="  text-[#101928] text-[18px] font-normal">All Deals</h2>
          <button className="text-[#101928] text-[14px]">View all</button>
        </div>

        <div className="flex space-x-6 mt-4 border-b w-fit">
          {["Active", "Pending", "Completed", "Archive"].map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm font-medium relative ${
                activeTab === tab ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} <span className="ml-1 text-xs">(0)</span>
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full mt-4 bg-white shadow-sm rounded-md border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="p-3 text-left">Company Name </th>
                <th className="p-3 text-left">
                  <div className="flex gap-9 items-center">
                    <span>Amount</span>
                    <SortIcon sortUp />{" "}
                  </div>
                </th>
                <th className="p-3 text-left">
                  <div className=" flex gap-9 items-center">
                    <span>Project Type</span>
                    <SortIcon sortUp />{" "}
                  </div>
                </th>
                <th className="p-3 text-left">
                  <div className=" flex gap-9 items-center">
                    <span>Date</span>
                    <SortIcon sortUp />{" "}
                  </div>
                </th>
                <th className="p-3 text-left">
                  <div className=" flex gap-9 items-center">
                    <span>Status</span>
                    <SortIcon sortUp />{" "}
                  </div>
                </th>
                <th className="p-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <FormInput type={"checkbox"} style="h-[18px]" divWidth="w-5" />
                    <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full">
                      G
                    </div>
                    <div>
                      <p className="font-medium">{deal.company}</p>
                      <p className="text-xs text-gray-500">{deal.email}</p>
                    </div>
                  </td>
                  <td className="p-3">{deal.amount}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs bg-[#FFECE5] text-[#AD3307] rounded-md">
                      {deal.projectType}
                    </span>
                  </td>
                  <td className="p-3">
                    {deal.date} | {deal.time}
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs bg-[#FFECE5] text-[#AD3307] rounded-md">
                      {deal.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button className="text-gray-500">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </DasboardLayout>
  );
};

export default Project;
