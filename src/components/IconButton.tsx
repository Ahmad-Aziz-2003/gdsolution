import React, { FC, ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string; // path to the icon image (svg or png)
  gradient?: boolean; // optional prop
}

const IconButton: FC<IconButtonProps> = ({
  text,
  icon,
  gradient = false,
  className = "",
  ...props
}) => {
  const hasCustomWidth = /\bw-/.test(className);

  return (
    <button
      {...props}
      className={`
        relative flex items-center gap-3
        px-2 py-1.5 rounded-full text-sm font-normal text-white
        overflow-hidden border border-white/10
        transition-all duration-200 
        ${!hasCustomWidth ? "w-auto" : ""}
        ${className}
      `}
      style={{
        background: gradient
          ? "linear-gradient(0.25deg, rgba(92, 95, 254, 0.3) 0%, rgba(153, 153, 153, 0.4) 100%)"
          : "#14181c",
      }}
    >
      {/* Top subtle gradient line */}
      {!gradient && (
        <span
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[1px] rounded"
          style={{
            background:
              "linear-gradient(90deg, rgba(92, 95, 254, 0) 0%, #5C5FFE 50%, rgba(92, 95, 254, 0) 100%)",
          }}
        />
      )}

      {/* Icon wrapper with gradient circle */}
      <div className="p-2 rounded-full bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF] flex items-center justify-center">
        <img src={icon} alt="icon" className="w-5 h-5" />
      </div>

      {/* Button text */}
      <span className=" text-center font-light text-lg">{text}</span>
    </button>
  );
};

export default IconButton;
