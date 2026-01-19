import { useState } from "react";
import DashboardLayout from "@/pages/Dasboard/layout";
import { processBOM, uploadBOMFile } from "@/api/bom";
import BomMapping from "./BomMapping";
import { Loader2 } from "lucide-react";
import BomProcessingStream from "./BomProcessingStream";
import DragAndDropUploader from "../Shared/DragAndDropUploader";

const BomUpload = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null); // NEW
  const [predictionData, setPredictionData] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showStream, setShowStream] = useState(false);
  const [processResult, setProcessResult] = useState<any | null>(null);
  const [orderDate, setOrderDate] = useState<string>("");
  const [uploadId, setUploadId] = useState<number | null>(null);
  const [qtyError, setQtyError] = useState<string | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  const [numberInput, setNumberInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const allowedTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
  ];

  const handleFileSelected = async (file: File) => {
    setError(null);
    setSuccess(null);
    setIsUploading(true);

    try {
      const result = await uploadBOMFile(file);
      const columnsWithMapping = (result?.columns || []).map((col: any) => ({
        ...col,
        mappedTo: col.prediction?.primary_category ?? null,
      }));

      setPredictionData(columnsWithMapping);
      setUploadId(result?.uploadId || null); // <-- Save uploadId here!
      setSuccess("✅ File uploaded successfully!");
    } catch (err: any) {
      setError(err.message || "Upload failed. Please try again.");
      setPredictionData([]);
      setUploadId(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSubmission = () => {
    const numbers = numberInput
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n !== "");

    const hasInvalidQty = numbers.length === 0 || numbers.some((n) => isNaN(Number(n)));
    const isOrderDateMissing = !orderDate.trim();

    setQtyError(hasInvalidQty ? "Please enter one or more valid numbers (comma-separated)." : null);
    setDateError(isOrderDateMissing ? "Please select an order date." : null);

    if (hasInvalidQty) {
      setError("Please enter one or more valid numbers (comma-separated).");
      return;
    }

    if (isOrderDateMissing) {
      setError("Please select an order date.");
      return;
    }

    if (selectedFile) {
      setError(null);
      handleFileSelected(selectedFile);
    } else {
      setError("Please select a file first.");
    }
  };

  const updateMapping = (index: number, mappedTo: string) => {
    setPredictionData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, mappedTo } : item)),
    );
  };

  const handleSubmitMapping = async () => {
    let hasError = false;

    // Validate quantity input
    const numbers = numberInput
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n !== "");

    if (numbers.length === 0 || numbers.some((n) => isNaN(Number(n)))) {
      setQtyError("Please enter one or more valid numbers separated by commas.");
      hasError = true;
    } else {
      setQtyError(null);
    }

    // Validate date
    if (!orderDate.trim()) {
      setDateError("Please select an order date.");
      hasError = true;
    } else {
      setDateError(null);
    }

    if (hasError || !uploadId || predictionData.length === 0) {
      return;
    }

    const columns = predictionData.map((item) => ({
      name: item.name,
      mapping: item.mappedTo || item.prediction.primary_category,
    }));

    setIsProcessing(true);
    setShowStream(false);

    try {
      const result = await processBOM(uploadId, columns, numberInput, orderDate);
      setProcessResult({ ...result, uploadId });
      setShowStream(true);
    } catch (err: any) {
      setError(err.message || "Failed to process BOM.");
      setIsProcessing(false);
    }
  };

  return (
    <DashboardLayout showTopBar={false} tempRole="BOM" noMarginTop>
      {showStream && processResult ? (
        <>
          <BomProcessingStream
            processResult={processResult}
            numberInput={numberInput}
            orderDate={orderDate}
            onComplete={() => {
              setIsProcessing(false);
              setPredictionData([]);
              setProcessResult(null);
              setShowStream(false);
              setSuccess(null);
              setError(null);
            }}
            onError={(err) => {
              setIsProcessing(false);
              console.error(err);
            }}
          />
        </>
      ) : (
        <div>
          {isUploading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-blue-500 w-10 h-10 mb-4" />
              <p className="text-blue-600 font-medium">Uploading file, please wait...</p>
            </div>
          ) : predictionData.length === 0 ? (
            <>
              <h1 className="text-2xl font-bold mb-6">Upload BOM File</h1>
              <div className="bg-white rounded-xl p-4 w-auto mb-4 shadow">
                <div className="w-full max-w-4xl mb-6">
                  <div className="flex flex-col lg:flex-row lg:space-x-6">
                    {/* Number of Boards Input */}
                    <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Enter Quantity of boards needed for quotation
                      </label>
                      <input
                        type="text"
                        placeholder="Enter comma-separated numbers..."
                        value={numberInput}
                        onChange={(e) => {
                          setNumberInput(e.target.value);
                          setQtyError(null); // clear on change
                        }}
                        className={`w-full h-12 px-3 border rounded-md shadow-sm text-base focus:outline-none focus:ring-2 ${
                          qtyError ? "border-red-500 focus:ring-red-500" : "focus:ring-orange-500"
                        }`}
                      />
                      {qtyError && <p className="text-sm text-red-600 mt-1">{qtyError}</p>}
                    </div>

                    {/* Order Date Input */}
                    <div className="w-full lg:w-1/2">
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Order Date
                      </label>
                      <input
                        type="date"
                        value={orderDate}
                        onChange={(e) => {
                          setOrderDate(e.target.value);
                          setDateError(null); // clear on change
                        }}
                        className={`w-full h-12 px-3 border rounded-md shadow-sm text-base focus:outline-none focus:ring-2 ${
                          dateError ? "border-red-500 focus:ring-red-500" : "focus:ring-orange-500"
                        }`}
                      />
                      {dateError && <p className="text-sm text-red-600 mt-1">{dateError}</p>}
                    </div>
                  </div>
                </div>

                <DragAndDropUploader
                  allowedTypes={allowedTypes}
                  maxSize={10 * 1024 * 1024}
                  onFileReady={(file) => {
                    setSelectedFile(file);
                    setError(null);
                    setSuccess("✅ File selected: " + file.name);
                  }}
                  onError={(msg) => {
                    setError(msg);
                    setSuccess(null);
                  }}
                />
                {error && <div className="mt-4 text-sm text-red-600">❌ {error}</div>}
                {success && <div className="mt-4 text-sm text-green-600">{success}</div>}

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleFileSubmission}
                    className="mt-2 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
                  >
                    Submit File
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-2">Column Mapping</h1>
              <p className="text-sm text-gray-600 mb-6">
                Please confirm the correct column mappings below
              </p>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
                {predictionData.map((item, index) => (
                  <BomMapping
                    key={index}
                    item={item}
                    mappedTo={item.mappedTo || item.prediction.primary_category}
                    onMappingChange={(newCategory) => updateMapping(index, newCategory)}
                  />
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSubmitMapping}
                  disabled={isProcessing}
                  className="mt-8 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {isProcessing ? "Processing..." : "Submit Mapping"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default BomUpload;
