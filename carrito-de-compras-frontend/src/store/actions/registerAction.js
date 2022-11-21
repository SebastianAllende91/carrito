import Swal from "sweetalert2";
import RegisterServices from "../../services/register";

export const register = (data) => async (dispatch) => {
  try {
    const resp = await RegisterServices.userRegister(data);

    console.log(resp);

    Swal.fire({
      icon: "success",
      title: "OK...",
      text: "Registro exitoso!",
    });
  } catch (error) {
    console.log("Error en login Action: ", error);
    Swal.fire({
      icon: "error",
      title: "Ocurrio un error...",
      text: "No se puede registrar el usuario!!",
    });
  }
};
