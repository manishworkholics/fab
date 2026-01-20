import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (data: any) => void;
}

export default function CreateProjectModal({ open, onClose, onCreate }: Props) {
  const [form, setForm] = useState({
    name: "",
    startDate: "",
    deliveryDate: "",
    notes: "",
  });

  if (!open) return null;

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 space-y-5">
        <h2 className="text-xl font-semibold">Create Project from Quote</h2>

        <div className="space-y-3">
          <div>
            <label className="text-sm">Project Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 border rounded-md p-2"
              placeholder="PCB Manufacturing - Batch A"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>

            <div>
              <label className="text-sm">Delivery Date</label>
              <input
                type="date"
                name="deliveryDate"
                value={form.deliveryDate}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm">Notes (optional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full mt-1 border rounded-md p-2"
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-sm"
          >
            Cancel
          </button>

          <button
            onClick={() => onCreate(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
