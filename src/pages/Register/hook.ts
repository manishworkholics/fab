import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useFormValidator } from "../../utils/hooks/useFormValidator";
import { validationSchema } from "../../utils/validations";
import { useNavigate } from "react-router-dom";
import { RegisterUserDocument } from "@/__generated__/graphql";
import { UserRole } from "@/__generated__/graphql";


export interface RegisterStateProps {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  phone: string;
  role: UserRole;
  companyName?: string;
  acceptTerms: boolean;
}


export const initialState: RegisterStateProps = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  phone: "",
  role: UserRole.Pm,
  companyName: "",
  acceptTerms: false,
};


function useRegister() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useFormValidator({
    defaultValues: initialState,
    validationSchema: validationSchema.register,
  });

  const [registerMutation, { loading }] = useMutation(RegisterUserDocument);

  async function handleRegister({
    email,
    firstName,
    lastName,
    username,
    password,
    phone,
    role,
    companyName,
    acceptTerms,
  }: RegisterStateProps) {
    try {
      const { data } = await registerMutation({
        variables: {
          input: {
            email,
            firstName,
            lastName,
            username,
            password,
            phone,
            role,
            companyName: role === "EMS" ? companyName : "",
            acceptTerms,
          },
        },
      });

      if (data?.register?.accessToken && data?.register?.refreshToken) {
        localStorage.setItem("accessToken", data.register.accessToken);
        localStorage.setItem("refreshToken", data.register.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.register.user));

        toast.success("Registration Successful!");

        // ✅ Role based redirect
        // if (role === "PM") {
        //   navigate("/quote?add=new-user");
        // } else {
        //   navigate("/login");
        // }

        const userRole = data.register.user.role;

        if (userRole === "PM") {
          navigate("/quote?add=new-user");
        } else if (userRole === "EMS") {
          navigate("/ems/complete-profile");
        }


      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Registration failed";
      toast.error(errorMessage);
    }
  }

  return { control, loading, handleSubmit, handleRegister };
}

export default useRegister;
