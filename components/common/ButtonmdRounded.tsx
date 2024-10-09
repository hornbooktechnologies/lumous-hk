import React from "react";

interface ButtonProps {
  title?: string;
  className?: string;
}

export const ButtonmdRounded: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="bg-[#112025] text-white px-4 py-2 rounded-md mt-4 text-[14px]">
      {title}
    </button>
  );
};

export const ButtonFullRounded: React.FC<ButtonProps> = ({
  title,
  className,
}) => {
  return (
    <button
      className={`${className} bg-black-300 float-left text-[12px] lg:text-[14px] text-[#EFF0F4] px-4 py-2 mt-3 rounded-full font-medium transition`}
    >
      {title}
    </button>
  );
};

export const ButtonOutline: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`${className} text-[12px] lg:text-[14px] text-black-300 px-4 py-2 mt-3 font-medium transition border border-solid border-black-300 `}
    >
      {title}
    </button>
  );
};
