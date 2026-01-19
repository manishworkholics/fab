import { useEffect, useRef, useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import CheckIcon from "../icons/CheckIcon";
import { XIcon } from "lucide-react";

export interface CheckboxDropdownProps {
  eventStatusData: string[];
  selectedItems: string[];
  allText?: boolean;
  updateHandler: (val: string) => void;
 }

const CheckboxDropdown = ({
  eventStatusData,
  selectedItems,
  updateHandler,
  allText, 
}: CheckboxDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (option: string) => {
    updateHandler(option);
   };

  const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
  };

  const getButtonText = () => {
    if (selectedItems.length === 0) {
      return "All";
    } else {
      return selectedItems.join(", ");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div
      className="relative inline-block text-left z-30 w-full"
      ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="gap-2 justify-between w-full flex items-center py-2 rounded-md border border-[#e5e7eb] shadow-sm px-4   bg-[#f5f5f5] text-sm font-medium focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}>
          <div>
            
           <div className="flex items-center gap-2">{selectedItems.length>0 ? selectedItems.map((item)=>(
 
               <p className="border rounded-full px-3 flex items-center justify-between gap-2 py-2" onClick={() => handleCheckboxChange(item)}>{item} <XIcon size={15}/> </p>
               )):'Select'} </div>
            {allText && <span className="font-[900]"> {getButtonText()}</span>}
          </div>
          <ArrowDown filled={true} />
        </button>
      </div>

      {isDropdownOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {eventStatusData.map((option) => (
              <div key={option} className="flex items-center px-4 py-2">
                <button
                  type="button"
                  className={`h-4 w-4 border border-gray-300 rounded cursor-pointer flex items-center justify-center transition-colors duration-200 ${
                    selectedItems.includes(option)
                      ? "bg-orange-500"
                      : "bg-white"
                  }`}
                  onClick={() => handleCheckboxChange(option)}>
                  {selectedItems.includes(option) && <CheckIcon  isWhiteCheck/>}
                </button>

                <button
                  type="button"
                  className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
                  onClick={() => handleCheckboxChange(option)}>
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
