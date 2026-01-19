import { stats } from "@/utils/constant";

const Automation = () => {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight  text-[#3E3838] sm:text-5xl">
          AI Agents & Automation Solution
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              Managing PCB quoting, BOM and DFM checks, PO creation, and talent operations manually
              is time-consuming, error-prone, and impossible to scale, especially across multiple
              EMS partners or manufacturing sites.
            </p>
            <p className="mt-10 max-w-xl text-base/7 text-gray-700">
              Fabspace AI deploys purpose-built intelligent agents to eliminate manual overhead
              across the EMS Marketplace and Talent Marketplace. These agents work 24/7 to triage
              quotes, scan BOMs, schedule shifts, and keep your team two steps ahead.
            </p>
          </div>
          <div className="lg:flex lg:w-full lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-full relative">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gap-y-4  before:content-['•'] before:absolute before:left-0 before:text-gray-400"
                >
                  <dt className="text-base/7 text-gray-600 ml-5">{stat.value}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
