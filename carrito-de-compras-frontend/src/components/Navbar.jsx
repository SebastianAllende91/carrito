import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  ABM_PRODUCTS,
  ABM_USERS,
  HOME,
  LOGIN,
  SHOP_CART,
} from "../routes/paths";
import { logout } from "../store/actions/loginAction";

const Navbar = () => {
  const { isLogin, user } = useSelector((state) => state.LoginReducer);
  const { rol } = user;

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout(user));
  };
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <span>Tp Final Java</span>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <Link className="nav-link scrollto active" to={HOME}>
                    Home
                  </Link>
                </li>
                {isLogin && (
                  <>
                    {rol === "USER" && (
                      <>
                        <li>
                          <a className="nav-link scrollto" href="#about">
                            Sobre
                          </a>
                        </li>

                        <li>
                          <a className="nav-link scrollto " href="#portfolio">
                            Productos
                          </a>
                        </li>

                        <li>
                          <a className="nav-link scrollto" href="#contact">
                            Contacto
                          </a>
                        </li>

                        <li>
                          <NavLink className="nav-link scrollto" to={SHOP_CART}>
                            Carrito de Compras
                          </NavLink>
                        </li>
                      </>
                    )}
                    {rol === "ADMIN" && (
                      <>
                        <li>
                          <NavLink className="nav-link scrollto" to={ABM_USERS}>
                            Abm Usuarios
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link scrollto"
                            to={ABM_PRODUCTS}
                          >
                            Abm Productos
                          </NavLink>
                        </li>
                      </>
                    )}
                  </>
                )}
                <li>
                  {!isLogin ? (
                    <Link className="getstarted scrollto" to={LOGIN}>
                      Iniciar Sesión
                    </Link>
                  ) : (
                    <Link
                      className="getstarted scrollto"
                      onClick={logoutUser}
                      to={LOGIN}
                    >
                      Cerrar Sesión
                    </Link>
                  )}
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
