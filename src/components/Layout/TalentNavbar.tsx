import { useState } from "react";
import CaretDownIcon from "../icons/CaretDownIcon";
import Button from "../ui/Buttons";
import { Link, useNavigate } from "react-router-dom";

const TalentNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container m-auto  bg-white px-2 lg:px-0">
      <div className="flex items-center justify-between py-9">
        {/* Left Section */}
        <div className="text-2xl font-bold text-black">
          <Link to={"/"}>
            <img src="/images/logo.png" className="w-[140px] h-[23.06px]" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
            aria-label="Toggle Menu">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Center Section */}
        <ul className="hidden lg:flex space-x-8 bg-gray-50 px-6 py-2 rounded-full">
          <li className="text-black cursor-pointer flex items-center gap-2 text-[16px]">
            Jobs
            <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
          </li>
          <li className="text-black cursor-pointer flex items-center gap-2 text-[16px]">
            Locations
            <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
          </li>
          <li className="text-black cursor-pointer flex items-center gap-2 text-[16px]">
            Companies
            <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
          </li>
          <li className="text-black cursor-pointer flex items-center gap-2 text-[16px]">
            Resources
            <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            text={"Login"}
            type={"button"}
            position={"center"}
            background="bg-[transparent]"
            color="text-[#EB5017]"
            shadow="shadow-0"
            styles="border-[1.5px] border-[#EB5017] border-solid"
            handleClick={() => navigate("/login")}
          >
            <CaretDownIcon width="15.83px" height="8.2px" fill="#EB5017" />
          </Button>
          <Button text={"Sign Up"} type={"button"} position={"center"} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed h-[100vh] top-16 left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col space-y-4 p-6">
            <li className="text-black cursor-pointer hover:font-medium flex items-center gap-2">
              Jobs
              <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
            </li>

            <li className="text-black cursor-pointer hover:font-medium flex items-center gap-2">
              Locations
              <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
            </li>
            <li className="text-black cursor-pointer hover:font-medium flex items-center gap-2">
              Companies
              <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
            </li>
            <li className="text-black cursor-pointer hover:font-medium flex items-center gap-2">
              Resources
              <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
            </li>
          </ul>
          <div className="flex flex-col space-y-4 p-6">
            <button 
              className="px-4 py-2 text-orange-500 hover:font-medium border border-solid border-[#EB5017] rounded-md flex gap-4 justify-center items-center"
              onClick={() => navigate("/login")}
            >
              Login 
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TalentNavbar;
