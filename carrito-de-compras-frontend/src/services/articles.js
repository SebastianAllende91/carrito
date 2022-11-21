import api from "../helpers/axiosInstance";

const ArticlesServices = {
  getArticles: () => api.get("/articulos"),
  getSixArticles: () => api.get("/top-seis"),
  getArticleById: (id) => api.get(`/articulo/${id}`),
  addProduct: (value) => api.post("/agregarArticulo", value),
  editProduct: (id, value) => api.put(`/editarArticulo/${id}`, value),
  deleteProduct: (id) => api.delete(`/eliminarArticulo/${id}`),
  addCarrito: (value) => api.post("/carrito", value),
  deleteItemToCard: (id) => api.delete(`/carrito/limpiar/${id}`),
  // getAllCart: () => api.get("/carrito"),
};

export default ArticlesServices;
