import Link from "next/link";
import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  gradient?: boolean; // optional prop for gradient background
  px?: string; // optional px prop for horizontal padding
}

const Button: FC<ButtonProps> = ({
  children,
  gradient = true,
  className = "",
  px = "px-4 sm:px-6", // default px
  ...props
}) => {
  return (
    <Link href="/contact-us">
    <button
      {...props}
      className={` cursor-pointer
        text-white ${px} py-2 rounded-md text-xs sm:py-2.5 sm:rounded-lg sm:text-sm font-medium transition-all duration-200 hover:scale-105
        ${gradient ? "bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF]" : "bg-gray-800"}
        ${className}
      `}
    >
      {children}
    </button>
    </Link>
  );
};

export default Button;
