import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge(
        "flex items-center text-stone-100 text-sm font-medium",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
