import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import DasboardLayout from "@/pages/Dasboard/layout";
import useSingleQuote from "@/pages/Dasboard/ems/quote/hooks/get-single-quote";
import LoaderIcon from "../icons/LoaderIcon";
import { QuoteType } from "@/__generated__/graphql";
import { Badge } from "../ui/Badge";

const EMSSingleQuotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { quote, isLoading } = useSingleQuote(id || "");

  if (isLoading) return <LoaderIcon />;

  if (!quote) return <div className="py-20 text-center h-[60vh] flex justify-center items-center">Quote not found</div>;

  return (
    <DasboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/ems/manage-quote")}
            text="← Back to Quotes"
            width="w-full"
          />
          <h1 className="text-2xl font-bold">{quote.title}</h1>
          <Badge variant={quote.quoteType === QuoteType.FixedQuote ? "default" : "secondary"}>
            {quote.quoteType === QuoteType.FixedQuote ? "Fixed" : "Open"}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{quote.description}</p>

                {/* TODO: Add technical requirements & deliverables */}
                {/* <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Technical Requirements</h4>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>• 4-layer PCB design</li>
                      <li>• High-frequency components</li>
                      <li>• BLE connectivity module</li>
                      <li>• Temperature sensors integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Deliverables</h4>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>• PCB design files</li>
                      <li>• Assembly documentation</li>
                      <li>• Test reports</li>
                      <li>• Final assembled units</li>
                    </ul>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            {/* TODO: Add project timeline & milestones */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Project Timeline & Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Design Phase</span>
                    <span className="text-sm text-gray-600">Week 1-2</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>PCB Manufacturing</span>
                    <span className="text-sm text-gray-600">Week 3-4</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Assembly & Testing</span>
                    <span className="text-sm text-gray-600">Week 5-6</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Quote ID</span>
                  <p className="font-medium">{quote.quoteId}</p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Budget Range</span>
                  <p className="font-medium text-green-600">${quote.budget}</p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Posted Date</span>
                  <p className="font-medium">{new Date(quote.createdAt).toLocaleDateString()}</p>
                </div>

                {/* <div>
                  <span className="text-sm text-gray-500">Deadline</span>
                  <p className="font-medium">{new Date(quote.deadlineAt).toLocaleDateString()}</p>
                </div> */}

                <div>
                  <span className="text-sm text-gray-500">Total Bids</span>
                  <p className="font-medium">{quote.bids?.length}</p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Category</span>
                  <p className="font-medium">{quote.quoteType === QuoteType.FixedQuote ? "Fixed" : "Open"}</p>
                </div>

                {/* <div>
                  <span className="text-sm text-gray-500">Complexity</span>
                  <p className="font-medium">{quote.complexity}</p>
                </div> */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Action Required</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full mb-3"
                  onClick={() => navigate(`/ems/manage-quote/${id}/bid`)}
                  text="Submit Bid"
                />
                <Button variant="outline" className="w-full" text="Save to Favorites" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DasboardLayout>
  );
};

export default EMSSingleQuotePage;
