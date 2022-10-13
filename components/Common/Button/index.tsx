import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  title: string;
}

const Button = ({ className, title, ...rest }: Props) => {
  return (
    <button className={`text-sm font-bold ${className}`} {...rest}>
      {title}
    </button>
  );
};

export default Button;
