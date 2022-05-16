import Swal from "sweetalert2";
import { fetchPut } from "../../../../../api/fetchingFunctions";

export const asistir = (fecha,fechaId, eventoId) => {
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
            idFecha: fechaId,
            idEvento: eventoId,
            fechaEvento: fecha,
          };
          const res = await fetchPut(`/events/old`, data);

          if (res.status !== 200) {
            return Swal.fire({
              title: "¡Error!",
              text: `No se pudo completar la acción (E_${
                res.status ? res.status : "?"
              })`,
              icon: "error",
              confirmButtonColor: "#ccc",
              confirmButtonText: "Ok",
            });
          }

          Swal.fire({
            title: "¡Asistencia registrada!",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            window.location.reload();
          });
        }
      });
}