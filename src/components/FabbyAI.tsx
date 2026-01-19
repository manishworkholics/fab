import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, Loader } from "lucide-react";
import { ScrollArea } from "./ui/ScrollArea"; // your radix wrapper
import Button from "./ui/Buttons";
import { toast } from "./ui/Sonner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  actions?: WorkflowAction[];
}

interface WorkflowAction {
  type: "generate_project_id" | "issue_po" | "track_status" | "quotation" | "get_files";
  label: string;
  params?: any;
}

interface FabbyAIProps {
  initialQuery?: string;
}

export function FabbyAI({ initialQuery }: FabbyAIProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm Fabby AI, your intelligent assistant. I can help you generate Project IDs, issue Purchase Orders, track project status, create quotations, and manage files. What would you like me to help you with today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState(initialQuery || "");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasSentInitialQuery = useRef(false);

  useEffect(() => {
    if (initialQuery && !hasSentInitialQuery.current) {
      hasSentInitialQuery.current = true;
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "user",
          content: initialQuery,
          timestamp: new Date(),
        },
      ]);
      processQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const workflows = {
    generate_project_id: {
      keywords: ["project id", "generate project", "new project", "project number"],
      handler: () => {
        const projectId = `PRJ-${Date.now().toString().slice(-6)}`;
        toast.success(`Project ID Generated: ${projectId}`);
        return `I've generated a new project ID for you: **${projectId}**. This ID can be used to track your project throughout its lifecycle.`;
      },
    },
    issue_po: {
      keywords: ["purchase order", "po", "issue po", "create purchase"],
      handler: () => {
        const poNumber = `PO-${Date.now().toString().slice(-6)}`;
        toast.success(`Purchase Order Created: ${poNumber}`);
        return `I've created a new Purchase Order: **${poNumber}**. You can now proceed with vendor communications and procurement processes.`;
      },
    },
    track_status: {
      keywords: ["track status", "project status", "status update", "progress"],
      handler: () => {
        const statuses = ["In Progress", "Under Review", "Pending Approval", "Completed"];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        return `I've checked your project status. Current status: **${randomStatus}**. You can view detailed progress in the Projects section.`;
      },
    },
    quotation: {
      keywords: ["quotation", "quote", "estimate", "pricing"],
      handler: () => {
        const quoteNumber = `QT-${Date.now().toString().slice(-6)}`;
        toast.success(`Quotation Generated: ${quoteNumber}`);
        return `I've generated a new quotation: **${quoteNumber}**. The quote includes all requested components and services with current market pricing.`;
      },
    },
    get_files: {
      keywords: ["files", "documents", "download", "get files", "retrieve"],
      handler: () => {
        return `I can help you access your files. Here are your recent documents:
        
• **Assembly_Instructions_v2.pdf** - Updated yesterday
• **BOM_Components_List.xlsx** - 2 days ago  
• **Test_Procedures.docx** - Last week
• **Quality_Report.pdf** - Last week

Which specific file would you like me to retrieve?`;
      },
    },
  };

  const analyzeQuery = (query: string): WorkflowAction[] => {
    const lowercase = query.toLowerCase();
    const actions: WorkflowAction[] = [];

    for (const [type, flow] of Object.entries(workflows)) {
      if (flow.keywords.some((k) => lowercase.includes(k))) {
        actions.push({
          type: type as WorkflowAction["type"],
          label: `Run: ${type.replace(/_/g, " ")}`,
        });
      }
    }

    return actions;
  };

  const executeWorkflow = async (action: WorkflowAction) => {
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      const message: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: workflows[action.type].handler(),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, message]);
    } catch {
      toast.error("Workflow failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const processQuery = async (query: string) => {
    setIsLoading(true);

    try {
      // Simulate AI processing time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const actions = analyzeQuery(query);
      let response = "";

      if (actions.length > 0) {
        response = `I understand you want to ${actions[0].label.toLowerCase()}. Let me process that for you.`;

        // Auto-execute the first detected workflow
        setTimeout(() => {
          executeWorkflow(actions[0]);
        }, 500);
      } else {
        // General AI responses for other queries
        if (query.toLowerCase().includes("help")) {
          response =
            "I can help you with various tasks including:\n\n• **Generate Project ID** - Create unique project identifiers\n• **Issue Purchase Orders** - Manage procurement workflows\n• **Track Project Status** - Monitor project progress\n• **Create Quotations** - Generate pricing estimates\n• **File Management** - Access and organize documents\n\nWhat specific task would you like assistance with?";
        } else if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
          response =
            "Hello! I'm here to help streamline your workflows. Whether you need to generate project IDs, manage purchase orders, or track project status, I've got you covered. What can I help you with today?";
        } else if (
          query.toLowerCase().includes("thanks") ||
          query.toLowerCase().includes("thank you")
        ) {
          response =
            "You are welcome! I'm here to assist you with any workflow needs. If you have more tasks or questions, feel free to ask!";
        } else {
          response =
            "I understand your request. While I specialize in workflow automation like generating project IDs, issuing POs, and tracking status, I'm constantly learning. Could you rephrase your request or let me know which specific workflow you'd like me to help with?";
        }
      }

      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
        actions: actions.length > 0 ? actions : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast.error("Failed to process your request");
      console.error("Error processing query:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = input;
    setInput("");

    await processQuery(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl h-[600px] mx-auto flex flex-col border rounded shadow">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Fabby AI</h3>
            <p className="text-xs text-muted-foreground">Workflow Assistant</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 overflow-hidden p-4">
          <div className="flex flex-col gap-4 min-h-full">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] ${msg.role === "user" ? "ml-auto" : ""}`}>
                  <div
                    className={`p-3 rounded-lg text-sm whitespace-pre-wrap ${
                      msg.role === "user" ? "bg-primary text-white" : "bg-muted"
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.actions && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.actions.map((action, index) => (
                        <Button
                          key={index}
                          size="sm"
                          className="flex-1 w-full md:w-auto"
                          variant="outline"
                          text={action.label}
                          onClick={() => executeWorkflow(action)}
                          disabled={isLoading}
                        />
                      ))}
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground mt-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <Loader className="h-4 w-4 animate-spin inline mr-2" />
                  <span className="text-sm">Fabby AI is thinking...</span>
                </div>
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={bottomRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Fabby AI..."
              className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
              text=""
              leftIcon={<Send className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
