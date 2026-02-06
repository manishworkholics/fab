// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
// import AuthHeader from "../../components/Layout/AuthHeader";
// import FormInput from "../../components/ui/FormInput";
// import Button from "../../components/ui/Buttons";
// import useCompleteEMSProfile from "./hooks/useCompleteEMSProfile";

// const EMSProfile = () => {
//   const navigate = useNavigate();
//   const { completeProfile, loading } = useCompleteEMSProfile();

//   const formik = useFormik({
//     initialValues: {
//       phone: "",
//       bio: "",
//       location: "",
//       companyName: "",
//       establishedYear: "",
//       employeeRange: "",
//       certifications: "",
//       specialties: "",
//       manufacturingCapabilities: "",
//       equipmentList: "",
//       facilityVideoUrl: "",
//       jobRole: "ELECTRONIC_MANUFACTURING_SERVICE",
//       projectBuildType: "PCB",
//       EMSAvailabilityStatus: "ACTIVE",
//     },
//     onSubmit: async (values) => {
//       const success = await completeProfile(values);
//       if (success) navigate("/dashboard");
//       setTimeout(() => {
//         window.location.reload();
//       }, 100);
//     },
//   });

//   return (
//     <>
//       <AuthHeader />

//       <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg">
//         <h2 className="text-2xl font-bold mb-6">Complete EMS Profile</h2>

//         <form onSubmit={formik.handleSubmit} className="space-y-4">

//           <FormInput label="Company Name" name="companyName" value={formik.values.companyName} handleChange={formik.handleChange} />

//           <FormInput label="Phone" name="phone" value={formik.values.phone} handleChange={formik.handleChange} />

//           <FormInput label="Location" name="location" value={formik.values.location} handleChange={formik.handleChange} />

//           <FormInput label="Bio" name="bio" textarea value={formik.values.bio} handleChange={formik.handleChange} />

//           <FormInput
//             label="Established Year"
//             name="establishedYear"
//             value={formik.values.establishedYear}
//             handleChange={(e) =>
//               formik.setFieldValue("establishedYear", Number(e.target.value))
//             }
//           />


//           <FormInput label="Employee Range (eg: 50-100)" name="employeeRange" value={formik.values.employeeRange} handleChange={formik.handleChange} />

//           <FormInput label="Certifications (comma separated)" name="certifications" value={formik.values.certifications} handleChange={formik.handleChange} />

//           <FormInput label="Specialties (comma separated)" name="specialties" value={formik.values.specialties} handleChange={formik.handleChange} />

//           <FormInput label="Manufacturing Capabilities" name="manufacturingCapabilities" value={formik.values.manufacturingCapabilities} handleChange={formik.handleChange} />

//           <FormInput label="Equipment List" name="equipmentList" value={formik.values.equipmentList} handleChange={formik.handleChange} />

//           <FormInput label="Facility Video URL" name="facilityVideoUrl" value={formik.values.facilityVideoUrl} handleChange={formik.handleChange} />

//           <div>
//             <label>Job Role</label>
//             <select name="jobRole" value={formik.values.jobRole} onChange={formik.handleChange} className="w-full border p-2 rounded">
//               <option value="ELECTRONIC_MANUFACTURING_SERVICE">EMS</option>
//               <option value="CONTRACT_MANUFACTURER">Contract Manufacturer</option>
//             </select>
//           </div>

//           <div>
//             <label>Project Build Type</label>
//             <select name="projectBuildType" value={formik.values.projectBuildType} onChange={formik.handleChange} className="w-full border p-2 rounded">
//               <option value="PCB">PCB Assembly</option>
//             </select>
//           </div>

//           <div>
//             <label>Availability Status</label>
//             <select name="EMSAvailabilityStatus" value={formik.values.EMSAvailabilityStatus} onChange={formik.handleChange} className="w-full border p-2 rounded">
//               <option value="ACTIVE">Active</option>
//               <option value="OPEN">Open</option>
//               <option value="NOT_AVAILABLE">Not Available</option>
//             </select>
//           </div>

//           <Button text="Save Profile" type="submit" isLoading={loading} styles="w-full mt-4" />

//         </form>
//       </div>
//     </>
//   );
// };

// export default EMSProfile;




import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../../components/Layout/AuthHeader";
import FormInput from "../../../components/ui/FormInput";
import Button from "../../../components/ui/Buttons";
import useCompleteEMSProfile from "../hooks/useCompleteEMSProfile";
import { useQuery } from "@apollo/client";
import { GET_FULL_EMS_DETAIL_BY_ID } from "@/grahpql/queries/ems";
import { getItemFromStorage } from "@/helpers/misc";

