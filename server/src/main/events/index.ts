import { registerForgotPasswordEvent } from "./forgot-password-notification";
import { registerAccountEvent } from "./register-account-event";

export const registerEvents = () => {
  registerAccountEvent();
  registerForgotPasswordEvent();
};
