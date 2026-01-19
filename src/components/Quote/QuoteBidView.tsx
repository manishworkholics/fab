import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, LoaderIcon } from "lucide-react";
import Button from "../ui/Buttons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Label } from "../ui/Label";
import { Separator } from "../ui/Separator";
import DasboardLayout from "../../pages/Dasboard/layout";
import { useQuery } from "@apollo/client";
import { DetailedBidByIdDocument } from "@/__generated__/graphql";

export default function QuoteBidView() {
  const { id, bidId } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useQuery(DetailedBidByIdDocument, {
    variables: { bidId: bidId || "" },
  });

  const bid = data?.detailedBid;

  if (loading) return <LoaderIcon />;

  const quoteData = {
    companyName: "...", // TODO: Add company name
    contactPerson: bid?.bidder?.firstName + " " + bid?.bidder?.lastName,
    email: bid?.bidder?.email,
    relevantExperience: bid?.projectApproach?.relevantExperience,
    technicalApproach: bid?.projectApproach?.technicalApproach,
    estimatedTimeline: bid?.projectApproach?.estimatedTimeline,
    additionalNotes: bid?.additionalNotes,
  };

  return (
    <DasboardLayout>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" onClick={() => navigate(`/pm/rfq/quotation/${id}`)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">PCB Assembly - IoT Device</h1>
              <p className="text-muted-foreground">Quote from {quoteData.companyName}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={quoteData.companyName}
                    readOnly
                    className="bg-muted/30"
                  />
                </div>
                <div>
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    value={quoteData.contactPerson}
                    readOnly
                    className="bg-muted/30"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" value={quoteData.email} readOnly className="bg-muted/30" />
                </div>
              </CardContent>
            </Card>

            {/* Project Approach */}
            <Card>
              <CardHeader>
                <CardTitle>Project Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="relevantExperience">Relevant Experience</Label>
                  <Textarea
                    id="relevantExperience"
                    value={quoteData.relevantExperience || ""}
                    readOnly
                    className="min-h-[80px] bg-muted/30"
                    placeholder="Describe your relevant experience..."
                  />
                </div>
                <div>
                  <Label htmlFor="technicalApproach">Technical Approach</Label>
                  <Textarea
                    id="technicalApproach"
                    value={quoteData.technicalApproach || ""}
                    readOnly
                    className="min-h-[80px] bg-muted/30"
                    placeholder="How will you approach this project..."
                  />
                </div>
                <div>
                  <Label htmlFor="estimatedTimeline">Estimated Timeline</Label>
                  <Input
                    id="estimatedTimeline"
                    value={quoteData.estimatedTimeline || ""}
                    readOnly
                    className="bg-muted/30"
                    placeholder="e.g., 6-8 weeks"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Breakdown */}
          <Card className="mt-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pricing Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-12 gap-4 font-medium text-sm text-muted-foreground">
                  <div className="col-span-5">Description</div>
                  <div className="col-span-3">Price ($)</div>
                  <div className="col-span-3">Timeline</div>
                  <div className="col-span-1"></div>
                </div>

                {bid?.pricingBreakdown?.map((item) => (
                  <div key={item.description} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5">
                      <Input
                        value={item.description}
                        placeholder="Enter description"
                        readOnly
                        className="bg-muted/30"
                      />
                    </div>
                    <div className="col-span-3">
                      <Input
                        type="number"
                        value={item.price}
                        placeholder="0.00"
                        readOnly
                        className="bg-muted/30"
                      />
                    </div>
                    <div className="col-span-3">
                      <Input
                        value={item.description || ""}
                        placeholder="e.g., 2 weeks"
                        readOnly
                        className="bg-muted/30"
                      />
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="flex justify-end">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Total Estimated Cost:</div>
                    <div className="text-2xl font-bold text-green-600">${bid?.amount}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={quoteData.additionalNotes || ""}
                readOnly
                className="min-h-[100px] bg-muted/30"
                placeholder="Any additional information or terms..."
              />
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              onClick={() => navigate(`/pm/rfq/quotation/${id}/bid/${bidId}/hire`)}
            >
              Hire This Bidder
            </Button>
            <Button variant="outline" onClick={() => navigate(`/pm/rfq/quotation/${id}`)}>
              Back to Bidders
            </Button>
          </div>
        </div>
      </div>
    </DasboardLayout>
  );
}
