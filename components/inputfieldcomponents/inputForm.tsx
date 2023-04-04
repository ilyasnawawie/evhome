import React, { useState, ReactNode } from 'react';

type Input = {
  label: string;
  type: string;
  placeholder?: string;
};

type InputFormProps = {
  onSubmit: (formData: { [key: string]: string }) => void;
  inputs: { [key: string]: Input };
  children?: ReactNode;
};

const InputForm = ({ onSubmit, inputs, children }: InputFormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log("handleChange success");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    console.log("handleSubmit success");
  };

  return (
    <form
      className="w-full bg-white-100 shadow-md rounded-md p-6 font-medium max-w-md mx-auto mt-8 space-y-6"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default InputForm;
