import UserServices from "../../services/user";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await UserServices.getUsers();
    dispatch({
      type: TYPES.GET_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = (values) => async (dispatch) => {
  try {
    const { data } = await UserServices.getUserById(values);
    console.log(data);
    dispatch({
      type: TYPES.GET_USER_ID,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
