import Navbar from "@/components/Layout/Navbar";
import HeroSection from "./components/HeroSection";
import Automation from "./components/Automation";
import TrustBadge from "./components/TrustBadge";
import Footer from "../Talent/components/Footer";
import SubFooter from "./components/SubFooter";
import Testimonial from "./components/Testimonial"; 
import { AIStats, AiTestomonial } from "@/utils/constant";
import { AiDifferent } from "./components/Differences";
import Agents from "./components/Agents";
import Stat from "../Customers/components/Stat";

const AIAgent = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title={"Let AI Do the Heavy Lifting Across Your EMS Workflow"}
        description={
          " From quote triage to talent scheduling, Fabspace AI’s built-in agents automate time-wasting tasks across the EMS and Talent Marketplaces—so your team stays focused on high-value work."
        }
      />
      <Automation />
      <Agents />
      <AiDifferent />
      <Testimonial title={"Social Proof & Testimonials"} AiTestomonial={AiTestomonial} />
      <TrustBadge />
      <Stat title={"Fabspace AI Agent Impact Stats"} purchasingManagersStats={AIStats} />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default AIAgent;
