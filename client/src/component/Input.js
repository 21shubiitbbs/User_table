import React from 'react';

const Input = ({ value, onChange }) => {
  return (
    <div style={{flex:1}} className="mb-4"> 
      <input className="shadow appearance-none border h-[42px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
