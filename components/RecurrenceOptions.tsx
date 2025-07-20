"use client";
import { useRecurrenceStore } from "@/store/recurrenceStore";

export default function RecurrenceOptions() {
  const { frequency, setFrequency } = useRecurrenceStore();

  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div className="space-y-2">
      <label className="block font-semibold">Recurrence</label>
      <select
        className="border px-3 py-2 w-full rounded"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
