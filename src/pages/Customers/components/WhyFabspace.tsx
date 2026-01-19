 interface WhyFabspaceProps {
  title: string;
  subTitle: string;
  WhyFabspacePurchase:{
    name:string
    description:string
    icon:React.ElementType;
  }[]
}
export default function WhyFabspace({ title, subTitle,WhyFabspacePurchase }: WhyFabspaceProps) {
  return (
    <div className="bg-white sm:py-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            {title}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {subTitle} 
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {WhyFabspacePurchase.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 text-[#1671d9]"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
