import React from "react";
import Swal from "sweetalert2";
import { fetchGet, fetchPut } from "../../../../../api/fetchingFunctions";

const Event = (props) => {
  const handleClick = (mode) => {
    switch (mode) {
      case "Asistir":
        Swal.fire({
          title: "¿Estás seguro?",
          text: "¡No podrás revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, asistir!",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.value) {
            const data = {
              idFecha: props.fechaId,
              idEvento: props._id,
              fechaEvento: props.fecha,
            }
            const res = await fetchPut(
              `/events/old`, data
            );

            if (res.status !== 200) {
              return Swal.fire({
                title: "¡Error!",
                text: `No se pudo completar la acción (E_${res.status ? res.status : "?"})`,
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
              });
            }

            Swal.fire({
              title: "¡Asistencia registrada!",
              text: "¡Gracias por asistir!",
              icon: "success",
              showCancelButton: false,
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          }
        });
        break;
      case "Whatsapp":
        const url = `https://wa.me/+549${props.client.phone}`;
        window.open(url, "_blank").focus();

        break;
      default:
        break;
    }
  };

  return (
    <div className="py-2 list__container container my-3">
      <div className="event__title__container">
        <h3 className="main__title event__title mb-0 mt-2">{props.name}</h3>
        <p className="my-0 event__title__fecha">{props.formattedFecha}</p>
      </div>
      <hr className="mt-1 mb-3 event__mainHr" />
      <div>
        <div className="event__detail__group">
          <p className="mb-0">Fecha:</p>
          <p className="mb-0 event__content">{props.fecha}</p>
        </div>
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
          <p className="mb-0 event__content">
            {props.extra ? props.extra : "N/A"}
          </p>
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
          <p className="mb-0 fw-bold event__content">$ {props.price}</p>
        </div>
        <div className="event__detail__group">
          <p className="mb-0">Pagado:</p>
          <p className="mb-0 fw-bold event__content">$ {props.paid}</p>
        </div>
      </div>
      <div className="event__buttons mt-3">
        <button
          className="form__button form__button__submit"
          onClick={() => handleClick("Modificar")}
        >
          Modificar
        </button>
        <button
          className="form__button form__button--blue"
          onClick={() => handleClick("Asistir")}
        >
          Asistir
        </button>
        <button
          className="form__button form__button--wpp"
          onClick={() => handleClick("Whatsapp")}
        >
          <i className="fa-brands fa-whatsapp" />
        </button>
      </div>
    </div>
  );
};

export default Event;
