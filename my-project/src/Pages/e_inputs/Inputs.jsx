import React, { useState } from "react";

const FloatingLabelInput = ({ label, id, type = "text", className="", className1=""}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative w-full my-2 ${className}`}>
      <input
        id={id}
        type={type}
        className={`peer w-full border border-gray-300 rounded-md p-2 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${isFocused ? "" : "py-2"} transition-all`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")} // Check if input has text
      />
      <label
        htmlFor={id}
        className={`absolute left-3 bg-white px-1 text-gray-500 pointer-events-none transition-all
          ${isFocused ? "text-xs -top-2" : "md:text-base text-xs md:top-2 top-3.5"} ${className1}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
