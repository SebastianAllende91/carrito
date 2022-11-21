import api from "../helpers/axiosInstance";

const ArticlesServices = {
  getArticles: () => api.get("/articulos"),
  getSixArticles: () => api.get("/top-seis"),
  getArticleById: (id) => api.get(`/articulo/${id}`),
  addProduct: (value) => api.post("/agregarArticulo", value),
  editProduct: (id, value) => api.put(`/editarArticulo/${id}`, value),
  deleteProduct: (id) => api.delete(`/eliminarArticulo/${id}`),
  addInvoice: (value) => api.post("/carrito", value),
  finishOrder: (id) => api.delete(`/carrito/limpiar/${id}`),
};

export default ArticlesServices;
