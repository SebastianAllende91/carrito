import { TYPES } from "../actions/types";
import { getValue, removeItem } from "../../utils/localStorage";
const initialState = {
  user: JSON.parse(getValue("user")) || {},
  token: getValue("token") || "",
  isLogin: getValue("isLogin") || false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        user: action.payload || getValue("user"),
        token: getValue("token"),
        isLogin: action.payload.estaLogueado || getValue("isLogin"),
      };
    case TYPES.LOGOUT:
      removeItem("token");
      removeItem("isLogin");
      removeItem("user");

      return {
        ...state,
        user: {},
        token: "",
        isLogin: false,
      };
    case TYPES.GET_TOKKEN:
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default LoginReducer;
