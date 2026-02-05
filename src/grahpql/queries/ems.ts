import { gql } from "@apollo/client";

export const GET_ALL_EMS = gql`
  query GetAllEMS {
    getAllEMS {
       id
    companyName
    location
    bio
    establishedYear
    employeeRange
    certifications
    specialties
    manufacturingCapabilities
    equipmentList
    facilityVideoUrl
    EMSAvailabilityStatus
    jobRole
    projectBuildType

    rating        # ⭐ ADD
  reviewCount   # ⭐ ADD
    }
  }
`;
