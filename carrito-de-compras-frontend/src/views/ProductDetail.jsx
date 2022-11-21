import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCarrito, getArticleById } from "../store/actions/articlesAction";
import imgDefault from "../assets/images/a.webp";
import MediosDePago from "../components/MediosDePago";

const ProductDetail = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { articleSelect } = useSelector((state) => state.ArticlesReducer);
  const { id } = useParams();

  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    dispacth(getArticleById(id));
  }, [dispacth, id]);

  const addCarrito = (cantidad) => {
    const productToCarrito = {
      articulo: articleSelect,
      monto: articleSelect.precio * cantidad,
    };
    dispacth(addToCarrito(productToCarrito));
    navigate("/productos");
  };

  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Detalle del Producto</h2>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img
                      src={
                        articleSelect?.imagen
                          ? articleSelect.imagen
                          : imgDefault
                      }
                      alt={articleSelect.nombre}
                    />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Detalle del Producto</h3>
                <ul>
                  <li>
                    <strong>Categoria</strong>: {articleSelect.categoria}
                  </li>
                  <li>
                    <strong>Descripcion</strong>: {articleSelect.descripcion}
                  </li>

                  <li>
                    <strong>Precio</strong>:${articleSelect.precio?.toFixed(2)}
                  </li>

                  <li>
                    <strong>Cantidad: </strong>{" "}
                    <p>
                      {cantidad > 1 && (
                        <button
                          className="btn btn-info"
                          onClick={() => setCantidad(cantidad - 1)}
                        >
                          -
                        </button>
                      )}
                      <input
                        type="text"
                        name="cantidad"
                        id="cantidad"
                        value={cantidad}
                        style={{
                          width: "60px",
                          minHeight: "40px",
                          textAlign: "center",
                          border: "1px thin #0dcaf0",
                          borderRadius: "5px",
                        }}
                        onChange={(e) => setCantidad(e.target.value)}
                      />
                      <button
                        className="btn btn-info"
                        onClick={() => setCantidad(cantidad + 1)}
                      >
                        +
                      </button>
                    </p>
                  </li>
                </ul>
                <ul>
                  <button
                    className="btn btn-success"
                    onClick={() => addCarrito(cantidad)}
                  >
                    Agregar al Carrito
                  </button>
                </ul>
              </div>
              <MediosDePago />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Details Section --> */}
    </main>
  );
};

export default ProductDetail;
