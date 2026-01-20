interface Props {
  bids: any[];
  onAccept: (bid: any) => void;
}

export default function BidComparisonTable({ bids, onAccept }: Props) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 text-sm text-gray-600">
          <tr>
            <th className="p-3 text-left">EMS Company</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Delivery Days</th>
            <th className="p-3 text-left">Rating</th>
            <th className="p-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {bids.map((bid) => (
            <tr
              key={bid.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-3 font-medium">{bid.company}</td>
              <td className="p-3">₹ {bid.price.toLocaleString()}</td>
              <td className="p-3">{bid.days} days</td>
              <td className="p-3">⭐ {bid.rating}</td>
              <td className="p-3 text-right">
                <button
                  onClick={() => onAccept(bid)}
                  className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
