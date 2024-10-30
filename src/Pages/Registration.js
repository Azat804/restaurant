import Modal from "../components/blocks/Modal";
import Styled from "./registration.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegisterLogin,
  setRegisterPassword,
  register,
  resetRegister,
  resetLogin,
} from "../store/features/auth/authSlice";
import { useEffect } from "react";
function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.auth.registerErrors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const submitHandler = (event) => {
    event.preventDefault();
    setTimeout(() => {
      dispatch(register());
    }, 1000);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    return () => {
      dispatch(resetRegister());
      dispatch(resetLogin());
    };
  }, [isAuthenticated]);

  const changeNameHandler = (event) => {
    dispatch(setRegisterLogin(event.target.value));
  };

  const changePasswordHandler = (event) => {
    dispatch(setRegisterPassword(event.target.value));
  };
  return (
    <>
      <Modal>
        <p onClick={() => navigate("/login")} className={Styled["modal__link"]}>
          Авторизоваться
        </p>
        <h2 className={Styled["modal__title"]}>Регистрация</h2>
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
              name="Зарегистрироваться"
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

export default Registration;
