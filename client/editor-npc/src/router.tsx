import { Route, Routes } from "react-router";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import { AuthLayout, DashboardLayout } from "./shared/templates/layout";
import { DashboardHomePage } from "./pages/dashboard/home";

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index path={"/"} element={<SigninPage />} />
        <Route path={"/signin"} element={<SigninPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route index path={"/dashboard"} element={<DashboardHomePage />} />
      </Route>
    </Routes>
  );
}
