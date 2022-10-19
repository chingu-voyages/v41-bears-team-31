import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button
      className={`text-base font-medium text-text-primary ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
