import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Login from "../application/Login";
import MainLayout from "../layouts/MainLayout";
import AuthenticatedRoute from "./AuthenticatedRoute";

const HomeComponent = lazy(() => import("../application/Home"));

const createAuthenticatedRoute = (Component, required_authorization = null) => (
  // <AuthenticatedRoute authorization={required_authorization}>
  <Suspense fallback={null}>
    <MainLayout>
      <Component />
    </MainLayout>
  </Suspense>
  // </AuthenticatedRoute>
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
          path: "/auth",
          exact: true,
          element: <Login />,
        },
      ],
    },
  ]);

  return el;
};

export default Router;
