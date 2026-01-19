// import { useState } from "react";
// import DashboardLayout from "@/pages/Dasboard/layout";
// import EMSHeader from "./EMSHeader";
// import EMSFilters from "./EMSFilter";
// import EMSCard from "./EMSCard";
// import EMSNoResults from "./EMSEmpty";
// import { emsCompanies } from "@/utils/constant";

// export default function EMSPageView() {
//   const [selectedState, setSelectedState] = useState("All States");
//   const [selectedRating, setSelectedRating] = useState("All Ratings");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCompany, setSelectedCompany] = useState<(typeof emsCompanies)[0] | null>(null);

//   const filteredCompanies = emsCompanies.filter((company) => {
//     const matchesState = selectedState === "All States" || company.state === selectedState;
//     const matchesRating =
//       selectedRating === "All Ratings" ||
//       (selectedRating === "4.5+ Stars" && company.rating >= 4.5) ||
//       (selectedRating === "4.0+ Stars" && company.rating >= 4.0) ||
//       (selectedRating === "3.5+ Stars" && company.rating >= 3.5);
//     const matchesSearch =
//       company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       company.location.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchesState && matchesRating && matchesSearch;
//   });

//   return (
//     <DashboardLayout header="EMS Companies">
//       <div className="min-h-screen bg-background">
//         <div className="max-w-7xl">
//           {/* Header */}
//           <EMSHeader />

//           {/* Filters */}
//           <EMSFilters
//             selectedState={selectedState}
//             setSelectedState={setSelectedState}
//             selectedRating={selectedRating}
//             setSelectedRating={setSelectedRating}
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//           />

//           {/* Results */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//             {filteredCompanies.map((company) => (
//               <EMSCard
//                 key={company.id}
//                 company={company}
//                 setSelectedCompany={setSelectedCompany}
//                 selectedCompany={selectedCompany}
//               />
//             ))}
//           </div>

//           {/* No Results */}
//           {filteredCompanies.length === 0 && <EMSNoResults />}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }



import { useState } from "react";
import DashboardLayout from "@/pages/Dasboard/layout";
import EMSHeader from "./EMSHeader";
import EMSFilters from "./EMSFilter";
import EMSCard from "./EMSCard";
import EMSNoResults from "./EMSEmpty";
import { useEMS } from "./hooks/useEMS";

export default function EMSPageView() {
  const { emsList, loading, error } = useEMS();

  const [selectedState, setSelectedState] = useState("All States");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

 const filteredCompanies = emsList.filter((company: any) => {
  const matchesState =
    selectedState === "All States" ||
    company.location?.includes(selectedState);

  const matchesSearch =
    company.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location?.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesState && matchesSearch;
});


  return (
    <DashboardLayout header="EMS Companies">
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl">

          <EMSHeader />

          <EMSFilters
            selectedState={selectedState}
            setSelectedState={setSelectedState}
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

