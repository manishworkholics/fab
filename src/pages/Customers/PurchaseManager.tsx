import Navbar from "@/components/Layout/Navbar";
import Hero from "./components/Hero";
import Stat from "./components/Stat";
import Testimonial from "../Product/components/Testimonial";
import { WhyFabspacePurchase, coreTestomonial, purchasingManagersStats } from "@/utils/constant";
import TrustBadge from "../Product/components/TrustBadge";
import FooterCta from "./components/FooterCta";
import Footer from "../Talent/components/Footer";
import WhyFabspace from "./components/WhyFabspace";

const PurchaseManager = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={"Slash RFQ Turnaround by 70% with AI‑Powered EMS Procurement"}
        subTitle={
          "Centralize quote requests, rank best-fit EMS partners instantly, and automate POs—all from one secure dashboard built for modern Purchasing Managers."
        }
        image={"/images/purchasing-manager-on-fabspace-dashboard.png"}
      />
      <WhyFabspace
        title={"Why FabSpace AI?"}
        subTitle={`FabSpace AI’s EMS Marketplace and AI agents eliminate manual quote juggling
            and spreadsheet headaches. Here’s how we outperform the rest:`}
        WhyFabspacePurchase={WhyFabspacePurchase}
      />

      <Testimonial
        title={"Trusted by Procurement Teams Across the U.S."}
        AiTestomonial={coreTestomonial}
      />

      <TrustBadge />

      <Stat purchasingManagersStats={purchasingManagersStats} />
      <div className="sm:py-32">
        <FooterCta
          title={"Ready to see FabSpace AI in action?"}
          description={`Whether you're managing quotes, refining designs, or scaling manufacturing, Fabspace AI
          brings everyone together in one platform to move faster with fewer errors.`}
        />
      </div>
      <Footer />
    </>
  );
};

export default PurchaseManager;
