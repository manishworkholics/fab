import { X, UploadCloud } from "lucide-react";
import { useEffect } from "react";
import FormInput from "../../../components/ui/FormInput";
import { ChangeEventHandler } from "react";

interface UploadProps {
  onChange: (data: { files: File[] }) => void;
  handleMessageChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  formik: any;
  handleProductName: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
const Upload = ({
  formik,
  onChange,
  files,
  handleMessageChange,
  handleProductName,
  setFiles,
}: UploadProps) => {
  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    onChange({ files });
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onChange({ files });
  }, [files]);

  return (
    <>
      <div>
        {/* Right Step Content */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="flex items-start space-x-3 mt-3">
            <img src="/images/user-illustration.png" className="w-8 h-8 rounded-full" alt="User" />

            <div className="w-full">
              {/* Upload Section */}
              <div className="flex items-center space-x-3">
                <label className="border-dashed border-2 border-gray-400 px-4 py-2 cursor-pointer flex items-center space-x-2 rounded-md hover:bg-gray-100">
                  <span>Upload New File</span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".zip"
                    // multiple
                    onChange={handleFileUpload}
                  />
                  <UploadCloud size={18} />
                </label>
              </div>
            </div>
          </div>
          {/* Display Uploaded Files */}
          {files.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {files.map((file, index) => (
                <div key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded-lg">
                  <span>{file.name}</span>
                  <button onClick={() => handleRemoveFile(index)} className="ml-2">
                    <X size={14} className="text-gray-600 hover:text-gray-800" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 w-full md:w-[50%]">
            <FormInput
              label="Project Name"
              name="quoteName"
              value={formik.values.quoteName}
              handleChange={handleProductName}
              error={formik.touched.quoteName && formik.errors.quoteName}
            />
          </div>
          <div className="mt-4 w-full md:w-[50%]">
            <FormInput
              label="Message"
              textarea
              handleChange={handleMessageChange}
              error={formik.touched.message && formik.errors.message}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
