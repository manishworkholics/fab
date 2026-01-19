import { ProjectDetail } from "@/components/ProjectDetail";
import DasboardLayout from "../../../layout";

export default function ProjectInView() {
  return (
    <DasboardLayout header="Project">
      <ProjectDetail />
    </DasboardLayout>
  )
}