interface Props {
  po: any;
}

export default function POPreview({ po }: Props) {
  return (
    <div className="bg-white p-8 shadow rounded-md max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Purchase Order</h1>
          <p className="text-sm text-gray-500">PO #{po.poNumber}</p>
        </div>
        <div className="text-sm text-right">
          <p>Date: {po.date}</p>
          <p>Status: <span className="font-semibold">{po.status}</span></p>
        </div>
      </div>

      {/* Company Info */}
      <div className="grid grid-cols-2 gap-6 mb-6 text-sm">
        <div>
          <h3 className="font-semibold mb-1">Buyer (PM)</h3>
          <p>{po.buyer.name}</p>
          <p>{po.buyer.company}</p>
          <p>{po.buyer.email}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Supplier (EMS)</h3>
          <p>{po.supplier.name}</p>
          <p>{po.supplier.company}</p>
          <p>{po.supplier.email}</p>
        </div>
      </div>

      {/* Items */}
      <table className="w-full border text-sm mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Qty</th>
            <th className="p-2 border">Unit Price</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {po.items.map((item: any, idx: number) => (
            <tr key={idx}>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.qty}</td>
              <td className="p-2 border">₹ {item.price}</td>
              <td className="p-2 border">
                ₹ {item.qty * item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="flex justify-end mb-6">
        <div className="text-right">
          <p className="text-sm text-gray-500">Grand Total</p>
          <p className="text-xl font-bold">₹ {po.total}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">
          This is a system generated purchase order.
        </p>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
          Download PDF
        </button>
      </div>
    </div>
  );
}
