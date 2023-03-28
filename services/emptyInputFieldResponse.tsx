import React from 'react';

interface Props {
  hasError: boolean;
}

const EmptyInputFieldResponse = ({ hasError }: Props) => {
  return (
    <div className={`text-center mt-4 ${hasError ? 'text-red-600' : 'hidden'}`}>
      Please fill out all required fields.
    </div>
  );
};

export default EmptyInputFieldResponse;
