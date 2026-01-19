import React, { useEffect, useState } from "react";
import { getDashboardData, streamDigikeyResults, streamMouserResults } from "@/api/bom";
import BomResultsTabs from "./BomResultTabs";
import BomDashboard from "./BomDashboard";
import FilterTabs from "../Shared/FilterTabs";

interface Props {
  processResult: any;
  onComplete: () => void;
  onError: (error: string) => void;
  numberInput?: string;
  orderDate?: string;
}

const BomProcessingStream: React.FC<Props> = ({
  processResult,
  onComplete,
  onError,
  numberInput,
  orderDate,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [processed, setProcessed] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [found, setFound] = useState<number>(0);
  const [digikeyParts, setDigikeyParts] = useState<any[]>([]);
  const [mouserParts, setMouserParts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("DigiKey");
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashboardData, setDashboardData] = useState<any>(null);

  const [digikeyDone, setDigikeyDone] = useState(false);
  const [mouserDone, setMouserDone] = useState(false);

  useEffect(() => {
    if (!processResult?.uploadId) {
      onError("Missing uploadId in processResult");
      return;
    }
    const uploadId = processResult.uploadId;
    let isCancelled = false;
    const abortController = new AbortController();

    const digikeyCallbacks = {
      log: (data: any) => {
        if (!isCancelled && data) {
          if (typeof data.percent_complete === "number") {
            setProgress((prev) => Math.max(prev, data.percent_complete));
          }
          if (data.mpn && data.digikey_pn) {
            setDigikeyParts((prev) => [...prev, data]);
          }
          console.log("DigiKey data:", data);
        }
      },
      complete: () => {
        if (!isCancelled) {
          setDigikeyDone(true);
        }
      },
      httpError: (err: Error) => {
        if (!isCancelled) {
          onError(err.message);
        }
      },
    };

    const mouserCallbacks = {
      log: (data: any) => {
        if (!isCancelled && data) {
          if (typeof data.percent_complete === "number") {
            setProgress((prev) => Math.max(prev, data.percent_complete));
          }
          if (typeof data.processed === "number") {
            setProcessed(data.processed);
          }
          if (typeof data.total === "number") {
            setTotal(data.total);
          }
          if (typeof data.found === "number") {
            setFound(data.found);
          }
          if (data.mpn && data.mouser_pn) {
            setMouserParts((prev) => [...prev, data]);
          }
          console.log("Mouser data:", data);
        }
      },
      complete: () => {
        if (!isCancelled) {
          setMouserDone(true);
        }
      },
      httpError: (err: Error) => {
        if (!isCancelled) {
          onError(err.message);
        }
      },
    };

    streamDigikeyResults(processResult.rows, uploadId, digikeyCallbacks, {
      signal: abortController.signal,
    }).catch((err) => {
      if (!isCancelled) {
        onError(err.message || "Digikey streaming failed");
      }
    });

    streamMouserResults(processResult.rows, uploadId, mouserCallbacks, {
      signal: abortController.signal,
    }).catch((err) => {
      if (!isCancelled) {
        onError(err.message || "Mouser streaming failed");
      }
    });

    return () => {
      isCancelled = true;
      abortController.abort();
    };
  }, [processResult, onError]);

  useEffect(() => {
    if (digikeyDone && mouserDone) {
      setProgress(100);
      onComplete();
    }
  }, [digikeyDone, mouserDone, onComplete]);

  const isProcessingDone = progress >= 100;

  return (
    <div className="rounded bg-gray-50 p-4">
      {!showDashboard && (
        <>
          <h1 className="text-2xl font-bold mb-6">Bom Checker</h1>
          <div className="flex justify-between items-end mb-2">
            <p className="text-sm text-gray-700">Processing Result</p>
            <button
              className={`px-4 py-2 rounded ${
                isProcessingDone
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!isProcessingDone}
              onClick={async () => {
                try {
                  const data = await getDashboardData({
                    uploadId: processResult.uploadId,
                    qty: numberInput?.split(",")[0]?.trim() || 1,
                  });
                  setDashboardData(data);
                  setShowDashboard(true);
                } catch (err: any) {
                  onError(err.message || "Failed to fetch dashboard data");
                }
              }}
            >
              View Dashboard
            </button>
          </div>

          <div className="w-full bg-gray-300 rounded h-4 mb-2 overflow-hidden">
            <div
              className="h-4 bg-orange-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mb-4 flex flex-row items-start justify-between gap-2">
            <p className="text-sm text-gray-700">
              Processed - {processed} out of {total}
            </p>
            <p className="text-sm text-gray-700">
              Found: {found} ({progress.toFixed(1)}%)
            </p>
          </div>
        </>
      )}

      {showDashboard ? (
        <>
          <h1 className="text-2xl font-bold mb-6">Bom Supply Chain Insight Dashboard</h1>
          <BomDashboard
            numberInput={numberInput || ""}
            dashboardData={dashboardData}
            orderDate={orderDate || ""}
            uploadId={processResult.uploadId}
          />
        </>
      ) : (
        <div className="space-y-4">
          <FilterTabs
            active={activeTab}
            setActive={(tab) => setActiveTab(tab)}
            tabs={["DigiKey", "Mouser"]}
            counts={{
              DigiKey: digikeyParts.length,
              Mouser: mouserParts.length,
            }}
          />

          <div className="flex flex-wrap gap-4">
            {activeTab === "DigiKey" ? (
              digikeyParts.length === 0 ? (
                <p className="text-gray-400">No DigiKey parts found yet...</p>
              ) : (
                <BomResultsTabs parts={digikeyParts} />
              )
            ) : mouserParts.length === 0 ? (
              <p className="text-gray-400">No Mouser parts found yet...</p>
            ) : (
              <BomResultsTabs parts={mouserParts} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BomProcessingStream;
