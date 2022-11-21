import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "../store/actions/registerAction";

const initialValues = {
  nombre: "",
  email: "",
  pass: "",
  pass2: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = useCallback(
    (e, values) => {
      e.preventDefault();
      const { nombre, email, pass, pass2 } = values;

      if (!nombre || !email || !pass || !pass2) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debe completar todos los campos!",
        });
        return;
      }

      if (nombre.length < 3) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El nombre debe contener mas de 3 letras!",
        });
        return;
      }

      if (pass.length <= 5) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La clave debe contener mas de 5 caracteres!",
        });
        return;
      }

      if (pass !== pass2) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las claves deben coincidir!",
        });
        return;
      }

      const newUser = {
        usuario: nombre,
        email,
        password: pass,
      };
      dispatch(register(newUser));
      setUser(initialValues);
      navigate("/");
    },
    [dispatch, navigate]
  );

  return (
    <div className="container-fluid ">
      <section className="vh-80 bg-image imagenFondo">
        <div className="mask pt-5 d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      CREA UNA CUENTA
                    </h2>

                    <form method="POST" onSubmit={(e) => handleSubmit(e, user)}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={(e) => handleChange(e)}
                          name="nombre"
                          value={user.nombre}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Su nombre
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={(e) => handleChange(e)}
                          name="email"
                          value={user.email}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Su correo electronico
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          onChange={(e) => handleChange(e)}
                          name="pass"
                          value={user.pass}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          onChange={(e) => handleChange(e)}
                          name="pass2"
                          value={user.pass2}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repita su password
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                          Registrarse
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
