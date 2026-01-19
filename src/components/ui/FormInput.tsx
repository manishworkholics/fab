import { ChangeEventHandler, useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import CancelIcon from "../icons/CancelIcon";
import EmailIcon from "../icons/EmailIcon";
import UserIcon from "../icons/UserIcon";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  showCancelIcon?: boolean;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  error?: any;
  style?: string;
  divWidth?: string;
  iconUser?: boolean;
  labelStyle?: string;
  textarea?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleCancelClick?: VoidFunction;
}

const FormInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  handleChange,
  handleCancelClick,
  showCancelIcon,
  disabled,
  min,
  style,
  max,
  divWidth,
  error,
  iconUser,
  labelStyle,
  textarea,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`flex flex-col ${divWidth ? divWidth : "w-full"} space-y-2`}>
      <label>
        <span
          className={`${labelStyle} mb-8 text-[#101928] font-medium`}>
          {label}
        </span>
      </label>
      {!textarea && (
        <div className="relative w-full">
          <input
            className={`${style} w-full px-4 h-14 rounded border border-gray-300 focus:outline-none focus:border-[#FA9874]`}
            type={showPassword ? "text" : type}
            name={name}
            value={value ?? ""}
            placeholder={placeholder}
            onChange={handleChange}
            disabled={disabled}
            min={min}
            max={max}
          />
          {iconUser && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <UserIcon />
            </span>
          )}
          {type === "password" && (
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeIcon visible /> : <EyeIcon />}
            </span>
          )}
          {type === "email" && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <EmailIcon />
            </span>
          )}
          {showCancelIcon && (
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
              onClick={handleCancelClick}>
              <CancelIcon />
            </span>
          )}
          {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
      )}

      {textarea && (
        <div className="w-full">
          <textarea
            className="w-full border rounded-md p-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder={placeholder}
            onChange={handleChange}
            rows={3}
            name={name}
            value={value}
          />
           {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
      )}
    </div>
  );
};

export default FormInput;
