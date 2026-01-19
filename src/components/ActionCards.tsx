import { FileText, Package, TrendingUp, Calculator, Download } from "lucide-react";
import Button from "./ui/Buttons";

const actions = [
  {
    label: "Generate Project ID",
    icon: FileText,
    variant: "outline" as const,
  },
  {
    label: "Issue PO",
    icon: Package,
    variant: "outline" as const,
  },
  {
    label: "Track Project Status",
    icon: TrendingUp,
    variant: "outline" as const,
  },
  {
    label: "Quotation",
    icon: Calculator,
    variant: "outline" as const,
  },
  {
    label: "Get Files",
    icon: Download,
    variant: "outline" as const,
  },
];

export function ActionCards() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant}
          text={action.label}
          leftIcon={<action.icon className="h-4 w-4" />}
          className="flex items-center gap-2 text-accent border-accent/20 hover:bg-accent/10 hover:border-accent/30 w-full md:w-auto"
        />
      ))}
    </div>
  );
}
