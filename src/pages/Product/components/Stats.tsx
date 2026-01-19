interface StatProps {
  title: string;
  data: {
    rate: string;
    description: string;
  }[];
}

const Stats = ({ title, data }: StatProps) => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto   lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#3E3838] sm:text-5xl text-center">
          {title}
        </h2>
      </div>
      <div className="mx-auto mt-16 grid gap-8  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:mt-9 lg:items-end">
        {data.map((data, index) => (
          <div
            className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
            key={index}
          >
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">{data.rate}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="mt-2 text-base/7 text-gray-600">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
