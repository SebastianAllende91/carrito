import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UserServices from "../../services/user";
import { getUserById } from "../../store/actions/userAction";

const EditUser = () => {
  const { userById } = useSelector((state) => state.UserReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [newName, setNewName] = useState(userById.usuario || "");
  const [newEmail, setNewEmail] = useState(userById.email || "");
  const [newPass, setNewPass] = useState(userById.password || "");

  useEffect(() => {
    dispatch(getUserById(id));

    setNewName(userById.usuario);
    setNewEmail(userById.email);
    setNewPass(userById.password);
  }, [dispatch, id, userById.usuario, userById.email, userById.password]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "usuario") {
      setNewName(value);
    }

    if (name === "email") {
      setNewEmail(value);
    }

    if (name === "password") {
      setNewPass(value);
    }
  }, []);

  const saveChanges = useCallback(
    async (e) => {
      e.preventDefault();
      if (newName === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No puede enviar el campo 'USUARIO' vacio!`,
        });
        return;
      }

      if (newEmail === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No puede enviar el campo 'Email' vacio!`,
        });
        return;
      }

      if (newPass.length <= 5) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'Password' no puede ser menor o igual a 0!`,
        });
        return;
      }

      const newUser = {
        id,
        usuario: newName,
        email: newEmail,
        rol: "USER",
        password: newPass,
      };

      try {
        const response = await UserServices.editUsuario(newUser);
        if (response.status === 202) {
          Swal.fire({
            icon: "success",
            title: "Ok...",
            text: `Usuario modificado correectamente!`,
          });
          navigate("/abm-usuarios");
          return;
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ocurrio un error vuelva a intentar más tarde!`,
        });
        return;
      }
    },
    [id, newName, newEmail, newPass, navigate]
  );

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="section-title" data-aos="fade-left">
        <h2>Editar Usuario</h2>
      </div>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            name="usuario"
            type="text"
            id="form1Example1"
            className="form-control"
            value={newName || ""}
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
            id="form1Example3"
            className="form-control"
            value={newEmail || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example3">
            Email
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            name="password"
            type="password"
            id="form1Example2"
            className="form-control"
            value={newPass || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example2">
            Password
          </label>
        </div>

        <button className="btn btn-success btn-block" onClick={saveChanges}>
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditUser;
