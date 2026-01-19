import apolloClient from "../grahpql";
import { RegisterUserDocument } from "@/__generated__/graphql";
import { UserRole } from "@/__generated__/graphql";
 
export const registerService = async (input: {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  acceptTerms: true,
  role: UserRole,
}) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: RegisterUserDocument,
      variables: { input },
    });

    return data?.register;
  } catch (error: any) {
    throw new Error(error.message || "Registration failed");
  }
};

export const logout = () => {
  localStorage.removeItem("user"); 
};

const authService = { 
  logout, 
}

export default authService
