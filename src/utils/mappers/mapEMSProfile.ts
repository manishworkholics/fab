import { EMSProfile } from "@/types/ems";


export function mapEMSProfile(api: any): EMSProfile {
    const split = (arr?: string[]) =>
        arr?.flatMap((item) => item.split(",").map((v) => v.trim())) ?? [];

    return {
        id: api.id,

        // Overview
        name: api.companyName,
        location: api.location,
        established: api.establishedYear,
        employees: api.employeeRange,
        bio: api.bio,
        projectsCompleted: api.projectsCompleted ?? 0,

        // Arrays
        certifications: split(api.certifications),
        specialties: split(api.specialties),
        manufacturingCapabilities: split(api.manufacturingCapabilities),
        equipmentList: split(api.equipmentList),

        facilityVideoUrl: api.facilityVideoUrl,
        status: api.EMSAvailabilityStatus,

        rating: api.rating ?? 0,
        reviewCount: api.reviewCount ?? 0,
        reviews: api.reviews ?? [],

        phone: api.phone,
        email: api.email
    };
}
