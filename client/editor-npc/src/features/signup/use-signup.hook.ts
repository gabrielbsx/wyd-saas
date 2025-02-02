import { SignupRequest, signupSchema } from "@/features/signup/signup.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupService } from "./signup.service";

export function useSignup() {
  const form = useForm<SignupRequest>({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(signupSchema),
  });

  return {
    onSubmit: form.handleSubmit(signupService),
    form,
  };
}
