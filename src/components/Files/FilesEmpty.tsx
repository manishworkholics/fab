import { FileText } from "lucide-react";
import EmptyState from "../ui/EmptyState";

export default function FilesEmpty() {
  return (
    <EmptyState
      icon={<FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />}
      title="No project files found"
      subtitle="Try adjusting your search criteria"
    />
  );
}
