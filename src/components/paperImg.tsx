import React from "react";

export type PaperImgProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  paperImage?: string;
  disabled?: boolean;
};

export default function PaperImg({
  value,
  onChange,
  placeholder = "PASTE LINK",
  className = "",
  paperImage = "burntpaper.webp",
  disabled = false,
}: PaperImgProps) {
  return (
    <div
      className={`
        relative overflow-visible
        ${disabled ? "opacity-60 pointer-events-none" : "group"}
      `}
    >
      {/* Paper background */}
      <div
        className={`
          absolute inset-0
          bg-center bg-no-repeat bg-contain
          transition-all duration-300 ease-out

          -rotate-2 scale-[1.03]
          filter sepia-30 saturate-90 brightness-95

          ${!disabled ? `
            group-focus-within:rotate-0
            group-focus-within:scale-[1.05]
            group-focus-within:saturate-120
            group-focus-within:brightness-110
            group-focus-within:contrast-110
          `: `saturate-70 brightness-30 sepia-60 contrast-50`
        }
        `}
        style={{ backgroundImage: `url("${paperImage}")` }}
      />

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full bg-transparent py-10 px-6
          text-black text-md text-center
          placeholder:text-gray-500
          focus:outline-none
          font-sans relative font-bold
          ${disabled ? "cursor-not-allowed" : ""}
          ${className}
        `}
      />
    </div>
  );
}
