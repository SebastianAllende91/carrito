import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT } from "../../routes/paths";

const CardItem = ({ article }) => {
  return (
    <div className="col-lg-3 col-6 product-block mb-4 px-2">
      <Link to={PRODUCT + `/${article.codArticulo}`}>
        <img
          className="img-fluid img-portfolio img-hover mb-3"
          src={article.imagen}
          alt={article.nombre}
        />
      </Link>
      <div className="caption">
        <h3>
          <Link to={PRODUCT + `/${article.codArticulo}`}>{article.nombre}</Link>
        </h3>
        <div className="price-mob mb-2 fw-bold">
          ${article.precio.toFixed(2)}
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default CardItem;
