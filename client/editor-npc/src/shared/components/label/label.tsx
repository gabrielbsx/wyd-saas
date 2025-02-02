import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className="flex items-center text-stone-100 text-sm font-medium"
      {...props}
    >
      {children}
    </label>
  );
}
