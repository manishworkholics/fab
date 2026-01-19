
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Buttons";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown, Filter, Download, MoreHorizontal, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import DasboardLayout from "../../layout";
import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    companyName: "Fischer Int'l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending"
  },
  {
    id: 2,
    companyName: "Fischer Int'l",
    email: "thekdfischer@email.com",
    amount: "$120,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:24AM",
    status: "Pending"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const navigate = useNavigate();

  return (
    <DasboardLayout header="New Projects">
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" text="Quick Tools" leftIcon={<ChevronDown className="w-4 h-4 mr-2" />} />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" text="Filter" leftIcon={<Filter className="w-4 h-4 mr-2" />} />
          <Button text="Export CSV" leftIcon={<Download className="w-4 h-4 mr-2" />} />
        </div>
      </div>

      {/* Welcome Section */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Welcome Back, User</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-gray-600 text-sm">New Bids</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-gray-600 text-sm">Ongoing Projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-gray-600 text-sm">Favourites</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-gray-900">0</div>
            <div className="text-gray-600 text-sm">Completed Deals</div>
          </CardContent>
        </Card>
      </div>

      {/* All Deals Section */}
      <div className="bg-white rounded-lg border">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">All Deals</h2>
            <Button variant="ghost" text="View all" />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex">
            {["Active", "Pending", "Completed", "Archive"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {tab === "Active" && <Badge className="ml-2 bg-orange-500">0</Badge>}
                {tab === "Pending" && <Badge variant="secondary" className="ml-2">0</Badge>}
                {tab === "Completed" && <Badge variant="secondary" className="ml-2">0</Badge>}
                {tab === "Archive" && <Badge variant="secondary" className="ml-2">0</Badge>}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Project Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectsData.map((project) => (
              <TableRow 
                key={project.id} 
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => navigate(`/pm/new-projects/${project.id}`)}
              >
                <TableCell>
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">{project.companyName}</div>
                      <div className="text-sm text-gray-500">{project.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{project.amount}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {project.projectType}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div>{project.date}</div>
                  <div className="text-sm text-gray-500">{project.time}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {project.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" text="More" leftIcon={<MoreHorizontal className="w-4 h-4" />}>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="p-4 border-t">
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline" size="sm" text="1" leftIcon={<ChevronLeft className="w-4 h-4" />} />
            <Button variant="outline" size="sm" text="2" />
            <Button variant="default" size="sm" text="3" />
            <Button variant="outline" size="sm" text="4" />
            <Button variant="outline" size="sm" text="5" />
            <Button variant="outline" size="sm" text="6" leftIcon={<ChevronRight className="w-4 h-4" />} />
          </div>
        </div>
      </div>
    </div>
    </DasboardLayout>
  );
};

export default Index;
