import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BidComparisonTable from "@/components/Quote/BidComparisonTable";
import AcceptBidModal from "@/components/Quote/AcceptBidModal";
import DasboardLayout from "../../../layout";
import LoaderIcon from "@/components/icons/LoaderIcon";
import { useQuoteBids } from "@/grahpql/hooks/useQuoteBids";
import { useAcceptQuoteBid } from "@/grahpql/hooks/useAcceptQuoteBid";

export default function BidComparisonPage() {
    const { quoteId } = useParams<{ quoteId: string }>();
    const navigate = useNavigate();

    const { bids, loading, refetch } = useQuoteBids(quoteId || "");
    const { acceptBid } = useAcceptQuoteBid();

    const [selectedBid, setSelectedBid] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const handleAcceptConfirm = async () => {
        if (!selectedBid) return;

        try {
            await acceptBid(selectedBid.id);

            setOpen(false);
            await refetch();

            // optional redirect
            navigate("/pm/projects");

        } catch (err) {
            console.error("Accept bid failed", err);
            alert("Failed to accept bid");
        }
    };

    return (
        <DasboardLayout header="Bid Comparison">
            <div className="p-6 space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold">Bid Comparison</h1>
                    <p className="text-gray-500 text-sm">
                        Compare EMS bids and select the best offer
                    </p>
                </div>

                {loading ? (
                    <div className="py-20 text-center">
                        <LoaderIcon />
                    </div>
                ) : (
                    <BidComparisonTable
                        bids={bids}
                        onAccept={(bid) => {
                            setSelectedBid(bid);
                            setOpen(true);
                        }}
                    />
                )}

                <AcceptBidModal
                    open={open}
                    bid={selectedBid}
                    //   loading={accepting}
                    onClose={() => setOpen(false)}
                    onConfirm={handleAcceptConfirm}
                />
            </div>
        </DasboardLayout>
    );
}
