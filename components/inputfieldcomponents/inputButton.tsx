import React from 'react';

type InputButtonProps = {
  buttonLabel: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const InputButton: React.FC<InputButtonProps> = ({ buttonLabel, onClick }) => {
  return (
    <button
      type="submit"
      className="
        w-full py-2 px-4 rounded-md mt-4 
        bg-yellow-400 text-white font-medium 
        hover:bg-orange-300 focus:outline-none focus:bg-orange-300"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
};

export default InputButton;
