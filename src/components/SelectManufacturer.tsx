import { SetStateAction, useState, Dispatch } from "react";
import Button from "./ui/Buttons";
import { Ems } from "@/__generated__/graphql";
import toast from "react-hot-toast";

type SelectManufacturerProps = {
  handleManufacture: (user: Ems) => void;
  emUsers: Ems[];
  handleCloseModal?: () => void;
  loading?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>
};
const SelectManufacturer = ({
  handleManufacture,
  emUsers,
  handleCloseModal,
  loading,
  setLoading,
}: SelectManufacturerProps) => {
  const hasEMSUsers = emUsers && emUsers.length > 0;
  const [selected, setSelected] = useState<Ems | null>(emUsers?.[0] ?? null);
  const [open, setOpen] = useState(false);

  const handleClick = (props: any) => {
    if (!props) {
      toast.error("Please select a contract manufacturer first");
      return;
    }
    if (setLoading) setLoading(true)
    handleManufacture(props)
    toast.success(`You have selected ${props.firstName} ${props.lastName} as your EMS.`)
    if (setLoading) setLoading(false)
    if (handleCloseModal) handleCloseModal()
  }

  return (
    <div className="mt-8 max-w-[90%] mx-auto p-4">
      <div className="flex items-start gap-2">
        <img
          src="/images/user-img.png"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="relative w-full">
          <label className="block text-[14px] text-[#101928] font-medium mb-2">
            Select your preferred Contract Manufacturer
          </label>
          <button
            onClick={() => hasEMSUsers && setOpen(!open)}
            disabled={!hasEMSUsers}
            className={`w-full text-left border px-4 py-2 rounded-md shadow-sm focus:outline-none flex justify-between items-center ${
              !hasEMSUsers ? "bg-gray-100 cursor-not-allowed text-gray-500" : ""
            }`}>
            {hasEMSUsers ? (
              <>
                {selected?.firstName} {selected?.lastName}
                <span className="ml-2">&#x25BC;</span>
              </>
            ) : (
              <span className="text-gray-500">No contract manufacturers available</span>
            )}
          </button>

          {open && hasEMSUsers && (
            <ul className="absolute z-10 w-full bg-white border mt-1 rounded-md shadow-md max-h-60 overflow-y-auto">
              {emUsers.map((m: Ems, index: number) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelected(m);
                    setOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                    selected?.firstName === m.firstName &&
                    selected?.location === m.location
                      ? "bg-blue-100"
                      : ""
                  }`}>
                  <span className="font-semibold">
                    {m.firstName} {m.lastName}
                  </span>
                  <br />
                  <span className="italic text-sm text-gray-600">
                    {m.location ?? "Montreal, Canada"}
                  </span>
                </li>
              ))}
            </ul>
          )}
          
          {!hasEMSUsers && (
            <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">No manufacturers found.</span> There are currently no contract manufacturers available in the system. Please contact support or try again later.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[5rem] mb-5">
        <Button
          text="Assign Project"
          handleClick={() => handleClick(selected)}
          isLoading={loading}
          disabled={!hasEMSUsers || !selected}
        />
      </div>
    </div>
  );
};

export default SelectManufacturer;
