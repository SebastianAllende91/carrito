import Swal from "sweetalert2";
import ArticlesServices from "../../services/articles";
import { TYPES } from "./types";

export const getArticles = () => async (dispatch) => {
  try {
    const { data } = await ArticlesServices.getArticles();

    dispatch(articlesSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

const articlesSuccess = (payload) => ({
  type: TYPES.GET_ARTICLES,
  payload,
});

export const getSixProducts = () => async (dispatch) => {
  try {
    const { data } = await ArticlesServices.getSixArticles();

    dispatch(topSix(data));
  } catch (error) {
    console.log(error);
  }
};

const topSix = (payload) => ({
  type: TYPES.SIX_PRODUCTS,
  payload,
});

export const getArticleById = (values) => async (dispatch) => {
  try {
    const { data } = await ArticlesServices.getArticleById(values);
    dispatch(articleGetById(data));
  } catch (error) {
    console.log(error);
  }
};

const articleGetById = (payload) => ({
  type: TYPES.GET_ARTICLE_SELECT,
  payload,
});

export const addToCarrito = (el) => async (dispatch) => {
  try {
    Swal.fire({
      icon: "success",
      title: "Ok...",
      text: `Producto agregado correctamente!`,
    });
    dispatch(addCarritoSuccess(el));
  } catch (error) {
    console.log(error);
  }
};

const addCarritoSuccess = (payload) => ({
  type: TYPES.ADD_TO_CARRITO,
  payload,
});

export const itemToDelete = (id) => async (dispatch) => {
  try {
    const resp = await ArticlesServices.deleteItemToCard(id);

    Swal.fire({
      icon: "success",
      title: "Ok...",
      text: `Producto ${id} eliminado correctamente!`,
    });
    dispatch({
      type: TYPES.REMOVE_ONE_FROM_CARRITO,
      payload: id,
    });

    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

export const addInvoice = (values) => async (dispatch) => {
  try {
    console.log(values);
    const data = await ArticlesServices.addInvoice(values);

    console.log(data);
    if (data.status) {
      Swal.fire({
        icon: "success",
        title: "Ok...",
        text: `Compra exitosa!`,
      });
    }
    dispatch(processingInvoice(data));
  } catch (error) {
    console.log(error);
  }
};

const processingInvoice = (payload) => ({
  type: TYPES.ADD_INVOICE,
  payload,
});
