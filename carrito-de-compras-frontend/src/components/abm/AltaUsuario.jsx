import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "../../store/actions/registerAction";

const initialValues = {
  usuario: "",
  email: "",
  rol: "",
  pass: "",
  pass2: "",
};

const AltaUsuario = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = useCallback(
    (e, data) => {
      e.preventDefault();
      console.log(data);
      const { usuario, email, rol, pass, pass2 } = data;

      if (!usuario || !email || !pass || !pass2) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debe completar todos los campos!",
        });
        return;
      }

      if (usuario.length < 3) {
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
        usuario,
        email,
        rol,
        password: pass,
      };
      dispatch(register(newUser));
      setData(initialValues);
      navigate("/home");
    },
    [dispatch, navigate]
  );

  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div className="section-title" data-aos="fade-left">
        <h2>Alta de Producto</h2>
      </div>
      <form method="POST" onSubmit={(e) => handleSubmit(e, data)}>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            name="usuario"
            type="text"
            id="form1Example1"
            className="form-control"
            value={data.usuario || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example1">
            Usuario
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            name="email"
            type="email"
            id="form1Example2"
            className="form-control"
            value={data.email || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example2">
            Email
          </label>
        </div>
        {/* rol */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example3">
            Rol
          </label>
          <select
            className="form-select"
            aria-label="Elija una categoria"
            name="rol"
            onChange={(e) => handleChange(e)}
          >
            <option>Elija un rol</option>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        {/* stock */}
        <div className="form-outline mb-4">
          <input
            name="pass"
            type="password"
            id="form1Example4"
            className="form-control"
            value={data.pass || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example4">
            Password
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            name="pass2"
            type="password"
            id="form1Example5"
            className="form-control"
            value={data.pass2 || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example5">
            Confirmar Password
          </label>
        </div>
        <button className="btn btn-success btn-block">Dar de Alta</button>
      </form>
    </div>
  );
};

export default AltaUsuario;
