import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import { UnauthenticatedRoute, AuthenticatedRoute } from "./AuthRoutes";
const HomeComponent = lazy(() => import("../application/Home"));
const LoginComponent = lazy(() => import("../application/Login"));

const createAuthenticatedRoute = (Component, required_authorization = null) => (
  <Suspense fallback={<Loading enabled />}>
    <AuthenticatedRoute authorization={required_authorization}>
      <MainLayout>
        <Component />
      </MainLayout>
    </AuthenticatedRoute>
  </Suspense>
);

const createCredentialsRoute = (Component) => (
  <Suspense fallback={<Loading enabled />}>
    <UnauthenticatedRoute>
      <AuthLayout>
        <Component />
      </AuthLayout>
    </UnauthenticatedRoute>
  </Suspense>
);

const Router = () => {
  const el = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          exact: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          exact: true,
          element: createAuthenticatedRoute(HomeComponent),
        },
        {
          path: "/login",
          exact: true,
          element: createCredentialsRoute(LoginComponent),
        },
      ],
    },
  ]);

  return el;
};

export default Router;
