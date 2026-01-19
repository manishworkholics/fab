import WaitlistModal from "@/pages/Dasboard/WaitlistModal";

interface FooterCtaProps{
    title:string,
    description:string
}
const FooterCta = ({title,description}:FooterCtaProps) => {
  return (
    <div>
      <div className="text-center py-[4rem] md:w-4/6 m-auto">
        <p className="text-[40px] sm:text-[56px] text-[#3E3838] leading-none">
         {title} 
        </p>
        <p className="mt-3">
       {description}   
        </p>
        <div className="mt-9">
          <WaitlistModal text="Get Early Access + Demo" width="w-[235px] px-5" />
        </div>{" "}
      </div>
    </div>
  );
};

export default FooterCta;
