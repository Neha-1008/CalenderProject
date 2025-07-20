"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = ["Daily", "Weekly", "Monthly", "Yearly"];

export default function RecurringDatePicker() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [frequency, setFrequency] = useState("Daily");

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4 w-full max-w-md">
      <div>
        <label className="block font-semibold mb-1">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">End Date (optional)</label>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Recurrence</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="border px-2 py-1 w-full"
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="pt-2 text-sm text-gray-600">
        Selected recurrence: <strong>{frequency}</strong>
      </div>
    </div>
  );
}
