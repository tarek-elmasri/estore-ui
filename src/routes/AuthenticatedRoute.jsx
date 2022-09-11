import React from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router";
import useUserProfile from "../api/services/useUserProfile";

const AuthenticatedRoute = (props) => {
  const { user, authorization, isLoading, rule } = useUserProfile();
  const location = useLocation().pathname;
  const { authorization: required_authorization } = props;

  if (isLoading) return null;

  if (!user) return <Navigate to="/login" state={{ returnUrl: location }} />;

  if (rule === "user") return <Navigate to="/unauthorized" />;

  if (rule === "admin" || !required_authorization) return props.children;

  if (!authorization && !!required_authorization)
    return <Navigate to="/unauthorized" />;

  if (!authorization[required_authorization])
    return <Navigate to="/unauthorized" />;

  return props.children;
};

export default AuthenticatedRoute;
