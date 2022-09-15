import React from "react";
import useUserProfile from "../../api/services/useUserProfile";
import Loading from "../../components/Loading";
import { Wrapper, Top, DataBlock } from "./style";
import useStaffActions from "../../api/services/useStaffActions";

const Home = () => {
  const { isLoading: userIsLoading } = useUserProfile();
  const { staffActions, isLoading: staffActionIsLoading } = useStaffActions();

  if (userIsLoading) return <Loading enabled text={`جار تحميل ملفك الشخصي`} />;

  if (staffActionIsLoading)
    return <Loading enabled text={`جاري تحميل البيانات`} />;

  return (
    <Wrapper>
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
      <DataBlock></DataBlock>
    </Wrapper>
  );
};

export default Home;
