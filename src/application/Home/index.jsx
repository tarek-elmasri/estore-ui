import React from "react";
import Loading from "../../components/Loading";
import { Wrapper, Top, DataBlock } from "./style";
import useStaffActions from "../../api/services/useStaffActions";
import Avatar from "../../components/Avatar";
import formatStaffAction from "../../utils/formatStaffAction";

const Home = () => {
  const { staffActions, isLoading: staffActionIsLoading } = useStaffActions();

  console.log(staffActions);
  return (
    <Wrapper>
      <Loading enabled={staffActionIsLoading} text="جاري تحميل البيانات" />
      {/* header last Events // other side filter options */}
      <Top>
        <div className="header">
          <i className="ti ti-components"></i>
          <h1>اخر الأحداث</h1>
        </div>
        <div className="filter-btn">
          <i className="ti ti-filter"></i>
          <span>تصفية</span>
        </div>
      </Top>

      {/* list blocks of events as links if user is authorized */}

      <DataBlock>
        <ul>
          {staffActions &&
            staffActions.map((staffAction) => (
              <li key={staffAction.id}>
                <Avatar src={staffAction.user.avatar} size="35rem" />
                <span>{staffAction.user.first_name + " :"}</span>
                <span>{" " + formatStaffAction(staffAction)}</span>
              </li>
            ))}
        </ul>
      </DataBlock>
    </Wrapper>
  );
};

export default Home;
