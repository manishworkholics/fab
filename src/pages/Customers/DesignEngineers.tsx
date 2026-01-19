import Navbar from "@/components/Layout/Navbar";
import Hero from "./components/Hero";
import WhyFabspace from "./components/WhyFabspace";
import { DesignEngineersStats, WhyFabspaceDesigners, designersTestomonial } from "@/utils/constant";
import Testimonial from "../Product/components/Testimonial";
import TrustBadge from "../Product/components/TrustBadge";
import Stat from "./components/Stat";
import Footer from "../Talent/components/Footer";
import FooterCta from "./components/FooterCta";
import Quote from "./components/Quote";

const DesignEngineers = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title={"Design Error‑Free PCBs in Half the Time with AI‑Driven DFM"}
        subTitle={"Catch clearance issues, optimize your BOM, and collaborate securely—before you send files to fab"} image={"/images/design-engineer-stuck-with-errors.jpg"}      />
      <Quote title={"QuoteProps"} description={`As a Design Engineer, endless file versions and late-stage errors can stall your projects and inflate costs. FabSpace AI puts real‑time PCB DFM, BOM pricing, and secure collaboration at your fingertips—so you spend less time on admin and more on innovation. 
`}/>
      <WhyFabspace
        title={"Why Designers Choose FabSpace AI"}
        subTitle={`FabSpace AI outpaces traditional CAD plugins and manual reviews by integrating AI checks, live component data, and version control into one platform.`}
        WhyFabspacePurchase={WhyFabspaceDesigners}
      />
      <Testimonial title={"Trusted by Innovative Teams"} AiTestomonial={designersTestomonial} />
      <TrustBadge />
      <Stat purchasingManagersStats={DesignEngineersStats} />
      <div className="sm:py-32">
        <FooterCta
          title={"Ready to Design Smarter & Ship Faster?"}
          description={`Eliminate late‑stage surprises and accelerate your PCB projects with AI‑powered DFM, BOM automation, and secure collaboration.`}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DesignEngineers;
