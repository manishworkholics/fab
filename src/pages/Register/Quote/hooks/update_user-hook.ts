import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import apolloClient from "../../../../grahpql";
import { UPDATE_ME_MUTATION } from "../../../../grahpql/mutations/user";
import { UserRole } from "@/__generated__/graphql";

interface UpdateUserInput {
  phone: string;
  userRole: UserRole;
}

function useUserUpdate() {
  const [updateMeMutation, { loading }] = useMutation(UPDATE_ME_MUTATION, {
    client: apolloClient,
  });

  const handleUserUpdate = async ({ phone, userRole }: UpdateUserInput) => {
    try {
      const { data } = await updateMeMutation({
        variables: {
          input: {
            phone,
            role: userRole,
          },
        },
      });

      if (!data?.updateMe?.user) {
        throw new Error("User update failed");
      }

      // save updated user
      localStorage.setItem("user", JSON.stringify(data.updateMe.user));

      return data.updateMe.user;
    } catch (error: any) {
      toast.error(error.message || "User update failed");
      throw error;
    }
  };

  return { handleUserUpdate, loading };
}

export default useUserUpdate;
