import { DetailedBidsForQuoteDocument } from "@/__generated__/graphql";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import LoaderIcon from "../icons/LoaderIcon";
import { Card, CardContent } from "../ui/Card";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { Clock } from "lucide-react";
import Button from "../ui/Buttons";

export default function QuoteSubmissionsReview() {
  const { id } = useParams<{ id: string }>();

  const { data, loading } = useQuery(DetailedBidsForQuoteDocument, {
    variables: { quoteId: id || "" },
  });

  const bids = data?.detailedBidsForQuote || [];

  if (!data?.detailedBidsForQuote?.length) {
    return (
      <Card className="mt-4 py-10">
        <CardContent>
          <div className="text-center text-sm text-muted-foreground">
            No bids found. Please wait for the bidders to submit their bids.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      {loading && <LoaderIcon />}
      <Card className="mt-4 py-10">
        <CardContent>
          <div className="space-y-4">
            {bids.map((bidder) => (
              <div
                key={bidder.id}
                className="border rounded-lg p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {(bidder?.bidder?.firstName?.charAt(0) || "") +
                          (bidder?.bidder?.lastName?.charAt(0) || "") || "AB"}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">
                          {bidder?.bidder?.firstName + " " + bidder?.bidder?.lastName}
                        </h3>
                        <Badge variant="secondary">Best</Badge>
                      </div>
                      {/* TODO: Add company and location */}
                      {/* <p className="text-sm text-muted-foreground mb-1">{bidder?.bidder?.company}</p>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {bidder?.bidder?.location}
                      </p> */}

                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg font-bold">
                            ${bidder?.amount?.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {bidder?.additionalNotes}
                      </p>
                      {/* TODO: Add rating and jobs completed */}
                      {/* <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          {renderStars(bidder.rating)}
                          <span className="ml-1">{bidder?.bidder?.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{bidder.jobsCompleted} jobs completed</span>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link to={`/pm/rfq/quotation/${id}/bid/${bidder.id}`}>
                      <Button variant="default" size="sm">
                        View
                      </Button>
                    </Link>
                    <div className="text-xs text-center text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {new Date(bidder.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
