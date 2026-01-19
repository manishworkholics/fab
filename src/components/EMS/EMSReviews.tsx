import { Card, CardContent } from "@/components/ui/Card";
import { renderStarRating } from "@/utils/helpers/renderStarRatings";
import { TabsContent } from "../ui/Tabs";

interface EMSCompanyModalProps {
  company: typeof import("@/utils/constant").emsCompanies[0];
}

export default function EMSReviews({ company }: EMSCompanyModalProps) {
  if (!company) {
    return null;
  }
  return (
    <TabsContent value="reviews" className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-primary">{company.rating}</div>
            <div className="text-muted-foreground">Average Rating</div>
            {renderStarRating(company.rating)}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-primary">{company.reviewCount}</div>
            <div className="text-muted-foreground">Total Reviews</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-primary">{company.projectsCompleted}</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium">U{i}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">User {i}</span>
                    {renderStarRating(Math.random() > 0.5 ? 5 : 4)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Excellent service and quality work. The team was professional and delivered on
                    time. Highly recommended for PCB assembly projects."
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    {new Date(
                      Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000,
                    ).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
}
