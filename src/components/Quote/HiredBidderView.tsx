import { Card, CardContent } from "../ui/Card";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import Button from "../ui/Buttons";
import { CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HiredBidderView({ quote }: { quote: any }) {
  const navigate = useNavigate();

  const ems = quote?.assignedEMS;
  const project = quote?.project;
  const bid = quote?.bids?.find((b: any) => b.bidderId == ems?.id);

  if (!ems) {
    return (
      <Card className="mt-4 py-10">
        <CardContent>
          <div className="text-center text-sm text-muted-foreground">
            No bidder hired yet.
          </div>
        </CardContent>
      </Card>
    );
  }

  const initials =
    (ems?.username?.charAt(0) || "E") +
    (ems?.username?.charAt(1) || "M");

  return (
    <Card className="mt-4 py-10 border-green-300 bg-green-50/40">
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex gap-4 flex-1">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{initials.toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">
                      {ems.username}
                    </h3>
                    <Badge className="bg-green-600 text-white">Hired</Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    EMS Vendor
                  </p>

                  <div className="mb-3">
                    <span className="text-xl font-bold text-green-700">
                      ${bid?.amount?.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                    <CheckCircle className="h-4 w-4" />
                    Bid accepted & project assigned
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 items-end">
                <Button
                  size="sm"
                  onClick={() =>
                    navigate(`/pm/rfq/quotation/${project?.id}/bid/hire`)

                  }
                >
                  Create Purchase Order
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    navigate(`/pm/projects/${project?.id}`)
                  }
                >
                  View Project
                </Button>

                <div className="text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 inline mr-1" />
                  {new Date(bid?.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
