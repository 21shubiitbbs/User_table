import React from 'react';

function RadioButton({ value, label,selectedValue, onRadioChange}) {
    const handleRadioChange = () => {
        onRadioChange(value);
    };
  return (
    <div className="inline-block mr-40 form-check flex-1">     
        <input
          type="radio"
          value={value}
          checked={value === selectedValue}
          onChange={handleRadioChange}
        />
      <label className="form-check-label">
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
