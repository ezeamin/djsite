import React from "react";

const Event = (props) => {
  const handleClick = (mode) => {
    if (mode === "Asistir") {
      //...
    } else {
      //modificar
      // ...
    }
  };

  return (
    <div className="py-2 list__container container my-3">
      <div className="event__title__container">
        <h3 className="main__title event__title mb-0 mt-2">{props.name}</h3>
        <p className="my-0 event__title__fecha">{props.fecha}</p>
      </div>
      <hr className="mt-1 mb-3 event__mainHr" />
      <div>
        <div className="event__detail__group">
          <p className="mb-0">Turno:</p>
          <p className="mb-0 event__content">{props.turno}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Horario:</p>
          <p className="mb-0 event__content">
            {props.start} - {props.end}
          </p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Ubicación:</p>
          <p className="mb-0 event__content">{props.ubicacion}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Servicio:</p>
          <p className="mb-0 event__content">{props.servicio}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Humo:</p>
          <p className="mb-0 event__content">{props.humo ? "Si" : "No"}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Extra:</p>
          <p className="mb-0 event__content">{props.extra ? props.extra : "N/A"}</p>
        </div>
        <hr className="my-1" />
        <div className="event__detail__group">
          <p className="mb-0">Cliente:</p>
          <p className="mb-0 event__content">{props.client.name}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Telefono:</p>
          <p className="mb-0 event__content">{props.client.phone}</p>
        </div>
        <hr className="my-1" />
        <div className="event__detail__group">
          <p className="mb-0">Valor:</p>
          <p className="mb-0 fw-bold event__content">${props.value}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Pagado:</p>
          <p className="mb-0 fw-bold event__content">${props.paid}</p>
        </div>
      </div>
      <div className="event__buttons mt-3">
        <button
          className="form__button form__button__submit form__button__events"
          onClick={() => handleClick("Modificar")}
        >
          Modificar
        </button>
        <button
          className="form__button form__button--blue form__button__events"
          onClick={() => handleClick("Asistir")}
        >
          Asistir
        </button>
      </div>
    </div>
  );
};

export default Event;
