import React, { useState, useEffect } from "react";
import CaretDownIcon from "../../../components/icons/CaretDownIcon";

interface CountryCode {
  code: string;
  country: string;
  flag: string;
}

interface PhoneNumberInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

const countryCodes: CountryCode[] = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  // { code: '+1', country: 'CA', flag: '🇨🇦' },
  // { code: '+44', country: 'GB', flag: '🇬🇧' },
  // { code: '+33', country: 'FR', flag: '🇫🇷' },
  // { code: '+49', country: 'DE', flag: '🇩🇪' },
  // { code: '+86', country: 'CN', flag: '🇨🇳' },
  // { code: '+81', country: 'JP', flag: '🇯🇵' },
  // { code: '+91', country: 'IN', flag: '🇮🇳' },
  // { code: '+234', country: 'NG', flag: '🇳🇬' },
  // { code: '+27', country: 'ZA', flag: '🇿🇦' },
];

export default function PhoneNumberInput({
  label = "Phone Number",
  value = "",
  onChange,
  onBlur,
  error,
  placeholder = "555 0123 8779",
  disabled = false,
  required = false,
  className = "",
}: PhoneNumberInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Extract country code and phone number from value
  useEffect(() => {
    if (value) {
      const matchingCountry = countryCodes.find((country) => value.startsWith(country.code));
      if (matchingCountry) {
        setSelectedCountry(matchingCountry);
        setPhoneNumber(value.substring(matchingCountry.code.length).trim());
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  // Format phone number as user types
  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return input;

    const parts = [match[1], match[2], match[3]].filter(Boolean);
    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return `${parts[0]} ${parts[1]}`;
    return `${parts[0] || ""} ${parts[1] || ""} ${parts[2] || ""}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhoneNumber(formatted);

    if (onChange) {
      const fullNumber = `${selectedCountry.code || ""} ${formatted || ""}`.trim();
      onChange(fullNumber);
    }
  };

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);

    if (onChange) {
      const fullNumber = `${country.code || ""} ${phoneNumber || ""}`.trim();
      onChange(fullNumber);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <div className={`flex flex-col w-full space-y-2 ${className}`}>
      {/* Label */}
      <label className="text-[#101928] font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Phone Input Container */}
      <div className="relative">
        <div
          className={`
            flex w-full h-14 rounded border transition-colors duration-200
            ${error ? "border-red-500" : isFocused ? "border-[#FA9874]" : "border-gray-300"}
            ${disabled ? "bg-gray-50 cursor-not-allowed" : "bg-white"}
          `}
        >
          {/* Country Code Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
              disabled={disabled}
              className={`
                flex items-center px-3 h-full border-r border-gray-300 rounded-l
                transition-colors duration-200 min-w-[80px]
                ${disabled ? "bg-gray-50 cursor-not-allowed" : "hover:bg-gray-50 focus:bg-gray-50"}
                focus:outline-none
              `}
            >
              <span className="text-lg mr-1">{selectedCountry.flag}</span>
              <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
              <div
                className={`ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <CaretDownIcon width="16" height="12" fill="#6B7280" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && !disabled && (
              <div className="absolute top-full left-0 z-50 w-64 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {countryCodes.map((country) => (
                  <button
                    key={`${country.code}-${country.country}`}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className={`
                      flex items-center w-full px-3 py-2 text-sm text-left
                      hover:bg-gray-50 transition-colors duration-150
                      ${
                        selectedCountry.code === country.code &&
                        selectedCountry.country === country.country
                          ? "bg-[#FA9874] bg-opacity-10 text-[#FA9874]"
                          : "text-gray-700"
                      }
                    `}
                  >
                    <span className="text-lg mr-2">{country.flag}</span>
                    <span className="font-medium mr-2">{country.code}</span>
                    <span className="text-gray-600">{country.country}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone Number Input */}
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={`
              flex-1 px-4 h-full rounded-r border-none
              focus:outline-none focus:ring-0
              ${disabled ? "bg-gray-50 cursor-not-allowed text-gray-500" : "bg-white text-gray-900"}
              placeholder-gray-400
            `}
          />
        </div>

        {/* Click away handler */}
        {isDropdownOpen && (
          <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
        )}
      </div>

      {/* Error Message */}
      {error && <span className="text-red-500 text-xs">{error}</span>}

      {/* Helper Text */}
      {!error && (
        <span className="text-gray-500 text-xs">Enter your phone number with country code</span>
      )}
    </div>
  );
}
