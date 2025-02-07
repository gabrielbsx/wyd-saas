import { api } from "@/shared/config/api";
import { SigninRequest } from "@/features/signin/signin.schema";
import { toast } from "sonner";
import { useAuthStore } from "@/shared/contexts/use-auth.context";

export const signinService = async (dto: SigninRequest) => {
  const response = await api.post("/auth/login", dto);

  if (response.status !== 200) {
    const { message, details } = response.data;
    return toast.error(details ? details.join(", ") : message);
  }

  const { token, account } = response.data;

  const authStore = useAuthStore.getState();

  authStore.login(token, account);

  toast.success("Successfully signed in");
};
