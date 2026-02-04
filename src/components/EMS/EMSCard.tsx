// import Button from "@/components/ui/Buttons";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { Badge } from "@/components/ui/Badge";
// import { MapPin } from "lucide-react";
// import EMSCompanyModal from "./EMSCompanyModal";
// import { renderStarRating } from "@/utils/helpers/renderStarRatings";

// export default function EMSCard({ company, setSelectedCompany, selectedCompany }: any) {
//   if (!company) {
//     return null;
//   }
//   return (
//     <Card key={company.id} className="hover:shadow-lg transition-shadow cursor-pointer">
//       <CardHeader>
//         <div className="flex items-start justify-between">
//           <div className="flex-1">
//             <CardTitle className="text-lg mb-2">{company.name}</CardTitle>
//             <div className="flex items-center text-muted-foreground mb-2">
//               <MapPin className="h-4 w-4 mr-1" />
//               <span className="text-sm">{company.location}</span>
//             </div>
//             <div className="flex items-center gap-2 mb-3">
//               {renderStarRating(company.rating)}
//               <span className="text-sm text-muted-foreground">({company.reviewCount} reviews)</span>
//             </div>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-3">
//           <div>
//             <p className="text-sm font-medium mb-1">Capabilities:</p>
//             <div className="flex flex-wrap gap-1">
//               {company?.capabilities?.slice(0, 3)?.map((capability: any) => (
//                 <Badge key={capability} variant="secondary" className="text-xs">
//                   {capability}
//                 </Badge>
//               ))}
//               {company?.capabilities?.length > 3 && (
//                 <Badge variant="outline" className="text-xs">
//                   +{company.capabilities.length - 3} more
//                 </Badge>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <span className="text-muted-foreground">Projects Completed:</span>
//             <span className="font-medium">{company?.projectsCompleted?.toLocaleString()}</span>
//           </div>

//           <div className="flex gap-2 pt-2">
//             <EMSCompanyModal company={company} setSelectedCompany={setSelectedCompany} />

//             <Button
//               size="sm"
//               className="flex-1"
//               onClick={() => console.log("Request Quote clicked", selectedCompany)}
//               text={"Request Quote"}
//             />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }






import Button from "@/components/ui/Buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin } from "lucide-react";
import EMSCompanyModal from "./EMSCompanyModal";
import { useNavigate } from "react-router-dom";


export default function EMSCard({

  company,
  setSelectedCompany, }: any) {
  if (!company) return null;
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {/* Company Name */}
            <CardTitle className="text-lg mb-2">
              {company?.companyName}
            </CardTitle>

            {/* Location */}
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">
                {company.location || "Location not provided"}
              </span>
            </div>

            {/* Status */}
            <Badge variant="secondary">
              {company.EMSAvailabilityStatus || "OPEN"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">

          {/* Capabilities */}
          <div>
            <p className="text-sm font-medium mb-1">Capabilities:</p>
            <div className="flex flex-wrap gap-1">
              {company?.manufacturingCapabilities?.slice(0, 3)?.map(
                (cap: string) => (
                  <Badge key={cap} variant="secondary" className="text-xs">
                    {cap}
                  </Badge>
                )
              )}

              {company?.manufacturingCapabilities?.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{company.manufacturingCapabilities.length - 3} more
                </Badge>
              )}

              {!company?.manufacturingCapabilities?.length && (
                <span className="text-xs text-muted-foreground">
                  Not specified
                </span>
              )}
            </div>
          </div>

          {/* Projects completed */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Projects Completed:</span>
            <span className="font-medium">
              {company.projectsCompleted ?? 0}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <EMSCompanyModal
              company={company}
              setSelectedCompany={setSelectedCompany}
            />

            <Button
              size="sm"
              className="flex-1"
              onClick={() =>
                navigate(`/pm/new-quote?assignedEMSId=${company.id}`)
              }

              text={"Request Quote"}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

