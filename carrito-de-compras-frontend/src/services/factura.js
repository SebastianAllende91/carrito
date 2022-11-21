import api from "../helpers/axiosInstance";

const FacturasServices = {
  getFacturas: () => api.get("/facturas"),
};

export default FacturasServices;
