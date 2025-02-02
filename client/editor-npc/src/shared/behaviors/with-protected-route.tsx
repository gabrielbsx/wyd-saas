import { ComponentType, useEffect } from "react";
import { useAuthStore } from "../contexts/use-auth.context";
import { useNavigate } from "react-router";

export function withProtectedRoute<T>(WrappedComponent: ComponentType<T>) {
  const Component = (props: T) => {
    const navigate = useNavigate();
    const { isAuthenticated, _hasHydrated } = useAuthStore();

    useEffect(() => {
      if (!_hasHydrated) return;

      if (!isAuthenticated) {
        navigate("/signin");
      }
    }, [_hasHydrated, isAuthenticated, navigate]);

    return isAuthenticated ? (
      <WrappedComponent {...props} key="with-protected-route" />
    ) : null;
  };

  return Component;
}
