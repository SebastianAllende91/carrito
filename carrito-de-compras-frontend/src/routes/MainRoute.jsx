import { Route, Routes } from "react-router-dom";
import AltaProduct from "../components/abm/AltaProduct";
import FormProduct from "../components/abm/FormProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AbmProducts from "../views/AbmProducts";
import Home from "../views/Home";
import Login from "../views/Login";
import ProductDetail from "../views/ProductDetail";
import Register from "../views/Register";
import {
  ABM_PRODUCTS,
  ABM_USERS,
  ADD_PRODUCT,
  ADD_USER,
  EDIT,
  HOME,
  ID,
  LOGIN,
  PRODUCT,
  PRODUCTS,
  REGISTER,
  SHOP_CART,
  USER_EDIT,
} from "./paths";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import ListaProductosCompleta from "../components/productos/ListaProductosCompleta";
import ShoppingCart from "../views/ShoppingCart";
import AbmUsers from "../views/AbmUsers";
import AltaUsuario from "../components/abm/AltaUsuario";
import EditUser from "../components/abm/EditUser";

const MainRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={LOGIN} element={<PublicRoutes />}>
          <Route index element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path={HOME} element={<Home />} />
          <Route path={PRODUCTS} element={<ListaProductosCompleta />} />
          <Route path={PRODUCT + ID} element={<ProductDetail />} />
          <Route path={SHOP_CART} element={<ShoppingCart />} />
          <Route path={ABM_PRODUCTS} element={<AbmProducts />} />
          <Route path={ABM_USERS} element={<AbmUsers />} />
          <Route path={EDIT + ID} element={<FormProduct />} />
          <Route path={ADD_PRODUCT} element={<AltaProduct />} />
          <Route path={ADD_USER} element={<AltaUsuario />} />
          <Route path={USER_EDIT + ID} element={<EditUser />} />
        </Route>
        <Route path="*" element={<div>Not Found!!</div>} />
      </Routes>
      <Footer />
      <a
        href="/#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default MainRoute;
