// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, Upload, Download, Send } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { Input } from "@/components/ui/Input";
// import { Label } from "@/components/ui/Label";
// import { Textarea } from "@/components/ui/Textarea";
// import { Separator } from "@/components/ui/Separator";
// import Button from "@/components/ui/Buttons";
// import DashboardLayout from "@/pages/Dasboard/layout";

// export default function IssuePOForm() {
//   const { id } = useParams();

//   const navigate = useNavigate();

//   const [poData, setPOData] = useState({
//     poNumber: "PO-2024-001",
//     vendor: "Protronics Inc.",
//     vendorContact: "James Brown",
//     projectName: "PCB Assembly",
//     description: "PCB Assembly for Solar Panel Controller",
//     quantity: "50",
//     unitPrice: "413.20",
//     totalAmount: "20660.00",
//     deliveryDate: "2024-01-15",
//     terms: "Net 30",
//     notes: ""
//   });

//   const handleInputChange = (field: string, value: string) => {
//     setPOData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSavePO = () => {
//     // In real app, save PO via API
//     console.log("Saving PO:", poData);
//   };

//   const handleSendPO = () => {
//     // In real app, send PO via API
//     console.log("Sending PO:", poData);
//     navigate(`/pm/rfq/quotation/${id}/bidders`);
//   };

//   return (
//     <DashboardLayout>
//       <div className="mx-auto">
//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">
//           <Button
//             variant="ghost" 
//             size="icon"
//             onClick={() => navigate(`/pm/rfq/quotation/${id}?tab=hire`)}
//           >
//             <ArrowLeft className="h-4 w-4" />
//           </Button>
//           <div className="flex-1">
//             <h1 className="text-2xl font-bold text-foreground">Issue Purchase Order</h1>
//             <p className="text-muted-foreground">Create and send purchase order to vendor</p>
//           </div>
//           <div className="flex gap-2">
//             <Button variant="outline" onClick={handleSavePO} text="Save Draft" leftIcon={<Download />} />
//             <Button onClick={handleSendPO} text="Send PO" leftIcon={<Send />} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* PO Form */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Purchase Order Details</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="poNumber">PO Number</Label>
//                   <Input
//                     id="poNumber"
//                     value={poData.poNumber}
//                     onChange={(e) => handleInputChange("poNumber", e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="vendor">Vendor</Label>
//                   <Input
//                     id="vendor"
//                     value={poData.vendor}
//                     onChange={(e) => handleInputChange("vendor", e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="vendorContact">Vendor Contact</Label>
//                 <Input
//                   id="vendorContact"
//                   value={poData.vendorContact}
//                   onChange={(e) => handleInputChange("vendorContact", e.target.value)}
//                 />
//               </div>

//               <Separator />

//               <div>
//                 <Label htmlFor="projectName">Project Name</Label>
//                 <Input
//                   id="projectName"
//                   value={poData.projectName}
//                   onChange={(e) => handleInputChange("projectName", e.target.value)}
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   value={poData.description}
//                   onChange={(e) => handleInputChange("description", e.target.value)}
//                   rows={3}
//                 />
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 <div>
//                   <Label htmlFor="quantity">Quantity</Label>
//                   <Input
//                     id="quantity"
//                     value={poData.quantity}
//                     onChange={(e) => handleInputChange("quantity", e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="unitPrice">Unit Price ($)</Label>
//                   <Input
//                     id="unitPrice"
//                     value={poData.unitPrice}
//                     onChange={(e) => handleInputChange("unitPrice", e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="totalAmount">Total Amount ($)</Label>
//                   <Input
//                     id="totalAmount"
//                     value={poData.totalAmount}
//                     onChange={(e) => handleInputChange("totalAmount", e.target.value)}
//                     readOnly
//                     className="bg-muted"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="deliveryDate">Delivery Date</Label>
//                   <Input
//                     id="deliveryDate"
//                     type="date"
//                     value={poData.deliveryDate}
//                     onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="terms">Payment Terms</Label>
//                   <Input
//                     id="terms"
//                     value={poData.terms}
//                     onChange={(e) => handleInputChange("terms", e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="notes">Additional Notes</Label>
//                 <Textarea
//                   id="notes"
//                   value={poData.notes}
//                   onChange={(e) => handleInputChange("notes", e.target.value)}
//                   rows={3}
//                   placeholder="Enter any additional terms, conditions, or special instructions..."
//                 />
//               </div>

