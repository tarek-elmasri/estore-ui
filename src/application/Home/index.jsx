import React from "react";
import Loading from "../../components/Loading";
import { Wrapper, StaffActionsBlock, AuthorizationsBlock } from "./style";
import useStaffActions from "../../api/services/useStaffActions";
import Avatar from "../../components/Avatar";
import formatStaffAction from "../../utils/formatStaffAction";
import formatTimeToNow from "../../utils/distanceDate";

const Home = () => {
  const { staffActions, isLoading: staffActionIsLoading } = useStaffActions();

  return (
    <Wrapper>
      <Loading enabled={staffActionIsLoading} text="جاري تحميل البيانات" />

      {/* staff actions block */}
      <StaffActionsBlock>
        <div className="staff-actions__header">
          <div className="header-title">
            <i className="ti ti-components"></i>
            <h1>اخر الأحداث</h1>
          </div>
          <div className="header-filter-btn">
            <i className="ti ti-filter"></i>
            <span>تصفية</span>
          </div>
        </div>

        <div className="staff-actions__body">
          {staffActions &&
            staffActions.map((staffAction) => (
              <div className="action-block" key={staffAction.id}>
                <div>
                  <Avatar src={staffAction.user.avatar} size="35rem" />
                  <span>{staffAction.user.first_name + ":"}</span>
                  <span>{formatStaffAction(staffAction)}</span>
                </div>
                <small>منذ {formatTimeToNow(staffAction.created_at)}</small>
              </div>
            ))}
        </div>
      </StaffActionsBlock>

      {/* authorizations block */}
      <AuthorizationsBlock></AuthorizationsBlock>
    </Wrapper>
  );
};

export default Home;
