import api from "../helpers/axiosInstance";

const LoginServices = {
  getAuth: (data) => api.post("/login", data),
  logout: (id) => api.post("/logout", id),
};

export default LoginServices;
