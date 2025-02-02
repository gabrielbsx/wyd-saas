import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="py-2 px-4 transition-all duration-400 hover:bg-stone-600 hover:text-gray-100 hover:border-stone-400 font-bold text-white bg-stone-700 border border-stone-500 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}
