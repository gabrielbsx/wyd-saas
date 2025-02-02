import { PropsWithChildren } from "react";

interface FormGroupProps extends PropsWithChildren {}

export function FormGroup({ children }: FormGroupProps) {
  return <div className="flex flex-col justify-center gap-2">{children}</div>;
}
