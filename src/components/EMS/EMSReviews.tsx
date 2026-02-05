import { Card, CardContent } from "@/components/ui/Card";
import { renderStarRating } from "@/utils/helpers/renderStarRatings";
import { TabsContent } from "../ui/Tabs";
import { EMSProfile } from "@/types/ems";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from "react";

/* =============================
   Queries & Mutations (manual)
============================= */

const GET_EMS_REVIEWS = gql`
  query GetEMSReviews($emsId: Int!) {
    emsReviews(emsId: $emsId) {
      rating
      comment
      reviewerName
      createdAt
    }
  }
`;

const CREATE_REVIEW = gql`
  mutation CreateReview(
    $pmId: Int!
    $emsId: Int!
    $rating: Int!
    $comment: String!
  ) {
    createReview(
      pmId: $pmId
      input: {
        emsId: $emsId
        rating: $rating
        comment: $comment
      }
    ) {
      id
    }
  }
`;


/* ============================= */

interface EMSCompanyModalProps {
  company: EMSProfile;
}

export default function EMSReviews({ company }: EMSCompanyModalProps) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  /* fetch reviews */
  const { data, loading } = useQuery(GET_EMS_REVIEWS, {
    variables: { emsId: company.id },
    skip: !company?.id,
  });

  /* create review */
  // const [createReview, { loading: submitting }] = useMutation(CREATE_REVIEW, {
  //   onCompleted: () => {
  //     setOpen(false);
  //     setComment("");
  //     setRating(5);
  //     refetch(); // refresh list
  //   },
  // });

  const [createReview, { loading: submitting }] = useMutation(CREATE_REVIEW, {
    refetchQueries: ["GetAllEMS", "GetEMSReviews"],

    onCompleted: () => {
      setOpen(false);     // ⭐ close modal
      setComment("");    // reset form
      setRating(5);
    },
  });


  const reviews = data?.emsReviews ?? [];

  if (!company) return null;

  return (
    <TabsContent value="reviews" className="space-y-4">
      {/* ================= Stats ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-primary">
              {company.rating}
            </div>
            <div className="text-muted-foreground">Average Rating</div>
            {renderStarRating(company.rating)}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-primary">
              {company.reviewCount}
            </div>
            <div className="text-muted-foreground">Total Reviews</div>
          </CardContent>
        </Card>
      </div>

      {/* ================= Add Review Button ================= */}
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
          onClick={() => setOpen(true)}
        >
          + Write Review
        </button>
      </div>

      {/* ================= Modal ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px] space-y-4">
            <h3 className="text-lg font-semibold">Write Review</h3>

            {/* rating */}
            <div>
              <label className="text-sm">Rating</label>
              <select
                className="w-full border rounded p-2 mt-1"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star
                  </option>
                ))}
              </select>
            </div>

            {/* comment */}
            <div>
              <label className="text-sm">Comment</label>
              <textarea
                className="w-full border rounded p-2 mt-1"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            {/* actions */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                disabled={submitting}
                className="px-3 py-2 bg-primary text-white rounded"
                onClick={() =>
                  createReview({
                    variables: {
                      pmId: Number(user.id),
                      emsId: company.id,
                      rating,
                      comment,
                    },
                  })
                }
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= Reviews List ================= */}
      <div className="space-y-4">
        {loading && <p>Loading reviews...</p>}

        {!loading && reviews.length === 0 && (
          <p className="text-muted-foreground text-sm">No reviews yet</p>
        )}

        {reviews.map((review: any, index: number) => (
          <Card key={index}>
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  {review.reviewerName?.[0] ?? "U"}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">
                      {review.reviewerName}
                    </span>
                    {renderStarRating(review.rating)}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {review.comment}
                  </p>

                  <div className="text-xs text-muted-foreground mt-2">
                    {new Date(review.createdAt).toLocaleDateString()}
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
