// import { ReactNode, useMemo, useState } from "react";
// import Sidebar from "../../components/Layout/Sidebar";
// import DashboardNav from "../../components/Layout/DashboardNav";
// import { RootState, useAppSelector } from "../../store";

// interface DasboardLayoutProps {
//   children: ReactNode;
//   showTopBar?: boolean;
//   tempRole?: string;
//   noMarginTop?: boolean;
//   noPadding?: boolean;
//   header?: string;
// }

// const DasboardLayout = ({
//   children,
//   noMarginTop,
//   showTopBar = true,
//   tempRole,
//   header,
//   noPadding,
// }: DasboardLayoutProps) => {
//   const roles = useAppSelector((state: RootState) => state.auth.roles);

//   const role = useMemo(() => {
//     return tempRole ?? roles?.[0];
//   }, [tempRole, roles]);

//   const [isSideBar, setIsSideBar] = useState(true);

//   const toggleSideBar = () => {
//     setIsSideBar((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <Sidebar role={role} toggleSideBar={toggleSideBar} isSideBar={isSideBar} />


//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top bar (only on tablet/mobile) */}
//         {showTopBar && <DashboardNav handleNavCollapse={toggleSideBar} header={header} />}

//         {/* Main area with responsive margin/padding */}
//         <main
//           className={`flex-1 w-full 
//             p-5 mt-20 
//             md:p-5 md:mt-20 
//             ${noPadding ? "lg:p-0" : "lg:p-9"} ${noMarginTop ? "lg:mt-0" : ""}`}
//         >
//           <div className="h-full w-full">{children}</div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DasboardLayout;




// import { ReactNode, useMemo, useState } from "react";
// import Sidebar from "../../components/Layout/Sidebar";
// import DashboardNav from "../../components/Layout/DashboardNav";
// import { RootState, useAppSelector } from "../../store";

// interface DasboardLayoutProps {
//   children: ReactNode;
//   showTopBar?: boolean;
//   tempRole?: string;
//   noMarginTop?: boolean;
//   noPadding?: boolean;
//   header?: string;
// }

// const DasboardLayout = ({
//   children,
//   noMarginTop,
//   showTopBar = true,
//   tempRole,
//   header,
//   noPadding,
// }: DasboardLayoutProps) => {
//   const roles = useAppSelector((state: RootState) => state.auth.roles);

//   const role = useMemo(() => {
//     return tempRole ?? roles?.[0];
//   }, [tempRole, roles]);

//   const [isSideBar, setIsSideBar] = useState(true);

//   const toggleSideBar = () => {
//     setIsSideBar((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <Sidebar role={role} toggleSideBar={toggleSideBar} isSideBar={isSideBar} />

//       {/* Main Content */}
//       <div
//         className={`flex-1 flex flex-col transition-all duration-300
//         ${isSideBar ? "lg:ml-64" : "lg:ml-0"}`}
//       >
//         {/* Top bar */}
//         {showTopBar && (
//           <DashboardNav handleNavCollapse={toggleSideBar} header={header} />
//         )}

//         {/* Main area */}
//         <main
//           className={`flex-1 w-full 
//             p-5 mt-20 
//             md:p-5 md:mt-20 
//             ${noPadding ? "lg:p-0" : "lg:p-9"} 
//             ${noMarginTop ? "lg:mt-0" : ""}`}
//         >
//           <div className="h-full w-full">{children}</div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DasboardLayout;









import { ReactNode, useMemo, useState } from "react";
import Sidebar from "../../components/Layout/Sidebar";
import DashboardNav from "../../components/Layout/DashboardNav";
import { RootState, useAppSelector } from "../../store";
import { useLocation } from "react-router-dom";
import { sideNavData } from "../../components/Layout/SideNavData";

interface Props {
  children: ReactNode;
  showTopBar?: boolean;
  tempRole?: string;
  noMarginTop?: boolean;
  noPadding?: boolean;
  header?: string;
}

const DasboardLayout = ({
  children,
  noMarginTop,
  showTopBar = true,
  tempRole,
  header,
  noPadding,
}: Props) => {
  const roles = useAppSelector((state: RootState) => state.auth.roles);
  const location = useLocation();

  const role = useMemo(() => tempRole ?? roles?.[0], [tempRole, roles]);

  const [isSideBar, setIsSideBar] = useState(true);

  const toggleSideBar = () => setIsSideBar((p) => !p);

  // same logic as sidebar
  const isDashboardRoute = sideNavData.some((item) =>
    location.pathname.startsWith(item.label)
  );

  // 🚫 no layout on public pages
  if (!isDashboardRoute) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role={role} toggleSideBar={toggleSideBar} isSideBar={isSideBar} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSideBar ? "lg:ml-64" : "lg:ml-0"
        }`}
      >
        {showTopBar && <DashboardNav handleNavCollapse={toggleSideBar} header={header} />}

        <main
          className={`flex-1 w-full p-5 mt-20 md:p-5 md:mt-20 ${
            noPadding ? "lg:p-0" : "lg:p-9"
          } ${noMarginTop ? "lg:mt-0" : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DasboardLayout;
