import React from "react";
import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  variant = "filled",
  utilities,
  placeholder = "Enter text",
  righticon,
  leftIcon,
  ...rest
}) {
  const variants = {};
  const buttonClass = variants[variant] || variants["variant0"];
  return (
    <div
      className={twMerge(
        "flex rounded-lg w-64 focus:outline-none text-black bg-gray-200 hover:bg-gray-300 px-4 py-2 text-md",
        buttonClass,
        utilities,
        className
      )}
      {...rest}
    >
      {righticon}
      <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        placeholder={placeholder}
        style={{ backgroundColor: "inherit", color: "inherit" }}
        className="focus:outline-none w-full"
      />
      {leftIcon}
    </div>
  );
}
