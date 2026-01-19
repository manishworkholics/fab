import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { TabsContent } from "../ui/Tabs";
import { Award, Building } from "lucide-react";
import { Badge } from "../ui/Badge";
import { renderStarRating } from "@/utils/helpers/renderStarRatings";

interface EMSCompanyModalProps {
  company: typeof import("@/utils/constant").emsCompanies[0];
}

export default function EMSOverview({ company }: EMSCompanyModalProps) {
  if (!company) {
    return null;
  }
  return (
    <TabsContent value="overview" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Building className="h-5 w-5" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span>{company.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Established:</span>
              <span>{company.established}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Employees:</span>
              <span>{company.employees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rating:</span>
              <div>{renderStarRating(company.rating)}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {company.certifications.map((cert) => (
                <Badge key={cert} variant="secondary">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Specialties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {company.specialties.map((specialty) => (
              <Badge
                key={specialty}
                variant="outline"
                className="border border-[#F56630] bg-primary/10"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
