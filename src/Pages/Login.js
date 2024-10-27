import Modal from "../components/blocks/Modal";
import Button from "../components/ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Styled from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  setAuthLogin,
  setAuthPassword,
} from "../store/features/auth/authSlice";
import { useEffect } from "react";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.auth.authErrors);
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();

  const submitHandler = (event) => {
    event.preventDefault();
    setTimeout(() => {
      dispatch(login());
    }, 1000);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const changeNameHandler = (event) => {
    dispatch(setAuthLogin(event.target.value));
  };

  const changePasswordHandler = (event) => {
    dispatch(setAuthPassword(event.target.value));
  };
  return (
    <>
      <Modal>
        <p
          onClick={() => navigate("/register")}
          className={Styled["modal__link"]}
        >
          Зарегистрироваться
        </p>
        <h2 className={Styled["modal__title"]}>вход</h2>
        <form onSubmit={submitHandler} className={Styled["modal__form"]}>
          <div className={Styled["modal__form-login"]}>
            <input
              type="text"
              className={Styled["modal__form-login-input"]}
              placeholder="Логин"
              onChange={changeNameHandler}
            />
            {errors.loginName && (
              <span className={Styled["modal__form-login-error"]}>
                {errors.loginName}
              </span>
            )}
          </div>
          <div className={Styled["modal__form-password"]}>
            <input
              type="text"
              className={Styled["modal__form-password-input"]}
              placeholder="Пароль"
              onChange={changePasswordHandler}
            />
            {errors.password && (
              <span className={Styled["modal__form-password-error"]}>
                {errors.password}
              </span>
            )}
          </div>
          <input
            type="checkbox"
            className={Styled["modal__form-checkbox"]}
            id="checkbox"
          />
          <label htmlFor="checkbox" className={Styled["modal__form-label"]}>
            Я согласен получать обновления на почту
          </label>
          <div className={Styled["modal__form-footer"]}>
            {errors.other && (
              <p className={Styled["modal__form-footer-error"]}>
                {errors.other}
              </p>
            )}
            <Button
              name="Войти"
              bgColor="#D58C51"
              color="#131313"
              border="none"
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Login;
