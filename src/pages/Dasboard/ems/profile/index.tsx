import DasboardLayout from "../../layout";
import { GET_FULL_EMS_DETAIL_BY_ID } from "@/grahpql/queries/ems";
import { getItemFromStorage } from "@/helpers/misc";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Buttons";

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(getItemFromStorage("user") || "{}");

    const { data, loading } = useQuery(GET_FULL_EMS_DETAIL_BY_ID, {
        variables: { id: Number(user?.id) },
        skip: !user?.id,
    });

    const profile = data?.getFullEMSDetailById;

    if (loading) return <p className="p-6">Loading profile...</p>;

    return (
        <DasboardLayout header="Company Profile">
            <div className="max-w-5xl mx-auto mt-6">

                {/* Top actions */}
                <div className="flex justify-between items-center mb-6">
                    <Button
                        text="← Back"
                        variant="outline"
                        onClick={() => navigate("/dashboard")}
                    />

                    <Button
                        text="Change Password"
                        variant="outline"
                        onClick={() => navigate("/ems/change-password")}
                    />

                    <Button
                        text="Edit Profile"
                        onClick={() => navigate("/ems/complete-profile")}
                    />
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-2xl shadow border p-8 space-y-6">

                    {/* Header */}
                    <div className="border-b pb-4">
                        <h2 className="text-2xl font-bold">
                            {profile?.companyName || "Company"}
                        </h2>
                        <p className="text-gray-500">{profile?.location}</p>
                    </div>

                    {/* Grid info */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <Info label="Email" value={user?.email} />
                        {/* <Info label="Phone" value={profile?.phone} /> */}
                        <Info label="Established Year" value={profile?.establishedYear} />
                        <Info label="Employee Range" value={profile?.employeeRange} />
                        <Info label="Availability Status" value={profile?.EMSAvailabilityStatus} />

                    </div>

                    {/* Certifications */}
                    <TagSection
                        title="Certifications"
                        items={profile?.certifications}
                    />

                    <TagSection
                        title="Specialties"
                        items={profile?.specialties}
                    />

                    <TagSection
                        title="Manufacturing Capabilities"
                        items={profile?.manufacturingCapabilities}
                    />

                    <TagSection
                        title="Equipment"
                        items={profile?.equipmentList}
                    />

                </div>
            </div>
        </DasboardLayout>
    );
};

/* reusable components */

const Info = ({ label, value }: any) => (
    <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value || "-"}</p>
    </div>
);

const TagSection = ({ title, items = [] }: any) => (
    <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.length > 0 ? (
                items.map((i: string) => (
                    <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm"
                    >
                        {i}
                    </span>
                ))
            ) : (
                <p className="text-sm text-gray-400">Not provided</p>
            )}
        </div>
    </div>
);

export default Profile;
