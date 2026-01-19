import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import Button from "@/components/ui/Buttons";

const DocumentTemplates = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Document Templates</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="test-instructions">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="test-instructions">Test Instructions</TabsTrigger>
            <TabsTrigger value="purchase-order">Purchase Order</TabsTrigger>
            <TabsTrigger value="assembly-instructions">Assembly Instructions</TabsTrigger>
            <TabsTrigger value="cost-estimator">Cost Estimator</TabsTrigger>
          </TabsList>

          {/* Test Instructions */}
          <TabsContent value="test-instructions" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TemplateCard
                title="PCB Functional Test"
                description="Generate comprehensive test procedures for PCB validation"
              />
              <TemplateCard
                title="Component Testing"
                description="Create detailed component testing instructions"
              />
            </div>
          </TabsContent>

          {/* Purchase Order */}
          <TabsContent value="purchase-order" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TemplateCard
                title="Standard PO"
                description="Generate standard purchase orders with all required fields"
              />
              <TemplateCard
                title="Rush Order PO"
                description="Create expedited purchase orders with priority handling"
              />
            </div>
          </TabsContent>

          {/* Assembly Instructions */}
          <TabsContent value="assembly-instructions" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TemplateCard
                title="SMT Assembly"
                description="Generate step-by-step SMT assembly procedures"
              />
              <TemplateCard
                title="THT Assembly"
                description="Create through-hole component assembly guides"
              />
            </div>
          </TabsContent>

          {/* Cost Estimator */}
          <TabsContent value="cost-estimator" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <TemplateCard
                title="Assembly Cost Analysis"
                description="Generate detailed cost breakdowns for EMS quotes"
              />
              <TemplateCard
                title="Material Cost Calculator"
                description="Create comprehensive material cost estimates"
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const TemplateCard = ({ title, description }: { title: string; description: string }) => (
  <Card>
    <CardContent className="p-4">
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <Button size="sm" variant="outline" text={"Use Template"} />
    </CardContent>
  </Card>
);

export default DocumentTemplates;
