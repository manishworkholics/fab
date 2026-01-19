import {
  ContractManufacturersStats,
  WhyFabspaceEMSProviders,
  contractManufactureTestomonial,
} from "@/utils/constant";
import Footer from "../Talent/components/Footer";
import FooterCta from "./components/FooterCta";
import Stat from "./components/Stat";
import TrustBadge from "../Product/components/TrustBadge";
import Testimonial from "../Product/components/Testimonial";
import WhyFabspace from "./components/WhyFabspace";
import Navbar from "@/components/Layout/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";

const ContractManufacturers = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title={"Win More PCB Projects—Automate Your Quotes & POs with AI"}
        subTitle={"Connect directly with vetted buyers, respond to RFQs in minutes, and streamline project management—built for EMS Providers who need speed and precision."} image={"/images/design-engineer-stuck-with-errors.jpg"}      />
      <Quote title={"For Contract Manufacturers"} description={`As an EMS Provider, long email threads and manual quote creation slow your bid turnaround and hurt your win rate. FabSpace AI’s Partner Marketplace automates quoting, secures project data, and connects you with a steady pipeline of qualified RFQs. 
`} />
      <WhyFabspace
        title={"Why EMS Providers Choose FabSpace AI"}
        subTitle={`FabSpace AI outperforms generic job boards and manual processes by delivering AI‑driven automation and buyer matchmaking in one unified platform.`}
        WhyFabspacePurchase={WhyFabspaceEMSProviders}
      />{" "}
      <Testimonial
        title={"Trusted by Innovative Teams"}
        AiTestomonial={contractManufactureTestomonial}
      />
      <TrustBadge />
      <Stat purchasingManagersStats={ContractManufacturersStats} />
      <div className="sm:py-32">
        <FooterCta
          title={"Ready to Elevate Your EMS Business?"}
          description={`Join FabSpace AI’s Partner Marketplace today to streamline quoting, showcase your capabilities, and win more projects—faster.`}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContractManufacturers;
