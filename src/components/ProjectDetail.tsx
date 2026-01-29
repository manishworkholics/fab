import Button from "@/components/ui/Buttons";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ProjectDetailDocument } from "@/__generated__/graphql";
import LoaderIcon from "@/components/icons/LoaderIcon";


export function ProjectDetail() {

  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  const { data, loading } = useQuery(ProjectDetailDocument, {
    variables: { projectId: Number(projectId) },
    skip: !projectId,
  });

  const project = data?.projectDetail;

  if (loading) return <LoaderIcon />;
  if (!project) return <div className="p-10 text-center">Project not found</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" onClick={() => navigate("/pm/projects")} className="text-gray-600" text="Back to Projects" />
        <Button variant="outline" text="Actions" leftIcon={<ChevronDown className="w-4 h-4 mr-2" />} />
      </div>

      {/* Project Header */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded"></div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">{project.quote.title}</h1>
                <p className="text-gray-600">Project ID: {project.id}</p>

              </div>
            </div>
            <Badge>{project.status}</Badge>

          </div>

          <div className="grid grid-cols-5 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Purchasing Manager</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">A</span>
                </div>
                <span className="font-medium">Alison Ogaga</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Project Type</p>
              <p className="font-medium">{project.quote.title}</p>

            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Project Start Date</p>
              <p className="font-medium">15-05-2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Project Delivery Date</p>
              <p className="font-medium">15-05-2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Expected Turn Time</p>
              <p className="font-medium">35 days</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-1">Price Model</p>
            <p className="font-medium">Fixed</p>
          </div>
        </CardContent>
      </Card>

      {/* Project Status */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Project Status</h2>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-red-600">Order Received</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-orange-600">Preparing your Order</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-400">Step Name</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-400">Step Name</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-400">Step Name</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-400">Step Name</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-400">Step Name</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {project.history.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-medium">{h.status}</span>
              </div>
            ))}
          </div>


          <div>
            <h3 className="font-medium mb-2">Additional Notes</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Aug 13, 2024; 12:05pm</span>
              <span>Waiting for vendor to confirm order of all parts, boards, and stencils.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Details */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Client Details</h2>
            <Button variant="outline" text="View Files" />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Contact Person</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm text-white font-medium">M</span>
                  </div>
                  <div>
                    <p className="font-medium">Micheal Pawn</p>
                    <p className="text-sm text-gray-600">Contract Manufacturer</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>kennethtarry@gmail.com</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Company Address</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>4th Floor Imperial Hous...</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Notes</p>
                <p className="text-sm">Client is very straightforward about his product...</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Role</p>
                <p className="font-medium">Contract Manufacturer</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Contact Number</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>(512) 123-56789</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">RFQ</p>
                  <p className="text-sm mb-1">RFQ</p>
                  <p className="text-sm mb-1">RFQ</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Quote</p>
                  <p className="text-sm mb-1">Quote</p>
                  <p className="text-sm mb-1">Quote</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">PO</p>
                  <p className="text-sm">Purchasing Order</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Others</p>
                  <p className="text-sm">files from chat</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
