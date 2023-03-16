import React from "react";

const InputField = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default InputField;
