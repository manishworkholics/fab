import Button from "../../../components/ui/Buttons";
import SearchBar from "../../../components/ui/SearchBar";
import { jobsData } from "./jobsData";

const Hero = () => {
  return (
    <div className="container m-auto lg:flex lg:flex-col items-end md:py-[5rem] px-2 md:px-3 lg;px-0 mb-9 md:mb-0 gap-16">
      <div className="flex flex-col lg:flex-row items-center w-full gap-14 lg:gap-0 pb-12 lg:pb-0">
        {/*Left  */}
        <div className="gap-5 flex flex-col max-w-[537px]">
          <div className="gap-2 flex flex-col">
            <h1 className="text-[#101928] font-medium text-[73.78px] leading-[120%]">
              Find Available Jobs Faster
            </h1>
            <p className="text-[#3E3838] font-normal text-[20px] leading-[120%] max-w-[537px]">
              {
                "Empowering operators, technicians, engineering talents to find manufacturing jobs easily and enabling feasible shift for them."
              }
            </p>
          </div>
          <div className="flex md:flex-row md:items-center gap-5 mt-4 lg:mt-0">
            <Button text={"Find Jobs"} type={"button"} position={"center"} />
            <Button
              text={"Hire Instantly"}
              type={"button"}
              background="bg-[transparent]"
              styles="border border-[#CC400C]"
              color="text-[#CC400C]"
              position={"center"}
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col lg:flex-row max-w-[796.56px] relative gap-12 lg:gap-0">
          {/* w-[100%] h-[100%] */}
          <div className="hidden lg:flex relative lg:top-[440px]">
            <img
              src="/images/talents/t-white-2.png"
              className="object-cover w-[383px] h-[45px] z-50"
              alt="Talent"
            />
            {/* w-[373px] */}
          </div>
          <img
            src="/images/talents/t-blue.png"
            className="hidden lg:block lg:ml-[-200px] object-cover w-[273px] h-[534px]"
            alt="Talent"
          />
          <div className="lg:hidden flex justify-center ">
            <img
              src="/images/talents/t-blue.png"
              className="object-cover w-[323px] h-[467px]"
              alt="Talent"
            />
          </div>
          <div className="flex flex-col lg:pt-36">
            <div className="flex mb-[-25px] ml-8">
              {/* w-[253px] h-[149px] */}
              <div className="flex z-10">
                <img src="/images/talents/t-white.png" className="object-cover" alt="Talent" />
              </div>
              {/* w-[136.56px] h-[132.89px] */}
              <div className="flex ml-[-60px] items-center">
                <img src="/images/talents/t-yellow-2.png" className="object-cover" alt="Talent" />
              </div>
            </div>
            {/* w-[574px] h-[467px] */}
            <img src="/images/talents/t-yellow.png" className="object-cover" alt="Talent" />
            {/* w-[374px] */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full pb-8">
        <SearchBar
          placeHolderText={
            "Try searching, Design engineering roles in Boston with 2 years experience"
          }
          width="w-1/2"
          styles="h-[96px] justify-evenly w-full lg:w-[1104px]"
          messageSend={true}
          preIcon={<img src="/images/talents/fabby-search.png" />}
          children={<Button text={"Search"} type={"button"} position={"center"} />}
        />
      </div>
      {/* Cards */}
      <div className="flex justify-center items-center w-full flex-wrap mx-auto gap-4">
        {jobsData.map((job) => {
          return <CustomCard key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
};

export const CustomSearchBar = () => {
  return (
    <SearchBar
      placeHolderText={"Try searching, Design engineering roles in Boston with 2 years experience"}
    >
      <Button
        text={"Search"}
        type={"button"}
        background="bg-[transparent]"
        styles="border border-[#CC400C]"
        color="text-[#CC400C]"
        position={"end"}
      />
    </SearchBar>
  );
};

export const CustomCard = ({ job }: { job: any }) => {
  return (
    <div className="w-[352px] rounded-sm border border-solid border-[#E4E7EC] p-4">
      <div className="flex flex-col w-[320px] gap-[8px] pb-8">
        <div className="flex flex-col w-[320px] gap-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between w-[268px] gap-2">
              <h1 className="w-[260px] font-semibold text-[18px] text-[#0A090B] leading-[145%]">
                {job.title}
              </h1>
              <p className="w-[260px] font-normal text-[14px] text-[#0A090B] leading-[145%] italic">
                {job.location.city} {job.location.country}
              </p>
              <p className="w-[260px] font-semibold text-[14px] text-[#F56630] leading-[145%] italic">
                {job.type}
              </p>
            </div>
            {/* Protronic's image */}
            <div className="self-center">
              <img src={job.logo} alt="Protronics" />
            </div>
          </div>
          {/* description */}
          {/* <div></div> */}
          <p className="w-[260px] font-normal text-[14px] text-[#101928] leading-[145%] italic">
            {job.desc}
          </p>
        </div>
        {/* Application deadline */}
        {/* <div></div> */}
        <p className="w-[260px] font-medium text-[12px] text-[#101928] leading-[145%] italic">
          {job.deadline.title} {job.deadline.time}
        </p>
      </div>{" "}
      <div className="flex flex-col w-full gap-[40px]">
        <div className="flex w-full gap-[8px]">
          <div className="flex flex-wrap w-full gap-[8px]">
            {job.details
              .filter((detail: any) => detail.id <= 2)
              .map((detail: any) => {
                return (
                  <div key={detail.id} className="flex gap-[8px]">
                    {/* icon */}
                    <div className="rounded-3xl p-2 bg-[#F56630] flex items-center justify-center">
                      {detail.icon}
                    </div>
                    {/* Text */}
                    {/* <div></div> */}
                    <p className="flex items-center font-medium text-[14px] text-[#344054] leading-[145%] italic w-[145px]">
                      {detail.desc}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-wrap w-full gap-[8px]">
            {job.details
              .filter((detail: any) => detail.id > 2)
              .map((detail: any) => {
                return (
                  <div key={detail.id} className="flex gap-[8px]">
                    {/* icon */}
                    <div className="rounded-3xl p-2 bg-[#F56630]">{detail.icon}</div>
                    {/* Text */}
                    {/* <div></div> */}
                    <p className="flex items-center font-medium text-[14px] text-[#344054] leading-[145%] italic">
                      {detail.desc}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
