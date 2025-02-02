import { signinSchema, SigninRequest } from "@/features/signin/signin.schema";
import { signinService } from "@/features/signin/signin.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useSignin() {
  const form = useForm<SigninRequest>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });

  return {
    onSubmit: form.handleSubmit(signinService),
    form,
  };
}
