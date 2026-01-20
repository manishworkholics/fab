import { useState } from "react";
import BidComparisonTable from "@/components/Quote/BidComparisonTable";
import AcceptBidModal from "@/components/Quote/AcceptBidModal";
import DasboardLayout from "../../../layout";


const dummyBids = [
    {
        id: "1",
        company: "ABC Electronics",
        price: 45000,
        days: 10,
        rating: 4.5,
    },
    {
        id: "2",
        company: "Zen Circuits",
        price: 42000,
        days: 14,
        rating: 4.2,
    },
    {
        id: "3",
        company: "Omega EMS",
        price: 47000,
        days: 8,
        rating: 4.8,
    },
];

export default function BidComparisonPage() {
    const [selectedBid, setSelectedBid] = useState<any>(null);
    const [open, setOpen] = useState(false);

    return (
        <DasboardLayout header="Bid Comparison">
            <div className="p-6 space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold">Bid Comparison</h1>
                    <p className="text-gray-500 text-sm">
                        Compare EMS bids and select the best offer
                    </p>
                </div>

                <BidComparisonTable
                    bids={dummyBids}
                    onAccept={(bid) => {
                        setSelectedBid(bid);
                        setOpen(true);
                    }}
                />

                <AcceptBidModal
                    open={open}
                    bid={selectedBid}
                    onClose={() => setOpen(false)}
                    onConfirm={() => {
                        console.log("Accepted bid:", selectedBid);
                        setOpen(false);
                    }}
                />
            </div>
        </DasboardLayout>
    );
}
