import Swal from "sweetalert2";
import LoginServices from "../../services/login";
import { createToken, saveValue } from "../../utils/localStorage";
import { TYPES } from "./types";

export const login = (data) => async (dispatch) => {
  try {
    const resp = await LoginServices.getAuth(data);

    const token = createToken(40);
    saveValue("token", token);
    saveValue("user", resp.data);
    saveValue("isLogin", resp.data.estaLogueado);

    dispatch(loginSuccess(resp.data));
    Swal.fire({
      icon: "success",
      title: "OK",
      text: "Login exitoso!!",
    });
  } catch (error) {
    console.log("Error en login Action: ", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales incorrectas!!",
    });
  }
};

const loginSuccess = (payload) => ({
  type: TYPES.LOGIN,
  payload: payload,
});

export const logout = (user) => async (dispatch) => {
  try {
    // const resp = await LoginServices.logout(user);
    dispatch({ type: TYPES.LOGOUT });
  } catch (error) {
    console.log("error en logout action: ", error);
  }
};

export const setToken = (tokken) => {
  return {
    type: TYPES.GET_TOKKEN,
    payload: tokken,
  };
};
