import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHeader from "@/components/Layout/AuthHeader";
import Button from "@/components/ui/Buttons";
import useChangePassword from "../../../grahpql/hooks/useChangePassword";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const { changePassword, loading } = useChangePassword();

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const logoutAndRedirect = () => {
    localStorage.clear();
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      if (values.newPassword !== values.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const success = await changePassword(
        values.oldPassword,
        values.newPassword
      );

      if (success) {
        setSuccessOpen(true);
        setTimeout(logoutAndRedirect, 2000);
      }
    },
  });

  return (
    <>
      <AuthHeader />

      <div className="max-w-md mx-auto mt-16 p-8 border rounded-2xl shadow-md bg-white">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-muted-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Change Password
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {/* old */}
          <div className="relative">
            <input
              type={showOld ? "text" : "password"}
              name="oldPassword"
              placeholder="Current Password"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              className="w-full border rounded-lg p-3 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowOld(!showOld)}
            >
              {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* new */}
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              name="newPassword"
              placeholder="New Password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              className="w-full border rounded-lg p-3 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* confirm */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className="w-full border rounded-lg p-3 pr-10"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <Button
            text="Update Password"
            type="submit"
            isLoading={loading}
            styles="w-full mt-4"
          />
        </form>
      </div>

      {/* success modal */}
      {successOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 text-center w-[350px]">
            <h3 className="text-lg font-semibold mb-2">
              Password Updated Successfully
            </h3>
            <p className="text-sm text-muted-foreground">
              You will be redirected to login
            </p>
          </div>
        </div>
      )}
    </>
  );
}
