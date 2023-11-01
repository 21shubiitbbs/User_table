import React from 'react';

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-black-700 text-base font-bold">
        {label}
        {/* {isMandatory && !isFilled && (
          <span className="text-red-500 ml-2">(Mandatory)</span>
        )} */}
      </label>
        <select className=" block appearance-none w-full py-2 text-center pr-2  bg-white border border-gray-300 rounded" value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* {isMandatory && !isFilled && (
          <div className="text-red-500">This field is mandatory.</div>
        )} */}
    </div>
  );
};

export default Dropdown;
