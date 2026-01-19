import Logo from "../../../components/icons/Logo";
import { Link } from "react-router-dom";
import SubFooter from "../../../components/Footer/SubFooter";
// import Button from "../../../components/ui/Buttons";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#161313]">
        <div className="container m-auto">
          <div className="grid px-3 justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 md:gap-4 pb-[9rem] pt-[5rem]">
            <div className="text-[#F0E6E6] text-[#16px] col-span-2 md:col-auto leading-[5rem] mt-2">
              <Logo />
            </div>
            <div className="text-[#F0E6E6] text-[16px] leading-[3rem]">
              <h4 className="font-bold">Company</h4>
              <ul>
                <li>
                  <Link to={"/"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/"}>Case Studies</Link>
                </li>
                <li>
                  <Link to={"/"}>Talents</Link>
                </li>
                <li>
                  <Link to={"/"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#F0E6E6] text-[16px] leading-[3rem]">
              <h4 className="font-bold">For Talents</h4>
              <ul>
                <li>
                  <Link to={"/"}>Global Invoicing</Link>
                </li>
                <li>
                  <Link to={"/"}>Tax Assistance</Link>
                </li>
                <li>
                  <Link to={"/"}>Banking</Link>
                </li>
                <li>
                  <Link to={"/"}>Virtual Accounts</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#F0E6E6] text-[16px] leading-[3rem]">
              <h4 className="font-bold">Resources</h4>
              <ul>
                <li>
                  {" "}
                  <Link to={"/"}>Pricing</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Blog</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Support</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Contact Us</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Careers</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Press Kit</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#F0E6E6] text-[16px] leading-[3rem]">
              <h4 className="font-bold">Collaborate</h4>
              <ul>
                <li>
                  {" "}
                  <Link to={"/"}>Partners Program</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Partners</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Affiliates</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>HR Partner</Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/"}>Community</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
};

export default Footer;
