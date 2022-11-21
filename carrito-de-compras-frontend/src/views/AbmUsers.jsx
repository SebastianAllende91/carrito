import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getUsers } from "../store/actions/userAction";
import UserServices from "../services/user";

const AbmUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.UserReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleEditProduct = useCallback(
    (id) => {
      navigate(`/editarUsuario/${id}`);
    },
    [navigate]
  );

  const handleDelete = useCallback(
    async (id) => {
      const isOk = window.confirm("¿Está seguro? ¡No podrás revertir esto!!");

      if (isOk) {
        try {
          const response = await UserServices.deleteUser(id);

          if (response.status === 200) {
            Swal.fire(
              "Operación Exitosa!",
              "Usuario borrado correctamente.",
              "success"
            );
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Ocurrio un error vuelva a intentar más tarde!`,
          });
          return;
        }
        navigate("/home");
      }
    },
    [navigate]
  );

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="section-title" data-aos="fade-left">
          <h2>ABM Usuarios</h2>
        </div>
        <div className="d-flex justify-content-end ">
          <button
            className="btn btn-success"
            onClick={() => navigate("/crear")}
          >
            Alta de Usuarios
          </button>
        </div>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Id</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.usuario}</p>
                    <p className="text-muted mb-0">{user.rol}</p>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-info btn-sm mx-1"
                      onClick={() => handleEditProduct(user.id)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => handleDelete(user.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AbmUsers;
