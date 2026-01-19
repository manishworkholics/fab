import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Button from "@/components/ui/Buttons";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import { Upload } from "lucide-react";

interface FileData {
  // For project upload
  file?: {
    name: string;
    type: string;
    size: string;
    uploadDate: string;
    uploader: string;
  };
  projectId?: string;
  projectName?: string;

  // For NDA upload
  companyName?: string;
  documentName?: string;
  signedDate?: string;
  expiryDate?: string;
  status?: "Active" | "Expired";
  fileSize?: string;
  id?: string;
}

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
  onUpload: (fileData: FileData, type: "nda" | "project") => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ open, onClose, onUpload }) => {
  const [fileType, setFileType] = useState<"nda" | "project">("nda");
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = () => {
    if (fileType === "nda") {
      if (!file) return;
      onUpload(
        {
          id: Date.now().toString(),
          companyName,
          documentName,
          signedDate: new Date().toISOString().slice(0, 10),
          expiryDate: "2026-01-01",
          status: "Active",
          fileSize: `${(file.size / 1024).toFixed(1)} KB`,
        },
        "nda",
      );
    } else {
      if (files.length === 0) return;
      files.forEach((f) => {
        onUpload(
          {
            projectId,
            projectName,
            file: {
              name: f.name,
              type: "custom",
              size: `${(f.size / 1024).toFixed(1)} KB`,
              uploadDate: new Date().toISOString().slice(0, 10),
              uploader: "You",
            },
          },
          "project",
        );
      });
    }
    // Reset inputs
    setFile(null);
    setFiles([]);
    setProjectName("");
    setProjectId("");
    setCompanyName("");
    setDocumentName("");
    setFileType("nda");

    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="fileType">File Type</Label>
            <Select
              value={fileType}
              onValueChange={(value) => setFileType(value as "nda" | "project")}
            >
              <SelectTrigger id="fileType" className="w-full">
                <SelectValue placeholder="Select file type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nda">NDA</SelectItem>
                <SelectItem value="project">Project File</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {fileType === "project" && (
            <>
              <div>
                <Label>Project Name</Label>
                <Input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <Label>Project ID</Label>
                <Input
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  placeholder="Enter project ID"
                />
              </div>
            </>
          )}

          {fileType === "nda" && (
            <>
              <div>
                <Label>Company Name</Label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <Label>Document Name</Label>
                <Input
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                  placeholder="Enter document name"
                />
              </div>
            </>
          )}

          <div>
            <Label>File{fileType === "project" ? "s" : ""}</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-4 cursor-pointer text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Choose {fileType === "project" ? "files" : "a file"} to upload
              </p>
              <Input
                type="file"
                multiple={fileType === "project"}
                accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.png,.jpg,.jpeg,.zip,.rar"
                onChange={(e) => {
                  if (fileType === "project") {
                    setFiles(e.target.files ? Array.from(e.target.files) : []);
                  } else {
                    setFile(e.target.files?.[0] || null);
                  }
                }}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <span>Choose {fileType === "project" ? "Files" : "File"}</span>
                </Button>
              </Label>

              {fileType === "project" && files.length > 0 && (
                <ul className="mt-2 text-sm text-left max-h-24 overflow-y-auto">
                  {files.map((f) => (
                    <li key={f.name}>{f.name}</li>
                  ))}
                </ul>
              )}

              {fileType === "nda" && file && <p className="mt-2 text-sm">{file.name}</p>}
            </div>
          </div>
        </div>

        <DialogFooter className="pt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={fileType === "nda" ? !file : files.length === 0}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
