import { twMerge } from "tailwind-merge";
import React from "react";

export default function Box({
  variant,
  utilities,
  children,
  className,
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants["variant0"];
  return (
    <div className={twMerge("  p-2", buttonClass, utilities, className)}>
      {children}
    </div>
  );
}
