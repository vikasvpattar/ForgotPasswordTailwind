import { twMerge } from 'tailwind-merge';
import React from 'react';

export default function Label({ variant, utilities, children, className }) {
  const variants = {};
  const buttonClass = variants[variant] || variants['variant0'];
  return (
    <span
      className={twMerge('text-black text-sm', variant, utilities, className)}>
      {children || 'Label'}
    </span>
  );
}
