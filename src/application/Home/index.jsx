import React from "react";
import Loading from "../../components/Loading";
import { Wrapper, Top, DataBlock } from "./style";
import useStaffActions from "../../api/services/useStaffActions";

const Home = () => {
  const { staffActions, isLoading: staffActionIsLoading } = useStaffActions();

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
        {staffActions &&
          staffActions.map((staffAction) => (
            <div key={staffAction.id}>{JSON.stringify(staffAction)}</div>
          ))}
      </DataBlock>
    </Wrapper>
  );
};

export default Home;
