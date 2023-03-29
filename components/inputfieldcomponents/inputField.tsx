import React, { useState } from 'react';

type Input = {
  label: string;
  type: string;
  placeholder?: string;
};

type FormProps = {
  onSubmit: (formData: { [key: string]: string }) => void;
  inputs: { [key: string]: Input };
  buttonLabel: string;
  rememberMe?: boolean;
  rememberMeSlot?: React.ReactNode;
  forgotPasswordLink?: string;
  forgotPasswordSlot?: React.ReactNode;
};


const Form = ({ onSubmit, inputs, buttonLabel, rememberMe, rememberMeSlot, forgotPasswordLink, forgotPasswordSlot }: FormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [rememberMeState, setRememberMeState] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
      console.log("handleChange success");
    };

  const handleRememberMeChange = () => {
    setRememberMeState(!rememberMeState);
    console.log("handleRememberMeChange success");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    console.log("handleSubmit success");
  };

  return (
    <form
      className="w-full bg-white-100 shadow-md rounded-md p-6 font-medium max-w-md mx-auto mt-8 space-y-6"
      onSubmit={handleSubmit}>

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
              placeholder-orange-200
              appearance-none 
              leading-tight  
              focus:shadow-outline"
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
      <div className="flex justify-between items-center">
        {rememberMeSlot ? (
          rememberMeSlot
        ) : (
          rememberMe && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="mr-1"
                checked={rememberMeState}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me" className="block text-sm text-gray-900">
                Remember me
              </label>
            </div>
          )
        )}
        {forgotPasswordSlot ? (
          forgotPasswordSlot
        ) : (
          forgotPasswordLink && (
            <div className="mr-2 block text-sm text-gray-900">
              {forgotPasswordLink ? (
                <a href={forgotPasswordLink} className="hover:text-orange-400 ml-1">
                  Forgot Password?
                </a>
                 ) : (
                <label className="mr-1 block text-sm">
                  <a href="#" className="hover:text-orange-400">
                    Forgot Password?
                  </a>
                </label>
              )}
            </div>
          )
        )}
      </div>
      <button
        type="submit"
        className="
          w-full py-2 px-4 rounded-md mt-4 
          bg-yellow-400 text-white font-medium 
          hover:bg-orange-300 focus:outline-none focus:bg-orange-300">
        {buttonLabel}
      </button>
    </form>
  );
};

export default Form;