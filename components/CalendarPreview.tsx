"use client";
import { useRecurrenceStore } from "@/store/recurrenceStore";

export default function CalendarPreview() {
  const { frequency, startDate, endDate } = useRecurrenceStore();

  return (
    <div className="text-sm mt-4 p-4 bg-gray-100 rounded">
      <p>
        <strong>Start Date:</strong> {startDate?.toDateString()}
      </p>
      <p>
        <strong>End Date:</strong>{" "}
        {endDate ? endDate.toDateString() : "Not set"}
      </p>
      <p>
        <strong>Recurrence:</strong> {frequency}
      </p>
    </div>
  );
}
