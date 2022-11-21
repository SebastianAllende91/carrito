import React from "react";
import Contact from "./contacto/Contact";
import Products from "./productos/Products";
import About from "./sobre/About";

const Main = () => {
  return (
    <main id="main">
      {/* <!-- ======= About Section ======= --> */}
      <About />
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Portfolio Section ======= --> */}
      <Products />
      {/* <!-- End Portfolio Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <Contact />
      {/* <!-- End Contact Section --> */}
    </main>
  );
};

export default Main;
