// import React, { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import Button from "@/components/ui/Buttons";
// import { Input } from "@/components/ui/Input";
// import DasboardLayout from "@/pages/Dasboard/layout";

// // Quote Bid Form Component
// const QuoteBidForm = ({ quote, onBack }: { quote: any; onBack: () => void }) => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     contactPerson: "",
//     email: "",
//     phone: "",
//     experience: "",
//     approach: "",
//     timeline: "",
//     notes: "",
//   });

//   const [pricingItems, setPricingItems] = useState([
//     { description: "Boards and Components", price: "" },
//     { description: "Turn Time", price: "" },
//     { description: "Stencil", price: "" },
//     { description: "Cluso programming", price: "" },
//   ]);

//   const addPricingItem = () => {
//     setPricingItems([...pricingItems, { description: "", price: "" }]);
//   };

//   const updatePricingItem = (index: number, field: string, value: string) => {
//     const updated = [...pricingItems];
//     updated[index] = { ...updated[index], [field]: value };
//     setPricingItems(updated);
//   };

//   const removePricingItem = (index: number) => {
//     setPricingItems(pricingItems.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Bid submitted:", { formData, pricingItems });
//     // Handle form submission
//     onBack();
//   };

//   return (
//     <DasboardLayout>
//       <div className="p-6 space-y-6">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" onClick={onBack} text="← Back to Quote" width="w-full" />
//           <h1 className="text-2xl font-bold">Submit Bid - {quote.title}</h1>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="">
//             {/* Project Approach */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Project Approach</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Relevant Experience</label>
//                   <textarea
//                     className="w-full p-3 border rounded-md resize-none h-24"
//                     value={formData.experience}
//                     onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
//                     placeholder="Describe your relevant experience..."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Technical Approach</label>
//                   <textarea
//                     className="w-full p-3 border rounded-md resize-none h-24"
//                     value={formData.approach}
//                     onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
//                     placeholder="How will you approach this project..."
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-1">Estimated Timeline</label>
//                   <Input
//                     value={formData.timeline}
//                     onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
//                     placeholder="e.g., 6-8 weeks"
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Dynamic Pricing Section */}
//           <Card>
//             <CardHeader>
//               <div className="flex justify-between items-center">
//                 <CardTitle>Pricing Breakdown</CardTitle>
//                 <Button type="button" variant="outline" onClick={addPricingItem} text="Add Item" />
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {pricingItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg"
//                   >
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Description</label>
//                       <Input
//                         value={item.description}
//                         onChange={(e) => updatePricingItem(index, "description", e.target.value)}
//                         placeholder="Service description"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1">Price ($)</label>
//                       <Input
//                         type="number"
//                         value={item.price}
//                         onChange={(e) => updatePricingItem(index, "price", e.target.value)}
//                         placeholder="0.00"
//                       />
//                     </div>

//                     <div className="flex items-end">
//                       <Button
//                         type="button"
//                         variant="outline"
//                         onClick={() => removePricingItem(index)}
//                         text="Remove"
//                         className="text-red-600 hover:text-red-700"
//                       ></Button>
//                     </div>
//                   </div>
//                 ))}

//                 <div className="flex justify-end pt-4 border-t">
//                   <div className="text-right">
//                     <span className="text-sm text-gray-500">Total Estimated Cost: </span>
//                     <span className="text-lg font-bold text-green-600">
//                       $
//                       {pricingItems
//                         .reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0)
//                         .toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Additional Notes */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Additional Notes</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <textarea
//                 className="w-full p-3 border rounded-md resize-none h-32"
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 placeholder="Any additional information or special considerations..."
//               />
//             </CardContent>
//           </Card>

//           {/* Submit Actions */}
//           <div className="flex gap-4 justify-end">
//             <Button type="button" variant="outline" onClick={onBack} text="Cancel" />
//             <Button type="submit" text="Submit Bid" />
//           </div>
//         </form>
//       </div>
//     </DasboardLayout>
//   );
// };

// export default QuoteBidForm;



import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Buttons";
import { Input } from "@/components/ui/Input";
import DasboardLayout from "@/pages/Dasboard/layout";
import { useParams, useNavigate } from "react-router-dom";
import { usePlaceDetailedBid } from "@/grahpql/hooks/usePlaceDetailedBid";
import Congratulation from "@/components/Congratulation";

function ErrorModal({
  isOpen,
  message,
  onClose,
}: {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-3">Submission Failed</h2>

          <p className="text-gray-700 mb-6">{message}</p>

          <Button text="OK" handleClick={onClose} />
        </div>
      </div>
    </>
  );
}



const QuoteBidForm = ({ quote, onBack }: { quote: any; onBack: () => void }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { id: quoteId } = useParams();
  const navigate = useNavigate();

  const { placeBid, loading } = usePlaceDetailedBid();

  const [formData, setFormData] = useState({
    experience: "",
    approach: "",
    timeline: "",
    notes: "",
  });

  const [pricingItems, setPricingItems] = useState([
    { description: "Boards and Components", unitPrice: "", quantity: "1" },
    { description: "Turn Time", unitPrice: "", quantity: "1" },
  ]);

  const addPricingItem = () => {
    setPricingItems([...pricingItems, { description: "", unitPrice: "", quantity: "1" }]);
  };

  const updatePricingItem = (index: number, field: string, value: string) => {
    const updated = [...pricingItems];
    updated[index] = { ...updated[index], [field]: value };
    setPricingItems(updated);
  };

  const removePricingItem = (index: number) => {
    setPricingItems(pricingItems.filter((_, i) => i !== index));
  };

  const totalAmount = pricingItems.reduce(
    (sum, item) => sum + (Number(item.unitPrice) || 0) * (Number(item.quantity) || 1),
    0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!quoteId) {
      alert("Quote ID missing");
      return;
    }

    const pricingBreakdown = pricingItems.map((item) => ({
      description: item.description,
      unitPrice: Number(item.unitPrice),
      quantity: Number(item.quantity),
      totalPrice: Number(item.unitPrice) * Number(item.quantity),
    }));

    const input = {
      relevantExperience: formData.experience,
      technicalApproach: formData.approach,
      estimatedTimeline: formData.timeline,
      pricingBreakdown,
      additionalNotes: formData.notes,
    };

    // try {
    //   const res = await placeBid(quoteId, input);
    //   console.error(res);
    //   alert("✅ Bid submitted successfully!");
    //   navigate("/ems/manage-quote");

    // } catch (error: any) {
    //   console.error(error);

    //   // 👇 Extract GraphQL error message safely
    //   const graphQLErrorMessage =
    //     error?.graphQLErrors?.[0]?.message ||
    //     error?.networkError?.result?.errors?.[0]?.message ||
    //     "Something went wrong while submitting bid";

    //   alert(`❌ ${graphQLErrorMessage}`);
    // }

    try {
      await placeBid(quoteId, input);

      // ✅ Show success modal instead of alert
      setShowSuccessModal(true);

    } catch (error: any) {
      console.error(error);

      const graphQLErrorMessage =
        error?.graphQLErrors?.[0]?.message ||
        error?.networkError?.result?.errors?.[0]?.message ||
        "Something went wrong while submitting bid";

      // ❌ Show error modal instead of alert
      setErrorMessage(graphQLErrorMessage);
      setShowErrorModal(true);
    }

  };


  return (
    <DasboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} text="← Back to Quote" width="w-full" />
          <h1 className="text-2xl font-bold">Submit Bid - {quote.title}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Approach */}
          <Card>
            <CardHeader>
              <CardTitle>Project Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Relevant Experience</label>
                <textarea
                  className="w-full p-3 border rounded-md resize-none h-24"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Technical Approach</label>
                <textarea
                  className="w-full p-3 border rounded-md resize-none h-24"
                  value={formData.approach}
                  onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Estimated Timeline</label>
                <Input
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  placeholder="e.g., 12 days"
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing Breakdown */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Pricing Breakdown</CardTitle>
                <Button type="button" variant="outline" onClick={addPricingItem} text="Add Item" />
              </div>
            </CardHeader>
            <CardContent>

              {/* ===== Header Labels (NEW) ===== */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs text-gray-500 mb-2 px-1">
                <span>Item Name</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span></span>
              </div>


              <div className="space-y-4">
                {pricingItems.map((item, index) => {
                  const rowTotal =
                    (Number(item.unitPrice) || 0) *
                    (Number(item.quantity) || 1);

                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      {/* Item */}
                      <Input
                        value={item.description}
                        onChange={(e) =>
                          updatePricingItem(index, "description", e.target.value)
                        }
                        placeholder="Description"
                      />

                      {/* Unit Price */}
                      <Input
                        type="number"
                        min={0}
                        step="0.01"
                        value={item.unitPrice}
                        onChange={(e) =>
                          updatePricingItem(
                            index,
                            "unitPrice",
                            Math.max(0, Number(e.target.value)).toString()
                          )
                        }
                        placeholder="Unit Price"
                      />


                      {/* Quantity */}
                      <Input
                        type="number"
                        min={1}
                        step="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updatePricingItem(
                            index,
                            "quantity",
                            Math.max(1, Number(e.target.value)).toString()
                          )
                        }
                        placeholder="Qty"
                      />


                      {/* ===== Total (NEW) ===== */}
                      <div className="flex items-center font-medium text-gray-700">
                        ${rowTotal.toFixed(2)}
                      </div>

                      {/* Remove */}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removePricingItem(index)}
                        text="Remove"
                        className="text-red-600"
                      />
                    </div>
                  );
                })}


                {/* Bottom Total (unchanged) */}
                <div className="flex justify-end pt-4 border-t">
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Total Estimated Cost: </span>
                    <span className="text-lg font-bold text-green-600">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

            </CardContent>

          </Card>

          {/* Additional Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full p-3 border rounded-md resize-none h-32"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onBack} text="Cancel" />
            <Button type="submit" text={loading ? "Submitting..." : "Submit Bid"} disabled={loading} />
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <Congratulation
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          navigate("/ems/manage-quote");
        }}
      />

      {/* Error Modal */}
      <ErrorModal
        isOpen={showErrorModal}
        message={errorMessage}
        onClose={() => setShowErrorModal(false)}
      />

    </DasboardLayout>
  );
};

export default QuoteBidForm;
