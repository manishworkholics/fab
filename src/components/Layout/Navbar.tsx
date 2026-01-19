import { useEffect, useRef, useState } from "react";
import CaretDownIcon from "../icons/CaretDownIcon";
import { Link} from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import WaitlistModal from "../../pages/Dasboard/WaitlistModal";
import { navBarItems } from "@/utils/constant";

const DropdownMenu = ({ title, items }: { title: string; items: { name: string; link: string }[] }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <li
        className="text-black cursor-pointer flex items-center gap-2 text-[16px] list-none"
        onClick={() => setOpen(!open)}
      >
        {title}
        <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
      </li>
      {open && (
        <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 z-10 min-w-[160px]">
          {items.map((item, idx) => (
            <Link to={item.link}>
              <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
const Navbar = () => {
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
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Center Section */}
        <ul className="hidden lg:flex space-x-8 bg-gray-50 px-6 py-2 rounded-full">
          {navBarItems.map((item, idx) =>
            item.dropdown ? (
              <DropdownMenu
                key={idx}
                title={item.title}
                items={item.dropdown}              />
            ) : (
              <li
                key={idx}
                className="text-black cursor-pointer text-[16px] hover:font-medium list-none"
              >
                {item.title}
              </li>
            ),
          )}
        </ul>
        {/* Right Section */}
        <div className="hidden lg:flex items-center">
          <WaitlistModal text="Get Early Access + Demo" width="w-[235px] px-5" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed h-[100vh] top-16 left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col space-y-4 p-6">
            <li className="text-black cursor-pointer hover:font-medium flex items-center gap-2">
              Product
              <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
            </li>

            <li className="text-black cursor-pointer hover:font-medium">Customers</li>
            <li className="text-black cursor-pointer hover:font-medium flex items-center gap-2">
              Resources
              <CaretDownIcon width="15.83px" height="8.2px" fill="#000000" />
            </li>

            <li className="text-black cursor-pointer hover:font-medium">Pricing</li>
            <li className="text-black cursor-pointer hover:font-medium">Company</li>
          </ul>
          <div className="flex flex-col space-y-4 p-6 w-full">
            <WaitlistModal />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
