import { HTMLAttributes } from "react";

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

export function Form({ children, ...props }: FormProps) {
  return (
    <form className="flex flex-col w-full gap-4" {...props}>
      {children}
    </form>
  );
}
