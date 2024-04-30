"use client";
import React, { useState } from "react";
import { ChevronDown, DownIcon } from "lucide-react"; // Importing DownIcon from Lucide Icons
import "./style.css";
const DateComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="date">Select a date: </label>

      <input
        type="date"
        id="date"
        onChange={handleDateChange}
        className="custom-date"
      />

      {selectedDate && <p>Selected date: {selectedDate}</p>}
    </div>
  );
};

export default DateComponent;
