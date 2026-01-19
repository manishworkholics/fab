import { EMSIntegration, integrationTalent } from "@/utils/constant";

const IntegrationSupport = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Supported Integrations
        </h2>
      </div>
      <div>
        <h2 className="text-pretty mt-16 mb-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          EMS Marketplace
        </h2>
        <dl className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {EMSIntegration.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h2 className="text-pretty mt-16 mb-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Talent Marketplace
        </h2>
        <dl className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {integrationTalent.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default IntegrationSupport;
