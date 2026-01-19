import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <div className="container m-auto px-2  my-9">
      <div className=" md:px-0 flex-col md:flex-row flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img src="/images/logo.png" className="w-[163.9px] h-27px]" />
          </Link>
        </div>
      </div>
      {/* {step && (
        <div className="hidden md:flex justify-center items-center gap-3 bg-[#C6DDF7] p-6 mt-12 rounded-lg">
          <div className="flex items-center gap-3">
            <span
              className={`${
                stepOne
                  ? "bg-[#0F973D] border-[#0F973D] text-[#ffffff] "
                  : "border-[#AD3307] text-[#AD3307] "
              }border flex justify-center items-center text-[12px] rounded-full w-[24px] h-[17px]`}>
              1
            </span>
            <span className="text-[16px]">Create Account</span>
          </div>
          <div className="border-[#000000] border-b border-dashed w-[10%]"></div>
          <div className="flex items-center gap-3">
            <span className="border flex justify-center items-center text-[12px] rounded-full border-[#AD3307] text-[#AD3307] w-[24px] h-[17px]">
              2
            </span>
            <span>More Personal Details</span>
          </div>
          <div className="border-[#000000] border-b border-dashed w-[10%]"></div>
          <div className="flex items-center gap-3">
            <span className="border flex justify-center items-center text-[12px] rounded-full border-[#AD3307] text-[#AD3307] w-[24px] h-[17px]">
              3
            </span>
            <span> Respond to or Create a Quote</span>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AuthHeader;
