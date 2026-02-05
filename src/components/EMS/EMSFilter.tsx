// components/EMSFilters.tsx
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Card, CardContent } from "@/components/ui/Card";
import { Search } from "lucide-react";
import { ratings } from "@/utils/constant";

type EMSFiltersProps = {
  selectedLocation: string;
  locations: string[];
  setSelectedLocation: (state: string) => void;
  selectedRating: string;
  setSelectedRating: (rating: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function EMSFilters({
  locations,
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
  searchQuery,
  setSearchQuery,
}: EMSFiltersProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search companies or locations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>

            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedRating} onValueChange={setSelectedRating}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Rating" />
            </SelectTrigger>
            <SelectContent>
              {ratings.map((rating) => (
                <SelectItem key={rating} value={rating}>
                  {rating}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
