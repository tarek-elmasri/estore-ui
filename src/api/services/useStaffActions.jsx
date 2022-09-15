import { useQuery } from "react-query";
import { getStaffActions } from "..";

export const GET_STAFF_ACTIONS_QUERY_KEY = "getStaffActions";

const useStaffActions = (params) => {
  const {
    data: res,
    isLoading,
    error,
    isError,
  } = useQuery(
    [GET_STAFF_ACTIONS_QUERY_KEY, params],
    ({ queryKey }) => getStaffActions(queryKey[1]),
    {}
  );

  const staffActions = res?.data?.staff_actions;

  return {
    staffActions,
    isLoading,
    error,
    isError,
  };
};

export default useStaffActions;
