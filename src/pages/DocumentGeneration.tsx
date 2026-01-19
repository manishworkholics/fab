import Dashboardlayout from "@/pages/Dasboard/layout";
import DocumentGenerationView from "@/components/DocumentGeneration/DocumentGenerationView";

export default function DocumentGeneration() {
  return (
    <Dashboardlayout header="Document Generation AI Agent">
      <DocumentGenerationView />
    </Dashboardlayout>
  );
}
