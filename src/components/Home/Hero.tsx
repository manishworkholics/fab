import WaitlistModal from "../../pages/Dasboard/WaitlistModal";
 // import Button from '../ui/Buttons';
// import { useNavigate } from 'react-router-dom';

const Hero = () => {
  // const navigate = useNavigate();

  return (
    <div className="container m-auto flex-col lg:flex-row flex md:items-end md:py-[5rem] px-2 md:px-3 lg;px-0 mb-9 md:mb-0">
      <div className="lg:w-[70%]">
        <h1 className="text-[26px] md:text-[56px] font-bold text-center mb-5 md:mb-0 md:leading-none">
          {/* The Collaboration and Talent Support System for Electronics Manufacturers */}
          From Concept to Manufacturing in Half the Time—Powered by AI
        </h1>
        <p className="mt-5 text-center">
          FabSpace AI brings design engineers, purchasing managers, and EMS providers together in
          one secure, automated platform—eliminating endless email threads, scattered spreadsheets,
          and missed opportunities.
        </p>
      </div>
      <div className="flex md:flex-row  items-center justify-center gap-5 mt-4 lg:mt-0 lg:w-[30%] lg:justify-end">
        <WaitlistModal text="Get Early Access + Demo"  width="w-[235px] px-5"/> 
        {/* <Button
					text={'Get Started'}
					type={'button'}
					position={'center'}
					handleClick={() => navigate('/login')}
				/>
				<Button
					text={'Book a Demo'}
					type={'button'}
					background="bg-[transparent]"
					styles="border border-[#CC400C]"
					color="text-[#CC400C]"
					position={'center'}
				/> */}
      </div>
    </div>
  );
};

export default Hero;
