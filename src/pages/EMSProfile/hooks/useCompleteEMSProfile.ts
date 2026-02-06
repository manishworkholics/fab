// import { useMutation } from "@apollo/client";
// import { toast } from "react-hot-toast";
// import { gql } from "@apollo/client";

// const COMPLETE_EMS_PROFILE_MUTATION = gql`
//   mutation CompleteEMSProfile($input: CompleteProfileInput!) {
//     completeEMSProfile(input: $input)
//   }
// `;

// export interface CompleteProfilePayload {
//   phone?: string;
//   bio?: string;
//   location?: string;
//   jobRole?: string;
//   projectBuildType?: string;
//   EMSAvailabilityStatus?: string;
// }

// export default function useCompleteEMSProfile() {
//   const [mutate, { loading }] = useMutation(COMPLETE_EMS_PROFILE_MUTATION);
  

//   const completeProfile = async (payload: CompleteProfilePayload) => {
//     try {
//       const { data } = await mutate({
//         variables: { input: payload },
//       });

//       if (data?.completeEMSProfile) {
//         toast.success("Profile completed successfully");
//         return true;
//       }

//       return false;
//     } catch (error: any) {
//       toast.error(error.message || "Failed to complete profile");
//       return false;
//     }
//   };

//   return { completeProfile, loading };
// }



import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { gql } from "@apollo/client";
import { GET_FULL_EMS_DETAIL_BY_ID } from "@/grahpql/queries/ems";
import { getItemFromStorage } from "@/helpers/misc";

const COMPLETE_EMS_PROFILE_MUTATION = gql`
  mutation CompleteEMSProfile($input: CompleteProfileInput!) {
    completeEMSProfile(input: $input)
  }
`;

export interface CompleteProfilePayload {
  phone?: string;
  bio?: string;
  location?: string;
  jobRole?: string;
  projectBuildType?: string;
  EMSAvailabilityStatus?: string;
}

export default function useCompleteEMSProfile() {
  const user = JSON.parse(getItemFromStorage("user") || "{}");

  const [mutate, { loading }] = useMutation(COMPLETE_EMS_PROFILE_MUTATION, {
    refetchQueries: [
      {
        query: GET_FULL_EMS_DETAIL_BY_ID,
        variables: { id: Number(user?.id) },
      },
    ],
    awaitRefetchQueries: true,
  });

  const completeProfile = async (payload: CompleteProfilePayload) => {
    try {
      const { data } = await mutate({
        variables: { input: payload },
      });

      if (data?.completeEMSProfile) {
        toast.success("Profile updated successfully");
        return true;
      }

      return false;
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile");
      return false;
    }
  };

  return { completeProfile, loading };
}
