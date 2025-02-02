import { api } from "@/shared/config/api";
import { SignupRequest } from "@/features/signup/signup.schema";
import { toast } from "sonner";

export const signupService = async (dto: SignupRequest) => {
  const response = await api.post("/auth/register", dto);

  if (response.status !== 201) {
    const { message, details } = response.data;
    return toast.error(details ? details.join(", ") : message);
  }

  return toast.success(
    "Your account has been created successfully. You can now login."
  );
};
