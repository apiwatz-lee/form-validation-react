import React from "react";

const Input = ({ label, name, type, color, value, onChange, error }) => {
  return (
    <div className="mb-4 pb-1 flex flex-col">
      <label> {label} </label>
      <input
        name={name}
        type={type}
        className={`border border-gray-200 rounded-md px-2 py-1 outline-none ${
          color === "green"
            ? `border-2 border-green-700`
            : color === "red"
            ? `border-2 border-red-500`
            : null
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <small className={error && `text-red-500`}>{error}</small>
    </div>
  );
};

export default Input;
