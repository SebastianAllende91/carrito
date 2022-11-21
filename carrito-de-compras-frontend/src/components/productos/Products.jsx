import { useNavigate } from "react-router-dom";
import ListaProductos from "./ListaProductos";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title" data-aos="fade-left">
            <h2>Productos</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className="filter-active"
                  onClick={() => navigate("/productos")}
                >
                  Ver todos los productos
                </li>
              </ul>
            </div>
          </div>

          <ListaProductos />
        </div>
      </section>
    </>
  );
};

export default Products;
