import { NavLink } from "react-router-dom";
import { Container, StoreLogo, Top } from "./style";
import PropTypes from "prop-types";

const Sidebar = ({ isFloating }) => {
  const navTabClass = ({ isActive }) =>
    `nav-tab ${isActive && "nav-tab-active"}`;

  return (
    <Container overFlow={isFloating}>
      <Top>
        <img
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
          alt="logo"
        />
      </Top>

      <StoreLogo>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />

        <div>
          <span>متجر كونكور</span>
          <NavLink className="share-btn" to="#">
            <span>زيارة المتجر</span>
            <i className="ti ti-share"></i>
          </NavLink>
        </div>
      </StoreLogo>

      <NavLink className={navTabClass} to="/home">
        <i className="ti ti-home"></i>
        <span>الرئيسية</span>
      </NavLink>
      <NavLink className={navTabClass} to="/ss">
        <i className="ti ti-apps"></i>
        <span>المنتجات</span>
      </NavLink>
      <NavLink className={navTabClass} to="/ss">
        <i className="ti ti-shopping-cart"></i>
        <span>الطلبات</span>
      </NavLink>
      <NavLink className={navTabClass} to="/ss">
        <i className="ti ti-users"></i>
        <span>العملاء</span>
      </NavLink>
      <NavLink className={navTabClass} to="/ss">
        <i className="ti ti-report-analytics"></i>
        <span>التقارير</span>
      </NavLink>
    </Container>
  );
};

Sidebar.propTypes = {
  isFloating: PropTypes.bool,
};

Sidebar.defaultProps = {
  isFloating: false,
};

export default Sidebar;
