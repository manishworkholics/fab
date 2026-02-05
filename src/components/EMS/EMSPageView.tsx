import { useState } from "react";
import DashboardLayout from "@/pages/Dasboard/layout";
import EMSHeader from "./EMSHeader";
import EMSFilters from "./EMSFilter";
import EMSCard from "./EMSCard";
import EMSNoResults from "./EMSEmpty";
import { useEMS } from "./hooks/useEMS";

export default function EMSPageView() {
  const { emsList, loading, error } = useEMS();

  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedRating, setSelectedRating] = useState("All Ratings");


  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

 


  const filteredCompanies = emsList.filter((company: any) => {
    const matchesLocation =
      selectedLocation === "All Locations" ||
      company.location === selectedLocation;

    const matchesSearch =
      company.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRating =
      selectedRating === "All Ratings" ||
      company.rating >= parseInt(selectedRating);

    return matchesLocation && matchesSearch && matchesRating;
  });



  const locations: string[] = [
    "All Locations",
    ...Array.from(
      new Set(emsList.map((c: any) => c.location).filter(Boolean))
    ) as string[],
  ];



  return (
    <DashboardLayout header="EMS Companies">
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl">

          <EMSHeader />

          <EMSFilters
            locations={locations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />



          {loading && <p className="mt-6">Loading EMS companies...</p>}
          {error && <p className="mt-6 text-red-500">Failed to load EMS companies</p>}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {filteredCompanies.map((company: any) => (
              <EMSCard
                key={company.id}
                company={company}
                setSelectedCompany={setSelectedCompany}
                selectedCompany={selectedCompany}
              />
            ))}
          </div>

          {!loading && filteredCompanies.length === 0 && <EMSNoResults />}
        </div>
      </div>
    </DashboardLayout>
  );
}

