import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  bid: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

export default function EditBidModal({ open, bid, onClose, onSave }: Props) {
  const [form, setForm] = useState({ price: "", days: "" });

  useEffect(() => {
    if (bid) {
      setForm({ price: bid.price, days: bid.days });
    }
  }, [bid]);

  if (!open || !bid) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm space-y-4">
        <h2 className="text-lg font-semibold">Edit Bid</h2>

        <div>
          <label className="text-sm">Price</label>
          <input
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            className="w-full mt-1 border p-2 rounded"
          />
        </div>

        <div>
          <label className="text-sm">Delivery Days</label>
          <input
            value={form.days}
            onChange={(e) =>
              setForm({ ...form, days: e.target.value })
            }
            className="w-full mt-1 border p-2 rounded"
          />
        </div>

        <div className="flex justify-end gap-3 pt-3">
          <button
            onClick={onClose}
            className="px-3 py-1 border rounded text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
