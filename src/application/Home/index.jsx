import React, { useState } from "react";
import Loading from "../../components/Loading";
import { Wrapper, StaffActionsBlock, AuthorizationsBlock } from "./style";
import useStaffActions from "../../api/services/useStaffActions";
import Avatar from "../../components/Avatar";
import {
  formatActionToString,
  modelNames,
  actionNames,
} from "../../utils/formatStaffAction";

import formatTimeToNow from "../../utils/distanceDate";
import { useRef } from "react";
import Drawer from "../../components/Drawer";
import Combo from "../../components/Combo";
const Home = () => {
  const [filterParams, setFilterParams] = useState({});
  const { staffActions, isLoading: staffActionIsLoading } =
    useStaffActions(filterParams);
  const optionsBarRef = useRef();

  const FilterComponent = () => {
    const comboHandleChange = (name, { key, _ }) => {
      if (key === "all") {
        setFilterParams((prev) => ({ ...prev, [name]: null }));
      } else {
        setFilterParams((prev) => ({ ...prev, [name]: key }));
      }
    };
    return (
      <div style={{ padding: "1rem", color: "white" }}>
        <div>
          <span>نوع الحدث</span>
          <Combo
            name="action_type"
            options={actionNames}
            defaultOption={{
              key: filterParams.action_type || "all",
              value:
                actionNames.find((o) => o.key === filterParams.action_type)
                  ?.value || "الكل",
            }}
            onChange={comboHandleChange}
          />
        </div>
        <div>
          {/* <span>نوع السجل</span>
          <Combo
            name="model_name"
            options={modelOptions}
            defaultOption={{ key: "all", value: "الكل" }}
            onChange={comboHandleChange}
          /> */}
        </div>
      </div>
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
            onClick={() => optionsBarRef.current.toggle()}
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
        width="36rem"
        ref={optionsBarRef}
        component={<FilterComponent />}
        backgroundColor="var(--deep-blue)"
      />
    </Wrapper>
  );
};

export default Home;
