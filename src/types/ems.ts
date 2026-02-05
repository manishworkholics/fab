export interface EMSProfile {
  id: number;

  // Overview
  name: string;
  location?: string;
  established?: number;
  employees?: string;
  bio?: string;
  projectsCompleted: number;

  // Arrays
  certifications: string[];
  specialties: string[];
  manufacturingCapabilities: string[];
  equipmentList: string[];

  facilityVideoUrl?: string;
  status?: string;

  // Reviews (future)
  rating: number;
  reviewCount: number;
  reviews: any[];

  // optional contact
  phone?: string;
  email?: string;
}
