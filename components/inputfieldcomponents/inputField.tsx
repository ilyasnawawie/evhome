import React, { useState } from 'react';

interface FormProps {
  onSubmit: (data: { [key: string]: string }) => void;
  inputs: { [key: string]: { type: string; label: string; placeholder?: string } };
  buttonLabel: string;
  rememberMe?: boolean;
  forgotPasswordLink?: string;
}

const Form = ({ onSubmit, inputs, buttonLabel, rememberMe, forgotPasswordLink }: FormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [rememberMeState, setRememberMeState] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRememberMeChange = () => {
    setRememberMeState(!rememberMeState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      className="bg-white shadow-md rounded-md p-6 font-medium"
      onSubmit={handleSubmit}
    >
      {Object.entries(inputs).map(([name, input]) => (
        <div key={name} className="my-4">
          <label className="block mb-1 text-sm" htmlFor={name}>
            {input.label}
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
              placeholder-orange-200"
            type={input.type}
            name={name}
            placeholder={input.placeholder}
            value={formData[name] ?? ''}
            onChange={handleChange}
            onFocus={(event) => (event.target.placeholder = '')}
            onBlur={(event) =>
              (event.target.placeholder = input.placeholder ?? '')
            }
          />
        </div>
      ))}
      {rememberMe && (
        <div className="flex items-center justify-between">
          <label className="text-sm">
            <input
              type="checkbox"
              className="mr-1"
              checked={rememberMeState}
              onChange={handleRememberMeChange}
            />
            <span>Remember me</span>
          </label>
        </div>
      )}
      {forgotPasswordLink && (
        <a href={forgotPasswordLink} className="text-sm text-orange-200 hover:underline">
          Forgot Password?
        </a>
      )}
      <button
        type="submit"
        className="
          w-full py-2 px-4 rounded-md mt-4 
          bg-yellow-400 text-white font-medium 
          hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default Form;
