import classNames from "classnames";
import SendIcon from "../icons/SendIcon";
import SearchIcon from "../icons/SearchIcon";
import { ReactNode } from "react";

interface SearchBarProps {
  placeHolderText: string;
  width?: string;
  background?: string;
  value?: string;
  textIcon?: boolean;
  isLowerCase?: boolean;
  onChange?: any;
  debounceDuration?: number;
  messageSend?: boolean;
  children?:ReactNode;
  styles?: string;
  preIcon?: ReactNode;
}

const SearchBar = ({
  placeHolderText,
  width,
  background,
  value,
  textIcon,
  isLowerCase,
  onChange,
  messageSend,
  children,
  styles,
  preIcon,
}: SearchBarProps) => {
  return (
    <>
      <>
        {!messageSend && (
          <div
            className={`${
              background ?? "bg-[#f5f5f5]"
            } ${styles} flex items-center border rounded h-10 px-[0.75rem]`}>
            {textIcon && <SearchIcon />}
            <input
              className={classNames(
                `${background ?? "bg-[#f5f5f5]"} mx-2 pl-1 outline-none ${
                  width ?? "w-full"
                }`,
                {
                  capitalize: !isLowerCase,
                  "text-sm text-[#4D4D4D]": isLowerCase,
                }
              )}
              type="text"
              placeholder={placeHolderText}
              defaultValue={value}
              onChange={onChange}
            />
            {!textIcon && <SendIcon />}
          </div>
        )}
      </>
      <>
      {messageSend && (
        <div
          className={`${
            background ?? "bg-[#ffffff]"
          } ${styles}  flex items-center border rounded h-12 px-[0.75rem]`}>
           {preIcon && preIcon}
           <input
            className={classNames(
              `${background ?? "bg-[#ffffff]"} mx-2 pl-1 outline-none ${
                width ?? "w-full"
              }`,
              {
                capitalize: !isLowerCase,
                "text-sm text-[#4D4D4D]": isLowerCase,
              }
            )}
            type="text"
            placeholder={placeHolderText}
            defaultValue={value}
            onChange={onChange}
          />
          {children}
        </div>
      )}
    </>
    </>
  );
};

export default SearchBar;
