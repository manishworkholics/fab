import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BomDataTable from "./BomDataTable";
import FilterTabs from "../Shared/FilterTabs";
import DropdownMenu from "../Dropdown";
import { getDashboardData } from "@/api/bom";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = ["#0088FE", "#00C49F", "#FF8042", "#FF6666"];

interface BomDashboardProps {
  numberInput: string;
  orderDate: string;
  dashboardData: any; // Replace 'any' with a more specific type if available
  uploadId: string;
}

const BomDashboard = ({
  numberInput,
  orderDate,
  dashboardData: initialDashboardData,
  uploadId,
}: BomDashboardProps) => {
  const [activeTab, setActiveTab] = useState("Digikey");
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(initialDashboardData);

  useEffect(() => {
    setDashboardData(initialDashboardData);
  }, [initialDashboardData]);

  const selectedData = dashboardData[activeTab.toLowerCase()] || { rows: [] };
  const partsToShow = selectedData.rows;

  const calculateTotals = (parts: any[]) => {
    return parts.reduce(
      (acc, part) => {
        acc.totalQuantity += part.quantity || 0;
        acc.totalCost += part.totalPrice || 0;
        return acc;
      },
      { totalQuantity: 0, totalCost: 0 },
    );
  };

  const { totalQuantity, totalCost } = calculateTotals(partsToShow);

  const numberOptions = numberInput
    ? numberInput.split(",").map((num, index) => ({
        id: index + 1,
        name: num.trim(),
      }))
    : [];

  const [selectedNumber, setSelectedNumber] = useState(
    numberOptions.length > 0 ? numberOptions[0].name : "",
  );

  useEffect(() => {
    if (numberOptions.length > 0) {
      setSelectedNumber(numberOptions[0].name);
    } else {
      setSelectedNumber("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberInput]);

  const handleDropdownSelect = async (selected: string) => {
    setSelectedNumber(selected);
    setLoading(true);
    try {
      const data = await getDashboardData({
        uploadId: uploadId,
        qty: selected,
      });
      setDashboardData(data);
    } catch (err) {
      // Handle error gracefully
      const error = err as Error;
      console.log(error?.message || "Failed to fetch dashboard data");
    } finally {
      setLoading(false); // stop loading
    }
  };

  const pieChartDataObj = {
    backOrder: selectedData.backOrder || 0,
    found: selectedData.found || 0,
    notFound: selectedData.notFound || 0,
    obsolete: selectedData.obsolete || 0,
  };

  const formatLabel = (label: string) => {
    if (label === "notFound") return "Not Found";
    if (label === "backOrder") return "Back Order";
    return label.charAt(0).toUpperCase() + label.slice(1);
  };

  const pieLabels = Object.keys(pieChartDataObj);
  const pieValues = Object.values(pieChartDataObj);
  const totalPie = pieValues.reduce((sum, val) => sum + val, 0);

  const pieLabelsWithPercent = pieLabels.map((label, idx) => {
    const percent = totalPie ? ((pieValues[idx] / totalPie) * 100).toFixed(1) : 0;
    return `${formatLabel(label)} (${percent}%)`;
  });

  const doughnutData = {
    labels: pieLabelsWithPercent,
    datasets: [
      {
        data: pieValues,
        backgroundColor: COLORS,
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-7xl">
      <div className="flex">
        <div className="bg-white rounded-lg p-4 w-auto mb-4 shadow">
          <p>Supplier Filter</p>
          <FilterTabs active={activeTab} setActive={setActiveTab} tabs={["Digikey", "Mouser"]} />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 w-auto mb-4 shadow">
        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <label className="block mb-1">Number of Boards</label>
            <div className="border rounded-[6px] w-full py-2 mt-2">
              <DropdownMenu
                data={numberOptions}
                selectedDate={selectedNumber}
                changeDropdownWidth
                className="bg-white"
                dropdownAction={handleDropdownSelect}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <label className="block mb-1">Order Date</label>
            <div className="mt-2 flex items-center space-x-2 border rounded-md py-3 px-3 w-max text-gray-700 bg-white shadow-sm">
              <span>{orderDate}</span>
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1 bg-white rounded-lg p-4 mb-4 shadow">
          <p>Total Components Found</p>
          <div>{selectedData.found || 0}</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-4 mb-4 shadow">
          <p>Not Found</p>
          <div>{selectedData.notFound || 0}</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-4 mb-4 shadow">
          <p>Back Order</p>
          <div>{selectedData.backOrder || 0}</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-4 mb-4 shadow">
          <p>Obsolete</p>
          <div>{selectedData.obsolete || 0}</div>
        </div>
      </div>

      <div className="bg-white rounded shadow p-4 mb-4">
        <BomDataTable data={partsToShow} />
      </div>

      <div className="flex flex-row w-full mx-auto gap-6">
        <div className="bg-white rounded-2xl shadow p-4 w-2/3">
          <h3 className="text-lg font-semibold mb-4 text-center">Chart for ({activeTab})</h3>
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-col space-y-2 w-1/3">
              {pieLabelsWithPercent.map((label, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700 ml-8 ">
                  <span
                    className="inline-block w-8 h-6 mr-2"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  {label}
                </div>
              ))}
            </div>
            <div className="w-2/3 h-64">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-1/3">
          <div className="flex-1 bg-white rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500">Total Quantity</p>
            <div className="text-lg font-semibold">{totalQuantity}</div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500">Total Cost</p>
            <div className="text-lg font-semibold">${totalCost.toFixed(2)}</div>
          </div>
          <div className="flex-1 bg-white rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500">Shipping Fee</p>
            <div className="text-lg font-semibold">{`$${3000}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BomDashboard;
