import {  useState } from "react";
import DownloadIcon from "../../../../components/icons/DownloadIcon";
import FunnelIcon from "../../../../components/icons/FunnelIcon";
import DasboardLayout from "../../layout";
import FormInput from "../../../../components/ui/FormInput";

import Pagination from "../../../../components/ui/Pagination";
import { useQuery } from "@apollo/client";
import { MyProjectsAsPmDocument, ProjectStatus } from "@/__generated__/graphql";
import { useNavigate } from "react-router-dom";

const tabs = ["Assigned", "In Progress", "Manufacturing", "Completed", "On Hold"];

const STATUS_MAP: Record<string, ProjectStatus> = {
  Assigned: ProjectStatus.Assigned,
  "In Progress": ProjectStatus.InProgress,
  Manufacturing: ProjectStatus.Manufacturing,
  Completed: ProjectStatus.Completed,
  "On Hold": ProjectStatus.OnHold,
};

const STATUS_COLORS: Record<ProjectStatus, string> = {
  ASSIGNED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-yellow-100 text-yellow-700",
  MANUFACTURING: "bg-purple-100 text-purple-700",
  COMPLETED: "bg-green-100 text-green-700",
  ON_HOLD: "bg-red-100 text-red-700",
};

const Project = () => {
   const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("Assigned");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useQuery(MyProjectsAsPmDocument);

  const projects = data?.myProjectsAsPM || [];

  const filteredProjects = projects.filter(
    (p) => p.status === STATUS_MAP[activeTab]
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / 10));

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <DasboardLayout header="Projects">
      {/* Top Actions */}
      <div className="flex flex-col md:flex-row gap-5 justify-end items-center">
        <div className="flex items-center justify-between gap-4">
          <div className="border border-[#F56630] text-[#F56630] rounded-lg w-[87px] h-[36px] flex justify-center items-center gap-2 hover:bg-[#F56630] hover:text-white cursor-pointer">
            <FunnelIcon />
            Filter
          </div>
          <div className="border border-[#F56630] bg-[#F56630] text-white rounded-lg w-[131px] h-[36px] flex justify-center items-center gap-2 hover:bg-white hover:text-[#F56630] cursor-pointer">
            <DownloadIcon />
            Export CSV
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tabs.map((tab) => (
          <div
            key={tab}
            className="bg-[#EDF0F5] px-4 pb-6 pt-12 rounded-lg flex justify-end flex-col"
          >
            <h4 className="text-[32px] font-bold">
              {projects.filter((p) => p.status === STATUS_MAP[tab]).length}
            </h4>
            <p className="text-[#667185] text-[14px]">{tab}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="py-6 bg-gray-50 mt-9">
        <div className="flex justify-between items-center bg-white py-4 rounded px-3 pb-2">
          <h2 className="text-[#101928] text-[18px] font-normal">All Deals</h2>
          <button className="text-[#101928] text-[14px]">View all</button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mt-4 border-b w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}{" "}
              <span className="ml-1 text-xs">
                ({projects.filter((p) => p.status === STATUS_MAP[tab]).length})
              </span>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full mt-4 bg-white shadow-sm rounded-md border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="p-3 text-left">Company Name</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Project</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left"></th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="p-6 text-center">
                    Loading...
                  </td>
                </tr>
              )}

              {!loading && filteredProjects.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-gray-500">
                    No projects found
                  </td>
                </tr>
              )}

              {filteredProjects.map((deal) => (
                <tr key={deal.id} className="border-b hover:bg-gray-50" onClick={() => navigate(`/pm/projects/${deal.id}`)}>
                  <td className="p-3 flex items-center gap-3">
                    <FormInput type={"checkbox"} style="h-[18px]" divWidth="w-5" />
                    <div className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white font-bold rounded-full">
                      {deal.ems?.firstName?.charAt(0) || "E"}
                    </div>
                    <div>
                      <p className="font-medium">
                        {deal.ems?.firstName} {deal.ems?.lastName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {deal.ems?.email}
                      </p>
                    </div>
                  </td>

                  <td className="p-3">--</td>

                  <td className="p-3">
                    <span className="px-2 py-1 text-xs bg-[#FFECE5] text-[#AD3307] rounded-md">
                      {deal.quote?.title}
                    </span>
                  </td>

                  <td className="p-3">
                    {new Date(deal.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        STATUS_COLORS[deal.status]
                      }`}
                    >
                      {deal.status.replace("_", " ")}
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

        {/* Pagination */}
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
