const DataSecurity = () => {
  return (
    <div className="container m-auto text-center md:mt-[5rem] relative">
      <div>
        <span className="border border-[#711E00] rounded-full py-2 px-9">Data Security</span>
      </div>
      <div className="lg:w-[68%] w-[90%]  m-auto">
        <h2 className="text-[28px] text-[#3E3838] font-bold leading-none lg:text-[48px] my-9">
          Data Security is our top priority
        </h2>
        <p className="text-[#3E3838] md:text-[24px] mb-9">
          At FabSpace, we understand that trust is everything in your supply chain. That&apos;s why
          your data is securely managed in a private cloud service, within a fully secured facility.
          We never outsource, and we never compromise.
        </p>
        <p className="text-[#3E3838] md:text-[24px] mb-9">
          We do not share, store, or use your information for training AI models or any secondary
          purpose. You retain full ownership and privacy of your data—always
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <img src="/images/aws-security.png" className="w-[150px] h-[150px] object-contain" />
        <img src="/images/soc-in-view.png" className="w-[200px] h-[100px] object-contain" />
      </div>
    </div>
  );
};

export default DataSecurity;
