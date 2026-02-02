// import { DialogTrigger, Dialog, DialogContent } from "../ui/Dialog";
// import Button from "../ui/Buttons";
// import { MessageSquare } from "lucide-react";
// import { FabbyAI } from "../FabbyAI";
// import { useState } from "react";
// interface DashboardNavProps {
//   handleNavCollapse: () => void;
//   header?: string;
// }
// const DashboardNav = ({ header }: DashboardNavProps) => {
//   const [isAIOpen, setIsAIOpen] = useState(false);
//   const [aiQuery] = useState("");

//   return (
//     <div
//       className="hidden md:block bg-white fixed top-0 py-4 z-10"
//       style={{ width: "calc(100% - 17rem)", left: "17rem" }}
//     >
//       <div className="ml-9 mr-9 flex items-center justify-between">
//         <div>
//           <h1 className="text-[25.15px] md:text-[30px] font-semibold text-gray-800">{header}</h1>
//         </div>
//         <div className="flex items-center gap-4 ml-6">
//           <Dialog open={isAIOpen} onOpenChange={setIsAIOpen}>
//             <DialogTrigger asChild>
//               <div>
//                 <Button
//                   variant="outline"
//                   className="flex items-center gap-2"
//                   text="Call Fabby AI"
//                   leftIcon={<MessageSquare className="h-4 w-4" />}
//                 />
//               </div>
//             </DialogTrigger>
//             <DialogContent className="max-w-4xl w-full p-0" title="Fabby AI">
//               <FabbyAI initialQuery={aiQuery} />
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardNav;



import { DialogTrigger, Dialog, DialogContent } from "../ui/Dialog";
import Button from "../ui/Buttons";
import { MessageSquare, LogOut } from "lucide-react";
import { FabbyAI } from "../FabbyAI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { logout } from "../../store/slice/auth.slice";
import { toast } from "react-hot-toast";

interface DashboardNavProps {
  handleNavCollapse: () => void;
  header?: string;
}

const DashboardNav = ({ header }: DashboardNavProps) => {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [aiQuery] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // ✅ YOUR existing logic (perfect)
  const handleLogout = async () => {
    dispatch(logout());
    toast.success("User logged out successfully");
    navigate("/login");
  };

  return (
    <div
      className="hidden md:block bg-white fixed top-0 py-4 z-10"
      style={{ width: "calc(100% - 17rem)", left: "17rem" }}
    >
      <div className="ml-9 mr-9 flex items-center justify-between">
        <h1 className="text-[25.15px] md:text-[30px] font-semibold text-gray-800">
          {header}
        </h1>

        <div className="flex items-center gap-4 ml-6">
          {/* ---------- Fabby AI ---------- */}
          <Dialog open={isAIOpen} onOpenChange={setIsAIOpen}>
            <DialogTrigger asChild>
              <div>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  text="Call Fabby AI"
                  leftIcon={<MessageSquare className="h-4 w-4" />}
                />
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-4xl w-full p-0" title="Fabby AI">
              <FabbyAI initialQuery={aiQuery} />
            </DialogContent>
          </Dialog>

          {/* ---------- Sign Out ---------- */}
          <Button
            variant="destructive"
            className="flex items-center gap-2"
            text="Sign Out"
            leftIcon={<LogOut className="h-4 w-4" />}
            onClick={() => setIsLogoutOpen(true)}
          />

          {/* ---------- Confirm Modal ---------- */}
          <Dialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen}>
            <DialogContent title="Confirm Logout" className="max-w-sm">
              <div className="p-6 flex flex-col gap-6">
                <p className="text-gray-600 text-sm">
                  Are you sure you want to sign out?
                </p>

                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    text="Cancel"
                    onClick={() => setIsLogoutOpen(false)}
                  />

                  <Button
                    variant="destructive"
                    text="Yes, Sign Out"
                    onClick={handleLogout}
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
