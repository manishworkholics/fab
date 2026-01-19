import React, { useState, useEffect } from "react";

interface Prediction {
  primary_category: string;
  primary_confidence: number;
  secondary_category: string;
  secondary_confidence: number;
}

interface PredictionItem {
  name: string;
  prediction: Prediction;
  sample_values: string[];
  mappedTo?: string;
}

interface BomMappingProps {
  item: PredictionItem;
  mappedTo: string;
  onMappingChange: (newCategory: string) => void;
}

const categoryOptions = [
  "ManufacturerPN",
  "Manufacturer",
  "Description",
  "Quantity",
  "Reference",
  "Value",
  "Package",
  "VendorPN",
  "Vendor",
  "Cost",
  "Ignore",
];

const BomMapping: React.FC<BomMappingProps> = ({ item, mappedTo, onMappingChange }) => {
  const [customCategory, setCustomCategory] = useState<string>("");

  useEffect(() => {
    if (
      !categoryOptions.includes(mappedTo) &&
      mappedTo !== item.prediction.primary_category &&
      mappedTo !== item.prediction.secondary_category
    ) {
      setCustomCategory(mappedTo);
    } else {
      setCustomCategory("");
    }
  }, [mappedTo, item.prediction.primary_category, item.prediction.secondary_category]);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onMappingChange(val);
    if (val !== "custom") {
      setCustomCategory("");
    }
  };

  const handleCustomSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCustomCategory(e.target.value);
    onMappingChange(e.target.value);
  };

  const selectedCategory = mappedTo;

  return (
    <div className="rounded-2xl shadow-md border border-gray-200 p-5 max-w-md w-full bg-white transition hover:shadow-lg">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">{item.name.trim()}</h2>
      <hr className="mb-3" />
      <div className="mb-4">
        <p className="text-sm font-bold text-gray-600 mb-2">Sample Values:</p>
        <ul className="flex flex-wrap gap-2">
          {item.sample_values.map((val, idx) => (
            <li
              key={idx}
              className="border border-gray-300 rounded-full px-3 py-1 bg-gray-50 text-gray-700 text-xs"
            >
              {val}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">Map this column as:</p>
        <div className="flex flex-col gap-3 text-sm">
          <label className="flex items-center gap-2 whitespace-nowrap">
            <input
              type="radio"
              name={`category-${item.name}`}
              value={item.prediction.primary_category}
              checked={selectedCategory === item.prediction.primary_category}
              onChange={handleRadioChange}
              className="accent-orange-600"
            />
            {item.prediction.primary_category}
          </label>

          <label className="flex items-center gap-2 whitespace-nowrap">
            <input
              type="radio"
              name={`category-${item.name}`}
              value={item.prediction.secondary_category}
              checked={selectedCategory === item.prediction.secondary_category}
              onChange={handleRadioChange}
              className="accent-orange-600"
            />
            {item.prediction.secondary_category}
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 whitespace-nowrap">
              <input
                type="radio"
                name={`category-${item.name}`}
                value="custom"
                checked={
                  !categoryOptions.includes(selectedCategory) &&
                  selectedCategory !== item.prediction.primary_category &&
                  selectedCategory !== item.prediction.secondary_category
                }
                onChange={handleRadioChange}
                className="accent-orange-600"
              />
              Custom
            </label>

            {!categoryOptions.includes(selectedCategory) &&
              selectedCategory !== item.prediction.primary_category &&
              selectedCategory !== item.prediction.secondary_category && (
                <select
                  className="border border-gray-300 rounded-md p-1 text-sm max-w-full min-w-[120px] flex-shrink"
                  value={customCategory}
                  onChange={handleCustomSelect}
                >
                  <option value="">Select...</option>
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === "Reference"
                        ? "Reference Designator"
                        : option === "Ignore"
                        ? "Ignore This Column"
                        : option.replace(/([A-Z])/g, " $1").trim()}
                    </option>
                  ))}
                </select>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BomMapping;
