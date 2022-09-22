import React, { useState } from "react";
import Loading from "../../components/Loading";
import {
  Wrapper,
  StaffActionsBlock,
  AuthorizationsBlock,
  FilterContainer,
} from "./style";
import useStaffActions from "../../api/services/useStaffActions";
import Avatar from "../../components/Avatar";
import {
  formatActionToString,
  modelNames,
  actionNames,
  getActionNameValue,
  getModelNameValue,
} from "../../utils/formatStaffAction";
import formatTimeToNow from "../../utils/distanceDate";
import { useRef } from "react";
import Drawer from "../../components/Drawer";
import Combo from "../../components/Combo";

const Home = () => {
  const [filterParams, setFilterParams] = useState({});
  const { staffActions, isLoading: staffActionIsLoading } =
    useStaffActions(filterParams);

  const drawerRef = useRef();

  const FilterComponent = () => {
    const comboHandleChange = (name, { key, _ }) => {
      if (key === "all") {
        setFilterParams((prev) => ({ ...prev, [name]: null }));
      } else {
        setFilterParams((prev) => ({ ...prev, [name]: key }));
      }
    };
    return (
      <FilterContainer>
        <div>
          <span>نوع الحدث</span>
          <Combo
            className="combo"
            name="action_type"
            options={actionNames}
            defaultOption={{
              key: filterParams.action_type || "all",
              value: getActionNameValue(filterParams.action_type || "all"),
            }}
            onChange={comboHandleChange}
          />
        </div>
        <div>
          <span>نوع السجل</span>
          <Combo
            className="combo"
            name="model_name"
            options={modelNames}
            defaultOption={{
              key: filterParams.model_name || "all",
              value: getModelNameValue(filterParams.model_name || "all"),
            }}
            onChange={comboHandleChange}
          />
        </div>
      </FilterContainer>
    );
  };

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
          <div
            className="header-filter-btn"
            onClick={() => drawerRef.current.toggle()}
          >
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
                  <span>{formatActionToString(staffAction)}</span>
                </div>
                <small>منذ {formatTimeToNow(staffAction.created_at)}</small>
              </div>
            ))}
        </div>
      </StaffActionsBlock>

      {/* authorizations block */}
      <AuthorizationsBlock></AuthorizationsBlock>
      <Drawer
        width="16rem"
        ref={drawerRef}
        component={<FilterComponent />}
        backgroundColor="var(--deep-blue)"
      />
    </Wrapper>
  );
};

export default Home;
