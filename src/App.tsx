import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dasboard from "./pages/Dasboard";
import Project from "./pages/Dasboard/pm/projects";
import EmsProject from "./pages/Dasboard/ems/project";
import RFQ from "./pages/Dasboard/pm/rfq";
import PCB from "./pages/Dasboard/pm/rfq/quotation/pcb";
import Talent from "./pages/Talent";
import QuoteManagement from "./pages/Dasboard/ems/quote-management";
import Preview from "./pages/Register/Quote/Preview";
import EmsSingleQuoteView from "./pages/Dasboard/ems/quote/ems-single-quote-view";
import BomUpload from "./components/BomChecker/BomUpload";
import { ProtectedRoute } from "./lib/protectedRoute";
import EMSView from "./pages/EMS/";
import Messages from "./pages/Dasboard/pm/message";
import Files from "./pages/Files";
import NewProjects from "./pages/Dasboard/pm/new-projects";
import ProjectInView from "./pages/Dasboard/pm/new-projects/project";
import EmsBidPage from "./pages/Dasboard/ems/quote/bid/ems-bid-page";
import AIAgent from "./pages/Product/ai-agent";
import CoreMarket from "./pages/Product/core-market";
import Intergration from "./pages/Product/intergration.";
import DocumentGeneration from "./pages/DocumentGeneration";
import CreateQuotePage from "./pages/NewQuote/CreateQuotePage";
import PreviewQuotePage from "./pages/NewQuote/PreviewQuotePage";
import QuoteBidView from "./components/Quote/QuoteBidView";
import IssuePOForm from "./components/Quote/PurchasingOrder/IssuePOForm";
import PurchaseManager from "./pages/Customers/PurchaseManager";
import DesignEngineers from "./pages/Customers/DesignEngineers";
import ContractManufacturers from "./pages/Customers/ContractManufacturers";
import EMSProfile from "./pages/EMSProfile/CompleteProfile";

import BidComparisonPage from "./pages/Dasboard/pm/rfq/[quoteId]/bids";
import POPage from "./pages/Dasboard/pm/po/[quoteId]";
import EMSBidsPage from "./pages/Dasboard/ems/bids";
import ProjectDetailPage from "./pages/Dasboard/pm/projects/ProjectDetailPage";
import EmsProjectDetailPage from "./pages/Dasboard/ems/project/EmsProjectDetailPage";
import ProfilePage from "./pages/Dasboard/ems/profile";
import ChangePasswordPage from "./pages/Dasboard/ems/change-password";
import ContactUs from "./pages/ContactUs";


function App() {
  return (
    <>
      <Routes>



        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/files" element={<Files />} />
        <Route path="/ai-agent" element={<AIAgent />} />
        <Route path="/core-market" element={<CoreMarket />} />
        <Route path="/integration" element={<Intergration />} />
        <Route path="/document-generation" element={<DocumentGeneration />} />
        <Route path="/purchase-manager" element={<PurchaseManager />} />
        <Route path="/design-engineer" element={<DesignEngineers />} />
        <Route path="/ems-providers" element={<ContractManufacturers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/quote" element={<Preview />} />
          <Route path="/dashboard" element={<Dasboard />} />
          {/* PM Routes */}
          <Route path="/pm/rfq" element={<RFQ />} />
          <Route path="/pm/rfq/quotation/:id" element={<PCB />} />
          <Route path="/pm/projects" element={<Project />} />
          <Route path="/pm/message" element={<Messages />} />
          <Route path="/pm/new-projects" element={<NewProjects />} />
          <Route path="/pm/new-projects/:id" element={<ProjectInView />} />
          <Route path="/pm/new-quote/preview" element={<PreviewQuotePage />} />
          <Route path="/pm/new-quote" element={<CreateQuotePage />} />
          <Route path="/pm/rfq/quotation/:id/bid/:bidId" element={<QuoteBidView />} />
          <Route path="/pm/rfq/quotation/:id/bid/hire" element={<IssuePOForm />} />
          <Route path="/pm/new-projects" element={<NewProjects />} />
          <Route path="/pm/new-projects/:id" element={<ProjectInView />} />

          <Route path="/pm/rfq/quotation/:id/bids" element={<BidComparisonPage />} />
          <Route path="/pm/po/:quoteId" element={<POPage />} />
          <Route path="/ems/bids" element={<EMSBidsPage />} />

          <Route path="/pm/projects/:projectId" element={<ProjectDetailPage />} />
          {/* EMS Routes */}
          <Route path="/ems/projects" element={<EmsProject />} />
          <Route path="/ems/projects/:projectId" element={<EmsProjectDetailPage />} />
          <Route path="/ems/manage-quote" element={<QuoteManagement />} />
          <Route path="/ems/manage-quote/:id" element={<EmsSingleQuoteView />} />
          <Route path="/view-ems" element={<EMSView />} />
          <Route path="/ems/manage-quote/:id/bid" element={<EmsBidPage />} />
          <Route path="/ems/complete-profile" element={<EMSProfile />} />
          <Route path="/ems/view-profile" element={<ProfilePage />} />
          <Route path="/ems/change-password" element={<ChangePasswordPage />} />
          {/* BOM Checker Routes */}
          <Route path="/bom-checker" element={<BomUpload />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;