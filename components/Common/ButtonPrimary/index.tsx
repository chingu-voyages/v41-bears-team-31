import React from 'react';

interface Props {
  className?: string;
  title: string;
}

const ButtonPrimary = ({ className, title, ...rest }: Props) => {
  return (
    <button
      className={`w-44 rounded bg-orange-600 py-3 px-2 text-center text-base font-bold uppercase text-white shadow-md ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
