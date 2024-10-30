import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:
    JSON.parse(window.localStorage.getItem("isAuthenticated")) ?? false,
  authData: {
    loginName: "",
    password: "",
  },
  authErrors: {
    loginName: "",
    password: "",
    other: "",
  },
  registerData: {
    loginName: "",
    password: "",
  },
  registerErrors: {
    loginName: "",
    password: "",
    other: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { loginName, password } = state.authData;
      if (loginName && password) {
        const users = JSON.parse(window.localStorage.getItem("users")) || [];
        const existUser = users.find(
          (user) => user.loginName === loginName && user.password === password
        );
        if (existUser) {
          window.localStorage.setItem("isAuthenticated", JSON.stringify(true));
          state.isAuthenticated = true;
          window.localStorage.setItem("activeUser", loginName);
          state.authData = initialState.authData;
          state.authErrors = initialState.authErrors;
        } else {
          state.authErrors.other = "Логин или пароль неверен";
        }
      }
    },
    logout: (state, action) => {
      window.localStorage.removeItem("isAuthenticated");
      state.isAuthenticated = false;
      window.localStorage.removeItem("activeUser");
    },
    register: (state, action) => {
      const { loginName, password } = state.registerData;

      if (loginName.length >= 4 && password.length >= 4) {
        const users = JSON.parse(window.localStorage.getItem("users")) || [];
        const existUser = users.find((user) => user.loginName === loginName);
        if (!existUser) {
          window.localStorage.setItem("activeUser", loginName);
          window.localStorage.setItem("isAuthenticated", JSON.stringify(true));
          state.isAuthenticated = true;
          window.localStorage.setItem(
            "users",
            JSON.stringify([
              ...users,
              {
                loginName: loginName,
                password: password,
              },
            ])
          );
          state.registerData = initialState.registerData;
          state.registerErrors = initialState.registerErrors;
        } else {
          state.registerErrors.other = "Такой пользователь уже существует";
        }
      }
    },
    setAuthLogin(state, action) {
      state.authErrors.other = "";
      state.authData.loginName = action.payload;
      if (action.payload.length > 0) {
        state.authErrors.loginName = "";
      } else {
        state.authErrors.loginName = "Поле не должно быть пустым";
      }
    },
    setAuthPassword(state, action) {
      state.authErrors.other = "";
      state.authData.password = action.payload;
      if (action.payload.length > 0) {
        state.authErrors.password = "";
      } else {
        state.authErrors.password = "Поле не должно быть пустым";
      }
    },
    setRegisterLogin(state, action) {
      state.registerErrors.other = "";
      state.registerData.loginName = action.payload;
      if (action.payload.length >= 4) {
        state.registerErrors.loginName = "";
      } else if (action.payload.length > 0 && action.payload.length < 4) {
        state.registerErrors.loginName =
          "Логин должен содержать не менее 4-х символов";
      } else {
        state.registerErrors.loginName = "Поле не должно быть пустым";
      }
    },
    setRegisterPassword(state, action) {
      state.registerErrors.other = "";
      state.registerData.password = action.payload;
      if (action.payload.length >= 4) {
        state.registerErrors.password = "";
      } else if (action.payload.length > 0 && action.payload.length < 4) {
        state.registerErrors.password =
          "Пароль должен содержать не менее 4-х символов";
      } else {
        state.registerErrors.password = "Поле не должно быть пустым";
      }
    },
    resetRegister(state, action) {
      state.registerData = initialState.registerData;
      state.registerErrors = initialState.registerErrors;
    },
    resetLogin(state, action) {
      state.authData = initialState.authData;
      state.authErrors = initialState.authErrors;
    },
  },
});

export const {
  login,
  logout,
  register,
  setAuthLogin,
  setAuthPassword,
  setRegisterLogin,
  setRegisterPassword,
  resetRegister,
  resetLogin,
} = authSlice.actions;

export default authSlice.reducer;
