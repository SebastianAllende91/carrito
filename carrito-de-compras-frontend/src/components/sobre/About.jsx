import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row content">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2>Venta mayorista y minorista.</h2>
              <h3>
                Elegí toda la variedad de productos para tu negocio al mejor
                precio del mercado.
              </h3>
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <p>
                Al contactarte con nosotros no solo vas a poder encontrar los
                mejores precios mayorista en electrodomésticos, celulares y
                tecnología. Además, vas a tener a un profesional capacitado en
                ayudarte a desarrollar tu negocio de la mejor manera para
                alcanzar tus objetivos, asesorándote en la comercialización de
                las mejores marcas. Tenemos los productos y las mejores
                herramientas a tu disposición para la venta, contáctenos.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>{" "}
                  <strong>Somos proveedores y distribuidores de:</strong>
                  Celulares, Tablets, Aires Acondicionados, Smart tvs,
                  Calefacción, Hornos electricos, Microondas, Smartwatch,
                  Heladeras y freezer, Notebooks y más!
                </li>
                <li>
                  <i className="ri-check-double-line"></i>
                  <strong>
                    Los mejores precios y la mejor atención Tenemos para vos:
                  </strong>
                  Envíos a todo el país. Precios exclusivos, retiro en
                  cualquiera de nuestras sucursales, importantes descuentos por
                  volumen de compra. Además brindamos asesorías de negocio SIN
                  CARGO a nuestros clientes.
                </li>
              </ul>
              <h4 className="fst-italic">¡Tu consulta no molesta!</h4>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Why Us Section ======= --> */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div className="content">
                <h3>
                  ¿Por qué elegir Bethany para el sitio web de su empresa?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <a href="/#" className="more-btn">
                    Aprende más <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Labore consequatur</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End .content--> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Why Us Section --> */}

      {/* <!-- ======= Cta Section ======= --> */}
      <section id="cta" className="cta">
        <div className="container">
          <div className="text-center" data-aos="zoom-in">
            <h3>Call To Action</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a className="cta-btn" href="/#">
              Call To Action
            </a>
          </div>
        </div>
      </section>
      {/* <!-- End Cta Section --> */}
    </>
  );
};

export default About;
