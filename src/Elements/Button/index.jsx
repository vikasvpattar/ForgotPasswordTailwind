import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = ({
  children,
  utilities,
  variant = 'filled',
  leftIcon,
  rightIcon,
  className,
  ...rest
}) => {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <button
      type="button"
      className={twMerge(
        'rounded focus:outline-none focus:ring bg-blue-500 text-white hover:bg-blue-600 px-4 py-2',
        buttonClass,
        utilities,
        className
      )}
      {...rest}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
