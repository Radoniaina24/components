"use client";
import React from "react";
import DatePicker from "@/components/ui/date/DatePicker";

import { useState } from "react";

export default function UserSelectionPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const date = selectedDate?.toISOString();
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      {" "}
      <DatePicker
        // maxDate={new Date(2025, 11, 31)}
        label="Sélectionner une date (pas de futur)"
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Seules les dates passées et aujourd'hui"
        format="dd/mm/yyyy"
        error=""
      />
      {date}
    </div>
  );
}
