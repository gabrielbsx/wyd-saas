import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {}

export function FormGroup({ className, children, ...props }: FormGroupProps) {
  return (
    <div
      className={twMerge("flex flex-col justify-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}
