import DasboardLayout from "./layout";
import { getItemFromStorage } from "../../helpers/misc";
import { useEffect, useState } from "react";
import { AgentCards } from "@/components/AgentCards";
import { ActionCards } from "@/components/ActionCards";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Buttons";
import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { FabbyAI } from "@/components/FabbyAI";

const Dasboard = () => {
  const [user, setUser] = useState<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);

  // const [query, setQuery] = useState("");
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiQuery, setAIQuery] = useState("");

  const handleSearchSubmit = (searchQuery: string) => {
    setTimeout(() => {
      setAIQuery(searchQuery);
    }, 100);
    setIsAIOpen(true);
  };

  const handleAIInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const aiInput = formData.get("aiInput") as string;
    if (aiInput.trim()) {
      handleSearchSubmit(aiInput);
      (e.target as HTMLFormElement).reset();
    }
  };

  useEffect(() => {
    const storedUser = getItemFromStorage("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div>
      <DasboardLayout header={`Welcome ${user ? user.firstName : ""}!`}>
        <div className="flex-1 flex flex-col justify-center">
          <div>
            {/* Fabby AI Dialog */}
            <Dialog open={isAIOpen} onOpenChange={setIsAIOpen}>
              <DialogContent className="max-w-4xl w-full p-0" title="Fabby AI">
                <FabbyAI initialQuery={aiQuery} />
              </DialogContent>
            </Dialog>
            <main className="flex-1">
              {/* AI Input */}
              <p className="mb-2 text-[19.35px] text-gray-600">What can I help you with?</p>
              <Card className="mb-6">
                <CardContent className="p-4">
                  <form onSubmit={handleAIInputSubmit}>
                    <div className="flex items-center gap-4">
                      <input
                        name="aiInput"
                        type="text"
                        placeholder="Get help with Fabby AI"
                        className="flex-1 text-sm border-0 outline-none bg-transparent"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        type="submit"
                        text=""
                        leftIcon={<ArrowRight className="h-4 w-4" />}
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Buttons Section */}
              <ActionCards />

              {/* Additional Content */}
              <div className="grid lg:grid-cols-2 gap-8 mt-8">
                {/* Agents Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Agents</h2>
                  <AgentCards type="agents" />
                </div>

                {/* Do More Section */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Do more with FabSpace</h2>
                  <AgentCards type="features" />
                </div>
              </div>
            </main>
          </div>
        </div>
      </DasboardLayout>
    </div>
  );
};

export default Dasboard;
