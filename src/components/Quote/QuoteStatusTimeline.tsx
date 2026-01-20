interface Props {
  status:
    | "DRAFT"
    | "PUBLISHED"
    | "EMS_ASSIGNED"
    | "BIDDING"
    | "BID_ACCEPTED"
    | "PO_GENERATED"
    | "COMPLETED";
}

const steps = [
  { key: "DRAFT", label: "Draft" },
  { key: "PUBLISHED", label: "Published" },
  { key: "EMS_ASSIGNED", label: "EMS Assigned" },
  { key: "BIDDING", label: "Bidding" },
  { key: "BID_ACCEPTED", label: "Bid Accepted" },
  { key: "PO_GENERATED", label: "PO Generated" },
  { key: "COMPLETED", label: "Completed" },
];

export default function QuoteStatusTimeline({ status }: Props) {
  const activeIndex = steps.findIndex((s) => s.key === status);

  return (
    <div className="bg-white p-5 rounded-xl border">
      <h3 className="font-semibold mb-4">Quote Progress</h3>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;

          return (
            <div key={step.key} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>

              <p
                className={`text-xs mt-2 text-center
                ${
                  isCompleted
                    ? "text-green-600"
                    : isActive
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </p>

              {index !== steps.length - 1 && (
                <div
                  className={`h-1 w-full mt-4
                  ${
                    index < activeIndex
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
