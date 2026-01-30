import Button from "@/components/ui/Buttons";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown, Phone, Mail, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ProjectDetailDocument } from "@/__generated__/graphql";
import LoaderIcon from "@/components/icons/LoaderIcon";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";


const UPDATE_PROJECT_STATUS = gql`
  mutation UpdateProjectStatus(
    $projectId: Int!
    $input: UpdateProjectStatusInput!
  ) {
    updateProjectStatus(projectId: $projectId, input: $input) {
      id
      status
      history {
        status
        note
        createdAt
      }
    }
  }
`;


export default function EmsProjectDetailPage() {
    const navigate = useNavigate();
    const { projectId } = useParams<{ projectId: string }>();

    const [status, setStatus] = useState("");
    const [note, setNote] = useState("");

    const [updateProjectStatus, { loading: updating }] = useMutation(
        UPDATE_PROJECT_STATUS,
        {
            refetchQueries: ["ProjectDetail"], // 👈 same page refresh
        }
    );

    const handleUpdateStatus = async () => {
        if (!status) {
            alert("Please select status");
            return;
        }

        await updateProjectStatus({
            variables: {
                projectId: Number(projectId),
                input: {
                    status,
                    note,
                },
            },
        });

        setStatus("");
        setNote("");
    };



    const { data, loading } = useQuery(ProjectDetailDocument, {
        variables: { projectId: Number(projectId) },
        skip: !projectId,
    });

    const project = data?.projectDetail;

    if (loading) return <LoaderIcon />;
    if (!project) return <div className="p-10 text-center">Project not found</div>;

    const { quote, pm, ems, purchaseOrder, history } = project;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="text-gray-600"
                    text="Back"
                />
                <Button
                    variant="outline"
                    text="Actions"
                    leftIcon={<ChevronDown className="w-4 h-4 mr-2" />}
                />
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
                                <h1 className="text-xl font-semibold">{quote.title}</h1>
                                <p className="text-gray-600">Project ID: {project.id}</p>
                            </div>
                        </div>

                        <Badge>{project.status}</Badge>
                    </div>

                    <div className="grid grid-cols-5 gap-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Purchasing Manager</p>
                            <p className="font-medium">
                                {pm.firstName} {pm.lastName}
                            </p>
                            <p className="text-xs text-gray-500">{pm.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Project Type</p>
                            <p className="font-medium">{quote.quoteType}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Project Start Date</p>
                            <p className="font-medium">
                                {new Date(project.history[0]?.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Expected Turn Time</p>
                            <p className="font-medium">{quote.turnTime} days</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 mb-1">Budget</p>
                            <p className="font-medium">
                                {quote.budget === 0 ? "Open" : `$${quote.budget}`}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-1">Price Model</p>
                        <p className="font-medium">{quote.quoteType}</p>
                    </div>
                </CardContent>
            </Card>

            {/* Project Status */}
            <Card className="mb-6">
                <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Project Status</h2>

                    <div className="flex flex-wrap gap-4 mb-6">
                        {history.map((h, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{h.status}</p>
                                    {h.note && (
                                        <p className="text-xs text-gray-500">{h.note}</p>
                                    )}
                                    <p className="text-xs text-gray-400">
                                        {new Date(h.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-6">
                <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Update Project Status</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">
                                Select Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="border rounded px-3 py-2 w-full"
                            >
                                <option value="">Select status</option>
                                <option value="IN_PROGRESS">In Progress</option>
                                <option value="MANUFACTURING">Manufacturing</option>
                                <option value="ON_HOLD">On Hold</option>
                                <option value="COMPLETED">Completed</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-500 mb-1 block">
                                Note (optional)
                            </label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                className="border rounded px-3 py-2 w-full"
                                placeholder="Add status note"
                            />
                        </div>
                    </div>

                    <Button
                        className="mt-4"
                        onClick={handleUpdateStatus}
                        disabled={updating}
                        text={updating ? "Updating..." : "Update Status"}
                    />
                </CardContent>
            </Card>


            {/* Client / EMS Details */}
            <Card>
                <CardContent className="p-6">
                    <h2 className="text-lg font-semibold mb-6">Vendor Details</h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">EMS Vendor</p>
                                <p className="font-medium">
                                    {ems.firstName} {ems.lastName}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span>{ems.email}</span>
                                    <ExternalLink className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-1">Phone</p>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span>{ems.phone}</span>
                                </div>
                            </div>
                        </div>

                        {purchaseOrder && (
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Purchase Order</p>
                                    <p className="font-medium">{purchaseOrder.vendorName}</p>
                                </div>

                                <div>
                                    <p className="text-sm">Subtotal: ${purchaseOrder.subtotal}</p>
                                    <p className="text-sm">Tax: ${purchaseOrder.tax}</p>
                                    <p className="text-sm font-semibold">
                                        Total: ${purchaseOrder.total}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
