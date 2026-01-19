import Footer from "./components/Footer";
import TalentNavbar from "../../components/Layout/TalentNavbar";
import CompaniesAndTalentManagers from "./components/CompaniesAndTalentManagers";
import Hero from "./components/Hero";
import ScrollToTop from "../../components/ScrollToTop";

const Talent = () => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <TalentNavbar />
      <Hero />
      <CompaniesAndTalentManagers />
      <Footer />
    </div>
  );
};

export default Talent;
