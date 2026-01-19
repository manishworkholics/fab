import { DesignEngineersData, EmsManufacturersData, PurchaseManagerData } from "@/utils/constant";

export const DesignEngineers = () => {
  return (
    <div className="bg-[#131214] py-9 px-3 md:px-0">
      <div className="container m-auto">
        <div className="text-center text-white">
          <h2 className="text-[36px] md:text-[48px] text-[#F0F2F5]">For Design Engineers</h2>
          <p className="text-[18px] text-[#E4E7EC]">
            Accelerate Prototyping. Catch Errors Early. Collaborate Seamlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-[5rem] px-3">
          {DesignEngineersData.map((data) => (
            <div className="text-center border border-[#475367] py-[1rem] lg:h-[330px] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
              <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center mb-6 items-center rounded-lg">
                {data.logo}
              </div>
              <h4 className="text-[28px] text-[#E4E7EC] leading-none">{data.title}</h4>
              <p className="text-[16px] text-[#E4E7EC] mt-4">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PurchaseManager = () => {
  return (
    <div className="bg-[#131214] py-9 px-3 md:px-0">
      <div className="container m-auto">
        <div className="text-center text-white">
          <h2 className="text-[36px] md:text-[48px] text-[#F0F2F5]">For Purchasing Managers</h2>
          <p className="text-[18px] text-[#E4E7EC]">
            Simplify Sourcing. Eliminate Manual Errors. Cut RFQ Time in Half.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-[5rem] px-3">
          {PurchaseManagerData.map((data) => (
            <div className="text-center border border-[#475367] py-[1rem] lg:h-[330px] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
              <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center mb-6 items-center rounded-lg">
                {data.logo}
              </div>
              <h4 className="text-[28px] text-[#E4E7EC] leading-none">{data.title}</h4>
              <p className="text-[16px] text-[#E4E7EC] mt-4">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const EmsManufacturers = () => {
  return (
    <div className="bg-[#131214] py-9 px-3 md:px-0">
      <div className="container m-auto">
        <div className="text-center text-white">
          <h2 className="text-[36px] md:text-[48px] text-[#F0F2F5]">
            For EMS Providers/Contract Manufacturers{" "}
          </h2>
          <p className="text-[18px] text-[#E4E7EC]">
            Win More Bids. Quote Smarter. Collaborate Securely.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-[5rem] px-3">
          {EmsManufacturersData.map((data) => (
            <div className="text-center border border-[#475367] py-[1rem] lg:h-[330px] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
              <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center mb-6 items-center rounded-lg">
                {data.logo}
              </div>
              <h4 className="text-[28px] text-[#E4E7EC] leading-none">{data.title}</h4>
              <p className="text-[16px] text-[#E4E7EC] mt-4">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
