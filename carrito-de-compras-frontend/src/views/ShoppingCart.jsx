import React, { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice, itemToDelete } from "../store/actions/articlesAction";
import imgDefault from "../assets/images/a.webp";
import MediosDePago from "../components/MediosDePago";

const ShoppingCart = () => {
  const dispacth = useDispatch();
  const { carrito } = useSelector((state) => state.ArticlesReducer);
  const { user } = useSelector((state) => state.LoginReducer);

  let total = carrito
    ?.map((el) => el.monto)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  useEffect(() => {}, [carrito]);

  const handleDelete = (id) => dispacth(itemToDelete(id));

  const finish = useCallback(() => {
    let a = carrito.map((el) => ({ ...el, precio: el.monto }));
    dispacth(addInvoice({ cliente: user, articulos: a }));
  }, [carrito, dispacth, user]);

  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Carrito de Compras</h2>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              {carrito.length > 0 ? (
                <table className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Unidades</th>
                      <th>Monto</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito &&
                      carrito?.map((article) => (
                        <tr key={article.codArticulo}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="ms-3">
                                <p className="fw-bold mb-1">
                                  {article.codArticulo}
                                </p>
                              </div>
                              <img
                                src={
                                  article?.imagen ? article.imagen : imgDefault
                                }
                                alt={article.nombre}
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{article.nombre}</p>
                            <p className="text-muted mb-0">
                              {article.categoria}
                            </p>
                          </td>
                          <td>{article?.monto / article?.precio} Unidades.</td>
                          <td>${article?.monto?.toFixed(2)}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm mx-1"
                              onClick={() => handleDelete(article.codArticulo)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path
                                  fillRule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <div className="alert alert-primary" role="alert">
                  No hay Productos en el carrito!!
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Detalle del Pedido</h3>
                <ul>
                  <li>
                    <strong>Total</strong>: ${total}
                  </li>
                  {/* {carrito.length > 0 && (
                    <li>
                      <button className="btn btn-danger btn-sm mx-1">
                        Vaciar Carrito
                      </button>
                    </li>
                  )} */}
                </ul>
                <ul>
                  <button className="btn btn-success" onClick={() => finish()}>
                    Finalizar Compra
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

export default ShoppingCart;
