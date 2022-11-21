import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import FacturasServices from "../../services/factura";

const Facturas = () => {
  //   const dispatch = useDispatch();
  const [facturas, setFacturas] = useState([]);
  const navigate = useNavigate();

  const getFacturas = async () => {
    const resp = await FacturasServices.getFacturas();
    setFacturas(resp.data);
  };

  let a = () =>
    facturas.map((el) => {
      let cadena = el.fecha.slice(0, 10);
      let array = cadena.split("-");
      const [a, b, c] = array;
      let nuevaFecha = `${c}-${b}-${a}`;
      return nuevaFecha;
    });

  a();

  useEffect(() => {
    getFacturas();
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="section-title" data-aos="fade-left">
          <h2>Facturas</h2>
        </div>
        <div className="d-flex justify-content-end ">
          <button
            className="btn btn-success"
            onClick={() => navigate("/crear")}
          >
            Alta de Usuarios
          </button>
        </div>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Id</th>
              <th>Fecha</th>
              <th>Usario</th>
              <th>Email</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {facturas &&
              facturas.map((factura) => (
                <tr key={factura.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{factura.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{a()}</p>
                  </td>
                  <td>{factura?.carrito?.cliente?.usuario.toUpperCase()}</td>
                  <td>{factura?.carrito?.cliente?.email.toUpperCase()}</td>
                  <td>${factura.total.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Facturas;
