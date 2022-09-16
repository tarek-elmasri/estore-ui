import React from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import useUserProfile from "../api/services/useUserProfile";
import Loading from "../components/Loading";

export const AuthenticatedRoute = (props) => {
  const { user, authorization, isLoading, rule } = useUserProfile();
  const { authorization: required_authorization } = props;
  const location = useLocation().pathname.substring(1);

  if (isLoading) return <Loading enabled text="تحميل ملفك الشخصي" />;

  if (!user)
    return (
      <Navigate
        to={`/login?returnUrl=${location}`}
        state={{ returnUrl: location }}
      />
    );

  if (rule === "user") return <Navigate to="/unauthorized" />;

  if (rule === "admin" || !required_authorization) return props.children;

  if (!authorization && !!required_authorization)
    return <Navigate to="/unauthorized" />;

  if (!authorization[required_authorization])
    return <Navigate to="/unauthorized" />;

  return props.children;
};

export const UnauthenticatedRoute = (props) => {
  const { user, isLoading } = useUserProfile();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");

  if (isLoading) return <Loading enabled />;
  if (user)
    return <Navigate replace to={returnUrl ? `/${returnUrl}` : "/home"} />;
  return props.children;
};
