interface FormErrorProps {
  error?: string;
}

export function FormError({ error }: FormErrorProps) {
  if (!error) return;
  
  return <div className="text-red-500 text-sm mt-1">{error}</div>;
}
