import AuthHeader from "../../components/Layout/AuthHeader";
import FormInput from "../../components/ui/FormInput";
import Button from "../../components/ui/Buttons";
import { Link } from "react-router-dom";
import useRegister from "./hook";
import { RegistrationSchema } from "../../utils/validations";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { UserRole } from "@/__generated__/graphql";


const Register = () => {
  const { handleRegister, loading } = useRegister();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      role: "PM",
      companyName: "",
      acceptTerms: false,
    },

    validationSchema: RegistrationSchema,
    onSubmit: async (values) => {
      try {
        await handleRegister({
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.username,
          password: values.password,
          phone: values.phone,
          role: values.role as UserRole,


          companyName: values.role === "EMS" ? values.companyName : "",
          acceptTerms: values.acceptTerms,
        });
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Registration failed";
        toast.error(errorMessage);
      }
    },
    validateOnBlur: true,
  });

  return (
    <div>
      <AuthHeader />
      <div className="md:w-[70%] lg:w-[30%] px-2 md:px-0 m-auto mt-9">
        <div className=" text-center mb-9">
          <h2 className="text-[28px] font-bold text-[#101928]">Sign Up</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-9">
            <FormInput
              label="FIRST NAME"
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              value={formik.values.firstName}
              handleChange={formik.handleChange}
              error={formik.touched.firstName && formik.errors.firstName}
            />
          </div>
          <div className="mt-9">
            <FormInput
              label="LAST NAME"
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
              value={formik.values.lastName}
              handleChange={formik.handleChange}
              error={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
          <div className="mt-9">
            <FormInput
              label="USERNAME"
              type="text"
              name="username"
              placeholder="Choose username"
              value={formik.values.username}
              handleChange={formik.handleChange}
              error={formik.touched.username && formik.errors.username}
            />
          </div>
          <div className="mt-9">
            <FormInput
              label="EMAIL ADDRESS"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              handleChange={formik.handleChange}
              error={formik.touched?.email && formik.errors?.email}
            />
          </div>
          <div className="mt-9">
            <FormInput
              label="PHONE NUMBER"
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formik.values.phone}
              handleChange={formik.handleChange}
              error={formik.touched.phone && formik.errors.phone}
            />
          </div>

          <div className="mt-9">
            <label className="block mb-2 font-medium">ROLE</label>
            <select
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="PM">Project Manager (PM)</option>
              <option value="EMS">EMS Provider</option>
            </select>
          </div>

          {formik.values.role === "EMS" && (
            <div className="mt-9">
              <FormInput
                label="COMPANY NAME"
                type="text"
                name="companyName"
                placeholder="Enter company name"
                value={formik.values.companyName}
                handleChange={formik.handleChange}
                error={formik.touched.companyName && formik.errors.companyName}
              />
            </div>
          )}


          <div className="mt-9">
            <FormInput
              label="PASSWORD"
              type="password"
              name="password"
              value={formik.values.password}
              handleChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="mt-9">
            <FormInput
              label="CONFIRM PASSWORD"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              handleChange={formik.handleChange}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </div>
          <div className="  mt-3 justify-between items-center">
            <div className=" flex items-center gap-3">
              <div className="w-[15px]">
                <FormInput
                  type="checkbox"
                  name="acceptTerms"
                  handleChange={formik.handleChange}
                  style="h-[20px] w-[20px]"
                />
              </div>
              <p>I accept Terms & Conditions</p>
            </div>
          </div>
          <div className="w-full mt-5">
            <Button
              text={"Sign Up"}
              type={"submit"}
              styles="w-full"
              position={"center"}
              isLoading={loading}
            // handleClick={()=>navigate('/quote')}
            />
          </div>
        </form>
        {/* <div className="flex justify-center items-center gap-2 border mt-9 py-4 rounded-[6px] cursor-pointer">
          <img src="/images/google-logo.png" className="w-[20px] h-[20px]" />
          <p className="text-[#344054] text-[16px]">Continue with Google</p>
        </div>
        <div className="flex justify-center items-center gap-2 border mt-9 py-4 rounded-[6px] cursor-pointer">
          <img src="/images/t-logo.png" className="w-[20px] h-[20px]" />
          <p className="text-[#344054] text-[16px]">Continue with Twitter</p>
        </div> */}
        <div>
          <div className="flex items-center justify-center gap-2 mt-9">
            <p className="text-[#667185] text-[14px]">Not new here?</p>
            <Link to="/login" className="text-[#CC400C]">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
