import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Buttons";
import { Input } from "@/components/ui/Input";
import DasboardLayout from "@/pages/Dasboard/layout";

// Quote Bid Form Component
const QuoteBidForm = ({ quote, onBack }: { quote: any; onBack: () => void }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    experience: "",
    approach: "",
    timeline: "",
    notes: "",
  });

  const [pricingItems, setPricingItems] = useState([
    { description: "Boards and Components", price: "" },
    { description: "Turn Time", price: "" },
    { description: "Stencil", price: "" },
    { description: "Cluso programming", price: "" },
  ]);

  const addPricingItem = () => {
    setPricingItems([...pricingItems, { description: "", price: "" }]);
  };

  const updatePricingItem = (index: number, field: string, value: string) => {
    const updated = [...pricingItems];
    updated[index] = { ...updated[index], [field]: value };
    setPricingItems(updated);
  };

  const removePricingItem = (index: number) => {
    setPricingItems(pricingItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bid submitted:", { formData, pricingItems });
    // Handle form submission
    onBack();
  };

  return (
    <DasboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} text="← Back to Quote" width="w-full" />
          <h1 className="text-2xl font-bold">Submit Bid - {quote.title}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="">
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
                    placeholder="Describe your relevant experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Technical Approach</label>
                  <textarea
                    className="w-full p-3 border rounded-md resize-none h-24"
                    value={formData.approach}
                    onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                    placeholder="How will you approach this project..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Estimated Timeline</label>
                  <Input
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., 6-8 weeks"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dynamic Pricing Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Pricing Breakdown</CardTitle>
                <Button type="button" variant="outline" onClick={addPricingItem} text="Add Item" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pricingItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <Input
                        value={item.description}
                        onChange={(e) => updatePricingItem(index, "description", e.target.value)}
                        placeholder="Service description"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Price ($)</label>
                      <Input
                        type="number"
                        value={item.price}
                        onChange={(e) => updatePricingItem(index, "price", e.target.value)}
                        placeholder="0.00"
                      />
                    </div>

                    <div className="flex items-end">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removePricingItem(index)}
                        text="Remove"
                        className="text-red-600 hover:text-red-700"
                      ></Button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-end pt-4 border-t">
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Total Estimated Cost: </span>
                    <span className="text-lg font-bold text-green-600">
                      $
                      {pricingItems
                        .reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0)
                        .toFixed(2)}
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
                placeholder="Any additional information or special considerations..."
              />
            </CardContent>
          </Card>

          {/* Submit Actions */}
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onBack} text="Cancel" />
            <Button type="submit" text="Submit Bid" />
          </div>
        </form>
      </div>
    </DasboardLayout>
  );
};

export default QuoteBidForm;
