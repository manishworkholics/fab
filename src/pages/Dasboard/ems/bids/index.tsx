import { useState } from "react";
import EditBidModal from "@/components/EMS/EditBidModal";
import DasboardLayout from "../../layout";

const dummyBids = [
    {
        id: "1",
        quoteId: "Q102",
        project: "PCB Manufacturing",
        price: 45000,
        days: 10,
        status: "Pending",
    },
    {
        id: "2",
        quoteId: "Q108",
        project: "Controller Board",
        price: 38000,
        days: 14,
        status: "Accepted",
    },
];

export default function EMSBidsPage() {
    const [selectedBid, setSelectedBid] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const handleEdit = (bid: any) => {
        setSelectedBid(bid);
        setOpen(true);
    };

    const handleWithdraw = (id: string) => {
        if (confirm("Withdraw this bid?")) {
            console.log("Withdraw bid:", id);
        }
    };

    return (
        <DasboardLayout header="My Bids">
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-semibold">My Bids</h1>

                <div className="bg-white rounded-xl shadow border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="p-3 text-left">Quote ID</th>
                                <th className="p-3 text-left">Project</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Days</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {dummyBids.map((bid) => (
                                <tr key={bid.id} className="border-t">
                                    <td className="p-3">{bid.quoteId}</td>
                                    <td className="p-3">{bid.project}</td>
                                    <td className="p-3">₹ {bid.price}</td>
                                    <td className="p-3">{bid.days}</td>
                                    <td className="p-3">
                                        <span
                                            className={`px-2 py-1 rounded text-xs ${bid.status === "Accepted"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {bid.status}
                                        </span>
                                    </td>
                                    <td className="p-3 text-right space-x-2">
                                        <button
                                            onClick={() => handleEdit(bid)}
                                            className="px-3 py-1 text-xs bg-blue-600 text-white rounded"
                                            disabled={bid.status === "Accepted"}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleWithdraw(bid.id)}
                                            className="px-3 py-1 text-xs bg-red-600 text-white rounded"
                                            disabled={bid.status === "Accepted"}
                                        >
                                            Withdraw
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <EditBidModal
                    open={open}
                    bid={selectedBid}
                    onClose={() => setOpen(false)}
                    onSave={(data) => {
                        console.log("Updated bid:", data);
                        setOpen(false);
                    }}
                />
            </div>
        </DasboardLayout>
    );
}
