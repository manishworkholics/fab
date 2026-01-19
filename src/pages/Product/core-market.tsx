import Navbar from "@/components/Layout/Navbar";
import Footer from "../Talent/components/Footer";
import HeroSection from "./components/HeroSection";
 import SubFooter from "./components/SubFooter";
import TrustBadge from "./components/TrustBadge";
import EmsMarketPlace from "./components/EmsMarketPlace";
import Testimonial from "./components/Testimonial";
import { coreStat, coreTestomonial } from "@/utils/constant";
import { CoreDifferent } from "./components/Differences";
import Stat from "../Customers/components/Stat";
 
const CoreMarket = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title={"Source EMS the Smartest Way—Powered by AI"}
        description={
          "Centralize your RFQs, compare EMS quotes instantly, and automate your PO process—all in one secure platform built for speed, accuracy, and scale."
        }
      />
      <EmsMarketPlace />
      <CoreDifferent/>
      <Testimonial
        title={"Trusted by Procurement & Engineering Teams Across the U.S."}
        AiTestomonial={coreTestomonial}
      />
      <TrustBadge />
      <Stat title={"Real Results from Real Users"} purchasingManagersStats={coreStat} />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default CoreMarket;
