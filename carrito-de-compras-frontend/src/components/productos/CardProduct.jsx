import React from "react";
import { Link } from "react-router-dom";
import imgDefault from "../../assets/images/a.webp";

const CardProduct = ({ article }) => {
  const { codArticulo, nombre, descripcion, imagen } = article;
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img
          src={imagen ? imagen : imgDefault}
          className="img-fluid img-product"
          alt={nombre}
        />
        <div className="portfolio-info">
          <h4>{nombre}</h4>
          <p>{descripcion}</p>
          <div className="portfolio-links">
            <Link
              to={`/producto/${codArticulo}`}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title="App 1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </Link>
            <a href="portfolio-details.html" title="More Details">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
