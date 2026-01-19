import WaitlistModal from "@/pages/Dasboard/WaitlistModal";
interface HeroCustometProps {
  title: string;
  subTitle: string;
  image:string
}
const Hero = ({ title, subTitle,image }: HeroCustometProps) => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-7xl px-6 pb-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            {title}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">{subTitle}</p>
            <div className="mt-10 flex items-center gap-x-6">
              <WaitlistModal text="Get Early Access + Demo" />
            </div>
          </div>
          <img
            alt=""
            src={image}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-30"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

export default Hero;
