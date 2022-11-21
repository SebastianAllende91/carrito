import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/actions/articlesAction";
import CardItem from "./CardItem";

const ListaProductosCompleta = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.ArticlesReducer);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="container">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Lista de Productos</h2>
          </div>
        </section>
        <div className="row">
          {/* filter mobile */}
          <div className=" col-6 d-md-none">
            <div className="row justify-content-between mt-2">
              <div className="col-12 product-qty">
                <strong>{articles.length} Product(s)</strong>
              </div>
            </div>
          </div>
          <div className="col-6 d-md-none">
            <button
              id="show_filters"
              type="button"
              className="btn btn-outline-secondary btn-filter btn-block my-0 mb-3 d-md-none"
            >
              <i className="fas fa-sliders-h" /> Filters{" "}
              <span className="badge badge-light">0</span>
            </button>
          </div>
          {/* end filter mobile */}
          <div className="col-lg-3 col-md-4">
            <form id="filters" method="get" action="/techno">
              <div id="side-filters">
                <h4>Filtro</h4>
                <div className="col-12">
                  <h5>Ordenar por:</h5>
                </div>
                <div className="col-sm-12 col-md-8">
                  <div className="field-group select">
                    <select
                      className="form-control"
                      onChange={(e) => console.log(e.target.value)}
                    >
                      <option value="posicion">Position</option>
                      <option value="alfAsc">Name: A to Z</option>
                      <option value="alfDsc">Name: Z to A</option>
                      <option value="precioAsc">Price: Low to High</option>
                      <option value="precioDesc">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="row justify-content-between mb-4">
              <div className="col-md-5 product-qty d-none d-md-block">
                <strong>{articles.length} Product(s)</strong>
              </div>
            </div>
            <div className="row mb-md-5 mb-4 mx-n2">
              {articles &&
                articles.map((article) => (
                  <CardItem key={article.codArticulo} article={article} />
                ))}
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListaProductosCompleta;
