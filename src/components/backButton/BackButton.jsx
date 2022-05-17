import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchDelete } from "../../api/fetchingFunctions";
import "./backButton.css";

const BackButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const deleteData = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        const res = await fetchDelete(
          `/event/${props.fechaId}/${props.eventoId}`
        );

        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Eliminado",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/");
          });
        } else {
          Swal.fire({
            title: "Error",
            text:
              typeof res === "string"
                ? res
                : "No se pudo conectar con el servidor. Intentar nuevamente.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      }
    });
  };

  const className = props.className
    ? props.className + " backButton"
    : "backButton";

  return (
    <div className="d-flex justify-content-between align-items-center">
      <button onClick={handleClick} className={className}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      {props.editForm && (
        <div
          className="title__button title__button--trash"
          onClick={deleteData}
        >
          <i className="fa-solid fa-trash"></i>
        </div>
      )}
    </div>
  );
};

export default BackButton;
