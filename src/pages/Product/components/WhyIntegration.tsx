import { integrationChallenges } from "@/utils/constant";

const WhyIntegration = () => {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight  text-[#3E3838] sm:text-5xl">
          Why Fabspace AI Integrations
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              Most EMS teams use fragmented systems—CAD tools, Excel BOMs, HR spreadsheets,
              procurement portals—none of which talk to each other.
            </p>
            <p className="text-xl/8 text-gray-600 mt-4">
              This causes delays, errors, and duplication—especially across time zones and teams.
              FabSpace AI connects to your existing tech stack with plug-and-play integrations that
              unify BOM sourcing, design reviews, POs, and workforce data into one AI-automated
              system.
            </p>
          </div>
          <div className="lg:flex lg:w-full lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-full relative">
              {integrationChallenges.map((stat) => (
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

export default WhyIntegration;
