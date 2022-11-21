import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "./paths";

const PublicRoutes = () => {
  // const { isLogin } = useSelector((state) => state);
  const { isLogin } = useSelector((state) => state.LoginReducer);

  // console.log(isLogin);

  return !isLogin ? <Outlet /> : <Navigate to={HOME} />;
};

export default PublicRoutes;
