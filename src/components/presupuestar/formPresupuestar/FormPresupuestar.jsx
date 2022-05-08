import React, { useRef } from "react";
import { Badge } from "react-bootstrap";

const FormPresupuestar = () => {
  const [fecha, setFecha] = React.useState(undefined);
  const [turno, setTurno] = React.useState(undefined);
  const [ubicacion, setUbicacion] = React.useState(undefined);
  const [tiempo, setTiempo] = React.useState(undefined);
  const [servicio, setServicio] = React.useState(undefined);
  const [humo, setHumo] = React.useState(false);

  const [badgeStatus, setBadgeStatus] = React.useState("success");
  const [badgeText, setBadgeText] = React.useState("disponible!");

  const turnoTarde = useRef();
  const turnoNoche = useRef();

  const tiempoMenos = useRef();
  const tiempo4 = useRef();
  const tiempo5 = useRef();
  const tiempo6 = useRef();
  const tiempoMas = useRef();

  const servicioBasico = useRef();
  const servicioSonido = useRef();
  const servicioCompleto = useRef();

  const humoTick = useRef();

  const handleTurno = (e) => {
    setTurno(e.target.value);

    if (e.target.value === "Tarde") {
      turnoTarde.current.classList =
        "form__button w-100 form__button--selected";
      turnoNoche.current.classList = "form__button w-100";
    } else {
      turnoTarde.current.classList = "form__button w-100";
      turnoNoche.current.classList =
        "form__button w-100 form__button--selected";
    }
  };

  const handleTiempo = (e) => {
    setTiempo(e.target.value);

    switch (e.target.value) {
      case "Menos": {
        tiempoMenos.current.className = "form__button form__button--selected";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button";
        break;
      }
      case "4": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button form__button--selected";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button";
        break;
      }
      case "5": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button form__button--selected";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button";
        break;
      }
      case "6": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button form__button--selected";
        tiempoMas.current.className = "form__button";
        break;
      }
      case "Mas": {
        tiempoMenos.current.className = "form__button";
        tiempo4.current.className = "form__button";
        tiempo5.current.className = "form__button";
        tiempo6.current.className = "form__button";
        tiempoMas.current.className = "form__button form__button--selected";
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleServicio = (e) => {
    setServicio(e.target.value);

    switch (e.target.value) {
      case "Basico": {
        servicioBasico.current.className =
          "form__button form__button__servicio form__button--selected";
        servicioSonido.current.className =
          "form__button form__button__servicio";
        servicioCompleto.current.className =
          "form__button form__button__servicio";
        break;
      }
      case "Sonido": {
        servicioBasico.current.className =
          "form__button form__button__servicio";
        servicioSonido.current.className =
          "form__button form__button__servicio form__button--selected";
        servicioCompleto.current.className =
          "form__button form__button__servicio";
        break;
      }
      case "Completo": {
        servicioBasico.current.className =
          "form__button form__button__servicio";
        servicioSonido.current.className =
          "form__button form__button__servicio";
        servicioCompleto.current.className =
          "form__button form__button__servicio form__button--selected";
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleHumo = () => {
    const prev = humo;
    setHumo(!humo);

    if (!prev) {
      humoTick.current.style.opacity = "100";
    } else {
      humoTick.current.style.opacity = "0";
    }
  };

  return (
    <form>
      <div className="form-group">
        <div className="form__fechaGroup mb-1">
          <p className="form__label m-0">Fecha</p>{" "}
          {fecha && (
            <Badge bg={badgeStatus} className="mt-1 mb-0 form__fecha__badge">
              Fecha {badgeText}
            </Badge>
          )}
        </div>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="form__input"
          placeholder="dd/mm/aaaa"
        />
        <div className="form__buttons mt-2">
          <input
            ref={turnoTarde}
            className="form__button w-100"
            type="button"
            value="Tarde"
            onClick={handleTurno}
          />
          <input
            ref={turnoNoche}
            className="form__button w-100"
            type="button"
            value="Noche"
            onClick={handleTurno}
          />
        </div>
      </div>
      <div className="form-group mt-2">
        <p className="form__label">Ubicación</p>
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          className="form__input"
          placeholder="Av. Aconquija 100, Yerba Buena"
        />
      </div>
      <div className="form-group mt-2">
        <p className="form__label">Tiempo (horas)</p>
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
      <div className="form-group mt-2">
        <p className="form__label">Servicio</p>
        <div className="form__buttons">
          <input
            ref={servicioBasico}
            className="form__button form__button__servicio"
            type="button"
            value="Basico"
            onClick={handleServicio}
          />
          <input
            ref={servicioSonido}
            className="form__button form__button__servicio"
            type="button"
            value="Sonido"
            onClick={handleServicio}
          />
          <input
            ref={servicioCompleto}
            className="form__button form__button__servicio"
            type="button"
            value="Completo"
            onClick={handleServicio}
          />
        </div>
        <div className="form__servicio__description">
          <p>
            <span className="fw-bold">Básico:</span> Solo música, sin equipos
            (ni mesa)
          </p>
          <p>
            <span className="fw-bold">Sonido:</span> Música y parlantes
          </p>
          <p>
            <span className="fw-bold">Completo:</span> Música, parlantes y luces
          </p>
        </div>
      </div>
      <div className="form-group mt-2 d-flex justify-content-between align-items-center">
        <p className="form__label">Humo <span className="fw-normal">(+$100)</span></p>
        <div className="position-relative">
          <input
            type="checkbox"
            className="form__checkbox"
            checked={humo}
            readOnly
            onClick={handleHumo}
          />
          <i
            className="fa-solid fa-check form__checkbox__tick"
            onClick={handleHumo}
            ref={humoTick}
          ></i>
        </div>
      </div>
    </form>
  );
};

export default FormPresupuestar;
