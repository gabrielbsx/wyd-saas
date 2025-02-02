import { Outlet, redirect } from "react-router";
import { useAuthStore } from "../contexts/use-auth.context";
import { withUnprotectedRoute } from "../behaviors/with-unprotected-route";
import { withProtectedRoute } from "../behaviors/with-protected-route";

export const AuthLayout = withUnprotectedRoute(() => {
  return (
    <div className="bg-stone-800 min-h-screen w-full">
      <Outlet />
    </div>
  );
});

export const DashboardLayout = withProtectedRoute(() => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    redirect("/signin");
    return null;
  }

  return (
    <div className="bg-stone-800 min-h-screen w-full">
      <Outlet />
    </div>
  );
});
