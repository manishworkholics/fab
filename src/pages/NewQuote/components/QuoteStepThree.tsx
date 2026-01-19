import FormInput from "@/components/ui/FormInput";
import { UploadCloud, X } from "lucide-react";
import { useFormikContext } from "formik";
import { useState } from "react";
import Button from "@/components/ui/Buttons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addToLocalStorage, getFromLocalStorage } from "@/lib/utils";
import toast from "react-hot-toast";

type FileItem = {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
};

type QuoteStepThreeProps = {
  handleStepChange: (step: number) => void;
};

export default function QuoteStepThree({ handleStepChange }: QuoteStepThreeProps) {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const isQuickQuote = queryParams.get("quoteId"); // If quoteId exists, it's a quick quote
  
  const formik = useFormikContext<{
    message: string;
    filesToUpload: FileItem[];
    quoteFiles: string[];
    quoteType: string;
  }>();

  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>(
    formik.values.filesToUpload || []
  );

  const [uploadedQuoteFiles, setUploadedQuoteFiles] = useState<string[]>(
    formik.values.quoteFiles || []
  );

  // Check if this is a quick quote with existing files
  const hasExistingQuoteFiles = isQuickQuote;

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: FileItem[] = Array.from(files).map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }));

    const newQuoteFiles: string[] = Array.from(files).map((file) => file.name);

    const updatedFiles = [...uploadedFiles, ...newFiles];
    // const updatedQuoteFiles = [...uploadedQuoteFiles, ...newQuoteFiles]
    setUploadedFiles(updatedFiles);
    formik.setFieldValue("filesToUpload", updatedFiles);
    formik.setFieldValue('quoteFiles', newQuoteFiles)
  };

  const handleRemoveFile = (fileId: string, fileName: string) => {
    const updatedFiles = uploadedFiles.filter((file) => file.id !== fileId);
    const updatedQuoteFiles = uploadedQuoteFiles.filter((name) => name !== fileName )
    setUploadedFiles(updatedFiles);
    setUploadedQuoteFiles(updatedQuoteFiles)
    formik.setFieldValue("filesToUpload", updatedFiles);
    formik.setFieldValue('quoteFiles', updatedQuoteFiles)
  };

  return (
    <div className="flex flex-col gap-4 w-[443px] max-w-[443px]">
      {hasExistingQuoteFiles ? (
        <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-900 mb-2">
            📎 Quick Quote - Files Already Attached
          </p>
          <p className="text-xs text-blue-700">
            This quick quote already has the necessary quotation files attached. You can proceed to preview and submit.
          </p>
        </div>
      ) : (
        <>
          <div className="w-full">
            <div className="w-full">
              {/* Upload Section */}
              <div className="flex items-center space-x-3">
                <label className="border-dashed border-2 border-gray-400 px-4 py-2 cursor-pointer flex items-center space-x-2 rounded-md hover:bg-gray-100 w-full h-32">
                  <span className="text-center mx-auto flex gap-2 items-center">
                    Upload New File
                    <UploadCloud size={18} />
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".zip"
                    multiple
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#F7F9FC] rounded-lg p-4">
            <div className="w-full flex flex-col gap-2">
              <p>Files to be Uploaded</p>
              <ul>
                <li className="font-medium">Bill of Materials(BOM)</li>
                <li className="font-medium">Assembly Drawings</li>
                <li className="font-medium">Pick and Place Files</li>
              </ul>
            </div>
          </div>
        </>
      )}
      {/* Uploads */}
      {uploadedFiles.length > 0 && (
        <div className="w-full">
          <p className="text-sm font-medium mb-3 text-gray-700">
            Uploaded Files ({uploadedFiles.length})
          </p>
          <div className="space-y-2 flex flex-col md:flex-row flex-wrap">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-medium text-sm text-gray-900 truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatFileSize(file.size)} • {file.type || 'Unknown type'}
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveFile(file.id, file.name)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 ml-2 flex-shrink-0"
                  title={`Remove ${file.name}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4 w-full">
        <FormInput
          label="Additional Information (optional)"
          textarea
          placeholder="Enter additional information"
          handleChange={(e) => {
            formik.setFieldValue("message", e.target.value);
          }}
          error={formik?.errors?.message}
          divWidth="min-w-[500px]"
        />
      </div>
      <div className="my-4 w-full flex gap-4 justify-start">
        <Button text="Previous" handleClick={() => handleStepChange(2)} />
        <Button text="Preview" handleClick={() => {
          addToLocalStorage(
            "quoteData", 
            {
              quoteFiles: formik.values.quoteFiles,
            },
            "merge"
          )

          const quoteData = getFromLocalStorage("quoteData");
          
          // For quick quotes, allow navigation even without new files since they already have files
          // For regular quotes, require files
          const hasRequiredFiles = isQuickQuote || (quoteData && quoteData.quoteFiles && quoteData.quoteFiles.length > 0);
          
          if (hasRequiredFiles) {
            // Preserve quoteId query parameter if it's a quick quote
            const previewUrl = isQuickQuote 
              ? `/pm/new-quote/preview?quoteId=${isQuickQuote}`
              : '/pm/new-quote/preview';
            navigate(previewUrl);
          } else {
            toast.error("Please upload files before proceeding to preview.");
          }
        }} 
      />
      </div>
    </div>
  );
}
