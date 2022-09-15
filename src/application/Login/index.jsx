import React, { useState } from "react";
import { Link } from "react-router-dom";
import Textbox from "../../components/Textbox";
import AuthLayout from "../../layouts/AuthLayout";
import { Header, InfoBlock, SubmitSection, Wrapper } from "./style";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ phone_no: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <AuthLayout>
      <Wrapper //login component
      >
        <Header>
          <h1>
            تسجيل الدخول الى <strong>المتجر</strong>
          </h1>
          <p>لتتسوق مجموعة مختارة من البطاقات و المنتجات التي تناسبك</p>
        </Header>
        <InfoBlock>
          <div>
            <Textbox
              name="phone_no"
              placeholder="رقم الهاتف"
              onChange={handleChange}
              value={loginForm.phone_no}
            />
          </div>
          <div>
            <Textbox
              type="password"
              name="password"
              placeholder="كلمة المرور"
              onChange={handleChange}
              value={loginForm.password}
            />
          </div>

          <div>
            <Link
              to="/auth"
              style={{
                color: "black",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              <small>نسيت كلمة المرور</small>
            </Link>
          </div>
        </InfoBlock>

        <SubmitSection>
          <div className="submit-btn">
            <span>تسجيل الدخول</span>
          </div>

          <div className="signup">
            <small>
              ليس لديك حساب؟{" "}
              <Link className="signup-link" to="#">
                <small>انشئ حساب</small>
              </Link>
            </small>
          </div>
        </SubmitSection>
      </Wrapper>
    </AuthLayout>
  );
};

export default Login;
