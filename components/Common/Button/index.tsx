import React from 'react';

interface Props {
  className?: string;
  title: string;
}

const Button = ({ className, title, ...rest }: Props) => {
  return (
    <button className="text-sm font-bold" {...rest}>
      {title}
    </button>
  );
};

export default Button;
