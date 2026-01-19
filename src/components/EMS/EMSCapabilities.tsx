import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { TabsContent } from "../ui/Tabs";
import { Factory } from "lucide-react";

interface EMSCompanyModalProps {
  company: any;
}

export default function EMSCapabilities({ company }: EMSCompanyModalProps) {
  if (!company) return null;

  const capabilities: string[] = company.manufacturingCapabilities ?? [];

  return (
    <TabsContent value="capabilities" className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Factory className="h-5 w-5" />
            Manufacturing Capabilities
          </CardTitle>
        </CardHeader>

        <CardContent>
          {capabilities.length === 0 ? (
            <p className="text-sm text-gray-500">No capabilities provided</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-muted rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
