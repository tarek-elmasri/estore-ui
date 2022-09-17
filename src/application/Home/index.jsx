import React from "react";
import Loading from "../../components/Loading";
import { Wrapper, Top, DataBlock } from "./style";
import useStaffActions from "../../api/services/useStaffActions";
import blankAvatar from "../../assets/blank-user.svg";

const Home = () => {
  const { staffActions, isLoading: staffActionIsLoading } = useStaffActions();

  const formatAction = (action) => {
    switch (action) {
      case "create":
        return "إنشاء";
      case "update":
        return "تحديث بيانات";
      case "delete":
        return "حذف";

      default:
        return ` حدث غير معرف${action}`;
    }
  };

  const formatModelName = (model) => {
    switch (model) {
      case "user":
        return "مستخدم";
      case "item":
        return "منتج";
      case "category":
        return "تصنيف";
      case "authorization":
        return "صلاحيات";
      case "card":
        return "بطاقة";

      default:
        return `نوع غير معرف ${model}`;
    }
  };
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
                <p>
                  قام {staffAction.user.first_name} ب
                  {formatAction(staffAction.action)}{" "}
                  {formatModelName(staffAction.model)}
                </p>
              </li>
            ))}
        </ul>
      </DataBlock>
    </Wrapper>
  );
};

export default Home;
