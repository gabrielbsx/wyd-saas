import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={twMerge("flex flex-col w-full gap-4", className)}
      {...props}
    >
      {children}
    </form>
  );
}
