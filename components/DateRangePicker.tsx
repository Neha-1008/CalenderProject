"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecurrenceStore } from "@/store/recurrenceStore";

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div>
        <label className="block font-semibold">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="border px-3 py-2 w-full rounded"
          placeholderText="Optional"
        />
      </div>
    </div>
  );
}
