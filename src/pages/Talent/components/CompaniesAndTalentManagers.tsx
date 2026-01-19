import Button from "../../../components/ui/Buttons";
import { talentHireData } from "../../../utils/constant";

const CompaniesAndTalentManagers = () => {
  return (
    <div className="w-full bg-custom-gradient flex flex-col items-center justify-center mx-auto gap-20 py-10 lg:py-1 ">
      {/* Top */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-4 lg:pl-10">
          <h1 className="font-medium text-[56px] leading-[100%] text-[#3E3838]">For companies and Talent Managers</h1>
          <p className="font-normal text-[20px] leading-[120%] text-[#3E3838]">Fabspace AI makes the hiring process easier than ever—browse, select, and hire top candidates all on the same day. We're a fully compliant AI-powered hiring platform that sources, vets, and pays your next employees.</p>
          {/*  */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-[8px] items-center max-w-[535px]">
              <div className="p-1 rounded-3xl bg-[#1671D9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock10-icon lucide-clock-10"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 10"/></svg>
              </div>
              <p className="font-normal text-[20px] leading-[120%] max-w-[487px]">Access to Qualified Talents</p>
            </div>
            <hr />
            <div className="flex gap-[8px] items-center w-[535px]">
              <div className="p-1 rounded-3xl bg-[#1671D9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock10-icon lucide-clock-10"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 10"/></svg>
              </div>
              <p className="font-normal text-[20px] leading-[120%] max-w-[487px]">Zero Hiring fee </p>
            </div>
            <div className="flex gap-[8px] items-center w-[535px]">
              <div className="p-1 rounded-3xl bg-[#1671D9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock10-icon lucide-clock-10"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 10"/></svg>
              </div>
              <p className="font-normal text-[20px] leading-[120%] max-w-[487px]">Efficiently Manage Work Schedule</p>
            </div>
            <hr />
            <div className="flex gap-[8px] items-center w-[535px]">
              <div className="p-1 rounded-3xl bg-[#1671D9] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock10-icon lucide-clock-10"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 8 10"/></svg>
              </div>
              <p className="font-normal text-[20px] leading-[120%] max-w-[487px]">End-to-end Hiring process</p>
            </div>
          </div>
          <hr />
          <Button text={"Hire Instantly"} type={"button"} position={"start"}/>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/images/talents/company.png" className="object-cover w-[100%] h-[100%]" alt="Talent" />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-center gap-10 w-full mx-auto">
        <h1 className="font-medium max-w-[776px] text-[#3E3838] text-[56px] leading-[100%] text-center">Ready to make the best out of our AI Solution</h1>
        <div className="flex flex-col lg:flex-row gap-4 w-full justify-center items-center">
          {talentHireData.map((data) => {
            return (
              <div 
                key={data.id} 
                className="flex flex-col items-center justify-center max-w-[380px] bg-[#FFFFFF] p-8 rounded border border-solid border-transparent border-image-gradient-blue-orange"
                // h-[260px]
                // style={{ 
                //   borderImage: "linear-gradient(180deg, #C6DDF7 0%, #FF6250 46%, #D2E7FF 100%) 1",
                //   WebkitBorderImage: "linear-gradient(180deg, #C6DDF7 0%, #FF6250 46%, #D2E7FF 100%) 1" 
                // }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-[12px] w-full">
                    <h2 className="font-medium text-[36px] leading-[120%] text-[#0A090B]">{data.title}</h2>
                    <p className="font-normal text-[20px] leading-[120%] text-[#3E3838]">{data.desc}</p>
                  </div>
                  <Button text={data.buttonText} type={"button"} position={"start"}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CompaniesAndTalentManagers;