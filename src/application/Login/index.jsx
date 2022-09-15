import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Textbox from "../../components/Textbox";
import { Header, InfoBlock, SubmitSection, Wrapper } from "./style";
import Loading from "../../components/Loading";
import * as api from "../../api";
import ls from "local-storage";
import { CURRENT_USER_QUERY_KEY } from "../../api/services/useUserProfile";
import { useQueryClient } from "react-query";

const Login = () => {
  const client = useQueryClient();
  const formatError = (errorCode) => {
    switch (errorCode) {
      case "NF422":
        return "الرجاء التأكد من رقم الهاتف و كلمة المرور.";

      case "UA412":
        return "لقد تم تعطيل حسابك . الرجاء التواصل مع الدعم .";

      default:
        return "حدث خطأ اثناء تسجيل الدخول . الرجاء المحاولة مرة اخرى .";
    }
  };

  const authController = async (values, actions) => {
    try {
      const res = await api.authUser(values);
      ls.set("tokens", res.data.tokens);
      client.invalidateQueries([CURRENT_USER_QUERY_KEY]);
    } catch (err) {
      actions.resetForm();
      actions.setErrors({
        phone_no: formatError(err.response?.data?.code),
      });
    }
  };
  return (
    <Formik
      initialValues={{ phone_no: "", password: "" }}
      onSubmit={authController}
    >
      {({ values, handleChange, isSubmitting, submitForm, errors, dirty }) => (
        <Wrapper>
          <Header>
            <h1>
              تسجيل الدخول الى <strong>المتجر</strong>
            </h1>
            <p>لتتسوق مجموعة مختارة من البطاقات و المنتجات التي تناسبك</p>
          </Header>
          <InfoBlock>
            <div>
              <span style={{ color: "red" }}>{errors.phone_no}</span>
              <Textbox
                name="phone_no"
                placeholder="رقم الهاتف"
                onChange={handleChange}
                value={values.phone_no}
              />
            </div>
            <div>
              <Textbox
                type="password"
                name="password"
                placeholder="كلمة المرور"
                onChange={handleChange}
                value={values.password}
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
            <button
              className="submit-btn"
              onClick={submitForm}
              disabled={!values.phone_no || !values.password || isSubmitting}
            >
              <span>تسجيل الدخول</span>
            </button>

            <div className="signup">
              <small>
                ليس لديك حساب؟{" "}
                <Link className="signup-link" to="#">
                  <small>انشئ حساب</small>
                </Link>
              </small>
            </div>
          </SubmitSection>
          <Loading enabled={isSubmitting} />
        </Wrapper>
      )}
    </Formik>
  );
};

export default Login;
