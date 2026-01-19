import Navbar from "@/components/Layout/Navbar";
import HeroSection from "./components/HeroSection"; 
import TrustBadge from "./components/TrustBadge";
import Footer from "../Talent/components/Footer";
import SubFooter from "./components/SubFooter";
import Testimonial from "./components/Testimonial";
 import WhyIntegration from "./components/WhyIntegration";
import IntegrationSupport from "./components/Integration_Support";
import { integrationStats, integrationTestomonial } from "@/utils/constant";
import Stat from "../Customers/components/Stat";

const Intergration = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title={"Integrate Everything. Orchestrate Anything."}
        description={
          " Connect Fabspace AI with your existing BOM management tools, CAD/EDA software, HR platforms, and e-signature tools. Automate data flow across your EMS operations with zero silos."        }
      />
      <WhyIntegration />
      <IntegrationSupport />
      <Testimonial title={"Social Proof & Testimonials"} AiTestomonial={integrationTestomonial} />
      <TrustBadge />
      <Stat title={"Integration-Driven Efficiency Metrics"} purchasingManagersStats={integrationStats}   />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Intergration;
