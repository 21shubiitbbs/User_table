import React from 'react';

const DateOfBirth = ({ label, day, month, year, onDayChange, onMonthChange, onYearChange }) => {
  // Generate an array of numbers for days (1-31)
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  // Define an array of months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Generate an array of years (you can customize this range)
  const years = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index);

  return (
    <div className="flex items-center gap-3">
     
      <div className="relative flex-1">
        <select className="block appearance-none w-full py-2 text-center pr-2 leading-tight bg-white border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500"
        value={day} onChange={onDayChange}>
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex-1">
        <select className="block appearance-none w-full py-2 text-center pr-2 leading-tight bg-white border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" value={month} onChange={onMonthChange}>
          <option value="">Month</option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="relative flex-1">
        <select className="block appearance-none w-full py-2 text-center pr-2 leading-tight bg-white border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500" value={year} onChange={onYearChange}>
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateOfBirth;
