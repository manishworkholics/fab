import { Link, useLocation, useNavigate } from "react-router-dom";
import { APP_ROLES } from "../../utils/constant";
import CollapseIcon from "../icons/CollapseIcon";
import LogoutIcon from "../icons/LogoutIcon";
import MenuIcon from "../icons/MenuIcon";
import SearchBar from "../ui/SearchBar";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/slice/auth.slice";
import { toast } from "react-hot-toast";
import { getItemFromStorage } from "../../helpers/misc";
import { sideNavData } from "./SideNavData";

interface SearchBarProps {
 
  role: string;
  toggleSideBar?: () => void;
  isSideBar: boolean;
}

const Sidebar = ({  role, toggleSideBar, isSideBar }: SearchBarProps) => {
  const [user, setUser] = useState<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    toast.success("User logged out successfully");
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = getItemFromStorage("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location]);

  const renderNavItems = () => (
    <nav className="space-y-2">
      {sideNavData
        .filter((menu) => menu.role.includes(role as APP_ROLES))
        .map((data) => (
          <button
            key={data.label}
            className={`flex items-center px-4 py-4 text-sm font-medium rounded-md w-full ${
              location.pathname === data.label ? "text-[#EB5017] bg-orange-100" : "text-[#344054]"
            }`}
            onClick={() => {
              navigate(data.label);
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="material-icons">{data.icon}</span>
            <span className="ml-3">{data.name}</span>
          </button>
        ))}
    </nav>
  );

  return (
    <>
      {/* Top App Bar for mobile & tablet */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow z-30 flex items-center justify-between p-4">
        <Link to="/">
          <img src="/images/logo.png" className="w-[120px] h-[20px]" alt="Logo" />
        </Link>
        <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="cursor-pointer">
          <MenuIcon />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-white shadow z-20 p-4 space-y-4">
          <SearchBar placeHolderText="search" background="bg-transparent" textIcon />

          {renderNavItems()}

          <div className="border-t pt-4">
            <div className="flex items-center">
              <img src="/images/user-2.png" alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {user?.firstName || ""}
                </p>
                <p className="text-xs text-gray-500 truncate overflow-auto max-w-32 min-w-32">
                  {user?.email || ""}
                </p>
              </div>
              <div className="ml-3 cursor-pointer" onClick={handleLogout}>
                <LogoutIcon />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for large screens */}
      {isSideBar && (
        <aside
         className="hidden lg:flex w-64 shrink-0 bg-white shadow-md flex-col z-20 h-screen"

        >
          <div className="p-4 flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-orange-500">
              <Link to="/">
                <img src="/images/logo.png" className="w-[140px] h-[23.06px]" alt="Logo" />
              </Link>
            </h2>
            <div onClick={toggleSideBar} className="cursor-pointer">
              <CollapseIcon />
            </div>
          </div>

          <div className="px-4 mb-8">
            <SearchBar placeHolderText="search" background="bg-transparent" textIcon />
          </div>

          <div className="flex-1 border-b pb-9">{renderNavItems()}</div>

          <div className="p-4">
            <div className="flex items-center">
              <img src="/images/user-2.png" alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {user?.firstName || ""}
                </p>
                <p className="text-xs text-gray-500 truncate overflow-auto max-w-32 min-w-32">
                  {user?.email || ""}
                </p>
              </div>
              <div className="ml-3 cursor-pointer" onClick={handleLogout}>
                <LogoutIcon />
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
