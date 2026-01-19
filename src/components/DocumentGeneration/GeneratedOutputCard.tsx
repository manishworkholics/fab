import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Textarea";
import Button from "@/components/ui/Buttons";
import { FileText, Download, RefreshCcw } from "lucide-react";

interface GeneratedOutputCardProps {
  generatedContent: string;
  setGeneratedContent: (value: string) => void;
  onDownload: () => void;
  onCopy: () => void;
  onRegenerate: () => void;
}

const GeneratedOutputCard = ({
  generatedContent,
  setGeneratedContent,
  onDownload,
  onCopy,
  onRegenerate,
}: GeneratedOutputCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Generated Output
        </CardTitle>
      </CardHeader>

      <CardContent>
        {generatedContent ? (
          <div className="space-y-4">
            <Textarea
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              rows={15}
              className="font-mono text-sm"
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onDownload}
                text="Download"
                className="w-full"
                leftIcon={<Download className="h-4 w-4" />}
              />

              <Button
                variant="outline"
                size="sm"
                onClick={onCopy}
                text="Copy to Clipbpard"
                className="w-full"
                leftIcon={<FileText className="h-4 w-4" />}
              />

              <Button
                variant="outline"
                size="sm"
                onClick={onRegenerate}
                text="Regenerate"
                className="w-full"
                leftIcon={<RefreshCcw className="h-4 w-4" />}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <p>Generated document will appear here</p>
            <p className="text-sm">Configure settings and click generate to start</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GeneratedOutputCard;