//               <div>
//                 <Label>Attachments</Label>
//                 <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
//                   <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
//                   <p className="text-sm text-muted-foreground mb-2">
//                     Drag and drop files here, or click to browse
//                   </p>
//                   <Button variant="outline" size="sm">
//                     Choose Files
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* PO Preview */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center justify-between">
//                 Purchase Order Preview
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="bg-white border rounded-lg p-6 text-black">
//                 <div className="mb-6">
//                   <h2 className="text-2xl font-bold mb-2">PURCHASE ORDER</h2>
//                   <div className="text-sm">
//                     <p><strong>PO Number:</strong> {poData.poNumber}</p>
//                     <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <h3 className="font-semibold mb-2">From:</h3>
//                     <div className="text-sm">
//                       <p>Your Company Name</p>
//                       <p>123 Business Street</p>
//                       <p>City, State 12345</p>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-2">To:</h3>
//                     <div className="text-sm">
//                       <p>{poData.vendor}</p>
//                       <p>Contact: {poData.vendorContact}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h3 className="font-semibold mb-2">Project Details:</h3>
//                   <div className="text-sm">
//                     <p><strong>Project:</strong> {poData.projectName}</p>
//                     <p><strong>Description:</strong> {poData.description}</p>
//                   </div>
//                 </div>

//                 <table className="w-full border-collapse border border-gray-300 mb-6">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="border border-gray-300 p-2 text-left">Description</th>
//                       <th className="border border-gray-300 p-2 text-center">Qty</th>
//                       <th className="border border-gray-300 p-2 text-right">Unit Price</th>
//                       <th className="border border-gray-300 p-2 text-right">Total</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border border-gray-300 p-2">{poData.description}</td>
//                       <td className="border border-gray-300 p-2 text-center">{poData.quantity}</td>
//                       <td className="border border-gray-300 p-2 text-right">${poData.unitPrice}</td>
//                       <td className="border border-gray-300 p-2 text-right font-semibold">${poData.totalAmount}</td>
//                     </tr>
//                   </tbody>
//                 </table>

//                 <div className="text-sm">
//                   <p><strong>Delivery Date:</strong> {poData.deliveryDate}</p>
//                   <p><strong>Payment Terms:</strong> {poData.terms}</p>
//                   {poData.notes && (
//                     <div className="mt-4">
//                       <p><strong>Additional Notes:</strong></p>
//                       <p className="mt-1">{poData.notes}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }




import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Download, Send } from "lucide-react";
import { useQuery } from "@apollo/client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import { Separator } from "@/components/ui/Separator";
import Button from "@/components/ui/Buttons";
import DashboardLayout from "@/pages/Dasboard/layout";
import LoaderIcon from "@/components/icons/LoaderIcon";

import { ProjectDetailForPoDocument } from "@/__generated__/graphql";

export default function IssuePOForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, loading } = useQuery(ProjectDetailForPoDocument, {
    variables: { projectId: Number(id) },
    skip: !id,
  });

  if (loading) return <LoaderIcon />;

  const project = data?.projectDetail;
  const po = project?.purchaseOrder;

  if (!po) {
    return (
      <DashboardLayout>
        <div className="p-10 text-center text-gray-500">
          Purchase Order not created yet
        </div>
      </DashboardLayout>
    );
  }

  const handleSavePO = () => {
    console.log("Save PO Draft", po.id);
  };

  const handleSendPO = () => {
    console.log("Send PO", po.id);
    navigate("/pm/projects");
  };

  return (
    <DashboardLayout>
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <div className="flex-1">
            <h1 className="text-2xl font-bold">Issue Purchase Order</h1>
            <p className="text-muted-foreground">
              Create and send purchase order to vendor
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              text="Save Draft"
              leftIcon={<Download />}
              onClick={handleSavePO}
            />
            <Button
              text="Send PO"
              leftIcon={<Send />}
              onClick={handleSendPO}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ================= LEFT : FORM ================= */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Order Details</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <Label>Vendor</Label>
                <Input value={po.vendorName} readOnly />
              </div>

              <Separator />

              {po.items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4">
                  <div>
                    <Label>Description</Label>
                    <Input value={item.description} readOnly />
                  </div>

                  <div>
                    <Label>Quantity</Label>
                    <Input value={item.quantity} readOnly />
                  </div>

                  <div>
                    <Label>Unit Price ($)</Label>
                    <Input value={item.unitPrice} readOnly />
                  </div>
                </div>
              ))}

              <Separator />

              <div>
                <Label>Attachments</Label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop files here
                  </p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ================= RIGHT : PREVIEW ================= */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Order Preview</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="bg-white border rounded-lg p-6 text-black">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">PURCHASE ORDER</h2>
                  <p className="text-sm">
                    <strong>Date:</strong>{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">From</h3>
                    <p>Your Company</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">To</h3>
                    <p>{po.vendorName}</p>
                  </div>
                </div>

                <table className="w-full border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Description</th>
                      <th className="border p-2 text-center">Qty</th>
                      <th className="border p-2 text-right">Unit Price</th>
                      <th className="border p-2 text-right">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {po.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="border p-2">{item.description}</td>
                        <td className="border p-2 text-center">
                          {item.quantity}
                        </td>
                        <td className="border p-2 text-right">
                          ${item.unitPrice}
                        </td>
                        <td className="border p-2 text-right font-semibold">
                          ${item.totalPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-sm">
                  <p><strong>Subtotal:</strong> ${po.subtotal}</p>
                  <p><strong>Tax:</strong> ${po.tax}</p>
                  <p className="text-lg font-semibold">
                    <strong>Total:</strong> ${po.total}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
