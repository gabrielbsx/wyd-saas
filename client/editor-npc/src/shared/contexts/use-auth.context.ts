import { Account } from "@/domain/account";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  account: Account | null;
}

export interface AuthContext extends AuthState {
  _hasHydrated: boolean;

  login: (token: string, account: Account) => void;
  logout: () => void;
  setHasHydrated: () => void;
}

export const useAuthStore = create<AuthContext>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      account: null,
      _hasHydrated: false,

      login: (token: string, account: Account) => {
        set({ isAuthenticated: true, token, account });
      },
      logout: () => {
        set({ isAuthenticated: false, token: null, account: null });
      },
      setHasHydrated: () => {
        set({ _hasHydrated: true });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated();
      },
    }
  )
);
