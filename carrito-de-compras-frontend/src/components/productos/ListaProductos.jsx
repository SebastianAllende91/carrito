import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSixProducts } from "../../store/actions/articlesAction";
import CardProduct from "./CardProduct";

const ListaProductos = () => {
  const dispatch = useDispatch();
  const { articlesTopSix } = useSelector((state) => state.ArticlesReducer);

  useEffect(() => {
    dispatch(getSixProducts());
  }, [dispatch]);

  return (
    <div
      className="row portfolio-container"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {articlesTopSix.map((article) => (
        <CardProduct key={article.codArticulo} article={article} />
      ))}
    </div>
  );
};

export default ListaProductos;
