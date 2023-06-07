import React from "react";

type InputFieldProps = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  name,
  label,
  type,
  placeholder,
  value,
  error,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="my-4">
      <label className="block mb-1 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="
          w-full py-2 px-3 rounded-md border 
          border-gray-300 
          text-gray-900 focus:outline-none 
          focus:border-orange-200 
          focus:ring-2 
          focus:ring-orange-200 
          focus:ring-opacity-50
          placeholder-orange-200
          appearance-none 
          leading-tight  
          focus:shadow-outline"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={(event) => (event.target.placeholder = "")}
        onBlur={(event) => (event.target.placeholder = placeholder ?? "")}
      />
      <div className="text-red-500 text-xs mt-1">{error}</div>
    </div>
  );
};

export default InputField;
