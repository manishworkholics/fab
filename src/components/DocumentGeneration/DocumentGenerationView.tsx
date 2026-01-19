import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { aiModels, documentTypes } from "@/utils/constant";
import AIConfigurationCard from "./AIConfigurationCard";
import GeneratedOutputCard from "./GeneratedOutputCard";
import DocumentTemplates from "./DocumentTemplates";

export default function DocumentGenerationView() {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDocType, setSelectedDocType] = useState("");
  const [prompt, setPrompt] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prev) => [...prev, ...files]);
    toast({
      title: "Files uploaded",
      description: `${files.length} file(s) added for training`,
    });
  };

  const handleGenerate = async () => {
    if (!selectedModel || !selectedDocType || !prompt) {
      toast({
        title: "Missing information",
        description: "Please select a model, document type, and enter a prompt",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(
        `Generated ${selectedDocType.replace(
          "-",
          " ",
        )} using ${selectedModel}:\n\n${prompt}\n\n[This is a simulated response. In a real implementation, this would call the selected AI model API.]`,
      );
      setIsGenerating(false);
      toast({
        title: "Document generated",
        description: "Your document has been successfully generated",
      });
    }, 2000);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mb-8">
        <p className="text-muted-foreground">
          Generate professional documents using advanced AI models
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Configuration Panel */}
        <AIConfigurationCard
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          selectedDocType={selectedDocType}
          setSelectedDocType={setSelectedDocType}
          prompt={prompt}
          setPrompt={setPrompt}
          handleFileUpload={handleFileUpload}
          uploadedFiles={uploadedFiles}
          removeFile={removeFile}
          handleGenerate={handleGenerate}
          isGenerating={isGenerating}
          aiModels={aiModels}
          documentTypes={documentTypes}
        />

        {/* Output Panel */}
        <GeneratedOutputCard
          generatedContent={generatedContent}
          setGeneratedContent={setGeneratedContent}
          onDownload={() => {
            console.log("Download clicked");
          }}
          onCopy={() => {
            console.log("Copy clicked");
          }}
          onRegenerate={() => {
            console.log("Regenerate clicked");
          }}
        />
      </div>
      {/* Document Templates */}
      <DocumentTemplates />
    </div>
  );
}
