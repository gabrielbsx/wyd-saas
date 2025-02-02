import axios from "axios";

export const api = axios.create({
  baseURL: String(import.meta.env.VITE_APP_BASE_URL),
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: () => true,
});
