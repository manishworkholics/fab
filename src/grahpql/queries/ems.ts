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


export const GET_FULL_EMS_DETAIL_BY_ID = gql`
  query GetFullEMSDetailById($id: Int!) {
    getFullEMSDetailById(id: $id) {
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
      jobRole
      projectBuildType
      EMSAvailabilityStatus
      }
  }
`;
