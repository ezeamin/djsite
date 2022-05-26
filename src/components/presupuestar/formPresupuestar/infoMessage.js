import Swal from "sweetalert2";

export const infoMessage = (
  turno,
  ubicacion,
  tiempo,
  servicio,
  newPrice,
  distancia,
  formatFecha
) => {
  const signo = tiempo === "Menos" ? "<" : tiempo === "Mas" ? ">" : "";
  const title = `${signo} $ ${newPrice}`;

  Swal.fire({
    title: title,
    text: "Este valor es solo estimativo y no necesariamente final. Por favor, contactar con Ezequiel para confirmar y continuar el proceso",
    cancelButtonText: "Cerrar",
    showCancelButton: true,
    confirmButtonColor: "#77dd77",
    cancelButtonColor: "#8d8d8d",
    confirmButtonText: "Contactar por WhatsApp",
    footer: `<p class="mb-0 text-center">Es importante leer los&nbsp;<a href="https://bit.ly/tyc-djezeamin-1" target="_blank" class="mb-0 form__swal__link">terminos y condiciones</a></p>`,
  }).then(async (result) => {
    if (result.isConfirmed) {
      const { value: name } = await Swal.fire({
        title: "Ingresá tu nombre",
        input: "text",
        inputLabel: "Nombre",
        showCancelButton: true,
        confirmButtonColor: "#77dd77",
        cancelButtonColor: "#8d8d8d",
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
          if (!value.trim()) {
            return "Por favor, escribí tu nombre";
          }
        },
      });

      if (!name) return;

      let ubic = ubicacion.replaceAll(" ", "%2520");

      const link = `https://www.google.com/maps/search/?api=1%26query=${ubic}`;

      const text = `Hola Ezequiel, soy ${name} y quiero presupuestar la siguiente fiesta:
          Fecha: ${formatFecha}
          Turno: ${turno}
          Ubicación: ${ubicacion} (${distancia}km)
          Tiempo: ${tiempo} horas
          Servicio: ${servicio}

          El presupuesto es de: ${title}
          
          `;

      const url = `https://wa.me/+5493815038570?text=${encodeURI(text) + link}`;
      window.open(url, "_blank").focus();
    }
  });
};
