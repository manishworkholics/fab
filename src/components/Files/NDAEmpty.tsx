import { Shield } from "lucide-react";
import EmptyState from "../ui/EmptyState";

export default function NDAEmpty() {
  return (
    <EmptyState
      icon={<Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />}
      title="No NDA documents found"
      subtitle="Try adjusting your search criteria"
    />
  );
}
