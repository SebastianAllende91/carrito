import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../store/actions/articlesAction";
import imgDefault from "../assets/images/a.webp";
import ArticlesServices from "../services/articles";
import Swal from "sweetalert2";

const AbmProducts = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.ArticlesReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch, articles.length]);

  const handleEditProduct = useCallback(
    (id) => {
      navigate(`/editar/${id}`);
    },
    [navigate]
  );

  const handleDelete = useCallback(
    async (id) => {
      const isOk = window.confirm("¿Está seguro? ¡No podrás revertir esto!!");

      if (isOk) {
        try {
          const response = await ArticlesServices.deleteProduct(id);

          if (response.status === 200) {
            Swal.fire(
              "Operación Exitosa!",
              "Articulo borrado correctamente.",
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
          <h2>ABM Productos</h2>
        </div>
        <div className="d-flex justify-content-end ">
          <button className="btn btn-success" onClick={() => navigate("/alta")}>
            Alta de Producto
          </button>
        </div>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              articles.map((article) => (
                <tr key={article.codArticulo}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{article.codArticulo}</p>
                      </div>
                      <img
                        src={article?.imagen ? article.imagen : imgDefault}
                        alt={article.nombre}
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{article.nombre}</p>
                    <p className="text-muted mb-0">{article.categoria}</p>
                  </td>
                  <td>{article.stock} Unidades.</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info btn-sm mx-1"
                      onClick={() => handleEditProduct(article.codArticulo)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mx-1"
                      onClick={() => handleDelete(article.codArticulo)}
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

export default AbmProducts;
