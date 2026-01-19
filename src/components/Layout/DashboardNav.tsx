import { DialogTrigger, Dialog, DialogContent } from "../ui/Dialog";
import Button from "../ui/Buttons";
import { MessageSquare } from "lucide-react";
import { FabbyAI } from "../FabbyAI";
import { useState } from "react";
interface DashboardNavProps {
  handleNavCollapse: () => void;
  header?: string;
}
const DashboardNav = ({ header }: DashboardNavProps) => {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiQuery] = useState("");

  return (
    <div
      className="hidden md:block bg-white fixed top-0 py-4 z-10"
      style={{ width: "calc(100% - 17rem)", left: "17rem" }}
    >
      <div className="ml-9 mr-9 flex items-center justify-between">
        <div>
          <h1 className="text-[25.15px] md:text-[30px] font-semibold text-gray-800">{header}</h1>
        </div>
        <div className="flex items-center gap-4 ml-6">
          <Dialog open={isAIOpen} onOpenChange={setIsAIOpen}>
            <DialogTrigger asChild>
              <div>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  text="Call Fabby AI"
                  leftIcon={<MessageSquare className="h-4 w-4" />}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0" title="Fabby AI">
              <FabbyAI initialQuery={aiQuery} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
