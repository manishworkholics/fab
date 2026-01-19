import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";
import Button from "@/components/ui/Buttons";
import { Upload, Zap, Settings } from "lucide-react";

interface FileUpload {
  name: string;
}

interface AIConfigurationCardProps {
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  selectedDocType: string;
  setSelectedDocType: (value: string) => void;
  prompt: string;
  setPrompt: (value: string) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadedFiles: FileUpload[];
  removeFile: (index: number) => void;
  handleGenerate: () => void;
  isGenerating: boolean;
  aiModels: { label: string; value: string }[];
  documentTypes: { label: string; value: string }[];
}

const AIConfigurationCard = ({
  selectedModel,
  setSelectedModel,
  selectedDocType,
  setSelectedDocType,
  prompt,
  setPrompt,
  handleFileUpload,
  uploadedFiles,
  removeFile,
  handleGenerate,
  isGenerating,
  aiModels,
  documentTypes,
}: AIConfigurationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuration
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* AI Model Selection */}
        <div className="space-y-2">
          <Label htmlFor="ai-model">AI Model</Label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger>
              <SelectValue placeholder="Select AI model" />
            </SelectTrigger>
            <SelectContent>
              {aiModels.map((model) => (
                <SelectItem key={model.value} value={model.value}>
                  {model.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Document Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="doc-type">Document Type</Label>
          <Select value={selectedDocType} onValueChange={setSelectedDocType}>
            <SelectTrigger>
              <SelectValue placeholder="Select document type" />
            </SelectTrigger>
            <SelectContent>
              {documentTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Prompt Input */}
        <div className="space-y-2">
          <Label htmlFor="prompt">Generation Prompt</Label>
          <Textarea
            id="prompt"
            placeholder="Describe what you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label>Training Documents</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-4">
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Upload documents to improve accuracy
              </p>
              <Input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="outline" size="sm" asChild>
                  <span>Choose Files</span>
                </Button>
              </Label>
            </div>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-medium">Uploaded Files:</p>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                  <span className="text-sm">{file.name}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFile(index)}
                    text={"Remove"}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full"
          leftIcon={
            isGenerating ? (
              <Zap className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Zap className="mr-2 h-4 w-4" />
            )
          }
          text={isGenerating ? "Generating..." : "Generate Document"}
        />
      </CardContent>
    </Card>
  );
};

export default AIConfigurationCard;
