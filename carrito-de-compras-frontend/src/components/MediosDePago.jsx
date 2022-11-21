import React from "react";

const MediosDePago = () => {
  return (
    <div className="portfolio-description">
      <div className="ui-box-component ui-box-component-pdp__visible--desktop">
        <h2 className="ui-box-component__title">Medios de pago</h2>
        <div className="ui-vip-payment_methods">
          <p className="ui-pdp-family--REGULAR ui-vip-payment_methods__title">
            Hasta 12 cuotas sin tarjeta
          </p>
          <div className="ui-pdp-payment-icon">
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Mercado Crédito"
                />
              </div>
            </div>
          </div>
          <p>Tarjetas de crédito</p>
          <div className="tarjetas">
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Visa"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="American Express"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Naranja"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Mastercard"
                />
              </div>
            </div>
          </div>
          <p className="ui-pdp-family--REGULAR ui-vip-payment_methods__title">
            Tarjetas de débito
          </p>
          <div className="tarjetas">
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Visa Débito"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Maestro"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Mastercard Débito"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Cabal Débito"
                />
              </div>
            </div>
          </div>
          <p className="ui-pdp-family--REGULAR ui-vip-payment_methods__title">
            Efectivo
          </p>
          <div className="tarjetas">
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="PagoFacil"
                />
              </div>
            </div>
            <div className="ui-pdp-payment-icon__container">
              <div className="ui-pdp-payment-icon__size">
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"
                  className="ui-pdp-image ui-pdp-payment-icon"
                  alt="Rapipago"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ui-pdp-action-modal ui-box-component__action">
          <div className="andes-tooltip__trigger" aria-expanded="false">
            <a
              className="ui-pdp-action-modal__link"
              href="https://articulo.mercadolibre.com.ar/noindex/services/MLA1165960102/payments?new_version=true&amp;modal=false&amp;newIndex=true"
            >
              Conocé otros medios de pago
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediosDePago;
