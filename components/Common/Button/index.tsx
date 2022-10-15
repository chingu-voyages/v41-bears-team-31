import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button className={`text-sm font-bold ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
