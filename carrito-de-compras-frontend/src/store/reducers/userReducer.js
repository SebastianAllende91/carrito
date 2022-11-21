import { TYPES } from "../actions/types";

const initialState = {
  loading: true,
  users: [],
  userById: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case TYPES.GET_USER_ID:
      return {
        ...state,
        userById: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default UserReducer;
