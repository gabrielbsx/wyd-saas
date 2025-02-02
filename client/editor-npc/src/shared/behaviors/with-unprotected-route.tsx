import { ComponentType, useEffect } from "react";
import { useAuthStore } from "../contexts/use-auth.context";
import { useNavigate } from "react-router";

export function withUnprotectedRoute<T>(WrappedComponent: ComponentType<T>) {
  const Component = (props: T) => {
    const navigate = useNavigate();
    const { isAuthenticated, _hasHydrated } = useAuthStore();

    useEffect(() => {
      if (!_hasHydrated) return;

      if (isAuthenticated) {
        navigate("/dashboard");
      }
    }, [_hasHydrated, isAuthenticated, navigate]);

    return !isAuthenticated ? (
      <WrappedComponent {...props} key="with-unprotected-route" />
    ) : null;
  };

  return Component;
}
