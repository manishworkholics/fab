import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Search, FileText, Image, FileSpreadsheet, FileCode } from "lucide-react";
import Button from "@/components/ui/Buttons";
import Dashboardlayout from "@/pages/Dasboard/layout";
import { NDAFiles } from "./NDAFiles";
import { ProjectFiles } from "./ProjectFiles";
import { ndaDocuments, projectFiles } from "@/utils/constant";
import UploadModal from "./FileUpload";

const getFileIcon = (type: string) => {
  switch (type) {
    case "gerber":
      return <FileCode className="w-4 h-4 text-blue-600" />;
    case "bom":
      return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
    case "drawing":
      return <Image className="w-4 h-4 text-purple-600" />;
    case "pickplace":
      return <FileText className="w-4 h-4 text-orange-600" />;
    case "quote":
      return <FileText className="w-4 h-4 text-red-600" />;
    default:
      return <FileText className="w-4 h-4 text-gray-600" />;
  }
};

const getFileTypeBadge = (type: string) => {
  const variants = {
    gerber: "bg-blue-50 text-blue-700 border-blue-200",
    bom: "bg-green-50 text-green-700 border-green-200",
    drawing: "bg-purple-50 text-purple-700 border-purple-200",
    pickplace: "bg-orange-50 text-orange-700 border-orange-200",
    quote: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <Badge
      variant="outline"
      className={variants[type as keyof typeof variants] || "bg-gray-50 text-gray-700"}
    >
      {type.toUpperCase()}
    </Badge>
  );
};

const FilesView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadedProjects, setUploadedProjects] = useState(projectFiles);
  const [uploadedNDAs, setUploadedNDAs] = useState(ndaDocuments);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const filteredProjects = uploadedProjects.filter(
    (project) =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.files.some((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const filteredNDAs = uploadedNDAs.filter(
    (nda) =>
      nda.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nda.documentName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleFileUpload = (fileData: any, type: "nda" | "project") => {
    if (type === "nda") {
      setUploadedNDAs((prev) => [...prev, fileData]);
    } else {
      setUploadedProjects((prev) => {
        const projectIndex = prev.findIndex((p) => p.projectId === fileData.projectId);
        if (projectIndex !== -1) {
          const updatedProjects = [...prev];
          // Remove any existing file with the same name to avoid duplicates
          updatedProjects[projectIndex].files = [
            ...updatedProjects[projectIndex].files.filter((f) => f.name !== fileData.file?.name),
            fileData.file!,
          ];
          return updatedProjects;
        } else {
          return [
            ...prev,
            {
              id: Date.now(),
              projectId: fileData.projectId!,
              projectName: fileData.projectName!,
              files: [fileData.file!],
            },
          ];
        }
      });
    }
  };

  return (
    <Dashboardlayout header="Files & Documents" noPadding>
      <div className="p-6 bg-background min-h-screen">
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-muted-foreground">Manage project files and NDAs</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90" onClick={() => setIsUploadOpen(true)}>
            Upload Files
          </Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search files, projects, or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardContent className="p-4">
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-5">
                <TabsTrigger value="projects">Project Files</TabsTrigger>
                <TabsTrigger value="ndas">NDA Documents</TabsTrigger>
              </TabsList>
              <div className="w-full h-px bg-border mb-6" />
              <ProjectFiles
                projects={filteredProjects}
                getFileIcon={getFileIcon}
                getFileTypeBadge={getFileTypeBadge}
              />
              <NDAFiles ndas={filteredNDAs} />
            </Tabs>
          </CardContent>
        </Card>

        <UploadModal
          open={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
          onUpload={handleFileUpload}
        />
      </div>
    </Dashboardlayout>
  );
};

export default FilesView;
