import { CheckCircle, FileText, TrendingUp, Hash, ShoppingCart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/Card";

const agentItems = [
  {
    title: "BOM Checker",
    icon: CheckCircle,
    color: "bg-orange-light text-accent border-accent/20",
    path: "/bom-checker",
  },
  {
    title: "Document Generation",
    icon: FileText,
    color: "bg-orange-light text-accent border-accent/20",
    path: "/document-generation",
  },
];

const featureItems = [
  {
    title: "Track project status with ease",
    icon: TrendingUp,
    color: "bg-yellow-50 text-yellow-600 border-yellow-200",
  },
  {
    title: "Generate Project ID",
    icon: Hash,
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    title: "View Purchase Orders",
    icon: ShoppingCart,
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    title: "Join the community & get access to amazing deals",
    icon: Users,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
];

interface AgentCardsProps {
  type: "agents" | "features";
}

export function AgentCards({ type }: AgentCardsProps) {
  const navigate = useNavigate();
  const items = type === "agents" ? agentItems : featureItems;

  const handleCardClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <Card
          key={index}
          className="cursor-pointer transition-all duration-200 hover:shadow-md border"
          onClick={() => handleCardClick(item)}
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center border ${item.color}`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item.title}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
