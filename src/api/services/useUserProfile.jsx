import { useQuery } from "react-query";
import { getUser } from "../index";

export const CURRENT_USER_QUERY_KEY = "current_user";

const useUserProfile = () => {
  const context = useQuery(CURRENT_USER_QUERY_KEY, getUser, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const user = context.data?.data;
  const authorization = user?.authorization;
  const avatar = user?.avatar;
  const rule = user?.rule;
  const isLoading = context.isLoading;

  return {
    context,
    user,
    authorization,
    avatar,
    rule,
    isLoading,
  };
};

export default useUserProfile;
