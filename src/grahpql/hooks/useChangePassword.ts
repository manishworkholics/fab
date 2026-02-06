import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { CHANGE_PASSWORD } from "@/grahpql/queries/auth";

export default function useChangePassword() {
  const [mutate, { loading }] = useMutation(CHANGE_PASSWORD);

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      const { data } = await mutate({
        variables: { oldPassword, newPassword },
      });

      if (data?.changePassword) {
        toast.success("Password changed successfully");
        return true;
      }
      return false;
    } catch (err: any) {
      toast.error(err.message);
      return false;
    }
  };

  return { changePassword, loading };
}
