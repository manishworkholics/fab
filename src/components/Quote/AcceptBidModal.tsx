interface Props {
  open: boolean;
  bid: any;
  onClose: () => void;
  onConfirm: () => void;
}

export default function AcceptBidModal({
  open,
  bid,
  onClose,
  onConfirm,
}: Props) {
  if (!open || !bid) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">Confirm Bid Acceptance</h2>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong>Company:</strong> {bid.company}
          </p>
          <p>
            <strong>Price:</strong> ₹ {bid.price.toLocaleString()}
          </p>
          <p>
            <strong>Delivery:</strong> {bid.days} days
          </p>
        </div>

        <p className="text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Confirm & Accept
          </button>
        </div>
      </div>
    </div>
  );
}
