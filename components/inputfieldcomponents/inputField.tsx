import React, { useState } from 'react';

interface Props {
    onSubmit: (data: { [key: string]: string }) => void;
    inputs: { [key: string]: { type: string; label: string; placeholder?: string } };
    buttonLabel: string;
}

const Form = ({ onSubmit, inputs, buttonLabel }: Props) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="my-4 mx-2 p-4 bg-white-100 rounded-md shadow-lg ring-2 ring-orange-200"onSubmit={handleSubmit}>
            {Object.entries(inputs).map(([name, input]) => (
                <div key={name} className="my-2">
                    <label className="block font-semibold mb-1" htmlFor={name}>
                        {input.label}
                    </label>
                    <input
                        className="
                        w-full py-2 px-3 rounded-md border 
                        border-gray-400 
                        text-gray-700 focus:outline-none 
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
                        onFocus={(event) => event.target.placeholder = ''}
                        onBlur={(event) => event.target.placeholder = input.placeholder ?? ''}
                    />
                </div>
            ))}
            <button type="submit">{buttonLabel}</button>
        </form>
    );
};

export default Form;
