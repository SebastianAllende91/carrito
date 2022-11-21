import api from "../helpers/axiosInstance";

const RegisterServices = {
  userRegister: (data) => api.post("/registrar", data),
};

export default RegisterServices;
