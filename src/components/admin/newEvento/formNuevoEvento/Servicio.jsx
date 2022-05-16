import React, { useRef } from "react";

const Servicio = (props) => {
  const servicioBasico = useRef();
  const servicioSonido = useRef();
  const servicioCompleto = useRef();

  const types = (type) => {
    switch (type) {
      case "Basico": {
        servicioBasico.current.className =
          "form__button form__button--selected";
        servicioSonido.current.className =
          "form__button";
        servicioCompleto.current.className =
          "form__button";
        break;
      }
      case "Sonido": {
        servicioBasico.current.className =
          "form__button";
        servicioSonido.current.className =
          "form__button form__button--selected";
        servicioCompleto.current.className =
          "form__button";
        break;
      }
      case "Completo": {
        servicioBasico.current.className =
          "form__button";
        servicioSonido.current.className =
          "form__button";
        servicioCompleto.current.className =
          "form__button form__button--selected";
        break;
      }
      default: {
        break;
      }
    }
  }
  
  const handleServicio = (e) => {
    props.setServicio(e.target.value);

    types(e.target.value);
  };

  React.useEffect(() => {
    types(props.servicio);
  }, [props.servicio]);

  return (
    <div className="form-group mt-3">
      <p className="form__label">Servicio</p>
      <div className="form__buttons">
        <input
          ref={servicioBasico}
          className="form__button"
          type="button"
          value="Basico"
          onClick={handleServicio}
        />
        <input
          ref={servicioSonido}
          className="form__button"
          type="button"
          value="Sonido"
          onClick={handleServicio}
        />
        <input
          ref={servicioCompleto}
          className="form__button"
          type="button"
          value="Completo"
          onClick={handleServicio}
        />
      </div>
      <div className="form__servicio__description">
        <p>
          <span className="fw-bold">Básico:</span> Solo música, sin equipos (ni
          mesa)
        </p>
        <p>
          <span className="fw-bold">Sonido:</span> Música y parlantes
        </p>
        <p>
          <span className="fw-bold">Completo:</span> Música, parlantes y luces
        </p>
      </div>
    </div>
  );
};

export default Servicio;
