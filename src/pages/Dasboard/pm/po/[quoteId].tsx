import POPreview from "@/components/PO/POPreview";
import DasboardLayout from "../../layout";

const dummyPO = {
    poNumber: "PO-10239",
    date: "2026-01-20",
    status: "Generated",

    buyer: {
        name: "Manish Kushwah",
        company: "FabSpace Pvt Ltd",
        email: "pm@fabspace.com",
    },

    supplier: {
        name: "Amit Sharma",
        company: "Zen Circuits",
        email: "sales@zencircuits.com",
    },

    items: [
        { name: "PCB Manufacturing", qty: 100, price: 120 },
        { name: "Assembly Service", qty: 100, price: 80 },
    ],

    total: 20000,
};

export default function POPage() {
    return (
        <DasboardLayout header="Purchase Order">
            <div className="p-6 bg-gray-100 min-h-screen">
                <POPreview po={dummyPO} />
            </div>
        </DasboardLayout>
    );
}
