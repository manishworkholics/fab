import { Factory } from "lucide-react";
import EmptyState from "../ui/EmptyState";

export default function EMSNoResults() {
  return (
    <EmptyState
      icon={<Factory className="h-12 w-12 mx-auto mb-4 opacity-50" />}
      title="No EMS companies found"
      subtitle="Try adjusting your search criteria or filters"
    />
  );
}
