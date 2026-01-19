import { useState } from "react";
import { Calendar, Download, FolderClosed, FolderOpen, User } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { TabsContent } from "@/components/ui/Tabs";
import FilesEmpty from "./FilesEmpty";

interface File {
  name: string;
  size: string;
  uploadDate: string;
  uploader: string;
  type: string;
}

interface Project {
  id: string | number;
  projectId: string | number;
  projectName: string;
  files: File[];
}

interface ProjectFilesProps {
  projects: Project[];
  getFileIcon: (type: string) => JSX.Element;
  getFileTypeBadge: (type: string) => JSX.Element;
}

export const ProjectFiles = ({ projects, getFileIcon, getFileTypeBadge }: ProjectFilesProps) => {
  const [selectedProject, setSelectedProject] = useState<string | number | null>(null);

  return (
    <TabsContent value="projects" className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">{project.projectName}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.projectId}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{project.files.length} files</Badge>
                <Button
                  variant="outline"
                  size="sm"
                  text={selectedProject === project.projectId ? "Collapse" : "View Files"}
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.projectId ? null : project.projectId,
                    )
                  }
                  leftIcon={
                    selectedProject === project.projectId ? (
                      <FolderOpen className="w-4 h-4 mr-2" />
                    ) : (
                      <FolderClosed className="w-4 h-4 mr-2" />
                    )
                  }
                />
              </div>
            </div>
          </CardHeader>

          {selectedProject === project.projectId && (
            <CardContent>
              <div className="space-y-3">
                {project.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/5"
                  >
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.type)}
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{file.size}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {file.uploadDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {file.uploader}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getFileTypeBadge(file.type)}
                      <Button
                        variant="default"
                        size="sm"
                        className="w-[auto]"
                        leftIcon={<Download className="w-4 h-4" />}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      ))}

      {projects.length === 0 && <FilesEmpty />}
    </TabsContent>
  );
};
