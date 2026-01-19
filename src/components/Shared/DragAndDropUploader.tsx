import { ChangeEvent, DragEvent, useState } from "react";
import { Download } from "lucide-react";

type DragAndDropUploaderProps = {
  allowedTypes?: string[];
  maxSize?: number;
  onFileReady?: (file: File) => void;
  onError?: (message: string) => void;
  className?: string;
};

const DragAndDropUploader = ({
  allowedTypes = [],
  maxSize = 10 * 1024 * 1024, // 10MB default
  onFileReady,
  onError,
  className = "",
}: DragAndDropUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFile = (file: File) => {
    if (allowedTypes.length && !allowedTypes.includes(file.type)) {
      onError?.("Invalid file type.");
      return;
    }
    if (file.size > maxSize) {
      onError?.("File exceeds max size.");
      return;
    }
    setSelectedFile(file);
    onFileReady?.(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const formatFileSize = (size: number) =>
    size > 1024 * 1024
      ? `${(size / (1024 * 1024)).toFixed(2)} MB`
      : `${(size / 1024).toFixed(2)} KB`;

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-10 text-center transition-all duration-300 ${
        isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
      } ${className}`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Download className="text-blue-500" />
          <span>
            {selectedFile
              ? `Selected file: ${selectedFile.name} (${formatFileSize(selectedFile.size)})`
              : "Drag & drop your file here"}
          </span>
        </div>

        <span className="text-gray-500 hidden md:block">or</span>
        <span className="text-gray-500 md:hidden mt-2">or</span>

        <label
          tabIndex={0}
          className="cursor-pointer text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          Browse File
          <input
            type="file"
            accept={allowedTypes.join(",")}
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      <p className="text-gray-500 mb-2">Max file size: {(maxSize / (1024 * 1024)).toFixed(1)} MB</p>
    </div>
  );
};

export default DragAndDropUploader;
