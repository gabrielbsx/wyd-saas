import { forwardRef, InputHTMLAttributes, Ref } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  ({ className, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "hover:bg-stone-950 focus:bg-stone-950 transition-all duration-500 flex-1 py-2 px-2 rounded-lg bg-stone-900 text-white border border-stone-700 outline-none focus:outline-0",
          className
        )}
        {...props}
      />
    );
  }
);
