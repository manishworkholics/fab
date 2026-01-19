import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import ArrowDown from "./icons/ArrowDown";
import { isWithinContainer } from "../helpers/misc";

interface NavbarProp {
  zone: string;
  country: string;
  region: string;
  site: string;
  activeFilter: string;
}

interface DropdownProps {
  data: any;
  name?: string;
  Icon?: any;
  selectedDate?: string;
  setDropdownValue?: (value: string) => void;
  className?: string;
  changeDropdownWidth?: boolean;
  navbarData?: NavbarProp;
  type?: string;
  dropdownAction?: (selectedValue: string) => void;
  handleClick?: any;
  width?: string;
  setNavbarData?: React.Dispatch<React.SetStateAction<NavbarProp>>;
  selectedCustomDate?: {
    start: string;
    end: string;
  };
  isSiteFilter?: boolean;
  valuePosition?: "align" | "below";
  optionsPlacement?: "right" | "left";
  image?: string;
  openByDefault?: boolean;
  position?: string;
  advanceFilterAction?: (data: { [key: string]: any }) => void;
}

const DropdownMenu = ({
  data,
  Icon,
  name,
  selectedDate,
  setDropdownValue,
  dropdownAction,
  className,
  changeDropdownWidth,
  type,
  width,
  optionsPlacement = "right",
  image,
  isSiteFilter = false,
  openByDefault,
  position,
}: DropdownProps) => {
  const [dropdownData, setDropdownData] = useState(data);
  const [value, setValue] = useState(selectedDate);
  const [showDropdown, setShowDropdown] = useState(openByDefault ?? false);
  const ref = useRef() as any;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const isDescendant = isWithinContainer(event.target, "daterangepicker");
        if (!isDescendant) setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showDropdown]);

  const handleShowDropdownClick = (event: any) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleSelectedDate = (selectedValue: string) => {
    const newData = dropdownData.map((eachData: { name: string; checked: boolean }) => {
      if (eachData.name === selectedValue) {
        setValue(selectedValue);
        // setDropdownValue && setDropdownValue(selectedValue);
        // dropdownAction && dropdownAction(selectedValue);
        setDropdownValue?.(selectedValue);
        dropdownAction?.(selectedValue);
        return { ...eachData, checked: !eachData.checked };
      }
      return { ...eachData, checked: false };
    });
    setDropdownData(newData);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (selectedDate) {
      setValue(selectedDate);
      const newData = dropdownData.map((eachData: { name: string; checked: boolean }) => {
        if (eachData.name.toLowerCase() === selectedDate.toLowerCase()) {
          return { ...eachData, checked: true };
        }
        return { ...eachData, checked: false };
      });
      setDropdownData(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  useEffect(() => {
    if (data.length > 1 && dropdownData.length === 1) {
      setDropdownData(data);
    }
  }, [data, dropdownData.length]);

  const getDisplayValue = (val: string | undefined) => {
    if (!val) return "";
    let displayValue = isSiteFilter ? `(${val})` : val;
    console.log(val, "val");
    console.log("displayValue", displayValue);
    if (val !== "Today" && val?.toLowerCase() !== "custom date" && type === "Incidents") {
      displayValue = "This " + displayValue;
    }
    return displayValue;
  };

  return (
    <div className={`relative z-20  flex flex-col-reverse ${width ?? ""} gap-2`} ref={ref}>
      <div
        className={classNames("flex border-[#E6E6E6] items-center", className, {
          "h-10 rounded bg-[#f5f5f5]": !className,
        })}
      >
        <div className="px-2">{!changeDropdownWidth && Icon && <Icon />}</div>
        <button
          type="button"
          className={classNames(
            "flex items-center justify-between w-full gap-2 leading-8 cursor-pointer whitespace-nowrap font_gilroy-normal",
          )}
          onClick={handleShowDropdownClick}
          data-testid={`dropdown-${name}`}
        >
          {image && <img src={`/images/${image}`} className="w-[18px] h-[18px]" />}{" "}
          <span
            className={classNames("capitalize", {
              "font_gilroy_semi-bold": className,
            })}
          >
            {getDisplayValue(value)}
          </span>
          <ArrowDown filled={!isSiteFilter} />{" "}
        </button>
      </div>

      {showDropdown && (
        <div
          className={classNames(
            `  ${
              position ? position : "absolute"
            } right-0 top-10 ${optionsPlacement}-0 max-h-[50vh] overflow-y-scroll w-full border p-2 z-40 bg-white pb-4`,
          )}
        >
          {dropdownData?.map((item: any, i: number) => (
            <button
              type="button"
              key={`${item}-${i}`}
              onClick={() => {
                handleSelectedDate(item.name);
              }}
              className="flex items-center w-full gap-2 cursor-pointer pb-3 "
            >
              <div
                className="border-2 border-[#D69E77] min-w-[1rem] min-h-[1rem] justify-center 
                           flex items-center rounded-full radio__btn__wrapper"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.checked ? "bg-[#D69E77]" : "transparent"
                  }`}
                ></div>
              </div>
              <span className="text-sm leading-4 capitalize whitespace-normal text-left font_gilroy-medium">
                {getDisplayValue(item.name)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
