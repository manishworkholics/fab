import BookIcon from "../../icons/BookIcon";
import CaretDownIcon from "../../icons/CaretDownIcon";
import PlusIcon from "../../icons/PlusIcon";

const AiAgent = () => {
  return (
    <div className="border border-[#344054] bg-[#000000] rounded-3xl p-2 md:p-[4rem]">
      <div className="bg-[#141718] border border-[#344054] p-7 rounded-tl-3xl rounded-tr-3xl">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="bg-[#606ACB] rounded-full w-[48px] h-[48px] flex justify-center items-center">
              <BookIcon />
            </div>
            <h5 className="text-[#F3F5F7] text-[24px] font-semibold">
              AI Agent Library
            </h5>
          </div>
          <PlusIcon />
        </div>
        <div className="flex justify-between items-center border-t mt-6 py-3 border-[#FFFFFF1A]">
          <p className="text-[17px] md:text-[20px] text-[#FFFFFF]">Automate Quotation</p>
          <CaretDownIcon />
        </div>
        <div className="flex justify-between items-center border-t mt-6 py-3 border-[#FFFFFF1A]">
          <p className="text-[17px] md:text-[20px] text-[#FFFFFF]">Track Project Status</p>
          <CaretDownIcon />
        </div>
        <div className="flex justify-between items-center border-t mt-6 py-3 border-[#FFFFFF1A]">
          <p className="text-[17px] md:text-[20px] text-[#FFFFFF]">Issue Purchasing Order</p>
          <CaretDownIcon />
        </div>
        <div className="flex justify-between items-center border-t mt-6 py-3 border-[#FFFFFF1A]">
          <p className="text-[17px] md:text-[20px] text-[#FFFFFF]">
            Share/Duplicate Project Files
          </p>
          <CaretDownIcon />
        </div>
        <div className="flex justify-between items-center border-t mt-6 py-3 border-[#FFFFFF1A] opacity-[0.2]">
          <p className="text-[17px] md:text-[20px] text-[#FFFFFF]">
            Carry out Failure Analysis
          </p>
          <CaretDownIcon />
        </div>
      </div>
      <div className="mt-9 p-3 md:p-0">
        <h3 className="text-[28px] text-[#FEFEFE]">EMS Collaboration Portal</h3>
        <p className="text-[#6C7275] text-[16px] mt-2">
          Save your favorite code solutions for easy reuse. Drag and drop code
          you have saved into any of your projects.
        </p>
      </div>
    </div>
  );
};

export default AiAgent;
