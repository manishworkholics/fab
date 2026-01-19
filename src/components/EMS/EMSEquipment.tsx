import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { TabsContent } from "../ui/Tabs";
import { Video } from "lucide-react";


interface EMSCompanyModalProps {
  company: any;
}

export default function EMSEquipments({ company }: EMSCompanyModalProps) {
  if (!company) return null;

  const equipmentList: string[] = company.equipmentList ?? [];

  return (
    <TabsContent value="equipment" className="space-y-4">
      {/* Equipment List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Equipment List</CardTitle>
        </CardHeader>
        <CardContent>
          {equipmentList.length === 0 ? (
            <p className="text-sm text-gray-500">No equipment listed</p>
          ) : (
            <div className="space-y-2">
              {equipmentList.map((equipment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border rounded-lg"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{equipment}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Facility Video */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Video className="h-5 w-5" />
            Facility Walkthrough
          </CardTitle>
        </CardHeader>
        <CardContent>
          {company.facilityVideoUrl ? (
            <video
              src={company.facilityVideoUrl}
              controls
              className="w-full rounded-lg"
            />
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground">No facility video available</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
