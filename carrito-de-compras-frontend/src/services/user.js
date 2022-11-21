import api from "../helpers/axiosInstance";

const UserServices = {
  getUsers: () => api.get("/usuarios"),
  getUserById: (id) => api.get(`/usuario/${id}`),
  editUsuario: (value) => api.put(`/editarUsuario`, value),
  deleteUser: (id) => api.delete(`/eliminar/${id}`),
};

export default UserServices;
