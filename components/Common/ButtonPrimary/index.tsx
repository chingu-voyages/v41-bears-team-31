import React from 'react';

interface Props {
  title: string;
  handleClick?: () => void;
}

const ButtonPrimary = ({ title, handleClick }: Props) => {
  return (
    <button
      className={`w-44 rounded bg-orange-600 py-3 px-2 text-center text-base font-bold uppercase text-white shadow-md`}
      onClick={() => {
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
