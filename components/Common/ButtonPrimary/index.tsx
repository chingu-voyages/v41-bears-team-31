import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  // title: string;
  handleClick?: () => void;
}

const ButtonPrimary = ({ children, handleClick }: Props) => {
  return (
    <button
      className={`w-44 rounded bg-orange-600 py-3 px-2 text-center text-base font-bold uppercase text-white shadow-md`}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
