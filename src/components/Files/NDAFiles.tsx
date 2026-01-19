import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Button from "@/components/ui/Buttons";
import { Download, Shield } from "lucide-react";
import NDAEmpty from "./NDAEmpty";
import { TabsContent } from "../ui/Tabs";

interface NDA {
  id?: string | number;
  documentName?: string;
  companyName?: string;
  signedDate?: string;
  expiryDate?: string;
  status?: "Active" | "Expired" | string;
}

interface NDAFilesProps {
  ndas: NDA[];
}

export const NDAFiles = ({ ndas }: NDAFilesProps) => {
  return (
    <TabsContent value="ndas" className="space-y-4">
      <div className="grid gap-4">
        {ndas.map((nda) => (
          <Card key={nda.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{nda.documentName}</h3>
                    <p className="text-sm text-muted-foreground">{nda.companyName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right text-sm">
                    <p className="text-muted-foreground">Signed: {nda.signedDate}</p>
                    <p className="text-muted-foreground">Expires: {nda.expiryDate}</p>
                  </div>
                  <Badge
                    variant={nda.status === "Active" ? "default" : "secondary"}
                    className={
                      nda.status === "Active"
                        ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-80"
                        : ""
                    }
                  >
                    {nda.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-[auto]"
                      leftIcon={<Download className="w-4 h-4" />}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {ndas.length === 0 && <NDAEmpty />}
    </TabsContent>
  );
};
