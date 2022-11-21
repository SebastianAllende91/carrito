import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ArticlesServices from "../../services/articles";
import { getArticleById } from "../../store/actions/articlesAction";

const FormProduct = () => {
  const { articleSelect } = useSelector((state) => state.ArticlesReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(articleSelect);
  const [newName, setNewName] = useState(articleSelect.nombre || "");
  const [newDescription, setNewDescription] = useState(
    articleSelect.descripcion || ""
  );
  const [newStock, setNewStock] = useState(articleSelect.stock || "");
  const [newPrecio, setNewPrecio] = useState(articleSelect.precio || "");

  useEffect(() => {
    dispatch(getArticleById(id));

    setNewName(articleSelect.nombre);
    setNewDescription(articleSelect.descripcion);
    setNewStock(articleSelect.stock);
    setNewPrecio(articleSelect.precio);
  }, [
    dispatch,
    id,
    articleSelect.descripcion,
    articleSelect.nombre,
    articleSelect.stock,
    articleSelect.precio,
  ]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "nombre") {
      setNewName(value);
    }

    if (name === "descripcion") {
      setNewDescription(value);
    }

    if (name === "stock") {
      setNewStock(value);
    }

    if (name === "precio") {
      setNewPrecio(value);
    }
  }, []);

  const saveChanges = useCallback(
    async (e) => {
      e.preventDefault();
      if (newName === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No puede enviar el campo 'NOMBRE' vacio!`,
        });
        return;
      }

      if (newDescription === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No puede enviar el campo 'DESCRIPCIÓN' vacio!`,
        });
        return;
      }

      if (newDescription.length > 60) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'Descripcion' debe contener ,menos de 60 caracteres!`,
        });
        return;
      }

      if (newStock <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'STOCK' no puede ser menor o igual a 0!`,
        });
        return;
      }

      if (newPrecio <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'PRECIO' no puede ser menor o igual a 0!`,
        });
        return;
      }

      const newProduct = {
        codArticulo: id,
        nombre: newName,
        descripcion: newDescription,
        categoria: articleSelect.categoria,
        imagen: articleSelect.imagen,
        stock: newStock,
        precio: newPrecio,
      };

      try {
        const response = await ArticlesServices.editProduct(id, newProduct);

        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Ok...",
            text: `Articulo modificado correectamente!`,
          });
          navigate("/abm-productos");
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
    [
      id,
      newName,
      newDescription,
      newPrecio,
      newStock,
      articleSelect.categoria,
      articleSelect.imagen,
      navigate,
    ]
  );

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="section-title" data-aos="fade-left">
        <h2>Editar Producto</h2>
      </div>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            name="nombre"
            type="text"
            id="form1Example1"
            className="form-control"
            value={newName || ""}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example1">
            Nombre
          </label>
        </div>{" "}
        <div className="form-outline mb-4">
          <input
            name="descripcion"
            type="text"
            id="form1Example1"
            className="form-control"
            value={newDescription || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example1">
            Descripción
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            name="stock"
            type="number"
            id="form1Example1"
            className="form-control"
            value={newStock || ""}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label" htmlFor="form1Example1">
            Stock
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            name="precio"
            type="number"
            id="form1Example2"
            className="form-control"
            value={newPrecio || ""}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example2">
            Precio
          </label>
        </div>
        <button className="btn btn-success btn-block" onClick={saveChanges}>
          Editar
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
