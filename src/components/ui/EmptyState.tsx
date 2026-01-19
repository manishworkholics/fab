import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/Card";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

export default function EmptyState({ icon, title, subtitle }: EmptyStateProps) {
  return (
    <Card className="text-center py-12">
      <CardContent>
        <div className="text-muted-foreground">
          {icon}
          <p className="text-lg mb-2">{title}</p>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
