import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../assets/images/carrito-de-compras.webp";
import { REGISTER } from "../routes/paths";
import { login } from "../store/actions/loginAction";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = useCallback(
    (e, values) => {
      e.preventDefault();
      const { email, password } = values;

      if (!email || !password)
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debe completar los campos!",
        });

      if (password.length <= 5)
        //  alert("");
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La clave debe tener aunque sea 6 caracteres!",
        });

      try {
        dispatch(login(values));
      } catch (error) {
        console.log(error);
      } finally {
        setData(initialValues);
      }
    },
    [dispatch]
  );

  return (
    <div className="container-fluid">
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form onSubmit={(e) => handleSubmit(e, data)}>
                  <h3 className="fw-normal mb-3 pb-3">Iniciar Sesion</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      onChange={(e) => handleChange(e)}
                      id="email"
                      value={data.email}
                      name={"email"}
                    />
                    <label className="form-label" htmlFor="email">
                      Dirección de correo electrónico
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      onChange={(e) => handleChange(e)}
                      id="password"
                      value={data.password}
                      name={"password"}
                    />
                    <label className="form-label" htmlFor="password">
                      password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Iniciar sesion
                    </button>
                  </div>

                  <p>
                    ¿No tienes una cuenta?
                    <Link className="link-info" to={REGISTER}>
                      Registrarse aquí
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-8 px-0 d-none d-sm-block">
              <img src={img} alt={"Login"} className={"w-100 vh-100"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Login);
