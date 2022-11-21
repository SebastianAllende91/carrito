import React, { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ArticlesServices from "../../services/articles";

const initialValues = {
  nombre: "",
  descripcion: "",
  categoria: "",
  stock: 0,
  precio: 0,
};

const AltaProduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const saveChanges = useCallback(
    async (e) => {
      e.preventDefault();

      if (data.nombre === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No puede enviar el campo 'NOMBRE' vacio!`,
        });
        return;
      }

      if (data.descripcion === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No puede enviar el campo 'DESCRIPCIÓN' vacio!`,
        });
        return;
      }

      if (data.descripcion.length > 60) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'Descripcion' debe contener ,menos de 60 caracteres!`,
        });
        return;
      }

      if (data.stock <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'STOCK' no puede ser menor o igual a 0!`,
        });
        return;
      }

      if (data.precio <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El campo 'PRECIO' no puede ser menor o igual a 0!`,
        });
        return;
      }

      try {
        const response = await ArticlesServices.addProduct(data);

        if (response.status === 202) {
          Swal.fire({
            icon: "success",
            title: "Ok...",
            text: `Articulo creado correectamente!`,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ocurrio un error vuelva a intentar más tarde!`,
        });
        return;
      }
      navigate("/abm-productos");
      setData(initialValues);
    },
    [data, navigate]
  );

  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div className="section-title" data-aos="fade-left">
        <h2>Alta de Producto</h2>
      </div>
      <form>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            name="nombre"
            type="text"
            id="form1Example1"
            className="form-control"
            value={data.nombre}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example1">
            Nombre
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            name="descripcion"
            type="text"
            id="form1Example1"
            className="form-control"
            value={data.descripcion || ""}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example1">
            Descripción
          </label>
        </div>
        {/* categoria */}

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form1Example2">
            Categoria
          </label>
          <select
            className="form-select"
            aria-label="Elija una categoria"
            name="categoria"
            onChange={handleChange}
          >
            <option>Elija una categoria</option>
            <option value="Phones">Phones</option>
            <option value="Notebooks">Notebooks</option>
            <option value="Video Game Console">Video Game Console</option>
            <option value="Tablets">Tablets</option>
            <option value="TV">TV</option>
            <option value="Smartwatches">Smartwatches</option>
            <option value="USB">USB</option>
            <option value="Monitors">Monitors</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        {/* stock */}
        <div className="form-outline mb-4">
          <input
            name="stock"
            type="number"
            id="form1Example1"
            className="form-control"
            value={data.stock || ""}
            onChange={handleChange}
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
            value={data.precio || ""}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form1Example2">
            Precio
          </label>
        </div>
        <button className="btn btn-success btn-block" onClick={saveChanges}>
          Dar de Alta
        </button>
      </form>
    </div>
  );
};

export default AltaProduct;