const EMSProfile = () => {
  const navigate = useNavigate();
  const { completeProfile, loading } = useCompleteEMSProfile();

  const storedUser = JSON.parse(getItemFromStorage("user") || "{}");

  const { data } = useQuery(GET_FULL_EMS_DETAIL_BY_ID, {
    variables: { id: Number(storedUser?.id) },
    skip: !storedUser?.id,
  });

  const profile = data?.getFullEMSDetailById;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      phone: profile?.phone || "",
      bio: profile?.bio || "",
      location: profile?.location || "",
      companyName: profile?.companyName || "",
      establishedYear: profile?.establishedYear || "",
      employeeRange: profile?.employeeRange || "",
      certifications: profile?.certifications?.join(", ") || "",
      specialties: profile?.specialties?.join(", ") || "",
      manufacturingCapabilities:
        profile?.manufacturingCapabilities?.join(", ") || "",
      equipmentList: profile?.equipmentList?.join(", ") || "",
      facilityVideoUrl: profile?.facilityVideoUrl || "",
      jobRole:
        profile?.jobRole || "ELECTRONIC_MANUFACTURING_SERVICE",
      projectBuildType: profile?.projectBuildType || "PCB",
      EMSAvailabilityStatus: profile?.EMSAvailabilityStatus || "ACTIVE",
    },
    onSubmit: async (values) => {
      const payload = {
        ...values,
        certifications: values.certifications.split(",").map((s: string) => s.trim()),
        specialties: values.specialties.split(",").map((s: string) => s.trim()),
        manufacturingCapabilities: values.manufacturingCapabilities.split(",").map((s: string) => s.trim()),
        equipmentList: values.equipmentList.split(",").map((s: string) => s.trim()),
      };

      const success = await completeProfile(payload);
      if (success) navigate("/dashboard");
    },
  });

  return (
    <>
      <AuthHeader />

      <div className="max-w-4xl mx-auto mt-10">
        <div className="bg-white shadow-sm border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Complete EMS Company Profile
          </h2>

          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <FormInput label="Company Name" name="companyName" value={formik.values.companyName} handleChange={formik.handleChange} />

            <FormInput label="Location" name="location" value={formik.values.location} handleChange={formik.handleChange} />

            <FormInput
              label="Established Year"
              name="establishedYear"
              value={formik.values.establishedYear}
              handleChange={(e) =>
                formik.setFieldValue("establishedYear", Number(e.target.value))
              }
            />

            <FormInput label="Employee Range" name="employeeRange" value={formik.values.employeeRange} handleChange={formik.handleChange} />

            <FormInput label="Certifications" name="certifications" value={formik.values.certifications} handleChange={formik.handleChange} />

            <FormInput label="Specialties" name="specialties" value={formik.values.specialties} handleChange={formik.handleChange} />

            <FormInput label="Manufacturing Capabilities" name="manufacturingCapabilities" value={formik.values.manufacturingCapabilities} handleChange={formik.handleChange} />

            <FormInput label="Equipment List" name="equipmentList" value={formik.values.equipmentList} handleChange={formik.handleChange} />

            <FormInput label="Facility Video URL" name="facilityVideoUrl" value={formik.values.facilityVideoUrl} handleChange={formik.handleChange} />

            <div>
              <label className="text-sm font-medium">Job Role</label>
              <select
                name="jobRole"
                value={formik.values.jobRole}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded mt-1"
              >
                <option value="ELECTRONIC_MANUFACTURING_SERVICE">EMS</option>
                <option value="CONTRACT_MANUFACTURER">Contract Manufacturer</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Project Build Type</label>
              <select
                name="projectBuildType"
                value={formik.values.projectBuildType}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded mt-1"
              >
                <option value="PCB">PCB Assembly</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Availability Status</label>
              <select
                name="EMSAvailabilityStatus"
                value={formik.values.EMSAvailabilityStatus}
                onChange={formik.handleChange}
                className="w-full border p-2 rounded mt-1"
              >
                <option value="ACTIVE">Active</option>
                <option value="OPEN">Open</option>
                <option value="NOT_AVAILABLE">Not Available</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <Button text="Save Profile" type="submit" isLoading={loading} styles="w-full mt-4" />
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default EMSProfile;
