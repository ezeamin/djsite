import React, { useRef } from "react";
import { Badge } from "react-bootstrap";

const Fecha = (props) => {
  // const [badgeStatus, setBadgeStatus] = React.useState("success");
  // const [badgeText, setBadgeText] = React.useState("disponible!");
  const [badgeStatus, setBadgeStatus] = React.useState("");
  const [badgeText, setBadgeText] = React.useState("");

  const fechaInput = useRef();
  const turnoTarde = useRef();
  const turnoNoche = useRef();

  const handleTurno = (e) => {
    props.setTurno(e.target.value);

    if (e.target.value === "Tarde") {
      turnoTarde.current.classList =
        "form__button form__button--selected";
      turnoNoche.current.classList = "form__button";
    } else {
      turnoTarde.current.classList = "form__button";
      turnoNoche.current.classList =
        "form__button form__button--selected";
    }
  };

  const handleFechaBlur = (e) => {
    const fecha = e.target.value;

    if (!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/i.test(fecha)) {
      fechaInput.current.classList = "form__input form__input--error";
      setBadgeStatus("danger");
      setBadgeText("no valida");
    } else {
      //check if date is in the past
      const date = new Date(fecha);
      const today = new Date();

      if (date < today) {
        fechaInput.current.classList = "form__input form__input--error";
        setBadgeStatus("danger");
        setBadgeText("no valida");
      } else {
        fechaInput.current.classList = "form__input";
        setBadgeStatus("success");
        // setBadgeText("disponible");
      }
    }
  };

  return (
    <div className="form-group">
      <div className="form__fechaGroup mb-1">
        <p className="form__label m-0">Fecha</p>{" "}
        {(/*(props.fecha && props.turno) ||*/
          (badgeStatus === "danger")) && (
          <Badge bg={badgeStatus} className="mt-1 mb-0 form__fecha__badge">
            Fecha {badgeText}
          </Badge>
        )}
      </div>
      <input
        type="date"
        value={props.fecha}
        onChange={(e) => props.setFecha(e.target.value)}
        onBlur={handleFechaBlur}
        ref={fechaInput}
        className="form__input form__input__fecha"
        placeholder="dd/mm/aaaa"
      />
      <div className="form__buttons mt-2">
        <input
          ref={turnoTarde}
          className="form__button"
          type="button"
          value="Tarde"
          onClick={handleTurno}
        />
        <input
          ref={turnoNoche}
          className="form__button"
          type="button"
          value="Noche"
          onClick={handleTurno}
        />
      </div>
    </div>
  );
};

export default Fecha;
