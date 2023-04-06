import React from 'react';

type InputCheckboxProps = {
  name: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="my-4 flex items-center">
      <label htmlFor={name} className="text-sm flex items-center space-x-2 cursor-pointer hover:text-orange-200">
        <span>{label}</span>
        <input
          className="
            rounded-md border 
            border-gray-300 
            text-gray-900 focus:outline-none 
            focus:border-orange-200"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          id={name}
        />
      </label>
    </div>
  );
};

export default InputCheckbox;
