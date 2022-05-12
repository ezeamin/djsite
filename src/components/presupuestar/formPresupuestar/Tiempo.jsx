import React, { useRef } from "react";
import { Badge } from "react-bootstrap";

const Tiempo = (props) => {
  const [tiempoNoExacto, setTiempoNoExacto] = React.useState(false);

  const tiempoMenos = useRef();
  const tiempo4 = useRef();
  const tiempo5 = useRef();
  const tiempo6 = useRef();
  const tiempoMas = useRef();

  const handleTiempo = (e) => {
    props.setTiempo(e.target.value);

    switch (e.target.value) {
      case "Menos": {
        tiempoMenos.current.className = "form__button form__button--selected";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button";
        setTiempoNoExacto(true);
        props.setEstMay(false);
        props.setEstMen(true);
        break;
      }
      case "4": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button form__button--selected";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button";
        setTiempoNoExacto(false);
        props.setEstMay(false);
        props.setEstMen(false);
        break;
      }
      case "5": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button form__button--selected";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button";
        setTiempoNoExacto(false);
        props.setEstMay(false);
        props.setEstMen(false);
        break;
      }
      case "6": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button form__button--selected";
        tiempoMas.current.className = "form__button";
        setTiempoNoExacto(false);
        props.setEstMay(false);
        props.setEstMen(false);
        break;
      }
      case "Mas": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button form__button--selected";
        setTiempoNoExacto(true);
        props.setEstMay(true);
        props.setEstMen(false);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className="form-group mt-3">
      <div className="form__fechaGroup mb-1">
        <p className="form__label m-0">Tiempo (horas)</p>
        {tiempoNoExacto && (
          <Badge bg="warning" className="mt-1 mb-0 form__fecha__badge">
            <i class="fa-solid fa-triangle-exclamation"></i>
            &nbsp;Valor no exacto
          </Badge>
        )}
      </div>
      <div className="form__buttons">
        <input
          ref={tiempoMenos}
          className="form__button"
          type="button"
          value="Menos"
          onClick={handleTiempo}
        />
        <input
          ref={tiempo4}
          className="form__button"
          type="button"
          value="4"
          onClick={handleTiempo}
        />
        <input
          ref={tiempo5}
          className="form__button"
          type="button"
          value="5"
          onClick={handleTiempo}
        />
        <input
          ref={tiempo6}
          className="form__button"
          type="button"
          value="6"
          onClick={handleTiempo}
        />
        <input
          ref={tiempoMas}
          className="form__button"
          type="button"
          value="Mas"
          onClick={handleTiempo}
        />
      </div>
    </div>
  );
};

export default Tiempo;
