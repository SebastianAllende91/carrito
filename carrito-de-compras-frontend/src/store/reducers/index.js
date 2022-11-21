import { combineReducers } from "redux";
import ArticlesReducer from "./articlesReducer";
import LoginReducer from "./loginReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  ArticlesReducer,
  LoginReducer,
  UserReducer,
});

export default rootReducer;
