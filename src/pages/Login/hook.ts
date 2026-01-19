import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useFormValidator } from "../../utils/hooks/useFormValidator";
import { validationSchema } from "../../utils/validations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/slice/auth.slice";
import { LoginUserDocument } from "../../__generated__/graphql";

export interface LoginStateProps {
  email: string;
  password: string;
}

export const initialState: LoginStateProps = {
  email: "",
  password: "",
};

function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { control, handleSubmit } = useFormValidator({
    defaultValues: initialState,
    validationSchema: validationSchema.register,
  });

  const [loginMutation, { loading }] = useMutation(LoginUserDocument);

  async function handleLogin({ email, password }: LoginStateProps) {
    try {
      await loginMutation({
        variables: { input: { email, password } },
        onCompleted: (data) => {
          if (data?.login?.accessToken && data?.login?.refreshToken) {
            localStorage.setItem("accessToken", data.login.accessToken);
            localStorage.setItem("refreshToken", data.login.refreshToken);
            localStorage.setItem("user", JSON.stringify(data.login.user));
            dispatch(
              loginSuccess({
                user: data.login.user,
                accessToken: data.login.accessToken,
              })
            );
            toast.success("Login Successful!");
            navigate("/dashboard");
          } else {
            throw new Error("Invalid response from server");
          }
        },
      });
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    }
  }

  return { control, loading, handleSubmit, handleLogin };
}

export default useLogin;
