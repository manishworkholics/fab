interface StatProps {
  purchasingManagersStats: {
    id: number;
    name: string;
    value: string;
  }[];
  title?:string
}

export default function Stat({ purchasingManagersStats ,title}: StatProps) {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 mt-9">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title??'Real Results from Real Users'}
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {purchasingManagersStats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
