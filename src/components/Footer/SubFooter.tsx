import { Link } from "react-router-dom";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";

const SubFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#3E3838] px-3 md:px-0">
      <div className="container m-auto justify-center md:justify-between grid md:grid-cols-2 md:gap-4 py-[1rem]">
        <p className="text-[16px] text-[#ffffff]">
          © {currentYear} Fabspace AI.{" "}
        </p>
        <div className="flex gap-3 justify-center mt-2 md:mt-0 md:justify-end">
          <Link to={"/"}>
            {" "}
            <Twitter />
          </Link>
          <Link to={"/"}>
            <Instagram />
          </Link>
          <Link to={"/"}>
            <LinkedIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
