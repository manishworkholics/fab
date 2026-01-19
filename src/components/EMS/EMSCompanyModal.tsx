import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Button from "@/components/ui/Buttons";
import { FileText, Phone, Mail } from "lucide-react";
import EMSOverview from "./EMSOverview";
import EMSCapabilities from "./EMSCapabilities";
import EMSEquipments from "./EMSEquipment";
import EMSReviews from "./EMSReviews";

interface EMSCompanyModalProps {
  company: typeof import("@/utils/constant").emsCompanies[0];
  setSelectedCompany: (company: any) => void;
}

export default function EMSCompanyModal({ company, setSelectedCompany }: EMSCompanyModalProps) {
  if (!company) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          text={"View Profile"}
          size="sm"
          className="flex-1"
          onClick={() => setSelectedCompany(company)}
        />
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{company.name}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <EMSOverview company={company} />
          <EMSCapabilities company={company} />
          <EMSEquipments company={company} />
          <EMSReviews company={company} />
        </Tabs>

        <div className="flex gap-2 mt-6 pt-4 border-t">
          <Button
            text="Request Quote"
            className="flex-1 flex items-center gap-2 w-full"
            leftIcon={<FileText className="h-4 w-4" />}
            onClick={() => console.log("Request Quote clicked")}
          />
          <Button
            text={company.phone}
            className="flex-1 flex items-center gap-2 w-full"
            leftIcon={<Phone className="h-4 w-4" />}
            onClick={() => console.log("Phone clicked")}
            variant="outline"
          />
          <Button
            text="Email"
            className="flex-1 flex items-center gap-2 w-full"
            leftIcon={<Mail className="h-4 w-4" />}
            onClick={() => console.log("Email clicked")}
            variant="outline"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
