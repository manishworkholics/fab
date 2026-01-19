import BagIcon from "../icons/BagIcon";
 import FileShareIcon from "../icons/FileShareIcon";
import GraphIcon from "../icons/GraphIcon";
import SpannerIcon from "../icons/SpannerIcon";

const WhyFabSpace = () => {
  return (
    <div className="bg-[#0A090B] py-9 px-3 md:px-0">
      <div className="container m-auto">
        <div className="text-center text-white">
          <h2 className="text-[36px] md:text-[48px] text-[#F0F2F5]">
            Scale Your EMS Operations with FabSpaceAI
          </h2>
          <p className="text-[18px] text-[#E4E7EC]">
            Access 500+ certified manufacturers, secure your data, and save time
            while scaling effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 py-[5rem] px-3">
          <div className="text-center border border-[#475367] py-[1rem] lg:h-[330px] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
            <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center mb-6 items-center rounded-lg">
              <BagIcon width="35" height="35" />
            </div>
            <h4 className="text-[28px] text-[#E4E7EC] leading-none">
              Access to 500+ Certified & Top Rated CM and EMS
            </h4>
            <p className="text-[16px] text-[#E4E7EC] mt-4">
              Connect with 500+ trusted manufacturers ready to bring your EMS
              projects to life.
            </p>
          </div>
          <div className="text-center border border-[#475367] py-[3rem] lg:h-[330px] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
            <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center mb-6 items-center rounded-lg">
              <FileShareIcon  />
            </div>
            <h4 className="text-[28px] text-[#E4E7EC] leading-none">
              {" "}
              Secured Data and File Sharing Guaranteed
            </h4>
            <p className="text-[16px] text-[#E4E7EC] mt-4">
              Collaborate confidently with end-to-end encrypted data and file
              sharing.
            </p>
          </div>
          <div className="text-center border border-[#475367] py-[3rem]   lg:h-[330px]] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
            <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center mb-6 items-center rounded-lg">
              <SpannerIcon  />
            </div>
            <h4 className="text-[28px] text-[#E4E7EC] leading-none">
              Reduce Cost and Time to Acquire Talents
            </h4>
            <p className="text-[16px] text-[#E4E7EC] mt-4">
              Save resources and find top-tier talent faster with our AI-driven
              platform.
            </p>
          </div>
          <div className="text-center border border-[#475367] py-[3rem] lg:h-[330px] flex flex-col justify-center items-center rounded-lg px-[2rem] lg:px-[4rem]">
            <div className="bg-[#FF62501A] w-[63px] h-[63px] flex justify-center items-center mb-6 rounded-lg">
              <GraphIcon  />
            </div>
            <h4 className="text-[28px] text-[#E4E7EC] leading-none">
              Effortlessly Scale your Manufacturing Operations
            </h4>
            <p className="text-[16px] text-[#E4E7EC] mt-4">
              Expand your production seamlessly with tools designed for growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFabSpace;
